import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, NavigationEnd } from '../../../node_modules/@angular/router';
@Component({
  selector: 'cielo-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css'],
  styles: [`.router-link-active { background-color: blue; }`]
})
export class MenuPrincipalComponent implements OnInit {
  items: MenuItem[];
  item: MenuItem;
  private sub: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.menuBuilder()
    this.receberRotaAtiva();
  }
  menuBuilder() {
    this.items = [
      { label: 'Home', command: () => { this.mudarRota(1); } },
      { label: 'Categorias', command: () => { this.mudarRota(2); } },
      { label: 'Clientes', command: () => { this.mudarRota(3); } },
      { label: 'Torne-se um Cliente', command: () => { this.mudarRota(4); } }
    ];
  }
  receberRotaAtiva() {
    this.sub = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.verificarRotaAtiva(e.url);
      }
    });
    
  }
  verificarRotaAtiva(url: any) {
    switch (url) {
      case '/':
        this.item = this.items[0];
        break;
      case '/categorias':
        this.item = this.items[1];
        break;
      case '/clientes':
        this.item = this.items[2];
        break;
      case '/novo-clientes':
        this.item = this.items[3];
        break;
    }
    this.sub.unsubscribe();
  }
  mudarRota(id: number) {
    switch (id) {
      case 1:
        this.item = this.items[0];
        this.router.navigate(['']);
        break;
      case 2:
        this.item = this.items[1];
        this.router.navigate(['categorias']);
        break;
      case 3:
        this.item = this.items[2];
        this.router.navigate(['clientes']);
        break;
      case 4:
        this.item = this.items[3];
        this.router.navigate(['novo-clientes']);
        break;
    }

  }
}
