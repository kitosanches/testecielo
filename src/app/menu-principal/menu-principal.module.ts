import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { MenuPrincipalComponent } from './menu-principal.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [PrimengModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [MenuPrincipalComponent],
  exports: [MenuPrincipalComponent]
})
export class MenuPrincipalcModule { }