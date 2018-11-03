import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './../shared/primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  declarations: [ProdutoComponent],
  exports: [ProdutoComponent]
})
export class ProdutoModule { }
