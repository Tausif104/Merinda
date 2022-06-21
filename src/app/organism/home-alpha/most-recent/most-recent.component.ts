import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-most-recent',
  templateUrl: './most-recent.component.html',
  styleUrls: ['./most-recent.component.scss']
})
export class MostRecentComponent implements OnInit {

  @Input() recentArr: any; 
  @Input() popularArr:any;

  constructor() { }

  ngOnInit(): void {
  }

}
