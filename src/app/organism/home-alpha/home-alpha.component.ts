import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-alpha',
  templateUrl: './home-alpha.component.html',
  styleUrls: ['./home-alpha.component.scss'],
})
export class HomeAlphaComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'home');
  }
  
  ngOnDestroy(): void {
      this.renderer.removeClass(document.body, 'home');
  }
}
