import { NgModule } from '@angular/core';
import { HeaderAlphaComponent } from './header-alpha/header-alpha.component';
import { FooterAlphaComponent } from './footer-alpha/footer-alpha.component';
import { BrowserModule } from '@angular/platform-browser';
import { ImagePathPipe } from '../pipe/image.pipe';
import { AtomModule } from '../atom/atom.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconsProviderModule } from '../icons-provider.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const Components = [
  HeaderAlphaComponent, 
  FooterAlphaComponent,
];

@NgModule({
  declarations: [...Components, ImagePathPipe],
  imports: [BrowserModule, AtomModule, IconsProviderModule, NzLayoutModule, BrowserAnimationsModule],
  providers: [ImagePathPipe],
  exports: [...Components],
})
export class MoleculeModule {}
