import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-alpha',
  templateUrl: './header-alpha.component.html',
  styleUrls: ['./header-alpha.component.scss']
})
export class HeaderAlphaComponent  {
  isCollapsed = false
  @Output() isCollapsedEmitter = new EventEmitter<boolean>();

  flip() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedEmitter.emit(this.isCollapsed);
  }
}
