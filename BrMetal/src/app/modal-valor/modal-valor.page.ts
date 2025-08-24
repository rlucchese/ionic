import { PedidoPage } from './../pages/pedido/pedido.page';
import { ModalController, IonInput } from '@ionic/angular';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GenericasService } from '../funcoes/genericas.service';

@Component({
  selector: 'app-modal-valor',
  templateUrl: './modal-valor.page.html',
  styleUrls: ['./modal-valor.page.scss'],
})
export class ModalValorPage implements OnInit {
  @Input('titulo') titulo: string;
  @Input('valorOrig') valorOrig: number;
  @Input('disponivel') disponivel: number;

  @ViewChild('input') myInput: IonInput

  public valor: any;
  public invalido : boolean = false
  constructor(public mc: ModalController,
    public gen: GenericasService,
    ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.myInput.setFocus();
    document.addEventListener("keypress", function(e) {
      console.log(e.key)
      if(e.key === 'Enter') {

          var btn = document.getElementById("submit");

        btn.click()

      }
    });

  }
  async modalValor(titulo, valorOrig, disponivel?) {
    console.log('modalValor - ' +  titulo)
    const modal = await this.mc.create({
      component: ModalValorPage,
      componentProps: { 'titulo': titulo , 'valorOrig': valorOrig, 'disponivel': disponivel},
      cssClass: 'modalValorClass'
    });
    await modal.present();

    return await modal.onWillDismiss();
  }

  okClick(){

      if (this.disponivel && this.disponivel < this.valor)
        this.invalido = true
      else this.invalido = false
   if (!this.invalido)
    this.mc.dismiss(this.valor)
  }
}
