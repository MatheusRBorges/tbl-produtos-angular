import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto    } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
 
  constructor(private http: HttpClient) { }

  getProduto(): Observable<Produto[]> {
      let url = "http://localhost:3000/produto";
      return this.http.get<Produto[]>(url);
  }
}
