import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MoleculeModule } from '../molecule/molecule.module';
import { LayoutAlphaComponent } from './layout-alpha/layout-alpha.component';

@NgModule({
  declarations: [LayoutAlphaComponent],
  imports: [RouterModule, MoleculeModule],
  providers: [],
})
export class LayoutModule {}
