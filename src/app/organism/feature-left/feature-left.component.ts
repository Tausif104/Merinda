import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-left',
  templateUrl: './feature-left.component.html',
  styleUrls: ['./feature-left.component.scss'],
})
export class FeatureLeftComponent implements OnInit {
  @Input() title!: string;
  @Input() descOne!: string;
  @Input() descTwo!: string;
  @Input() img!: string;

  constructor() {}

  ngOnInit(): void {}
}
