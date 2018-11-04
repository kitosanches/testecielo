import { ClienteFormularioComponent } from './../cliente/cliente-formulario/cliente-formulario.component';
import { ProdutoComponent } from './../produto/produto.component';
import { CategoriaComponent } from '../categoria/categoria.component';
import { HomeComponent } from '../home/home.component';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { ClienteComponent } from '../cliente/cliente.component';


const rotasHome : Routes = [
  {path: '', component: HomeComponent, },
  {path: 'categorias', component: CategoriaComponent },
  {
    path: 'categorias/produtos', component: ProdutoComponent
  },
  {path: 'clientes', component: ClienteComponent},
  {path: 'novo-clientes', component: ClienteFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rotasHome)],
  exports: [RouterModule],
})
export class RotasModule { }

