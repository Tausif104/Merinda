import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-culture-alpha',
  templateUrl: './culture-alpha.component.html',
  styleUrls: ['./culture-alpha.component.scss']
})
export class CultureAlphaComponent implements OnInit {
  @Input() items: any;
  constructor() { }

  ngOnInit(): void {
  }

}
