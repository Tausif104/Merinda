import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-date-address-alpha',
  templateUrl: './date-address-alpha.component.html',
  styleUrls: ['./date-address-alpha.component.scss']
})
export class DateAddressAlphaComponent implements OnInit {
  @Input() item: any;
  @Output() getItem = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
