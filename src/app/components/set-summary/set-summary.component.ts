import { Component, Input } from '@angular/core';

export interface SetSummaryItem {
  readonly key: string;
  readonly label: string;
  readonly accent: string;
  readonly count: number;
}

export interface SetSummaryViewModel {
  readonly id: string;
  readonly title: string;
  readonly packPath: string;
}

@Component({
  selector: 'app-set-summary',
  standalone: true,
  templateUrl: './set-summary.component.template.html',
  styleUrl: './set-summary.component.sass'
})
export class SetSummaryComponent {
  @Input({ required: true }) currentSet!: SetSummaryViewModel;
  @Input({ required: true }) totalCards = 0;
  @Input({ required: true }) sections: readonly SetSummaryItem[] = [];
  @Input({ required: true }) scrollToSection!: (key: string) => void;
}
