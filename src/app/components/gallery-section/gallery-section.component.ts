import { Component, Input, output } from '@angular/core';
import { GalleryCard, CardSectionKey } from '../../models/gallery.models';
import { GalleryCardComponent } from '../gallery-card/gallery-card.component';

export interface GallerySectionViewModel {
  readonly key: CardSectionKey;
  readonly label: string;
  readonly accent: string;
}

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [GalleryCardComponent],
  templateUrl: './gallery-section.component.template.html',
  styleUrl: './gallery-section.component.sass'
})
export class GallerySectionComponent {
  @Input({ required: true }) section!: GallerySectionViewModel;
  @Input({ required: true }) cards: readonly GalleryCard[] = [];
  readonly cardSelected = output<GalleryCard>();
}
