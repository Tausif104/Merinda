import { NgModule } from '@angular/core';
import { MoleculeModule } from '../molecule/molecule.module';
import { HomeAlphaComponent } from './home-alpha/home-alpha.component';
import { SingleAlphaComponent } from './single-alpha/single-alpha.component';
import { AuthorAlphaComponent } from './author-alpha/author-alpha.component';
import { CategoryAlphaComponent } from './category-alpha/category-alpha.component';
import { SearchAlphaComponent } from './search-alpha/search-alpha.component';
import { ArchiveAlphaComponent } from './archive-alpha/archive-alpha.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HomeAlphaComponent,
    SingleAlphaComponent,
    AuthorAlphaComponent,
    CategoryAlphaComponent,
    SearchAlphaComponent,
    ArchiveAlphaComponent
  ],
  imports: [
    BrowserModule,
    MoleculeModule
  ],
  providers: [],
})
export class OrganismModule {}
