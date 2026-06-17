import { Routes } from '@angular/router';

import { defaultSetId } from './models/gallery.models';
import { SetGalleryComponent } from './pages/set-gallery/set-gallery.component';
import { GalleryHubComponent } from './pages/gallery-hub/gallery-hub.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GalleryHubComponent
  },
  {
    path: ':setId',
    component: SetGalleryComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
