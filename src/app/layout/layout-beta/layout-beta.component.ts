import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-beta',
  templateUrl: './layout-beta.component.html',
  styleUrls: ['./layout-beta.component.scss'],
})
export class LayoutBetaComponent {
  isCollapsed = false;

  constructor() {}

  isCollapsedListener(event: boolean) {
    this.isCollapsed = event
  }
}
