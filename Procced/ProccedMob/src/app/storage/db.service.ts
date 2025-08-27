////npm i cordova-plugin-inappbrowser
////npm i @ionic-native/in-app-browser
///npm install cordova-plugin-app-version
//// npm install @ionic-native/app-version
///  npm install firebase @angular/fire --save

import { UsuarioService } from "./../api/usuario.service";
import {
  LoadingController,
  ModalController,
  NavController,
} from "@ionic/angular";
import { Router } from "@angular/router";
import { App, Colaborador } from "../../../../_componentes/interfaces/usuario";
import { Injectable } from "@angular/core";
import { Browser } from "@capacitor/browser";
import { ToastController } from "@ionic/angular";
import { Classificacao, Documento } from "../interfaces/documento-cliente";
import { Notificacoes } from "../interfaces/notificacoes";
import { OrdemServico } from "../interfaces/ordem-servico";
import { Cliente } from "../../../../_componentes/interfaces/usuario";
import { AlertController, Platform } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';



@Injectable({
  providedIn: "root",
})
export class DbService {


  public _URL_WHATSAPP = ""; //'https://api.whatsapp.com/send?phone=555430280778'
  public _URL_LOGO = ""; //'https://www.consultor.cnt.br/wp-content/uploads/2017/01/Logo.png'
  public _URL_GOOGLEPLAY = ""; //br.com.provver';
  public _URL_APPLESTORE = ""; //1561888609";
  public _COR_PRIMARIA = "";
  public _COR_SECUNDARIA = "";
  public _APP_MENU = [{
    title: '',
    url: '',
    icon: '',
  }]
  public _PAGINA_INI = ""
  

  public versao: string = "v 2.4.5";

  public intervalVar: any; 
  public logo: string;
  public usuario: string;
  public app: App;
  public cliente: Cliente;
  public clientes: Cliente[];
  public notificacao: Notificacoes;
  public notificacoes: Notificacoes[];
  public ordem: OrdemServico;
  public ordens: OrdemServico[];
  public classificacao: Classificacao;
  public classificacoes: Classificacao[];
  public classificacoesCliente: Classificacao[];
  public documentos: Documento[];
  public documentosNotificacao: Documento[];
  public solicitacoesNotificacao: OrdemServico[];
  public qtdNotificacoes: number = 0;
  public isLoading: boolean = false;
  public logado: boolean = false;
  public liberacaoColaborador: string
  public mostraMenu: boolean = false;
 public      tkn: String;
 public timer: number
 public minExpiraSessao: number = 5;  // 30;  // Este cara tem que ser o mesmo do WebService
 public minMostraTimer: number = 4;   // 5;
 public minPedeRenovacao: number = 3; // 1; 
public pushToken: string
public pushFilter: string
public pushPage: string
  public colaboradores: Colaborador[];
public EhAplicativo: boolean
public versaoApp: string
public versaoServer: string[]
public fbVersao!: firebase.database.Reference;
public param: string
public agendas: any

  constructor( 
    public toastController: ToastController,
    private router: Router,
    public usuSvc: UsuarioService,
    public alert: AlertController,
    public loadingController: LoadingController,
    public navCtr: NavController,
    public alertController: AlertController,
    public mc: ModalController,
    private fb: AngularFireDatabase,
    public svc: UsuarioService,
    public AppVersion: AppVersion,
    public plt: Platform,
    public iab: InAppBrowser
  ) {
  //  this.getLiberacaoColaborador();
    this.getExpiraToken()
    this.EhAplicativo = this.plt.is("capacitor");

  }

  usuarioInterno(): boolean {
    return this.app && this.app.tipoUsuario == 1;
  }

  registraAcessoDocumento(): boolean {
    return (
      this.app &&
      (!this.app.registraAcessoDocumento || this.app.registraAcessoDocumento)
    );
  }

  startaVersao() { 
     if (this.EhAplicativo) {
      let chave = 'versaoIOS'
console.log(chave)
      if(this.plt.is('android')) chave = 'versaoAndroid';

      this.fbVersao = this.fb.database.ref(chave);
console.log(this.fbVersao);

      this.fbVersao.on('value', (snapshot) => {
        console.log(snapshot.val().split('.'))
        this.versaoServer = snapshot.val().split('.')
        this.checkForUpdate();
      })
    
       
     
    console.log('chegou')
    }
  } 




