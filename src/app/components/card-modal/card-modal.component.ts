import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModalService } from '../../services/card-modal.service';

@Component({
  selector: 'app-card-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-modal.component.template.html',
  styleUrl: './card-modal.component.sass'
})
export class CardModalComponent {
  private touchStartX = 0;
  private touchEndX = 0;
  private readonly SWIPE_THRESHOLD = 50;

  constructor(public readonly modal: CardModalService) {}

  close() {
    this.modal.close();
  }

  prev() {
    this.modal.prev();
  }

  next() {
    this.modal.next();
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > this.SWIPE_THRESHOLD) {
      if (diff > 0) {
        // Swiped left -> next
        if (this.modal.canNext()) {
          this.next();
        }
      } else {
        // Swiped right -> prev
        if (this.modal.canPrev()) {
          this.prev();
        }
      }
    }
  }
}
