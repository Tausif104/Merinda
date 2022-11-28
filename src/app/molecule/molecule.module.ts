import { NgModule } from '@angular/core';
import { HeaderAlphaComponent } from './header-alpha/header-alpha.component';
import { FooterAlphaComponent } from './footer-alpha/footer-alpha.component';
import { AtomModule } from '../atom/atom.module';
import { LayoutBetaComponent } from '../layout/layout-beta/layout-beta.component';
import { LayoutAlphaComponent } from '../layout/layout-alpha/layout-alpha.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

const Components = [
  HeaderAlphaComponent, 
  FooterAlphaComponent,
  LayoutAlphaComponent,
  LayoutBetaComponent,
  ImageGalleryComponent
];

@NgModule({
  declarations: [...Components],
  imports: [AtomModule, ClipboardModule],
  providers: [],
  exports: [
    ...Components,
    AtomModule,
  ],
})
export class MoleculeModule {}