  async mostraProcessando() {
    this.isLoading = true;
    return await this.loadingController
      .create({
        message: "Carregando",
        spinner: "crescent",
      })
      .then((ld) => {
        ld.present().then(() => {
          if (!this.isLoading) {
            ld.dismiss();
          }
        });
      });
  }

  async escondeProcessando(msg?: string) {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => {
      if (msg) this.setMensagem(msg);
    });
  }

  removerAcentos(newStringComAcento) {
    var string = newStringComAcento;
    var mapaAcentosHex = {
      a: /[\xE0-\xE6]/g,
      A: /[\xC0-\xC6]/g,
      e: /[\xE8-\xEB]/g,
      E: /[\xC8-\xCB]/g,
      i: /[\xEC-\xEF]/g,
      I: /[\xCC-\xCF]/g,
      o: /[\xF2-\xF6]/g,
      O: /[\xD2-\xD6]/g,
      u: /[\xF9-\xFC]/g,
      U: /[\xD9-\xDC]/g,
      c: /\xE7/g,
      C: /\xC7/g,
      n: /\xF1/g,
      N: /\xD1/g,
    };
    for (var letra in mapaAcentosHex) {
      var expressaoRegular = mapaAcentosHex[letra];
      string = string.replace(expressaoRegular, letra);
    }

    return string;
  }

  compara(arrCampos, strBusca) {
    if (strBusca.replace(/;+ /g, "") == "") return true;
    let achou = false;
    let strCampos = "";
    for (let i = 0; i < arrCampos.length; i++) {
      if (arrCampos[i]) {
        strCampos += arrCampos[i] + "\r";
      }
    }

    let arrBusca = strBusca.split(";");

    for (let j = 0; j < arrBusca.length; j++) {
      if (arrBusca[j].trim() !== "") {
        let arrAnd = this.removerAcentos(arrBusca[j]).toLowerCase().split("+");
        for (let k = 0; k < arrAnd.length; k++) {
          achou =
            this.removerAcentos(strCampos).toLowerCase().indexOf(arrAnd[k]) >
            -1;
          if (!achou) break;
        }
        if (achou) break;
      }
    }
    return achou;
  }

  limpaSessao() {
    this.setApp(null);
    //    if (this.app) this.app.token = null
    this.setClassificacoes(null);
    this.setClassificacoesCliente(null);
    //    this.classificacoes = null;
    //    this.classificacoesCliente = null;
    this.setCliente(null);
    this.clientes = null;
    this.documentos = null;
    this.documentosNotificacao = null;
    this.classificacao = null;
    this.logado = false;
    this.qtdNotificacoes = 0;
   // clearInterval(this.intervalVar)

  }

  logout() {
    if (this.app) {
      this.app.token = null;
      this.app.cpf = null;
      this.app.nome = null;
    }
    this.setApp(this.app);
   // clearInterval(this.intervalVar)

    //    this.router.navigateByUrl("login", { replaceUrl: true});
    this.router.navigateByUrl("home", { replaceUrl: true });
  }

  autenticado(executaLogout: boolean = true): boolean {
    this.app = this.getApp(); 
    

    //console.log('autenticado app',this.app)
    if (this.app == null || this.app.token == null) {
      if(executaLogout) this.logout()
    } else {
      this.getExpiraToken()
      if(this.timer <= 0) {
        this.logout()
        return false
      }
    }

    return this.app !== null && this.app.token !== null;
  }

  async setApp(app: App, deslocaParaDocumento: boolean = true) {
    this.app = app;
    localStorage.setItem("app", JSON.stringify(app));
    this.logado = app !== null;
    if (app !== null) {
      if (this.app.token != null)
      this.setExpiraToken(new Date(this.desmontaToken(this.app.token)).getTime())
      localStorage.setItem("logo", app.logo);
     if(deslocaParaDocumento)
         {    let achou = false
          this._APP_MENU.forEach(menu => {
            if (menu.url == this._PAGINA_INI) achou = true 
          });
          if (achou)
          this.navCtr.navigateRoot(this._PAGINA_INI);
        else 
        this.navCtr.navigateRoot('tabs/documentos');
        
        }
     this.getLiberacaoColaborador();
    }
  }

  async setAppColaborador(app: App) {
    this.app = app;
    this.setExpiraToken(new Date(this.desmontaToken(this.app.token)).getTime())
    localStorage.setItem("app", JSON.stringify(app));
  }

  getLiberacaoColaborador():string{
  //  console.log('app:'+ this.app?.token)
    if (!this.getApp()?.token) {this.liberacaoColaborador = this.getLiberacaoMenuColaborador()    
              return this.liberacaoColaborador}
    else {
      console.log("else")
      this.usuSvc
        .GetLiberacaoColaborador({
          token: this.getApp()?.token,
        }) 
        .subscribe(
          (ret) => {
            this.escondeProcessando(ret.error);
            console.log(ret);
            this.liberacaoColaborador = ret.liberacaoColaborador;
            this.setLiberacaoMenuColaborador(ret.liberacaoColaborador)
            console.log(this.liberacaoColaborador);
            return ret.liberacaoColaborador
          },
          (err) => {
            this.escondeProcessando(err.error);
            return "error"

          }
        );
    }
  }
  getApp(): App {
    return JSON.parse(localStorage.getItem("app"));
  }
  getLogo(): string {
    return localStorage.getItem("logo");
  }
  setLiberacaoMenuColaborador(liberacaoColaborador: string) {
    this.liberacaoColaborador  = liberacaoColaborador;
    localStorage.setItem("liberacaoColaborador", JSON.stringify(liberacaoColaborador));
  }
  getLiberacaoMenuColaborador(): string {
    return JSON.parse(localStorage.getItem("liberacaoColaborador"));
  }
  setClassificacoes(classificacoes: Classificacao[]) {
    this.classificacoes = classificacoes;
    localStorage.setItem("classificacoes", JSON.stringify(classificacoes));
  }
  getClassificacoes(): Classificacao[] {
    return JSON.parse(localStorage.getItem("classificacoes"));
  }

  setClassificacoesCliente(classificacoes: Classificacao[]) {
    this.classificacoesCliente = classificacoes;
    localStorage.setItem(
      "classificacoesCliente",
      JSON.stringify(classificacoes)
    );
  }
  getClassificacoesCliente(): Classificacao[] {
    return JSON.parse(localStorage.getItem("classificacoesCliente"));
  }

  setCliente(cliente: Cliente) {
    this.cliente = cliente;
    localStorage.setItem("cliente", JSON.stringify(cliente));
  }
  getCliente(): Cliente {
    this.cliente = JSON.parse(localStorage.getItem("cliente"));
    return this.cliente;
  }

  setUsuario(usuario: string) {
    localStorage.setItem("usuario", usuario);
  }
  getUsuario(): string {
    return localStorage.getItem("usuario");
  }

  setTipoLogin(tipo: string) {
    localStorage.setItem("tipoLogin", tipo);
  }
  getTipoLogin(): string {
    let ret = localStorage.getItem("tipoLogin");
    if (!ret || ret == "") ret = "usuario";
    return ret;
  }

 

  async setMensagem(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  formataCPF(cpf: string) {
    return (
      cpf.substr(0, 3) +
      "." +
      cpf.substr(3, 3) +
      "." +
      cpf.substr(6, 3) +
      "-" +
      cpf.substr(9, 2)
    );
  }
  desmontaToken(token: String){

    let iVar: number;
    let sDta,sCod,sVar: string;
    let  dta: Date;
    let  dv1,dv2: string;
    let  dv1Val,dv2Val: string;

    dv2Val = 'a';
    dv2 = 'b';
    if (token.length == 30)  {
    
      dv2 = token[3];
      dv1 = token[17];
      this.tkn = this.removeDV(token[0],dv2) +
             this.removeDV(token[1],dv1) +
             this.removeDV(token[2],dv2) +
             this.removeDV(token[4],dv1) +
             this.removeDV(token[5],dv2) +
             this.removeDV(token[6],dv2) +
             this.removeDV(token[7],dv1) +
             this.removeDV(token[8],dv2) +
             this.removeDV(token[9],dv1) +
             this.removeDV(token[10],dv1) +
             this.removeDV(token[11],dv2) +
             this.removeDV(token[12],dv2) +
             this.removeDV(token[13],dv1) +
             this.removeDV(token[14],dv1) +
             this.removeDV(token[15],dv1) +
             this.removeDV(token[16],dv2) +
             this.removeDV(token[18],dv1) +
             this.removeDV(token[19],dv2) +
             this.removeDV(token[20],dv1) +
             this.removeDV(token[21],dv2) +
             this.removeDV(token[22],dv2) +
             this.removeDV(token[23],dv1) +
             this.removeDV(token[24],dv2) +
             this.removeDV(token[25],dv1) +
             this.removeDV(token[26],dv2) +
             this.removeDV(token[27],dv1) +
             this.removeDV(token[28],dv1) +
             this.removeDV(token[29],dv2);
    }
      if (this.tkn.length == 28) {
      
        let datahora = '20' + this.tkn[17].toString() + // 1   ->   18
               this.tkn[3] + '-' +// 2   ->   04
               this.tkn[15] + // 3   ->   16
               this.tkn[26] + '-' + // 4   ->   27
               this.tkn[11] +
               this.tkn[6] + 'T' +
               this.tkn[24] +
               this.tkn[8] + ':' +
               this.tkn[13] +
               this.tkn[4]   
                // 5   ->   12
               return datahora
      }

  
    
    // token:
    //   0000000001111111111222222222
    //   1234567890123456789012345678
    //   yymmddhhnn
    
    
      
  
}

mod10(iNumSemDV: string):string {
  let iTam: number;
  let iSomaDV: number;
  let iMult: number;
  let iIndice: number;
  let iValorAux: number;
  let iDV: number;
  let iPos: number;

  iTam = iNumSemDV.length;
  iSomaDV = 0;
  iMult = 2;
  iIndice = iTam-1;
  while(iIndice >= 0) {
    iValorAux = +iNumSemDV.substr(iIndice,1) * iMult;
    if(iMult == 2) iMult = 1
    else iMult = 2;
    if (iValorAux > 9) iValorAux = iValorAux - 9;

    iSomaDV = iSomaDV + iValorAux;
    iIndice--
  } 
 
  if(iSomaDV > 0) {
    iDV = 10 - (iSomaDV % 10);
    if(iDV == 10) iDV = 0;
  } 
  else iDV = 0;

  return iDV.toString();
}

  
removeDV(Car,Dv: string) {
  let  iCar,iDv: number;
 
   
//    iCar := StrToInt(Car);
//    iDv := StrToInt(Dv);
     iCar = parseInt(Car) + parseInt(Dv);
     if (iCar >= 10) 
       iCar = iCar - 10;

     return iCar.toString() 
   
}

revalidaToken(token: string){
  this.usuSvc.GetToken({
    token:  token
  }).subscribe(ret => {
    this.escondeProcessando(ret.error)

    if (ret.status == 'true') {
      
        this.app.token = ret.token
        this.setApp(this.app)
        this.setExpiraToken(new Date(this.desmontaToken(this.app.token)).getTime() )

    }
    else {
        this.logout()
    }
  });
  

  

}
setExpiraToken(expiraToken:number){
  localStorage.setItem("expiracaoToken",expiraToken.toString())
  this.timer = Math.floor(( (expiraToken) - Date.now()) / 60000) + 1

}

getExpiraToken(regeraTimer: boolean = false): number {
  //    console.log(localStorage.getItem("token"))
    let expiraToken = parseInt(localStorage.getItem("expiracaoToken"));
//    console.log(expiraToken)
//    console.log(Date.now())
    this.timer = Math.floor(( (expiraToken) - Date.now()) / 60000) + 1
//    console.log(Math.floor((  (expiraToken) - Date.now() ) / 60000) + 1)
//    console.log(expiraToken,this.timerSessao)
    return expiraToken;
  }


  async presentAlertToken() {
    const alert = await this.alertController.create({
      header: 'Token Expirando',
      message: 'Renovar seu Token.',
      backdropDismiss:false,
      buttons: [

         {
          text: 'Sim',
          role: 'Ok',
          handler: () => {
        this.revalidaToken(this.app.token)   
            clearTimeout(timeout)
        alert.dismiss()  
     }
        }
      ]
    });
    var timeout = setTimeout(()=>{
      this.logout();
      alert.dismiss();
  }, 30000);

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  revalidaTokenColaborador(token: string){
    this.usuSvc.GetTokenColaborador({
      token:  token
      
    }).subscribe(ret => {
      this.escondeProcessando(ret.error)
  
      if (ret.status == 'true') {
        console.log(ret)
          this.app.token = ret.token
          this.setAppColaborador(this.app)

          this.setExpiraToken(new Date(this.desmontaToken(this.app.token)).getTime() )
  
      }
      else {
          this.logout()
      }
    });
  }

  renovaToken(novoToken: string){

    this.app.token = novoToken
    localStorage.setItem("app", JSON.stringify(this.app));
    this.setExpiraToken(new Date(this.desmontaToken(this.app.token)).getTime() )


  }
  async sendWhats() {
    // revisar procced
    Browser.open({
      url: this._URL_WHATSAPP
    }); 
  }
  async checkForUpdate() {
    if (this.EhAplicativo) {
      /*      this.svc
              .GetVersao()
              .subscribe(async (ret) => {
                if (ret.status) {
                  this.info = ret;
                  console.log(this.info)
                  */
      this.versaoApp = await this.AppVersion.getVersionNumber()
      //            this.versaoServer = ret.current.split('.')
      let verApp = this.versaoApp.split('.')
      console.log(this.versaoApp, this.versaoServer)
      if (this.versaoServer[0] > verApp[0])
        this.presentAlert("Atualização importante!", "Por favor, atualize o seu aplicativo para a última versão para continuar", "Atualizar")
      else if (this.versaoServer[0] == verApp[0] && this.versaoServer[1] > verApp[1])
        this.presentAlert("Atualização disponível!", "Há uma atualização disponível, gostaria de atualizar agora?", "Sim", true)

      /*          }
              },
                (err) =>
                  this.escondeProcessando(err.error)
              );*/
    }

  }
  openAppStore() {

    console.log('AbrirLoja')
    if (this.plt.is('android') && this.plt.is('capacitor')) {
      window.location.assign(this._URL_GOOGLEPLAY)

    }
    else {
      this.iab.create(this._URL_APPLESTORE, "_blank")

    }
  }
  async presentAlert(header, message, buttonText = '', allowClose = false) {
    const buttons: any = []

    if (buttonText != '')
      buttons.push({
        text: buttonText,
        handler: () => {
          this.openAppStore();
          if (!allowClose) navigator['app'].exitApp();
        }

      })

    if (allowClose) {
      buttons.push({
        text: "Fechar",
        role: 'cancel'
      })
    }
    const alert = await this.alertController.create({
      header,
      message,
      buttons,
      backdropDismiss: allowClose
    });

    await alert.present();
  }
  async presentAlertConfirm(header: string, msg: string,) {
    return await this.alert.create({
      header: header,
      message: msg,
      buttons: [
        {
          text: 'Nao',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('false');

            return false;
            
          }
        }, {
          text: 'sim',
          role: 'confirm',
          handler: () => {
            console.log('true');

            return true;
          }
        }
      ]
    }).then((alertEl) => {
      alertEl.present();
      return alertEl.onDidDismiss();
    });;
 
    
  }

  async excluiUsuario(){
    let result = false
    let confirm = await this.presentAlertConfirm('Atenção!! ', 'Tem certeza que deseja excluir o seu Usuário')
    if (confirm.role === 'confirm') { result = true }
    else { result = false 
       this.navCtr.back() }

    if(result)
    {
      this.usuSvc.ExcluiUsuario({
        token: this.app.token
        
      }).subscribe(ret=>{
        this.escondeProcessando(ret.error)
        if(ret.status) {
          this.setMensagem('Usuário Excluído com Sucesso')
          this.logout()
        }
      },
      err=>{
        console.log(err.error)
        this.escondeProcessando(err.error)
      })

    }

  }
  Abre(pagina){
    this.router.navigateByUrl(pagina, { replaceUrl: true });
  }
  

}

