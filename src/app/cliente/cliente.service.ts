import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService {

  private urlGetClientes = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {
  }
  
  buscarClientes() {
    return this.http.get<any[]>(`${this.urlGetClientes}`);
  }
}
