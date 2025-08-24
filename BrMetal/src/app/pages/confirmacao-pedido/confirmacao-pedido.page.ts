import {  NgxMaskPipe } from 'ngx-mask';
import { GenericasService } from './../../funcoes/genericas.service';
import { PedidoPage } from './../pedido/pedido.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, ValidationErrors, ValidatorFn, FormControl } from '@angular/forms';


@Component({
  selector: 'app-confirmacao-pedido',
  templateUrl: './confirmacao-pedido.page.html',
  styleUrls: ['./confirmacao-pedido.page.scss'],
})
export class ConfirmacaoPedidoPage implements OnInit {
  @ViewChild('data') data: IonInput;
  angForm: FormGroup
  erroData: boolean = false
  itemProblema: boolean = false
  public mostraDatePicker: boolean = false
  constructor(public ped: PedidoPage
    , public gen: GenericasService,
    public maskPipe: NgxMaskPipe,
    private fb: FormBuilder

  ) {
    this.createForm();
  }
  ngOnInit() {

  }
  ionViewDidEnter(){
    console.log(this.ped.identificacaoForm?.invalid , !this.ped.totalValor , this.itemProblema )

  
  /*
  this.itemProblema =false
   this.ped.itensPedido.forEach(item => {
     
     if (!item.ok) {this.itemProblema = true}
   });
   console.log(this.itemProblema)
   */
  }
  createForm() {

    this.angForm = this.fb.group({
      name: [null, {validators: [Validators.required,  this.cpfCnpjValidator()],}]}






    );
  }
  cpfCnpjValidator(): ValidatorFn {

    return (control: FormControl): ValidationErrors | null => {
      console.log(this.gen.ValidaCPF(control.value))
      if (this.gen.ValidaCPF(control.value)) return null
      else {console.log(control.value)
      return { cpfError: true }
      }
    }
  }
  valida(campo, event) {
    console.log(event)
    console.log(campo)
    if (campo){
    //this.gen.validaData(this.ped.dadosAuxiliares.dataEntrega)
    let ano = campo.substr(0, 4)
    let mes = campo.substr(5, 2)
    let dia = campo.substr(8, 2)
    let data = dia + "/" + mes + "/" + ano
    console.log(dia + "/" + mes + "/" + ano)
    //console.log(this.ped.dadosAuxiliares.dataEntrega)
    if (!this.gen.isValidDate(data)) {
      this.erroData = true
      this.data.setFocus()

    } else this.erroData = false
  }
  }




  mascaraData(event) {
    console.log(document.getElementById('cond'))
    document.getElementById('cond').setAttribute('value', this.maskPipe.transform(event.detail.value, '00/00/0000'));
  }

  validaTransportadora(){

    if (this.ped.dadosAuxiliares.tipoFrete == '1') this.ped.dadosAuxiliares.transportadora = ''
  }
}
