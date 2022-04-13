import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-single-alpha',
  templateUrl: './single-alpha.component.html',
  styleUrls: ['./single-alpha.component.scss']
})
export class SingleAlphaComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'single');
  }

  ngOnDestroy(): void {
      this.renderer.removeClass(document.body, 'single');
  }

}
