import { Component, OnInit } from '@angular/core';
import { CategoryCbEntity, CategoryCbsGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-layout-alpha',
  templateUrl: './layout-alpha.component.html',
  styleUrls: ['./layout-alpha.component.scss'],
})
export class LayoutAlphaComponent implements OnInit {
  public categories: CategoryCbEntity[] = [];
  isOpenMenu: boolean | null = false;

  constructor(
    private categoryCbsGQL: CategoryCbsGQL
  ) {}

  ngOnInit(): void {
    this.categoryCbsGQL.fetch({
      locale: 'en'
    }).subscribe((response) => {
      this.categories = response.data.categoryCbs?.data as CategoryCbEntity[];
    });
  }
}
