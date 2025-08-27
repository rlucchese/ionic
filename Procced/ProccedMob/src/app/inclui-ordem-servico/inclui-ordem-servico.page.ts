import { WsProccedService } from "./../api/ws-procced.service";
import { OrdemServicoService } from "./../api/ordem-servico.service";
import {
  CampoAuxiliar,
  GetCamposAuxiliaresResponse,
  IncluiResponse,
  IncluiRequest,
} from "./../interfaces/ordem-servico";
import { SelecaoServicoPage } from "./../selecao-servico/selecao-servico.page";
import { ActionSheetController, AlertController, ModalController, Platform } from "@ionic/angular";
import { DbService } from "./../storage/db.service";
import { Component, Directive, ElementRef, OnInit, ViewChild } from "@angular/core";
//import { CameraOptions } from "@capacitor/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { IonicSelectableComponent } from "ionic-selectable";
import { Servico } from "../../../../_componentes/interfaces/usuario";
import { Camera, CameraSource, CameraResultType } from "@capacitor/camera";



@Component({
  selector: "app-inclui-ordem-servico",
  templateUrl: "./inclui-ordem-servico.page.html",
  styleUrls: ["./inclui-ordem-servico.page.scss"],
})

export class IncluiOrdemServicoPage implements OnInit {
  @ViewChild("files") inputFile: ElementRef;
  public anexos: any = [];
  private file: File
  public strTipo: string = "Ordem de Serviço";
  public tipoMob: number = 0;
  public servico: Servico;
  public camposAuxiliares: CampoAuxiliar[];
  public Form = {
    campos_aux: {},
  };
  public observacao: string = "";
  //	public myForm: FormGroup;

  constructor(
    public db: DbService,
    public mc: ModalController,
    public selSvc: SelecaoServicoPage,
    private os: OrdemServicoService,
    public plt: Platform,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    private actionSheetCtrl: ActionSheetController,
    public webSvc: WsProccedService //public imagePicker: ImagePicker,
  ) //public camera: Camera,
  { }


  onSubmit() {
    //        this.submitted = true;

    /*
          if (!this.myForm.valid) {
              console.log('All fields are required.')
              return false;
            } else {
              console.log(this.myForm.value)
            }
    */
  }




  ngOnInit() {

    /*
        this.myForm = this.formBuilder.group({
          obs: ['', [Validators.required,Validators.maxLength(5),Validators.pattern('[0-9]*')]],
        });
        console.log(this.myForm)
    */

    if (this.tipoMob == 4) this.strTipo = "Solicitação";
    else if (this.tipoMob == 3) this.strTipo = "Protocolo";

    this.selecionaServico()
  }

  validaCNPJ(str: string): boolean {
    return false
  }

  validaCPF(str: string): boolean {
    return false
  }

  getMask(str) {
    return str.replace(/9/gi, "*")
  }

  async incluiOrdemServico(tipoMob: number) {
    const modal = await this.mc.create({
      component: IncluiOrdemServicoPage,
      componentProps: { tipoMob: tipoMob },
      cssClass: 'modal-css'
    });
    //    console.log("comp:", modal.component.toString);
    await modal.present();
    //    this.db.setClassificacoes(null);
    //    this.db.setClassificacoesCliente(null);
    //    this.db.documentos = null;
    return await modal.onWillDismiss();
  }

  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  async browserFiles(files: FileList, idOrdem: number) {
    //		console.log(files);
    //		const loading = this.loadingCtrl.create({ content: 'Enviando...' });
    //		loading.present();
    let urlUpload = this.db.app.urlUpload;
    // urlUpload = "http://localhost:17891";

    this.webSvc
      .postAsFormData(this.db.app.token, urlUpload, { id: idOrdem }, [
        { name: "uploadGDE", fileList: files, multiple: false },
      ])
      .subscribe(
        (r: any) => {
          console.log("ret", r);
          if (r.status == "true") {
            let data: any = {};

            data.token = this.db.app.token;
            data.idOrdem = idOrdem;
            let arrArq: any = [];
            for (let j = 0; j < r.tokenArquivo.length; j++) {
              let arq = {
                nome: files[j].name,
                token: r.tokenArquivo[j],
              };
              arrArq.push(arq);
            }
            data.arquivos = arrArq;

            JSON.stringify(data);

            //            console.log("data", data);

            this.os.PublicaDocumento(data).subscribe(
              (data: any) => {
                this.inputFile.nativeElement.value = "";
                this.FechaModal(true);
              },
              (error) => {
                console.error(error);
                this.db.setMensagem('Erro ao enviar arquivo: 1 - ' + error);
                //  loading.dismiss()
              }
            );
          } else {
            this.db.setMensagem('Erro ao enviar arquivo: 2');
            //            console.log("erro");
            //          loading.dismiss();
          }
        }
        //			err => loading.dismiss()
      );
  }

