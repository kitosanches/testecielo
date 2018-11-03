import { CategoriaModel } from './categoria.model';
import { CategoriaService } from './categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: CategoriaModel[];
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.buscarCategorias();
  }
  buscarCategorias() {
    this.categoriaService.buscarCategorias().subscribe((resposta)=> {
      this.categorias = resposta;
      console.log(this.categorias);
    });
  }

}
