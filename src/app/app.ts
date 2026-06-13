import { AfterViewInit, Component, ElementRef, OnDestroy, PLATFORM_ID, ViewChild, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { computed } from '@angular/core';

import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { GalleryDataService } from './services/gallery-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuBarComponent, RouterOutlet],
  templateUrl: './app.template.html',
  styleUrl: './app.sass'
})
export class App {
  @ViewChild('chrome', { static: true, read: ElementRef }) private readonly chromeRef!: ElementRef<HTMLElement>;

  private readonly galleryData = inject(GalleryDataService);
  private readonly hostRef = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private resizeObserver?: ResizeObserver;
  private scrollListener?: () => void;

  readonly manifest = toSignal(this.galleryData.manifest$, { initialValue: null });
  readonly isAtTop = signal(true);

  readonly sets = computed(() => {
    const allSets = this.manifest()?.sets ?? [];
    if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
      return allSets.filter((set) => set.id !== 'set-3' && set.id !== 'set-3.5');
    }
    return allSets;
  });

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const host = this.hostRef.nativeElement;
    const chrome = this.chromeRef.nativeElement;

    const updateChromeHeight = (): void => {
      if (chrome && typeof chrome.getBoundingClientRect === 'function') {
        host.style.setProperty('--chrome-height', `${chrome.getBoundingClientRect().height}px`);
      }
    };

    updateChromeHeight();

    const updateScrollState = (): void => {
      this.isAtTop.set(window.scrollY <= 8);
    };

    this.resizeObserver = new ResizeObserver(updateChromeHeight);
    this.resizeObserver.observe(chrome);

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    this.scrollListener = () => window.removeEventListener('scroll', updateScrollState);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.scrollListener?.();
  }

  scrollToTop = (): void => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
}
