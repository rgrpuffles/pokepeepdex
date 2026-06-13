import { Routes } from '@angular/router';

import { defaultSetId } from './models/gallery.models';
import { SetGalleryComponent } from './pages/set-gallery/set-gallery.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: defaultSetId
  },
  {
    path: ':setId',
    component: SetGalleryComponent
  },
  {
    path: '**',
    redirectTo: defaultSetId
  }
];
