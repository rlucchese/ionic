import { DbService } from '../../storage/db.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-visualiza-pedido',
  templateUrl: './visualiza-pedido.page.html',
  styleUrls: ['./visualiza-pedido.page.scss'],
})
export class VisualizaPedidoPage implements OnInit {

  constructor(    public mc: ModalController,
    public db: DbService,
    public plt: Platform
    ) { }

  ngOnInit() {
  }


  async abrePedido() {
    console.log('abrePedido')
    const modal = await this.mc.create({
      component: VisualizaPedidoPage,
    });
    await modal.present();

    return await modal.onWillDismiss();
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsDataURL(blob)
  })




  private b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  // Interno
/*   abreDocumento(token: string, id: number, callback: ICallback, download?: boolean,) {
    this.db.mostraProcessando();
    if (this.plt.is('android')) { // only change for iOS
      this.Get({
        token: token,
        id: id,
        tipoRetorno: 1,
      })
        .subscribe((ret) => {
          this.db.renovaToken(ret.novoToken)
          this.svc.fileWrite(ret.titulo, ret.conteudo)
          this.escondeProcessando()
          callback();
        });
    } else if (download) {
      this.Get({
        token: token,
        id: id,
        tipoRetorno: 1,
      })
        .subscribe(async (ret) => {
          this.escondeProcessando()
          if (ret.status == 'true') {
            this.db.renovaToken(ret.novoToken)
            this.salvaArquivo(ret.conteudo, ret.titulo)


           } else {
            this.setMensagem(ret.error);
          }
        })
    } else if (!download)
      this.Get({
        token: token,
        id: id,
        tipoRetorno: 2,
      })
        .subscribe(async (ret) => {
          this.escondeProcessando()
          if (ret.status == 'true') {
            Browser.open({ url: ret.link })
          } else {
            this.setMensagem(ret.error);
          }
        })
  } */


  salvaArquivo(conteudo: string, nomeArq: string) {
    var a: any
    var text = this.b64toBlob(conteudo)
    var data = new Blob([text]);

    a = document.createElement('a')
    a.setAttribute('download', nomeArq)
    a.href = ""
    var url = window.URL.createObjectURL(data);
    a.href = url;

    console.log(a)
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }




}
