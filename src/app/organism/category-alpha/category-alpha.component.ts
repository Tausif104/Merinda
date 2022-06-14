import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-category-alpha',
  templateUrl: './category-alpha.component.html',
  styleUrls: ['./category-alpha.component.scss']
})
export class CategoryAlphaComponent implements OnInit, OnDestroy {
  dateAddress = {
    "city":"Steven Job",
    "designation":"OneZero",
    "date": "July 15",
    "time": "5 min read"
   };
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'archive');
  }

  ngOnDestroy(): void {
      this.renderer.removeClass(document.body, 'archive');
  }

}
