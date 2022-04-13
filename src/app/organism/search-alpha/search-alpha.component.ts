import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-search-alpha',
  templateUrl: './search-alpha.component.html',
  styleUrls: ['./search-alpha.component.scss']
})
export class SearchAlphaComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'archive');
  }

  ngOnDestroy(): void {
      this.renderer.removeClass(document.body, 'archive');
  }

}
