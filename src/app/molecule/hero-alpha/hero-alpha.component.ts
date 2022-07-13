import { Component, OnInit, Input} from '@angular/core';
import { renderImage } from 'src/app/utils/image-parse';
import { PostCbEntity } from 'src/generated/graphql';

@Component({
  selector: 'app-hero-alpha',
  templateUrl: './hero-alpha.component.html',
  styleUrls: ['./hero-alpha.component.scss']
})
export class HeroAlphaComponent implements OnInit {

  @Input() post: PostCbEntity;

  constructor() { }

  ngOnInit(): void {}

  getPostImage(post: PostCbEntity) {
    return renderImage(post);
  }

}
