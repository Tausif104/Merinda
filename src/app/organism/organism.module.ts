import { NgModule } from '@angular/core';
import { MoleculeModule } from '../molecule/molecule.module';
import { HomeAlphaComponent } from './home-alpha/home-alpha.component';
import { SingleAlphaComponent } from './single-alpha/single-alpha.component';
import { AuthorAlphaComponent } from './author-alpha/author-alpha.component';
import { CategoryAlphaComponent } from './category-alpha/category-alpha.component';
import { SearchAlphaComponent } from './search-alpha/search-alpha.component';
import { ArchiveAlphaComponent } from './archive-alpha/archive-alpha.component';
import { BrowserModule } from '@angular/platform-browser';
import { EditorsPicksComponent } from './home-alpha/editors-picks/editors-picks.component';
import { MostRecentComponent } from './home-alpha/most-recent/most-recent.component';
import { ContentWidgetComponent } from './home-alpha/content-widget/content-widget.component';
import { ContentAdComponent } from './home-alpha/content-ad/content-ad.component';

@NgModule({
  declarations: [
    HomeAlphaComponent,
    SingleAlphaComponent,
    AuthorAlphaComponent,
    CategoryAlphaComponent,
    SearchAlphaComponent,
    ArchiveAlphaComponent,
    EditorsPicksComponent,
    MostRecentComponent,
    ContentWidgetComponent,
    ContentAdComponent,
  ],
  imports: [
    BrowserModule,
    MoleculeModule,
  ],
  providers: [],
})
export class OrganismModule {}
