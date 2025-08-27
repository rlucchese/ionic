import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from '../api/usuario.service';
import { DbService } from '../storage/db.service';
import { ColaboradorLogDocumento } from '../../../../_componentes/interfaces/usuario';
 
@Component({
  selector: 'app-log-colaborador',
  templateUrl: './log-colaborador.page.html',
  styleUrls: ['./log-colaborador.page.scss'],
})
export class LogColaboradorPage implements OnInit {
  @Input() cpf: string;
  @Input() idCliente: number;
  @Input() colaborador: string

  public documentos: ColaboradorLogDocumento[]
  public documentos2: ColaboradorLogDocumento[]
  public idStatus: string = '1'
  public buscaDoc: string
  public cliente: string
  public mostraBusca: boolean
  constructor( public db: DbService,
    public mc: ModalController,
    public usuSvc: UsuarioService
) { }

  ngOnInit() {
    this.carrega();
  }

  carrega() {
    this.usuSvc.GetLogColaborador({token: this.db.app.token,idCliente: this.idCliente, cpf: this.cpf}).subscribe((ret) => {
      this.documentos = ret.documentos
      this.documentos2 = ret.documentos

      console.log(this.documentos)
      if(this.documentos.length > 0) {
        this.cliente = this.documentos[0].cliente
      }
    })
  }

  async selecionaLog(cpf: string, idCliente: number, colaborador: string) {
    this.colaborador = colaborador
    const modal = await this.mc.create({
      component: LogColaboradorPage,
      backdropDismiss: false,
      componentProps: {
        cpf: cpf,
        idCliente: idCliente,
        colaborador: colaborador
      },
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
