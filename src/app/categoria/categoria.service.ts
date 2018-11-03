import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriaService {
  private urlGetCategorias = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) {
  }
  buscarCategorias() {
    return this.http.get<any[]>(`${this.urlGetCategorias}`);
  }
  buscarCategoria(id: number) {
    return this.http.get<any[]>(`${this.urlGetCategorias}/${id}`);
  }
}
