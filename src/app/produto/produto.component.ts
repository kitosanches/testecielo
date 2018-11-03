import { CategoriaModel } from './../categoria/categoria.model';
import { CategoriaService } from './../categoria/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  idCategoria: number;
  categoria: CategoriaModel;
  constructor(private router: Router, private route: ActivatedRoute,
     private categoriaService: CategoriaService) {
       this.categoria = new CategoriaModel();
      }

  ngOnInit() {
    this.idCategoria = this.route.snapshot.queryParams['idCategoria'];
    this.buscarProdutos();
  }
  buscarProdutos() {
    this.categoriaService.buscarCategoria(this.idCategoria).subscribe((resposta)=> {
      this.categoria = resposta;
      console.log(this.categoria);
    });
  }
  voltar() {
    this.router.navigate(['/categorias']);
  }

}