  FechaModal(st) {
    this.db.escondeProcessando();
    this.mc.dismiss({
      status: st
    });
  }

  async inclui(form) {

    let formValido = true;
    if (this.Form.campos_aux) {
      console.log(1)
      let cmpsErro = ""
      this.camposAuxiliares.forEach(cmp => {
        console.log(cmp.rotulo,this.Form.campos_aux[cmp.id])
        if (cmp.obrigatorio && (!this.Form.campos_aux[cmp.id] || this.Form.campos_aux[cmp.id] === "")) {
          formValido = false;
          cmpsErro += cmp.rotulo + ", "
        }
      })
      if (!formValido) {
        this.db.setMensagem('Campos obrigatórios: ' + cmpsErro.substring(0, cmpsErro.length - 2))
        return false;
      }
    }

    if (formValido) {
      let anexando = false;
      if (this.anexos.length <= 0) {
        const msgAnexos = await this.alertCtrl.create({
          subHeader: "Deseja anexar arquivos?",
          buttons: [
            {
              role: "cancel",
              text: "Não",
            },
            {
              text: "Sim",
              role: "anexar",
              handler: async () => {
                await this.buscarArquivos();
              },
            },
          ],
        });
        await msgAnexos.present();
        let ret = await msgAnexos.onDidDismiss();

        if (ret.role == "anexar") {
          anexando = true;
        }
      }

      if (!anexando) {
        //      this.browserFiles(this.anexos, 1);

        let jaCampos = [];
        if (this.Form.campos_aux) {
          for (var i in this.Form.campos_aux)
            jaCampos.push({ id: i, conteudo: this.Form.campos_aux[i] });
          //      console.log(jaCampos)
        }

        let param = {
          token: this.db.app.token,
          descricao: "",
          idTipoMob: this.tipoMob,
          idCliente: this.db.cliente.id,
          idServico: this.servico.id,
          camposAuxiliares: jaCampos,
          observacao: this.observacao,
        };

        this.db.mostraProcessando();

        //    console.log('param',param)
        this.os.Inclui(param).subscribe(
          (ret: IncluiResponse) => {
            if (ret.status) {
              if (this.anexos.length > 0) {
                this.browserFiles(this.anexos, ret.id);
              } else
                this.FechaModal(ret.status)
            } else this.db.escondeProcessando(ret.error);
          },
          (err) => {
            this.db.escondeProcessando(err.error);
          }
        );
      }
    }
  }

  ValidaDependencia(IndiceCampo, Teste, Conteudo) {
    if (!this.Form || !this.Form.campos_aux || this.Form.campos_aux) return true
    else {
      //      console.log('form.cmpaux',this.Form.campos_aux)
      let cmp = this.Form.campos_aux[IndiceCampo]
      //      console.log(this.camposAuxiliares[IndiceCampo].conteudo)
      if (Teste == '=') return cmp.conteudo == Conteudo
      else if (Teste == '<>') return cmp.conteudo !== Conteudo
      else if (Teste == '>') return cmp.conteudo > Conteudo
      else if (Teste == '<') return cmp.conteudo < Conteudo
    }
  }

  async selecionaServico() {
    const ret = await this.selSvc.selecionaServico(this.tipoMob);
    if (ret && ret.data && ret.data.servico) {
      this.servico = ret.data.servico;
      this.os
        .GetCamposAuxiliares({
          token: this.db.app.token,
          idServico: this.servico.id,
          idCliente: this.db.getCliente().id,
        })
        .subscribe((ret: GetCamposAuxiliaresResponse) => {
          this.db.renovaToken(ret.novoToken)
          this.camposAuxiliares = ret.camposAuxiliares;
          //          console.log('cmpAux',this.camposAuxiliares)

        });
    }
  }

