import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-author-alpha',
  templateUrl: './post-author-alpha.component.html',
  styleUrls: ['./post-author-alpha.component.scss']
})
export class PostAuthorAlphaComponent implements OnInit {
  @Input() author: any;
  constructor() { }

  ngOnInit(): void {}

}
