import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subpage-banner',
  templateUrl: './subpage-banner.component.html',
  styleUrls: ['./subpage-banner.component.scss'],
})
export class SubpageBannerComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() descriptionTwo!: string;
  @Input() img!: string;
  constructor() {}

  ngOnInit(): void {}

}
