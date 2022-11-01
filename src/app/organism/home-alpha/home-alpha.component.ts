import { DOCUMENT } from '@angular/common';
import { Component, Inject} from '@angular/core';

@Component({
  selector: 'app-home-alpha',
  templateUrl: './home-alpha.component.html',
  styleUrls: ['./home-alpha.component.scss'],
})
export class HomeAlphaComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {}
}
