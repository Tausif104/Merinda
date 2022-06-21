import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editors-picks',
  templateUrl: './editors-picks.component.html',
  styleUrls: ['./editors-picks.component.scss']
})
export class EditorsPicksComponent implements OnInit {

  @Input() editorPicksArr: any; 
  @Input() trendingArr:any;
  @Input() editorPickAddress:any;
  @Input() editor: any;

  constructor() { }

  ngOnInit(): void {
  }

}
