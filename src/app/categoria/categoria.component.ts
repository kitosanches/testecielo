import { CategoriaModel } from './categoria.model';
import { CategoriaService } from './categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: CategoriaModel[];
  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit() {
    this.buscarCategorias();
  }
  buscarCategorias() {
    this.categoriaService.buscarCategorias().subscribe((resposta)=> {
      this.categorias = resposta;
    });
  }
  selecionarCategoria(categoria: CategoriaModel) {
    this.router.navigate(['/categorias/produtos'], {
      queryParams: {
        idCategoria: categoria.id
      }
    });
  }
}
