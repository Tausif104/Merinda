import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  @Input() itemAd: any;
  constructor() { }

  ngOnInit(): void {
  }

}
