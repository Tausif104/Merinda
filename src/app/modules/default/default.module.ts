import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AtomModule } from 'src/app/atom/atom.module';
import { MoleculeModule } from 'src/app/molecule/molecule.module';
import { DefaultRoutingModule } from './default-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MoleculeModule,
    AtomModule,
    DefaultRoutingModule
  ],
  providers: [],
  bootstrap: [],
  exports: []
})
export class DefaultModule { }