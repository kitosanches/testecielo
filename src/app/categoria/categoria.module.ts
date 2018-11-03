import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './../shared/primeng/primeng.module';
import { CategoriaService } from './categoria.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  declarations: [CategoriaComponent],
  exports: [CategoriaComponent],
  providers: [CategoriaService]
})
export class CategoriaModule { }
