import { Component, Input, OnInit } from '@angular/core';
import {  Directory, Filesystem } from '@capacitor/filesystem';
import { AppService } from 'src/app/api/app.service';
import { _SERVER } from 'src/app/guards/load-setup.guard';
import { Documento } from 'src/app/interface/reval';
import { DbService } from 'src/app/storage/db.service';
import { ModalController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import { checkEncoding } from '_node_modules/smart-buffer/typings/utils';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  @Input() referencia: string


  public produtos: any
 // public referencia: string
  public descricao: string
public uri: any
  constructor(public db: DbService, public appSvc: AppService, public plt: Platform,
    public http: HttpClient
    , public file: FileOpener, public mc: ModalController

  ) { }

  ngOnInit() {
    if (this.referencia || this.descricao) {
      this.buscarProduto()
    }
  }


  buscarProduto() {
    //let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMasdfasidasdfasdgadgsdfgyJpYXQiOnsiZGF0ZSI6IjIwMjItMDItMDggMTk6NDY6MzQuMDAwMDAwIiwidGltZXpvbmVfdHlwZSI6MywidGltZXpvbmUiOiJBbWVyaWNhXC9CdWVub3NfQWlyZXMifSwiaXNzIjoicmV2YWxzZXJyYXMuY29tLmJyIiwibmJmIjp7ImRhdGUiOiIyMDIyLTAyLTA4IDE5OjQ2OjM0LjAwMDAwMCIsInRpbWV6b25lX3R5cGUiOjMsInRpbWV6b25lIjoiQW1lcmljYVwvQnVlbm9zX0FpcmVzIn0sImV4cCI6MTY0Njk1MjM5NCwiZGF0YSI6eyJpZCI6IjEiLCJ1c3VhcmlvIjoiUk9EUklHTyIsInRpcG8iOiIyIiwibGFuZyI6InB0LWJyIn19.dkk7R2ZX3ewHCTxS5CyinaDPcfAP310wuF-I3kgKQCAz7gqJIujFtYIA8QWlJSAOMKQj"
    if (this.referencia || this.descricao) {

      this.db.mostraProcessando();
      this.appSvc
        .GetDocumentos({
          token: this.db.getToken(),
          tabela: "ProdutoServico",
          referencia: this.referencia,
          descricao: this.descricao

        })
        .subscribe(
          (ret) => {
            this.db.escondeProcessando();
            if (ret.status) {
              console.log("ret", ret);
              this.produtos = ret.produtos
            }

          },
          (err) => this.db.escondeProcessando(err.error)
        );
    }
    else { this.db.setMensagem('Escolha uma referência ou descrição') }
  }

  getIcone(rotulo: string) {
    let extensao = rotulo.split(".")
    if (extensao[1] && extensao[1].toUpperCase() == "PDF") { return "/assets/pdf.png" }
    if (extensao[1] && extensao[1].toUpperCase() == "DXF") { return "/assets/dwg.png" }
    if (extensao[1] && extensao[1].toUpperCase() == "TXT") { return "/assets/txt.png" }

    return ""

  }

  abrirDocumento(link, codigo) {
    console.log(link)
    let conteudo = (_SERVER + "/app/v1/App/GetDocumento?link=" + link)
    if (this.plt.is('android') && this.plt.is('capacitor'))  // only change for iOS
      conteudo = (_SERVER + "/app/v1/App/GetDocumento2?link=" + link)

    //  this.salvaArquivo(conteudo, link)
    //  window.open(conteudo)
    this.abreDocumento(this.db.getToken(), codigo, conteudo)

    // this.fileWrite('dowload.sev', conteudo)

  }

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

  downloadFile(urlArquivo: string): Observable<ArrayBuffer> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/octet-stream')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET')
    .append('Access-Control-Allow-Origin', '*');

    const headers2 = new HttpHeaders({
      'Content-Type': 'application/octet-stream',  // Adjust content type based on your API requirements
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*',   // Allow requests from any origin (not recommended for production)
      // Add any other required headers here
    });
    console.log(headers)
    console.log(headers2)

    return this.http.get(urlArquivo,{headers: headers2, responseType: 'arraybuffer'})
  }

   async blobToString(blob: Blob): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result);
      };
  
      reader.onerror = () => {
        reject('Error reading Blob as text.');
      };
  
      reader.readAsText(blob);
    });
  }








  
  async saveFileLocally(blob: ArrayBuffer, fileName: string): Promise<void> {
//    const data = new Blob([blob], { type: 'application/octet-stream'})
    //const aData = utf8Encode(blob)

//    foreach()
//    const sData =      const binaryData = new Uint8Array(response);
//    utf8 (blob); //await this.blobToString(data)
//    let binary = '';

    let sData = '';
    const bytes = new Uint8Array(blob); //utf8Encode(blob);   
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        sData += String.fromCharCode(bytes[i]);
    }
