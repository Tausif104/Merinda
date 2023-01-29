import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-right',
  templateUrl: './feature-right.component.html',
  styleUrls: ['./feature-right.component.scss'],
})
export class FeatureRightComponent implements OnInit {
  @Input() title!: string;
  @Input() descOne!: string;
  @Input() descTwo!: string;
  @Input() img!: string;

  constructor() {}

  ngOnInit(): void {}
}
