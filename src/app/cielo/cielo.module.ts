import { HomeModule } from '../home/home.module';
import { ClienteModule } from '../cliente/cliente.module';
import { ProdutoModule } from '../produto/produto.module';
import { CategoriaModule } from '../categoria/categoria.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalcModule } from '../menu-principal/menu-principal.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    CategoriaModule,
    ProdutoModule,
    ClienteModule,
    MenuPrincipalcModule
  ],
  exports: [HomeModule, CategoriaModule,
    ProdutoModule,ClienteModule, MenuPrincipalcModule],
  declarations: []
})
export class CieloModule { }
