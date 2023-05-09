import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produtos } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{


  produtos : Produtos[] = [];
  ProdutosService: any;


  constructor (ProdutoService: ProdutoService){}


  ngOnInit(): void {
    this.loadProdutos();
    }


    loadProdutos(){
      this.ProdutosService.getProdutos().subcribe(
        {
          next: data => this.produtos = data
          error: () => console.error("Erro ao Chamar o Endpont");
           
        }
      )
    }
  }

