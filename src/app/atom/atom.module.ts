import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from '../ng-zorro-ant.module';
import { IconsProviderModule } from '../icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagePathPipe } from '../pipe/image.pipe';

const components: any = [ImagePathPipe];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IconsProviderModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ...components,
    NgZorroAntdModule,
    IconsProviderModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AtomModule { }
