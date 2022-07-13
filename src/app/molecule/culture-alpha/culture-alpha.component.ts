import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostCbEntity } from 'src/generated/graphql';

@Component({
  selector: 'app-culture-alpha',
  templateUrl: './culture-alpha.component.html',
  styleUrls: ['./culture-alpha.component.scss']
})
export class CultureAlphaComponent implements OnInit {
  @Input() posts: PostCbEntity[] = []; 
  constructor() { }

  ngOnInit(): void {
  }

}
