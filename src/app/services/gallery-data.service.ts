import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GalleryManifest } from '../models/gallery.models';
import manifestData from '../../assets/data/cards-manifest.json';

@Injectable({
  providedIn: 'root'
})
export class GalleryDataService {
  readonly manifest$ = of(manifestData as GalleryManifest);
}
