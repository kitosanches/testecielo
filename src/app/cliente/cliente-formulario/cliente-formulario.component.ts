import { Validator } from './../../shared/validator/validator';
import { ClienteService } from './../cliente.service';
import { ClienteModel } from './../cliente.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from '../../../../node_modules/primeng/api';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.css']
})
export class ClienteFormularioComponent {
  cliente: ClienteModel;
  tipoPessoa: boolean;
  @ViewChild('clienteForm') clienteForm: NgForm;
  validator: Validator;

  constructor(private clienteService: ClienteService,
    private messageService: MessageService) {
    this.cliente = new ClienteModel();
    this.tipoPessoa = true;
    this.validator = new Validator();
  }
  mudarTipo(event) {
    console.log(event);
    this.tipoPessoa = event.checked;
  }
  cadastrarCliente() {
    let validacao = false;
    if (this.tipoPessoa) {
      this.cliente.tipo = 0;
      validacao = this.validator.validarCPF(this.cliente.cpfOuCnpj);
      if (!validacao) {
        this.messageService.add({severity:'error', summary: 'Erro', detail:'CPF Inválido'});
      } else {
        this.clienteService.cadastrarClientes(this.cliente).subscribe((resposta) => {
          this.messageService.add({severity:'success', summary: 'Successo', detail:'Cliente Cadastrado'});
        });
      }
    } else {
      validacao = this.validator.validarCNPJ(this.cliente.cpfOuCnpj);
      this.cliente.tipo = 1;
      if (!validacao) {
        this.messageService.add({severity:'error', summary: 'Erro', detail:'CNPJ Inválido'});
      } else {
        this.clienteService.cadastrarClientes(this.cliente).subscribe((resposta) => {
          this.messageService.add({severity:'success', summary: 'Successo', detail:'Cliente Cadastrado'});
        });
      }
    }
  }

}
