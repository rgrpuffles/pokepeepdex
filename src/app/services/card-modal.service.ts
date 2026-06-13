import { Injectable, signal, computed } from '@angular/core';
import { GalleryCard } from '../models/gallery.models';

@Injectable({ providedIn: 'root' })
export class CardModalService {
  private cards = signal<GalleryCard[] | null>(null);
  private selectedSrc = signal<string | null>(null);

  readonly selectedIndex = computed(() => {
    const list = this.cards();
    const src = this.selectedSrc();
    if (!list || !src) return null;
    const idx = list.findIndex((c) => c.src === src);
    return idx >= 0 ? idx : null;
  });

  readonly selectedCard = computed(() => {
    const idx = this.selectedIndex();
    const list = this.cards();
    return idx === null || !list ? null : list[idx];
  });

  readonly cardsList = computed(() => this.cards() ?? []);

  open(src: string, list: GalleryCard[]) {
    this.cards.set(list);
    this.selectedSrc.set(src);
  }

  updateCards(list: GalleryCard[]) {
    this.cards.set(list);
    const src = this.selectedSrc();
    if (src && !list.some((c) => c.src === src)) {
      this.close();
    }
  }

  close() {
    this.selectedSrc.set(null);
    this.cards.set(null);
  }

  canPrev(): boolean {
    const idx = this.selectedIndex();
    return idx !== null && idx > 0;
  }

  canNext(): boolean {
    const list = this.cards();
    const idx = this.selectedIndex();
    return idx !== null && !!list && idx < list.length - 1;
  }

  prev() {
    const idx = this.selectedIndex();
    const list = this.cards();
    if (idx !== null && list && idx > 0) {
      this.selectedSrc.set(list[idx - 1].src);
    }
  }

  next() {
    const idx = this.selectedIndex();
    const list = this.cards();
    if (idx !== null && list && idx < list.length - 1) {
      this.selectedSrc.set(list[idx + 1].src);
    }
  }

  hasSelection(): boolean {
    return this.selectedSrc() !== null;
  }
}
