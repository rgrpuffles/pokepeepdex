import { Component, HostListener, PLATFORM_ID, computed, effect, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { GalleryCard, cardSections, defaultSetId, emptyGallerySet } from '../../models/gallery.models';
import { GalleryDataService } from '../../services/gallery-data.service';
import { CardModalService } from '../../services/card-modal.service';
import { GallerySectionComponent } from '../../components/gallery-section/gallery-section.component';
import { SetSummaryComponent } from '../../components/set-summary/set-summary.component';
import { GallerySectionViewModel } from '../../components/gallery-section/gallery-section.component';
import { SetSummaryItem } from '../../components/set-summary/set-summary.component';
import { SetFilterComponent } from '../../components/set-filter/set-filter.component';
import { CardModalComponent } from '../../components/card-modal/card-modal.component';

@Component({
  selector: 'app-set-gallery',
  standalone: true,
  imports: [SetSummaryComponent, GallerySectionComponent, SetFilterComponent, CardModalComponent],
  templateUrl: './set-gallery.component.template.html',
  styleUrl: './set-gallery.component.sass'
})
export class SetGalleryComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly galleryData = inject(GalleryDataService);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  readonly sections = cardSections;
  private readonly modal = inject(CardModalService);
  private readonly preloadedCardSrcs = new Set<string>();

  readonly manifest = toSignal(this.galleryData.manifest$, { initialValue: null });

  readonly setId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('setId') ?? defaultSetId)),
    { initialValue: defaultSetId }
  );

  readonly artistParam = toSignal(
    this.route.queryParamMap.pipe(map((params) => params.get('artist') ?? 'ANY')),
    { initialValue: 'ANY' }
  );

  private readonly validateArtist = effect(() => {
    const manifest = this.manifest();
    if (!manifest) return;

    const artists = this.guestArtists();
    const currentArtist = this.artistParam();

    if (currentArtist !== 'ANY' && !artists.includes(currentArtist)) {
      this.onFilterSelect('ANY');
    }
  });

  private readonly validateSetId = effect(() => {
    const manifest = this.manifest();
    if (!manifest) return;

    const id = this.setId();
    const sets = manifest.sets;

    if (!sets.some((s) => s.slug === id)) {
      this.router.navigate(['/', defaultSetId], { replaceUrl: true, queryParamsHandling: 'preserve' });
    }
  });

  onFilterSelect(value: string): void {
    const queryParams = { ...this.route.snapshot.queryParams } as Record<string, any>;
    if (value === 'ANY') {
      delete queryParams['artist'];
    } else {
      queryParams['artist'] = value;
    }

    this.router.navigate([], { queryParams, replaceUrl: true });
  }

  private lastSetId = '';

  private readonly scrollOnSetChange = effect(() => {
    const id = this.setId();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (id === this.lastSetId) {
      return;
    }

    this.lastSetId = id;

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  });

  private readonly closeModalOnSetChange = effect(() => {
    this.set();
    this.modal.close();
  });

  private readonly syncSetTheme = effect(() => {
    const id = this.setId();
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.dataset['setId'] = id;
    }
  });

  private readonly lockBodyScroll = effect(() => {
    const isBrowser = isPlatformBrowser(this.platformId);
    const hasSelectedCard = this.modal.selectedIndex() !== null;

    if (!isBrowser) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = hasSelectedCard ? 'hidden' : '';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  });

  private readonly preloadSelectedCards = effect(() => {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const cards = this.modal.cardsList();
    const index = this.modal.selectedIndex();

    if (index === null || cards.length === 0) {
      return;
    }

    const indexesToPreload = [index - 1, index, index + 1]
      .filter((i) => i >= 0 && i < cards.length)
      .filter((item, position, all) => all.indexOf(item) === position);

    for (const cardIndex of indexesToPreload) {
      this.preloadCardImage(cards[cardIndex].src);
    }
  });

  readonly galleryCards = computed<GalleryCard[]>(() => {
    return this.sections.flatMap((section) => this.filteredCardsBySection()[section.key]);
  });

  readonly filteredCardsBySection = computed<Record<(typeof cardSections)[number]['key'], GalleryCard[]>>(() => {
    const currentSet = this.set();
    const selected = this.artistParam();

    return this.sections.reduce(
      (acc, section) => {
        acc[section.key] = currentSet.cards[section.key].filter((card) => {
          if (selected === 'ANY') return true;
          return (card.artist ?? '') === selected;
        });
        return acc;
      },
      {
        standard: [],
        fullArt: [],
        moment: [],
        aceTrainer: []
      } as Record<(typeof cardSections)[number]['key'], GalleryCard[]>
    );
  });

  // Modal selection is handled by CardModalService

  readonly set = computed(() => {
    const sets = this.manifest()?.sets ?? [];
    const id = this.setId();

    const currentSet = sets.find((set) => set.slug === id) ??
      sets.find((set) => set.slug === defaultSetId) ??
      emptyGallerySet;

    // The manifest from the JSON doesn't have packPath, so we populate it here
    return {
      ...currentSet,
      packPath: `assets/packs/${currentSet.slug}.avif`
    } as const;
  });

  readonly totalCards = computed(() => {
    return this.galleryCards().length;
  });

  readonly sectionSummary = computed<SetSummaryItem[]>(() => {
    const cardsBySection = this.filteredCardsBySection();

    return this.sections.map((section) => ({
      ...section,
      accent: this.sectionAccent(section.key),
      count: cardsBySection[section.key].length
    }));
  });

  readonly visibleSectionSummary = computed(() => this.sectionSummary().filter((section) => section.count > 0));

  readonly sectionsWithCards = computed<GallerySectionViewModel[]>(() => {
    const cardsBySection = this.filteredCardsBySection();

    return this.sections
      .filter((section) => cardsBySection[section.key].length > 0)
      .map((section) => ({
        ...section,
        accent: this.sectionAccent(section.key)
      }));
  });

  readonly guestArtists = computed(() => {
    const artists = new Set<string>();
    const currentSet = this.set();

    for (const key of Object.keys(currentSet.cards)) {
      const cards = (currentSet.cards as any)[key] as GalleryCard[];
      for (const card of cards) {
        const a = card.artist ?? '';
        if (a && a.toUpperCase() !== 'PP') {
          artists.add(a);
        }
      }
    }

    return Array.from(artists).sort();
  });

  readonly sectionAccent = (key: string): string => {
    switch (key) {
      case 'standard':
        return '#5ea0ff';
      case 'fullArt':
        return '#b68cff';
      case 'moment':
        return '#6ee7a8';
      case 'aceTrainer':
        return '#f3c96a';
      default:
        return '#9aa7ff';
    }
  };

  scrollToSection(key: string): void {
    document.getElementById(`section-${key}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  openCard = (card: GalleryCard): void => {
    if (this.galleryCards().some((item) => item.src === card.src)) {
      this.modal.open(card.src, this.galleryCards());
    }
  };

  closeCardModal = (): void => {
    this.modal.close();
  };

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: Event): void {
    if (this.modal.selectedIndex() === null) {
      return;
    }

    event.preventDefault();
    this.closeCardModal();
  }

  showPreviousCard = (): void => {
    this.modal.prev();
  };

  showNextCard = (): void => {
    this.modal.next();
  };


  private readonly syncModalToFilter = effect(() => {
    this.modal.updateCards(this.galleryCards());
  });

  private isGuestArtist(card: GalleryCard): boolean {
    return (card.artist ?? '').toUpperCase() !== 'PP';
  }

  private preloadCardImage(src: string): void {
    if (this.preloadedCardSrcs.has(src)) {
      return;
    }

    this.preloadedCardSrcs.add(src);

    const image = new Image();
    image.decoding = 'async';
    image.src = src;
  }
}
