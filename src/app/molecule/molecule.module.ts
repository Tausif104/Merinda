import { NgModule } from '@angular/core';
import { HeaderAlphaComponent } from './header-alpha/header-alpha.component';
import { FooterAlphaComponent } from './footer-alpha/footer-alpha.component';
import { PostAlphaComponent } from './post-alpha/post-alpha.component';
import { AdsComponent } from './ads/ads.component';
import { CultureAlphaComponent } from './culture-alpha/culture-alpha.component';
import { PostAuthorAlphaComponent } from './post-author-alpha/post-author-alpha.component';
import { EntryMetaAlphaComponent } from './entry-meta-alpha/entry-meta-alpha.component';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { ContentAdComponent } from './content-ad/content-ad.component';
import { MostRecentComponent } from './most-recent/most-recent.component';
import { EditorsPicksComponent } from './editors-picks/editors-picks.component';
import { HeroAlphaComponent } from './hero-alpha/hero-alpha.component';
import { ImagePathPipe } from '../pipe/image.pipe';

const Components = [
  HeaderAlphaComponent, 
  FooterAlphaComponent,
  PostAlphaComponent,
  AdsComponent,
  CultureAlphaComponent,
  PostAuthorAlphaComponent, 
  EntryMetaAlphaComponent,
  MostRecentComponent,
  ContentAdComponent,
  EditorsPicksComponent,
  HeroAlphaComponent
];

@NgModule({
  declarations: [...Components, ImagePathPipe],
  imports: [BrowserModule, TranslateModule],
  providers: [ImagePathPipe],
  exports: [...Components, TranslateModule],
})
export class MoleculeModule {}
