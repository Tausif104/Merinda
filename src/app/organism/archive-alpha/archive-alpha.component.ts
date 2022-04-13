import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-archive-alpha',
  templateUrl: './archive-alpha.component.html',
  styleUrls: ['./archive-alpha.component.scss']
})
export class ArchiveAlphaComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'archive');
  }

  ngOnDestroy(): void {
      this.renderer.removeClass(document.body, 'archive');
  }

}
