import { Documento } from './../interfaces/documento-cliente';
import { DocumentoclienteService } from './../api/documentocliente.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from '../api/usuario.service';
import { DbService } from '../storage/db.service';

@Component({
  selector: 'app-log-documentos',
  templateUrl: './log-documentos.page.html',
  styleUrls: ['./log-documentos.page.scss'],
})
export class LogDocumentosPage implements OnInit {
  @Input() documento: Documento;
  @Input() idCliente: number;
  @Input() iddocumento: number;

  public documentos: any[]
  public documentos2: any[]
  public idStatus: string = '1'
  public buscaDoc: string
  public cliente: string
  public mostraBusca: boolean
  constructor( public db: DbService,
    public mc: ModalController,
    public docSvc: DocumentoclienteService) { }

  ngOnInit() {
    this.carrega();
  }

  carrega() {
    this.docSvc.GetLog({token: this.db.app.token,idCliente: this.idCliente, id: this.documento.id}).subscribe((ret) => {
      this.documentos = ret.log
      this.documentos2 = ret.log

      console.log(ret)
      if(this.documentos.length > 0) {
        this.cliente = this.documentos[0].cliente
      }
    })
  }

  async selecionaLog(idCliente: number, idDocumento: number, documento) {
    const modal = await this.mc.create({
      component: LogDocumentosPage,
      backdropDismiss: false,
      componentProps: {
        idCliente: idCliente,
        idDocumento: idDocumento,
        documento: documento     },
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  cancela() {
    this.mc.dismiss({
      status: false
    });
  }

  busca() {
    // Implementar busca por vencimento tb ou não lidos....
    this.documentos = this.documentos2.filter((doc) => {
      return this.db.compara([doc.nome], this.buscaDoc?this.buscaDoc:"");
    })
    if (this.idStatus !== '3'){
    this.documentos = this.documentos.filter((doc) => {
      return this.db.compara([doc.ativo], this.idStatus);
    });}
  }

  imprime() {
    console.log('imprimindo');
    var mywindow = window.open('', 'PRINT', 'height: 80%,width: 80%; margin: auto;');

    mywindow.document.write('<html><head><title> Log de Acessos  </title>');
    mywindow.document.write('</head><body>');
    mywindow.document.write(document.getElementById('tabelaImprimir').innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();
}
}
