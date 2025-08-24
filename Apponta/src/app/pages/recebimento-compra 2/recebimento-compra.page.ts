import { ItemNotaPedido,  } from './../../interface/reval';
import { Component, OnInit } from '@angular/core';
import { DocumentoFiscalService } from 'src/app/api/documento-fiscal.service';
import { PedidoCompraService } from 'src/app/api/pedido-compra.service';
import { SelecaoNotaComponent } from 'src/app/componentes/selecao-nota/selecao-nota.component';
import { SelecaoPedidoComponent } from 'src/app/componentes/selecao-pedido/selecao-pedido.component';
import { SelecaoProdutoComponent } from 'src/app/componentes/selecao-produto/selecao-produto.component';
import { Documento, DocumentoFiscal, ItemDocumentoFiscal,  } from 'src/app/interface/reval';
import { DbService } from 'src/app/storage/db.service';

@Component({
  selector: 'app-recebimento-compra',
  templateUrl: './recebimento-compra.page.html',
  styleUrls: ['./recebimento-compra.page.scss'],
})
export class RecebimentoCompraPage implements OnInit {
  public filtro: string
  public documentos: DocumentoFiscal[]
  public itens: ItemNotaPedido[]
  public documentoFiscal: DocumentoFiscal
  isInputFocused: boolean = false;
  public msg: string;
  constructor(public db: DbService , public docSvc: DocumentoFiscalService,public pedSvc: PedidoCompraService, public selNota: SelecaoNotaComponent, public selPedido: SelecaoPedidoComponent, public selProduto: SelecaoProdutoComponent) { }

  ngOnInit() {
  }

  buscarNotas() {
    //let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMasdfasidasdfasdgadgsdfgyJpYXQiOnsiZGF0ZSI6IjIwMjItMDItMDggMTk6NDY6MzQuMDAwMDAwIiwidGltZXpvbmVfdHlwZSI6MywidGltZXpvbmUiOiJBbWVyaWNhXC9CdWVub3NfQWlyZXMifSwiaXNzIjoicmV2YWxzZXJyYXMuY29tLmJyIiwibmJmIjp7ImRhdGUiOiIyMDIyLTAyLTA4IDE5OjQ2OjM0LjAwMDAwMCIsInRpbWV6b25lX3R5cGUiOjMsInRpbWV6b25lIjoiQW1lcmljYVwvQnVlbm9zX0FpcmVzIn0sImV4cCI6MTY0Njk1MjM5NCwiZGF0YSI6eyJpZCI6IjEiLCJ1c3VhcmlvIjoiUk9EUklHTyIsInRpcG8iOiIyIiwibGFuZyI6InB0LWJyIn19.dkk7R2ZX3ewHCTxS5CyinaDPcfAP310wuF-I3kgKQCAz7gqJIujFtYIA8QWlJSAOMKQj"
    if (this.filtro ) {

      this.db.mostraProcessando();
      this.docSvc
        .Lista({
          token: this.db.getToken(),
          filter: this.filtro

        })
        .subscribe(
          async (ret) => {
            this.db.escondeProcessando();
            if (ret.status && ret.documentos.length > 0) {
              console.log("ret", ret);
              this.documentos = ret.documentos

              if (this.documentos.length > 1){

               const ret = await this.selNota.selecionaDocumento(this.documentos)
               if (ret.data.status) {
                         this.documentoFiscal = ret.data.documento
               this.carregaItens(this.documentoFiscal)
             }
              }
              else {

                this.documentoFiscal = this.documentos[0]
                this.carregaItens(this.documentoFiscal)

              }
            }
            this.documentoFiscal = ret.documentos[0]
            this.msg = 'NENHUMA NOTA ENCONTRADA'

          },
          (err) => this.db.escondeProcessando(err.error)
        );
    }
    else { this.db.setMensagem('Escolha um filtro para buscar') }
  }


  carregaItens(documento: DocumentoFiscal){
    this.db.mostraProcessando();
    this.docSvc
      .Get({
        token: this.db.getToken(),
        codigo: documento.codigo

      })
      .subscribe(
        async (ret) => {
          this.db.escondeProcessando();
          if (ret.status) {
            console.log("ret", ret);
            this.documentoFiscal.itens = ret.itens
            console.log("documentos", this.documentoFiscal);


    
          }

        },
        (err) => this.db.escondeProcessando(err.error)
      );
  

  }



  onInputFocus() {
    this.isInputFocused = true;
  }

  onInputBlur() {
    this.isInputFocused = false;
  }

  validaQuantidade(item: ItemNotaPedido){
console.log(item)

   


  }

  async selecaoPedido(item: ItemNotaPedido, cnpj, ){
    if (this.filtro ) {

      this.db.mostraProcessando();
      this.pedSvc
        .ListaItens({
          token: this.db.getToken(),
          numero: item.notaPedidoNumero,
          cnpj: cnpj

        })
        .subscribe(
          async (ret) => {
            this.db.escondeProcessando();
            if (ret.status ) {
              console.log("ret", ret);
          

              if (ret.itens.length > 1){

                const retorno = await this.selPedido.selecionaPedido(ret.itens)
                if (retorno.data.status) {
                        console.log( retorno.data)
                      item.notaPedidoNumero = retorno.data.item.numeroPedido
                      item.notaPedidoItem = retorno.data.item.codigoItem
                      item.entradaDescricao = retorno.data.item.referencia
                      item.entradaDescricao = retorno.data.item.descricao
                      
               // this.carregaItens(this.documentoFiscal)
              }
   
              }
              else {
                console.log(ret.itens.length)
                if (ret.itens.length == 1) {
                item.notaPedidoNumero = ret.itens[0].numeroPedido
                item.notaPedidoItem = ret.itens[0].codigoItem
                item.entradaReferencia = ret.itens[0].referencia 
                item.entradaDescricao = ret.itens[0].descricao

          
              
              }
            else {this.db.setMensagem('Pedido não encontrado')}
            }
            }

          },
          (err) => this.db.escondeProcessando(err.error)
        );
    }
    else { this.db.setMensagem('Escolha um filtro para buscar') }
    
  }

  async selecaoProduto(item, filtro?: any){

    const retorno = await this.selProduto.selecionaProduto(filtro)
    if (retorno.data.status) {
            console.log( retorno.data)
            item.entradaReferencia = retorno.data.produto.referencia
item.entradaDescricao = retorno.data.produto.descricao
item.entradaUnidade = retorno.data.produto.unidade
          
   // this.carregaItens(this.documentoFiscal)
  }

  
    
  }


  finalizar(){
    this.db.mostraProcessando();
    this.docSvc
      .Finaliza({
        token: this.db.getToken(),
        documentoFiscal: this.documentoFiscal,
    

      })
      .subscribe(
        async (ret) => {
          this.db.escondeProcessando();
          if (ret.status ) {

            this.db.setMensagem('Documento Finalizado com Sucesso')
            let x: DocumentoFiscal
            this.documentoFiscal = x
          }
          else{
            this.db.setMensagem('Erro ao finalizar o documento')

          }

        })



  }
}
