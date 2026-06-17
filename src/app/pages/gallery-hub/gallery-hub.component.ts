import { Component, PLATFORM_ID, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { isPlatformBrowser } from '@angular/common';
import { GalleryDataService } from '../../services/gallery-data.service';

@Component({
  selector: 'app-gallery-hub',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallery-hub.component.template.html',
  styleUrl: './gallery-hub.component.sass'
})
export class GalleryHubComponent {
  private readonly galleryData = inject(GalleryDataService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly manifest = toSignal(this.galleryData.manifest$, { initialValue: null });

  readonly sets = computed(() => {
    const allSets = this.manifest()?.sets ?? [];
    return allSets.map(set => ({
      ...set,
      packPath: `assets/packs/${set.slug}.avif`
    }));
  });

  private readonly syncTheme = effect(() => {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.removeAttribute('data-set-id');
    }
  });

  private readonly scrollToTop = effect(() => {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  });
}