  getCamera() {
    /*      const options: CameraOptions = {
        quality: 80,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
      }
*/
    /*      this.camera.getPicture(options).then((imageData) => {
        console.log(imageData);
        let imagem = '';
        if (this.plt.is('ios')) {
          imagem = imageData.replace(/^file:\/\//, '');
        } else {
          imagem = imageData;
        }
  
        console.log(imagem);

        //      this.uploadImagem(imagem);
  
        //this.uploadImagem(imagem);
  
        // this.mostra_imagens_na_tela();
  
      }, (err) => {
        // Handle error
      });
*/
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

  excluiAnexo(anexo) {
    let arqs = this.anexos;
    this.anexos = [];
    let j = 0;
    //    console.log(arqs.length);
    //    console.log(this.anexos.length);
    for (let i = 0; i < arqs.length; i++) {
      //      console.log(anexo.name);
      //      console.log(arqs[i].name);
      if (arqs[i].name !== anexo.name) this.anexos[j++] = arqs[i];
    }
  }

  onChangeInputFiles(event: Event) {
    let files: FileList = (<HTMLInputElement>event.target).files;
    let j = this.anexos.length;
    for (let i = 0; i < files.length; i++) {
      let inclui = true;
      for (let k = 0; k < this.anexos.length; k++) {
        console.log('k', k)
        console.log('anexos[k]', this.anexos[k])
        console.log('files[i]', files[i])
        if (this.anexos[k].name == files[i].name) {
          inclui = false;
          break;
        }
      }
      if (inclui) this.anexos[j++] = files[i];
    }
    console.log(this.anexos);
    //this.anexos.push(files);
  }
  selChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    //    console.log('sel:', event.value);
  }

  buscaItem(event: {
    component: IonicSelectableComponent,
    text: string
  }, itens) {
    //    console.log(event.text,itens)
    event.component.items = itens.filter((it) => {
      return this.db.compara([it], event.text);
    });
  }

  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
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


  convertBase64ToFile(imageBase64: string, fileName: string, format: string): File {
    const arr = imageBase64.split(',');
    //const mime = arr[0].match(/:(.*?);/)[1];
    console.log( imageBase64)
    const bstr = atob(imageBase64);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
  
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
  
    return new File([u8arr], fileName, { type: format });
  }
  

  async addImage() {

    /*
             this.camera.getPicture(options).then((imageData) => {
            console.log(imageData);
            let imagem = '';
            if (this.plt.is('ios')) {
              imagem = imageData.replace(/^file:\/\//, '');
            } else {
              imagem = imageData;
            }
      
    
    
    */

   

    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    }).then(
      (imgData) => {
        console.log(imgData)
        console.log(this.anexos)
        let nomeArq = 'Anexo.' + imgData.format
        console.log(nomeArq)
        console.log(this.inputFile)

        let file: File;
      
       
       
        file = this.convertBase64ToFile(imgData.base64String, `Foto${this.anexos.length+1}.jpg`, imgData.format);
        this.anexos.push(file)






        //        let dados = this.b64toBlob(imgData.base64String)

        //        console.log(imgData.base64String)


        //        console.log('imgData: ',imgData)
        //      let nomeArq = 'Anexo.' + imgData.format;
        //      console.log('nomearq',nomeArq)
        //      console.log(imgData);
        /*      this.webSvc.salvaArquivo(nomeArq,imgData.base64String).then(
                (ret)=>{
        //          const path = savedFile.uri;
        //          return path;
                  console.log('ret====',ret)
        //          this.anexos.push(ret.uri);
                });*/
      });

    /*
        const blobData = this.b64toBlob(
          image.base64String,
          `image/${image.format}`
        );
        const imageName = 'Give me a name';
    
        this.anexos.push()
        this.uploadImage(blobData, imageName, image.format).subscribe(
          (newImage: ApiImage) => {
            this.images.push(newImage);
          }
        );*/
  }

  /*
    async buscarArquivos() {
      const buttons = [
  /*      {
          text: 'Tire uma foto',
          icon: 'camera',
          handler: () => {
            this.addImage(CameraSource.Camera);
          },
        },
        {
          text: 'Selecione da galeria',
          icon: 'image',
          handler: () => {
            this.addImage(CameraSource.Photos);
          },
        },*/
  /*    ];
  
      // Only allow file selection inside a browser
      // if (!this.plt.is('hybrid')) {
        buttons.push({
          text: 'Selecione um arquivo',
          icon: 'attach',
          handler: () => {
            this.inputFile.nativeElement.click();
          },
        });
      // }
  
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Anexe um arquivo',
        buttons,
      });
      await actionSheet.present();
    }
  */



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
          
                    {
                      text: "Câmera",
                      handler: () => {
                        this.addImage();
                      },
                    },

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


  limpaTexto(id) {
    if (this.Form.campos_aux[id])
      this.Form.campos_aux[id] = this.Form.campos_aux[id].trim()
  }

}
