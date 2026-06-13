import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface MenuBarSet {
  readonly id: string;
  readonly code: string;
  readonly slug: string;
  readonly accent: string;
  readonly glow: string;
}

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-bar.component.template.html',
  styleUrl: './menu-bar.component.sass'
})
export class MenuBarComponent {
  @Input({ required: true }) sets: readonly MenuBarSet[] = [];
  @Input({ required: true }) isAtTop = true;
  @Input({ required: true }) scrollToTop!: () => void;
}
