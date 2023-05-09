import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{


  produtos: Produto[] = [];


  constructor (private produtoService: ProdutoService){}

  ngOnInit(): void {
     this.loadProduto();
  }

  loadProduto() {
      this.produtoService.getProduto().subscribe(
        {
          next : data => this.produtos = data,
        }
      );
  }

}