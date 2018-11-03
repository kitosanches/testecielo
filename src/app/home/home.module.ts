import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    PrimengModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
