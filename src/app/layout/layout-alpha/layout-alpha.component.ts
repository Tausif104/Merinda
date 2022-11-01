import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-alpha',
  templateUrl: './layout-alpha.component.html',
  styleUrls: ['./layout-alpha.component.scss'],
})
export class LayoutAlphaComponent {
  isCollapsed = false;

  constructor() {}

  isCollapsedListener(event: boolean) {
    this.isCollapsed = event
  }
}
