import { IdentificacaoPedidoPage } from './../identificacao-pedido/identificacao-pedido.page';
import { ItensPedidoPage } from './../itens-pedido/itens-pedido.page';
import { AppService } from 'src/app/api/app.service';
import { GenericasService } from './../../../../src/app/funcoes/genericas.service';
import { VendasService } from './../../api/vendas.service';
import { DbService } from 'src/app/storage/db.service';
import { Item, Produto } from './../../interface/brMetal';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interface/brMetal';
import {  NgxMaskPipe } from 'ngx-mask';
import { FormGroup } from '@angular/forms';
import {  FormBuilder, Validators, ValidationErrors, ValidatorFn, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  public Form: Cliente = {}
  public identificacaoForm: FormGroup;
  public itensPedido: Produto[] = [{}]
  public error: string;
  public validaQuantidade: boolean

  public dadosAuxiliares: {
    condicaoPagamento: string
    dataEntrega: string
    observacao: string,
    entregaImediata?: boolean,
    enviaEmail?: boolean,
    numero?: number,
    dataBaixa?: string,
    naoAprovado?: boolean,
    motivoBaixa?: string,
    observacaoBaixa?: string
    tipoFrete?: string
    transportadora?: string

  } = {
      condicaoPagamento: ' ',
      dataEntrega: ' ',
      observacao: ' ',
      entregaImediata: true,
enviaEmail:true,
tipoFrete: '2'
    }
  public entregaImediata: boolean = true
  public update: boolean
  public totalItens: number = 0
  public totalQuantidade: number = 0
  public totalValor: number = 0
public pedidoValido: boolean = true
public tipo: string
  constructor(public router: Router,
    private activatedRoute: ActivatedRoute,
    public db: DbService,
    public venSvc: VendasService,
    public svcApp: AppService,
    public maskPipe: NgxMaskPipe,
    public gen: GenericasService,
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm()
     this.tipo = this.activatedRoute.snapshot.paramMap.get('id')

  }
  ionViewWillEnter(){
    let dados = history.state
    console.log(dados)
    if (dados.cliente){

      this.identificacaoForm.patchValue(dados.cliente)
      this.itensPedido =dados.itens
      this.dadosAuxiliares = dados.dadosAuxiliares
      this.update = dados.update
      this.totalizaPedido()
    }


  }
  navItensPedido() {

    console.log(this.Form)
    this.router.navigateByUrl('vendas/pedido/itensPedido')
  }
  createForm() {

    this.identificacaoForm = this.fb.group({
      codigo:[null],
      nome: [null, { validators: [Validators.required] }],
      cnpjcpf:[null, {validators: [Validators.required, this.cpfCnpjValidator()]}],

      inscricaoEstadual: [null],
      nomeFantasia: [null],

      observacao: [null],
      cidade: [null, { validators: [Validators.required] }],
      endereco: [null, { validators: [Validators.required] }],
      bairro: [null, { validators: [Validators.required] }],
      telefone: [null, { validators: [Validators.required] }],
      cep: [null, { validators: [Validators.required] }],
      uf: [null, { validators: [Validators.required] }],
      enderecosEletronicos: [null, { validators: [Validators.required] }],


    }






    );
  }
   incluiPedido() {

this.validaPedido()

    let itens: Item[] = []
    this.itensPedido.forEach(produto => {
      itens.push({
        codigo: produto.codigo,
        quantidade: produto.quantidade,
        valorUnitario: produto.valorUnitario,
        valorTotal: produto.valorTotal,
        observacao: produto.observacao,
        selected: false,
      })

    });

    this.db.mostraProcessando();
    this.venSvc
      .IncluiPedido({
        token: this.db.token,
        cliente: this.identificacaoForm.value,
        itens: itens,
        dadosAuxiliares: this.dadosAuxiliares,
      })
      .subscribe(
        (ret) => {

        if (ret.status == true){
          this.db.escondeProcessando();
          this.db.setMensagem('Pedido incluído com sucesso: ' + ret.codigoPedido,20000,true,'middle');

          this.identificacaoForm.reset('')
          this.itensPedido = [{}]
          this.totalizaPedido()
          this.dadosAuxiliares={
            condicaoPagamento: ' ',
            dataEntrega: ' ',
            observacao: ' ',
            entregaImediata: true,
enviaEmail:true
          }
          this.router.navigateByUrl('vendas/pedido/identificacaoPedido')
          console.log(ret)
        } else
        {
          console.log(ret)

          this.error = 'Email Obrigaorio' //ret.error
        }
        },
        (err) => this.db.escondeProcessando(err.error)
      );
    //

  }
//  incluiPedido(){

//    console.log('pedido')
//  }
  incluiOrcamento() {

    this.validaPedido()
if (this.validaQuantidade){
        let itens: Item[] = []
        this.itensPedido.forEach(produto => {
          itens.push({
            codigo: produto.codigo,
            quantidade: produto.quantidade,
            valorUnitario: produto.valorUnitario,
            valorTotal: produto.valorTotal,
            observacao: produto.observacao,
            selected: false,
          })

        });

       // this.db.mostraProcessando();
        if (!this.update) {
        this.db.mostraProcessando();
        this.svcApp.GetObjeto(
          "OrcamentoVenda",{
            action: '_addJSON',
            token: this.db.token,
            cliente: this.identificacaoForm.value,
            itens: itens,
            dadosAuxiliares: this.dadosAuxiliares,

          }
        ).subscribe(
            (ret) => {

              this.db.escondeProcessando();
              if (ret.status == true){
              console.log(ret.status)
              if (ret.status) this.db.setMensagem('Orçamento incluído com sucesso: ' + ret.numero ,20000,true,'middle');
              this.identificacaoForm.reset('')
              this.itensPedido = [{}]
              this.totalizaPedido()
              this.dadosAuxiliares={
                condicaoPagamento: ' ',
                dataEntrega: ' ',
                observacao: ' ',
                entregaImediata: true,
             enviaEmail:true
              }
              this.router.navigateByUrl('vendas/orcamento/identificacaoPedido')
              console.log(ret)
            }else{
              this.error =  ret.error

            }
            },
            (err) => this.db.escondeProcessando(err.error)
          );
        //

      } else if (this.update){
        this.svcApp.GetObjeto(
          "OrcamentoVenda",
          {
            action: '_updateJSON',
            token: this.db.token,
            cliente: this.identificacaoForm.value,
            itens: itens,
            dadosAuxiliares: this.dadosAuxiliares,

          }
        ).subscribe(
            (ret) => {
              this.db.escondeProcessando();
              if (ret.status)
              this.db.setMensagem('Orçamento atualizado  com sucesso: ' + ret.numero );

              this.identificacaoForm.reset('')
              this.itensPedido = [{}]
              this.totalizaPedido()
              this.dadosAuxiliares={
                condicaoPagamento: ' ',
                dataEntrega: ' ',
                observacao: ' ',
                entregaImediata: true,
             enviaEmail:true
              }
              this.update = false

              this.router.navigateByUrl('vendas/orcamento/identificacaoPedido')
              console.log(ret)

            },
            (err) => this.db.escondeProcessando(err.error)
          );
        //

      }



    }

    }


  quantidadeChange(index) {
    /* console.log(index)
    this.itensPedido[index].valorTotal = +((this.itensPedido[index].valorUnitario * this.itensPedido[index].quantidade).toFixed(2)) */
    this.valida('quantidade', index)
   // this.mascaraValor(event, id)
  }
  valorUnitarioChange(index) {
 /*    console.log('altera valorunitariop')

      this.itensPedido[index].valorTotal= +((this.itensPedido[index].valorUnitario * this.itensPedido[index].quantidade).toFixed(2))
  */
 this.valida('valorUnitario', index)
  }
  valorTotalChange(index) {

   /*  this.itensPedido[index].valorUnitario = +((this.itensPedido[index].valorTotal / this.itensPedido[index].quantidade).toFixed(5))
    */
   this.valida('valorTotal', index)
  }
  totalizaPedido() {
    this.totalItens = 0
    this.totalQuantidade = 0
    this.totalValor = 0
    console.log(this.itensPedido)
    this.itensPedido.forEach(item => {
      this.totalItens = item.codigo?this.totalItens + 1:this.totalItens
      this.totalQuantidade = item.codigo?+this.totalQuantidade + +item.quantidade:+this.totalQuantidade
      this.totalValor = item.codigo?+this.totalValor + +item.valorTotal:+this.totalValor

    });
    console.log(this.totalValor)


  }
/* validaData(){

  console.log(new Date(this.dadosAuxiliares.dataEntrega),this.dadosAuxiliares.dataEntrega)
} */

valida(campo,i){

  this.venSvc
      .Valida({
        id: 'valorTotal',
        field: campo,
        codigo: this.itensPedido[i].codigo,
        quantidade: this.itensPedido[i].quantidade,
        valorUnitario: this.itensPedido[i].valorUnitario,
        valorTotal: this.itensPedido[i].valorTotal
      })
      .subscribe(
        (ret) => {

         this.itensPedido[i].quantidade = ret.quantidade
         this.itensPedido[i].valorUnitario = ret.valorUnitario
         this.itensPedido[i].valorTotal = ret.valorTotal
         this.totalizaPedido()


        },
        (err) => console.log(err)
      );
    //

}

mascaraValor(event, id) {
  console.log(  event.srcElement.value)
document.getElementById(id).setAttribute('value',this.maskPipe.transform(event.detail.value, '000.000.000.000,00'))


   /* ('value',this.maskPipe.transform(event.detail.value, '00/00/0000')); */
}


validaPedido(){
this.validaQuantidade = true
  this.itensPedido.forEach(item => {
    if (item.quantidade > item.estoqueDisponivel){

      this.db.setMensagem('Item ' + item.descricao + ' quantidade acima do estoque ',20000,true,'middle')
this.validaQuantidade = false
    }
  });
/*   if (this.Form.cnpjcpf.toString().length <= 14) {
    if (!this.gen.ValidaCPF(this.Form.cnpjcpf)){
      console.log(document.getElementById('cpfcnpj').attributes)
      this.pedidoValido = false
    }


  }
    else{
       if (!this.gen.ValidaCNPJ(this.Form.cnpjcpf)){
         this.pedidoValido = false
       }
    } */


}
cpfCnpjValidator(): ValidatorFn {

  return (control: FormControl): ValidationErrors | null => {

    if (!control.value) {
      return {cpfcnpjObrigatorio: true}
    }
    let valor = this.gen.removeCaracteres(control.value)
    if (valor.toString().length < 14){
    console.log(this.gen.ValidaCPF(valor))
    if (this.gen.ValidaCPF(valor)) return null
    else {
      console.log(valor)
    return { cpfError: true }
  }
}
  else {
    if (this.gen.ValidaCNPJ(valor)) return null
    else {console.log(valor)
    return { cnpjError: true }}


    }
  }
}
}
