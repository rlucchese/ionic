import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { OrdemServicoService } from '../api/ordem-servico.service';
import { OrdemServico } from '../interfaces/ordem-servico';
import { DbService } from '../storage/db.service';
import { Documento } from '../interfaces/documento-cliente';
import { DocumentoclienteService } from '../api/documentocliente.service';

@Component({
  selector: 'app-info-baixas',
  templateUrl: './info-baixas.page.html',
  styleUrls: ['./info-baixas.page.scss'],
})
export class InfoBaixasPage implements OnInit {
  @Input() os: OrdemServico;
  @ViewChild("files") inputFile: ElementRef;
  public camposAuxiliares: any[] = [];

  constructor(public plt: Platform, public alertCtrl: AlertController,
    public db: DbService, public osSvc: OrdemServicoService, public mc: ModalController, private docSvc: DocumentoclienteService
  ) { }

  ngOnInit() {
    this.carregaCamposAuxiliares();
    this.carrega();
    this.carregaBaixas()
  }

  carregaCamposAuxiliares(forcaCarga: boolean = false) {
    //    if (true) //(!this.db.documentos || forcaCarga) {
    console.log(this.os.idServico);
    this.db.mostraProcessando();
    this.osSvc.Get({
      token: this.db.app.token,
      id: this.os.id //644089 
    }).subscribe(osRet => {
      this.osSvc
        .GetCamposAuxiliares({
          token: this.db.app.token,
          idServico: osRet.idServico,
          idOrdem: this.os.id
        })
        .subscribe(
          (ret) => {
            if (ret && ret.status) {
              this.camposAuxiliares = ret.camposAuxiliares;
            }
            this.db.escondeProcessando();
          },
          (err) => {
            this.db.escondeProcessando(err.error);
          }
        );
    },
      (err) => {
        this.db.escondeProcessando(err.error);
      })
    //    } else this.documentos = this.db.documentos;
  }
  carrega(forcaCarga: boolean = false) {
    //    if (true) //(!this.db.documentos || forcaCarga) {
    //      console.log("Carregando documentos");
    this.db.mostraProcessando();
    this.osSvc
      .GetDocumentos({
        token: this.db.app.token,
        idOrdem: this.os.id //644089 //

      })
      .subscribe(
        (ret) => {
          if (ret && ret.status) {
            console.log(ret);

            this.os.documentos = ret.documentos

          }
          this.db.escondeProcessando();
        },
        (err) => {
          this.db.escondeProcessando(err.error);
        }
      );
    //    } else this.documentos = this.db.documentos;
  }
  carregaBaixas(forcaCarga: boolean = false) {
    //    if (true) //(!this.db.documentos || forcaCarga) {
    //      console.log("Carregando documentos");
    this.db.mostraProcessando();
    this.osSvc
      .GetBaixas({
        token: this.db.app.token,
        idOrdem: this.os.id //644089 //

      })
      .subscribe(
        (ret) => {
          if (ret && ret.status) {
            console.log(ret);

            this.os.baixas = ret.baixas

          }
          this.db.escondeProcessando();
        },
        (err) => {
          this.db.escondeProcessando(err.error);
        }
      );
    //    } else this.documentos = this.db.documentos;
  }
  async mostraInfoBaixa(os: OrdemServico) {
    const modal = await this.mc.create({
      component: InfoBaixasPage,
      backdropDismiss: false,
      componentProps: {
        os: os,
      },
    });
    await modal.present();
    return await modal.onWillDismiss();
  }




  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  abreDocumento(documento: Documento,) {
    this.docSvc.abreDocumento(this.db.app.token, documento.id, () => {

    });
  }
  excluiAnexo(documento: Documento) {

    alert(documento.nomeArquivo)
    event.stopPropagation()
  }

  async buscarArquivos() {
    if (!this.plt.is("android")) {
      // this.fileInput.nativeElement.click();
      //      console.log("buscar");
      this.inputFile.nativeElement.click();
    } else {
      /// Carregar arquivo da galeria ou tirar foto
      //      console.log("3");
      //        const alert = this.alertCtrl.create({title: 'abc'});

      const alert = await this.alertCtrl.create({
        header: "O que deseja fazer ?",
        //        subHeader: "Tire uma foto ou escolha uma da galeria!",
        buttons: [
          {
            text: "Galeria",
            handler: () => {
              this.getGaleria();
            },
          },
          /*
                  {
                    text: "Câmera",
                    handler: () => {
                      this.getCamera();
                    },
                  },*/

        ],
      });

      await alert.present();
      await alert.onDidDismiss();
      //      console.log(2);

      //        .then((ret) => {
      //          ret.present();
      //        });
    }
  }

  getGaleria() {
    if (this.plt.is("capacitor")) {
      // this.fileInput.nativeElement.click();
      this.inputFile.nativeElement.click();
    } else {
      const options = {
        quality: 60,
        //          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        //          encodingType: this.camera.EncodingType.PNG,
        correctOrientation: true,
        maximumImagesCount: 1,
        outputType: 0,
      };

      //      console.log(options);

      /*
        this.imagePicker.getPictures(options).then((results) => {
          console.log(results[0]);
        }, (err) => {
          console.log("cancelar");
        });
  */
    }
  }
  onChangeInputFiles(event: Event) {
    let files: FileList = (<HTMLInputElement>event.target).files;
    let j = this.os.documentos.length;
    for (let i = 0; i < files.length; i++) {
      let inclui = true;
      for (let k = 0; k < this.os.documentos.length; k++) {
        console.log('k', k)
        console.log('anexos[k]', this.os.documentos[k])
        console.log('files[i]', files[i])
        if (this.os.documentos[k].nome == files[i].name) {
          inclui = false;
          break;
        }
      }
      if (inclui) this.os.documentos[j++] = { id: 2, nome: files[i].name };
    }
    console.log(this.os.documentos);
    //this.anexos.push(files);
  }
}