import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'cielo-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css'],
  styles: [`.router-link-active { background-color: blue; }`]
})
export class MenuPrincipalComponent implements OnInit {
  items: MenuItem[];
  item: MenuItem;
  constructor() { }

  ngOnInit() {
    this.menuBuilder()
  }
  menuBuilder() {
    this.items = [
      {label: 'Home', routerLink: ['']},
      {label: 'Categorias', routerLink: ['categorias']},
      {label: 'Clientes', routerLink: ['clientes']},
  ];
  }
   
}
