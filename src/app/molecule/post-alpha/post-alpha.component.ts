import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-alpha',
  templateUrl: './post-alpha.component.html',
  styleUrls: ['./post-alpha.component.scss']
})
export class PostAlphaComponent implements OnInit {
  @Input() postData: any;
  constructor() { }

  ngOnInit(): void {}

}
