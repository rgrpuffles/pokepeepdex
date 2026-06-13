import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-set-filter',
  standalone: true,
  templateUrl: './set-filter.component.template.html',
  styleUrl: './set-filter.component.sass'
})
export class SetFilterComponent {
  @Input({ required: true }) guestArtists: string[] = [];
  @Input({ required: true }) selectedArtist = 'ANY';
  @Output() readonly selectedArtistChange = new EventEmitter<string>();

  onArtistChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedArtistChange.emit(value);
  }
}
