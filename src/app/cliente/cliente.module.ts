import { ClienteService } from './cliente.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './../shared/primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  declarations: [ClienteComponent, ClienteFormularioComponent],
  exports: [ClienteComponent],
  providers: [ClienteService]
})
export class ClienteModule { }
