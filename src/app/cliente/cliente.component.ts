import { ClienteModel } from './cliente.model';
import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: ClienteModel[];
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.buscarClientes();
  }
  buscarClientes() {
    this.clienteService.buscarClientes().subscribe((resposta)=> {
      this.clientes = resposta;
    });
  }

}
