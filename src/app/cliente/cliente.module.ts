import { ClienteService } from './cliente.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrimengModule } from './../shared/primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { MessageService } from '../../../node_modules/primeng/api';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
    FormsModule
  ],
  declarations: [ClienteComponent, ClienteFormularioComponent],
  exports: [ClienteComponent],
  providers: [ClienteService, MessageService]
})
export class ClienteModule { }
