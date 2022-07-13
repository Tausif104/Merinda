import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { PostCbEntity } from 'src/generated/graphql';


@Component({
  selector: 'app-entry-meta-alpha',
  templateUrl: './entry-meta-alpha.component.html',
  styleUrls: ['./entry-meta-alpha.component.scss']
})
export class EntryMetaAlphaComponent implements OnInit {
  @Input() post: PostCbEntity;

  constructor() { }

  ngOnInit(): void {
    this.post
  }

}
