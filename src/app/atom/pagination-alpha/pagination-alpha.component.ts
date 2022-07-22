import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination-alpha',
  templateUrl: './pagination-alpha.component.html',
  styleUrls: ['./pagination-alpha.component.scss']
})
export class PaginationAlphaComponent implements OnInit {

  @Input() page: number;
  @Input() pageCount: number;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  getPrev() {}

  getNext() {}
}
