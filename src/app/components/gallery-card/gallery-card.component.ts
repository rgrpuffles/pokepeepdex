import { Component, Input, output } from '@angular/core';
import { GalleryCard } from '../../models/gallery.models';

@Component({
  selector: 'app-gallery-card',
  standalone: true,
  templateUrl: './gallery-card.component.template.html',
  styleUrl: './gallery-card.component.sass'
})
export class GalleryCardComponent {
  @Input({ required: true }) card!: GalleryCard;
  readonly cardSelected = output<GalleryCard>();
}
