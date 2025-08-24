import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Documento, DocumentoFiscal } from 'src/app/interface/reval';
import { DbService } from 'src/app/storage/db.service';

@Component({
  selector: 'app-selecao-nota',
  templateUrl: './selecao-nota.component.html',
  styleUrls: ['./selecao-nota.component.scss'],
})
export class SelecaoNotaComponent implements OnInit {
  @Input() documentos: DocumentoFiscal[]

  public documentosFiltro: any


  constructor(public db: DbService,
    public mc:ModalController) { }

  ngOnInit() {
    this.documentosFiltro = this.documentos
    console.log(this.documentosFiltro)
   // this.carrega();
  }

  carrega() {
   
  }

  busca(evt: any) {
    this.documentos = this.documentosFiltro.filter((ev) => {
      return this.db.compara([ev.fornecedor,ev.cnpj, ev.emissao], evt.detail.value);
    });
  }

  async selecionaDocumento(documentos: any) {
    const modal = await this.mc.create({
      component: SelecaoNotaComponent,
      componentProps: { documentos: documentos
                      },
      cssClass: 'modal-css'
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  seleciona(documento: any) {
    this.mc.dismiss({
      status: true,
      documento: documento,
    });
  }
}