import { GenericasService } from './../../funcoes/genericas.service';
import { PedidoPage } from './../pedido/pedido.page';
import { Cliente } from './../../interface/brMetal';
import { VendasService } from '../../api/vendas.service';
import { DbService } from './../../storage/db.service';
import { SelecaoClientePage } from './../../selecao-cliente/selecao-cliente.page';
import { Component, OnInit, Input } from '@angular/core';
import { NgxMaskPipe } from 'ngx-mask';
import {  FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-identificacao-pedido',
  templateUrl: './identificacao-pedido.page.html',
  styleUrls: ['./identificacao-pedido.page.scss'],
})
export class IdentificacaoPedidoPage implements OnInit {

  constructor(public selCli: SelecaoClientePage,
    public db: DbService,
    public venSvc: VendasService,
    public ped: PedidoPage,
    public gen: GenericasService,
    public maskPipe: NgxMaskPipe,
    private fb: FormBuilder
  ) {

  }


  ngOnInit() {

  }




  async selecionaCliente() {
    const retCliente = await this.selCli.selecionaCliente()

    console.log(retCliente)
    this.getCliente(retCliente.data.cliente.codigo)

  }
  // funcao p[ara form modelo ngmodel
  /* getCliente(codigo: number){
  
    this.db.mostraProcessando();
    this.venSvc
      .GetCliente({
        token: this.db.token,
        codigo: codigo
      })
      .subscribe(
        (ret) => {
          //              if(ev) ev.target.complete();
          this.db.escondeProcessando();
            this.ped.Form = ret;
            console.log(ret)
            console.log(this.ped.Form)
  
        },
        (err) => this.db.escondeProcessando(err.error)
      );
    //      } else this.clientes = this.db.clientes;
  } */


  getCliente(codigo: number) {

    this.db.mostraProcessando();
    this.venSvc
      .GetCliente({
        token: this.db.token,
        codigo: codigo
      })
      .subscribe(
        (ret) => {
          //              if(ev) ev.target.complete();
          this.db.escondeProcessando();
          //  console.log(this.ped.identificacaoForm['nome'])
          //console.log(this.ped.identificacaoForm.value.nome)

          this.ped.identificacaoForm.patchValue(ret)
          this.ped.identificacaoForm.value.nomeFantasia = ret.nomeFantasia
          //console.log(this.ped.identificacaoForm.value.nome)
          console.log(this.ped.identificacaoForm)
          console.log(ret)

        },
        (err) => this.db.escondeProcessando(err.error)
      );
    //      } else this.clientes = this.db.clientes;
  }


/*   valida(valor) {
    console.log(this.ped.Form.cnpjcpf)
    console.log(valor.toString().length)
    if (valor.toString().length <= 14) {
      if (!this.gen.ValidaCPF(valor)) {
        console.log(document.getElementById('cpfcnpj').toggleAttribute('isValid'))
        console.log(document.getElementById('cpfcnpj').attributes)
        this.ped.pedidoValido = false
      }


    }
    else {
      return this.gen.ValidaCNPJ(valor)
    }
  } */
  mascaraCPFCNPJ(valor) {
    if (valor.toString().length < 14) {
      document.getElementById('cpfcnpj').setAttribute('value', this.maskPipe.transform(valor, '000.000.000-00'));
    }
    else {
      document.getElementById('cpfcnpj').setAttribute('value', this.maskPipe.transform(valor, '00.000.000/0000-00'));
    }
  }

  onBlur(event) {
    console.log(event)
    // input.setCustomValidity('fff')
    //cpfcnpj.className = "ion-invalid"
  }

  removeMascara() {

  }


 
}
