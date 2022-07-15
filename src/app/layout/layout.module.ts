import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoleculeModule } from '../molecule/molecule.module';
import { LayoutAlphaComponent } from './layout-alpha/layout-alpha.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LayoutAlphaComponent],
  imports: [RouterModule, MoleculeModule, BrowserModule, CommonModule],
  providers: [],
})
export class LayoutModule {}
