import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { CategoryCbEntity } from 'src/generated/graphql';

@Component({
  selector: 'app-header-alpha',
  templateUrl: './header-alpha.component.html',
  styleUrls: ['./header-alpha.component.scss']
})
export class HeaderAlphaComponent implements OnInit, AfterViewInit {
  @Input() categories: CategoryCbEntity[] = [];
  isSearchBarOpen: boolean | null =  false;
  headerOffset = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit() {
    const headerElement = this.document.getElementById("main-menu");
      if (headerElement) {
        this.headerOffset = headerElement.offsetTop;
      }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const headerElement = this.document.getElementById("main-menu");

    if (headerElement) {
      if (window.scrollY > this.headerOffset) {
        headerElement?.classList.add('fixed-header-position');
      } else {
        headerElement?.classList.remove('fixed-header-position');
      }
    }
  }

  ngOnInit(): void {}
}
