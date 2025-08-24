import { ModalValidaItensPage } from './../../modal-valida-itens/modal-valida-itens.page';
import { ModalValorPage } from './../../modal-valor/modal-valor.page';
import { GenericasService } from './../../funcoes/genericas.service';
import { async } from '@angular/core/testing';
import { SelecaoItemPage } from './../../selecao-item/selecao-item.page';
import { VendasService } from './../../api/vendas.service';
import { DbService } from './../../storage/db.service';
import { PedidoPage } from './../pedido/pedido.page';
import { Component, OnInit } from '@angular/core';
import { Item, Produto } from 'src/app/interface/brMetal';
import {  NgxMaskPipe } from 'ngx-mask';
import {  IConfig } from 'ngx-mask'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@Component({
  selector: 'app-itens-pedido',
  templateUrl: './itens-pedido.page.html',
  styleUrls: ['./itens-pedido.page.scss'],
})
export class ItensPedidoPage implements OnInit {
  public selectedItens: number = 0
  constructor(public ped: PedidoPage,
    public db: DbService,
    public venSvc: VendasService,
    public selPro: SelecaoItemPage,
    public gen: GenericasService,
    public maskPipe: NgxMaskPipe,
    public modVal: ModalValorPage,
    public modValida: ModalValidaItensPage
  ) { }

  ngOnInit() {
  }
  adicionaItem() {
    this.ped.itensPedido.push({})

    console.log(this.ped.itensPedido)
  }

  async buscaProduto(referencia, descricao, index) {
    console.log(referencia, descricao, index);

    if (referencia) {
      await this.getProdutoRef(referencia, descricao, index)
      console.log(this.ped.itensPedido.length)
    } else {
      this.seleciona(referencia, descricao, index)
    }
  }

  async getProdutoRef(referencia: string, descricao?: string, index?: number) {
    this.db.mostraProcessando();
    this.venSvc
      .GetProduto({
        token: this.db.token,
        referencia: referencia
      })
      .subscribe(
        (ret) => {
          //              if(ev) ev.target.complete();
          this.db.escondeProcessando();
          if (ret.referencia) {
            this.ped.itensPedido[index] = ret
            console.log(ret)
            console.log(this.ped.itensPedido)
            this.ped.totalizaPedido()
            this.quantidadeModal(index)

          } else {

            this.seleciona(referencia, descricao, index)

          }

        },
        (err) => this.db.escondeProcessando(err.error)
      );
    //

  }

  getProdutoCodigo(codigo?: number, index?: number) {
    this.db.mostraProcessando();
    this.venSvc
      .GetProduto({
        token: this.db.token,
        codigo: codigo
      })
      .subscribe(
        (ret) => {
          //              if(ev) ev.target.complete();
          this.db.escondeProcessando();
          this.ped.itensPedido[index] = ret
          this.ped.itensPedido[index].selected = false
          this.ped.totalizaPedido()
          console.log(ret)
          this.quantidadeModal(index)
          console.log(ret)
          console.log(this.ped.itensPedido)


        },
        (err) => this.db.escondeProcessando(err.error)
      );
    //

  }

  async seleciona(referencia?: string, descricao?: string, index?: number) {
    let busca = ''
    if (referencia)
      busca = referencia
    if (descricao)
      busca = busca + ';' + descricao

    const retItem = await this.selPro.selecionaProduto(busca)
    if (retItem.data.status == true) {
      console.log(retItem)

      this.getProdutoCodigo(retItem.data.item.codigo, index)
    }
  }

  temEstoque(item) {
    if (item?.estoqueDisponivel && item?.quantidade > 0) {
      if (+item.estoqueDisponivel >= +item.quantidade){
        item.ok = true
        return "temEstoque"}
      else {  item.ok=false
        return "naoTemEstoque"
      }

    }


  }

  checkItem(i) {

    this.ped.itensPedido[i].selected = !this.ped.itensPedido[i].selected
    this.contaSelecionados()

  }
  contaSelecionados() {
    this.selectedItens = 0
    this.ped.itensPedido.forEach(item => {
      if (item.selected == true)
        this.selectedItens = this.selectedItens + 1

    });
  }
  excluiItens() {
    this.ped.itensPedido = this.ped.itensPedido.filter((item) => {
      return !item.selected
    });
    this.ped.totalizaPedido()
    this.contaSelecionados()

  }

  async quantidadeModal(index){
   let valor = await this.modalValor('Quantidade Disp.', this.ped.itensPedido[index].quantidade, this.ped.itensPedido[index].estoqueDisponivel)
   if (valor){
    this.ped.itensPedido[index].quantidade =  valor
    this.ped.quantidadeChange(index)

   }
   if (this.ped.itensPedido[index].valorUnitario == 0)
   this.valorUnitarioModal(index)


      }
  async valorUnitarioModal(index){
    let valor =  await this.modalValor('Valor Unitario', this.ped.itensPedido[index].valorUnitario)
    if (valor){
        this.ped.itensPedido[index].valorUnitario = valor
        this.ped.valorUnitarioChange(index)
    }
       }
  async valorTotalModal(index){
    let valor =  await this.modalValor('Valor Total', this.ped.itensPedido[index].valorTotal)
    if (valor){
        this.ped.itensPedido[index].valorTotal =  valor
        this.ped.valorTotalChange(index)
    }
       }

  async modalValor(titulo, valorOrig, estoqueDisponivel?) {
    const ret = await this.modVal.modalValor(titulo, valorOrig, estoqueDisponivel)

    console.log(ret)

    return ret.data

  }
  enterKeyProduto(event,  referencia, descricao, i){

    if (event.key === 'Enter'){
      this.buscaProduto(referencia, descricao, i)
    }
  }
  enterKeyDescricao(event, referencia, descricao, i){

    if (event.key === 'Enter'){
      this.buscaProduto(referencia, descricao, i)
    }
  }

   clearContents(i) {

  this.ped.itensPedido[i].descricao = ''
  }


/*

http://app.procced.com.br/brmetal/app/v1/Vendas/_Validations{
    "id":"valorTotal",
    "field":"valorUnitario",
    "quantidade": 15,
    "valorUnitario":0,
    "valorTotal":0
  } */
}



