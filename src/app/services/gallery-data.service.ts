import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { GalleryManifest } from '../models/gallery.models';
import manifestData from '../../assets/data/cards-manifest.json';

@Injectable({
  providedIn: 'root'
})
export class GalleryDataService {
  readonly manifest$ = of(manifestData as GalleryManifest).pipe(
    map((manifest) => {
      const isBrowser = typeof window !== 'undefined';
      const isProduction = !isBrowser || window.location.hostname.includes('github.io');

      if (isProduction) {
        return {
          ...manifest,
          sets: manifest.sets.filter((set) => set.id !== 'set-3' && set.id !== 'set-3.5')
        };
      }
      return manifest;
    })
  );
}
