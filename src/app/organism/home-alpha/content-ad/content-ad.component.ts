import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-ad',
  templateUrl: './content-ad.component.html',
  styleUrls: ['./content-ad.component.scss']
})
export class ContentAdComponent implements OnInit {

  @Input() contentAdArr: any;

  constructor() {}
  ngOnInit(): void {
  }

}
