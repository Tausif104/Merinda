import { NgModule } from '@angular/core';
import { MoleculeModule } from '../molecule/molecule.module';
import { HomeAlphaComponent } from './home-alpha/home-alpha.component';
import { BrowserModule } from '@angular/platform-browser';
import { AtomModule } from '../atom/atom.module';
import { CategoryAlphaComponent } from './category-alpha/category-alpha.component';
import { PageAlphaComponent } from './page-alpha/page-alpha.component';
import { ProductPageAlphaComponent } from './product-page-alpha/product-page-alpha.component';
import { NotFoundAlphaComponent } from './not-found-alpha/not-found-alpha.component';
import { PageListAlphaComponent } from './page-list-alpha/page-list-alpha.component';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [
    HomeAlphaComponent,
    CategoryAlphaComponent,
    PageAlphaComponent,
    ProductPageAlphaComponent,
    NotFoundAlphaComponent,
    PageListAlphaComponent

  ],
  imports: [
    BrowserModule,
    MoleculeModule,
    AtomModule,
    NzListModule
  ],
  providers: [],
  exports: []
})
export class OrganismModule {}