//    fileName = "LD.pdf"// fileName
//console.log(111)
//console.log(bytes)
//console.log(2222)
//console.log(sData)
//console.log(333)

const base64Data = window.btoa(sData);
    console.log(base64Data)
    console.log(Directory.Data)
    try {

    console.log("antes de salvar")
     this.uri = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
    //  encoding: FilesystemEncoding.ASCII,
      directory: Directory.Data,
      recursive: true,
      
    })
    console.log("depois de salvar")
  }
    catch (error) {
      console.error("Erro ao salvar o arquivo: ", error);
      throw new Error("Não foi possível salvar o arquivo localmente.");
    }
  }

  getFilename(fullPath) {
    return fullPath.substring(fullPath.lastIndexOf('\\') + 1);
  }

  async openFile(fileName: string): Promise<void> {
    console.log("antes de open")
    const path = Directory.Data + "/" + fileName;
   // await Browser.open({ url: path });

    this.file.open(this.uri.uri, this.getMimeType(fileName))
        .then(() => console.log('file is opened'))
        .catch(error => console.log('error opening file', error))
    
        console.log("depois do open2")

    
  }
  
  // Interno
  abreDocumento(token: string, codigo: any, conteudo: string) {
    /*  this.db.mostraProcessando();
       this.appSvc.GetDocumento({
         token: token,
         codigoDocumento: id,
         tipoRetorno: 1,
       })
         .subscribe((ret) => {
           this.fileWrite(ret.titulo, ret.conteudo)
           this.db.escondeProcessando()
         //  callback();
         }, (err) => this.db.escondeProcessando(err.error)
         ); */

    if (this.plt.is('android') && this.plt.is('capacitor')) { // only change for iOS
 //conteudo = "http://filtroar.duckdns.org:17880/app/v1/13025.pdf"
 console.log(conteudo)
//      this.db.mostraProcessando();
       let fileName = "Apponta/"+ this.getFilename(conteudo)
       this.downloadFile(conteudo).subscribe(blob => {
         this.saveFileLocally(blob,fileName).then(()=>{
           this.openFile(fileName)
           
         })

       })
      console.log(codigo)
//      this.fileWrite(codigo, conteudo
    } else
      this.salvaArquivo(conteudo, codigo)
  }


  getMimeType(nomeArq: string) {
    const extensao = nomeArq.split('.')
    switch (extensao[1]) {
      case 'pdf': {
        return 'application/pdf'
      }
      case 'txt': {
        return 'text/plain'
      }
      case 'doc': {
        return 'application/msword'
      }
      case 'doc': {
        return 'application/msword'
      }
      case 'ppt': {
        return 'application/vnd.ms-powerpoint'
      }
      case 'rtf': {
        return 'application/rtf'
      }
      case 'xls': {
        return 'application/vnd.ms-excel'
      }
      case 'png': {
        return 'image/png'
      }
      case 'jpg': {
        return 'image/jpeg'
      }
      case 'jpeg': {
        return 'image/jpeg'
      }
      default: {
        return 'application/octet-stream';
      }
    }
  }

  salvaArquivo(conteudo: string, nomeArq: string) {
    var a: any
    //  var text = this.b64toBlob(conteudo)
    var data = conteudo;

    a = document.createElement('a')
    a.setAttribute('download', nomeArq)
    a.href = ""
    var url = data;
    a.href = url;

    console.log(a)
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  async fileWrite(nome, conteudo) {
    try {
      /*
            const result = await Filesystem.writeFile({
              path: nome,
              data: conteudo,
              directory: FilesystemDirectory.Documents,
            })*/

      /*
      await Filesystem.deleteFile({
        path: nome,
        directory: FilesystemDirectory.Documents
      });
      */

      const savedFile = await Filesystem.writeFile({
        path: nome,
        data: conteudo,
        directory: Directory.Data
      });
      const path = savedFile.uri;
      console.log(path)
      const mimeType = this.getMimeType(nome);

      
     /* this.file.open(path, mimeType)
        .then(() => console.log('file is opened'))
        .catch(error => console.log('error opening file', error));*/
    } catch (e) {
      console.log('erro: ' + e)
    }
  }

  async SelecionaProduto(referencia: number) {
    const modal = await this.mc.create({
      component: ProdutosPage,
      componentProps: { referencia: referencia },
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
}
