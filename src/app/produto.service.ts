import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  static getProdutos() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produtos[]> {

    let url = "https://localhost:3000/produtos";
    return this.http.get<Produtos[]>(url);

  }
}
