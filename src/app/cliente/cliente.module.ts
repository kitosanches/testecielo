import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './../shared/primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  declarations: [ClienteComponent],
  exports: [ClienteComponent]
})
export class ClienteModule { }
