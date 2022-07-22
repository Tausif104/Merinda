import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationAlphaComponent } from './pagination-alpha/pagination-alpha.component';
import { RouterModule } from '@angular/router';

const components = [
  PaginationAlphaComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...components
  ]
})
export class AtomModule { }
