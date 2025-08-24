export const _VERSAO = "v 3.3.24";
export var _LOCAL = "web";

import { UsuarioService } from "./../api/usuario.service";
import {
  AlertController,
  LoadingController,
  NavController,
} from "@ionic/angular";
import { Router } from "@angular/router";
import { App } from "../../../../_componentes/interfaces/usuario";
import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { AppService } from "../api/app.service";


@Injectable({
  providedIn: "root",
})
export class DbService {
  public urlLogo: string;
  public usuario: string;
  public app: App;
  public isLoading: boolean = false;
  public logado: boolean = false;
  public token: string;
  public grapeDb: any
  public grid: boolean = true
  public tipo: number
  public objetoPersistido: any
//  public local: string = 'web'

  constructor(
    public toastController: ToastController,
    public alert: AlertController,
    private router: Router,
    public usuSvc: UsuarioService,
    public loadingController: LoadingController,
    public navCtr: NavController,
    public svcApp: AppService
  ) { }

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


  // Mover para funger
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

  // Mover para funger
  compara(arrCampos, strBusca) {
    if (strBusca.replace(/;+ /g, '') == '') return true
    let achou = false
    let strCampos = '';
    for (let i = 0; i < arrCampos.length; i++) {
      if (arrCampos[i]) {
        if(arrCampos[i])
        strCampos += arrCampos[i] + '\r';
      }
    }
    let arrBusca = strBusca.split(';')

    for (let j = 0; j < arrBusca.length; j++) {
      if (arrBusca[j].trim() !== '') {
        let arrAnd = this.removerAcentos(arrBusca[j]).toLowerCase().split('+')
        for (let k = 0; k < arrAnd.length; k++) {
          achou = this.removerAcentos(strCampos)
            .toLowerCase()
            .indexOf(arrAnd[k]) > -1
          if (!achou) break
        }
        if (achou) break
      }
    }
    return achou
  }

  limpaSessao() {
    this.setApp(null)
    this.logado = false
  }

  logout() {
    if (this.app) this.app.token = null;
    this.setApp(this.app);
    this.router.navigateByUrl("login", { replaceUrl: true });
  }

  autenticado(): boolean {
    this.token = this.getToken();
//    console.log('autenticado token', this.token)
    if (this.token == null) {
      this.logout();
    }
    return this.token !== null;
  }

  async setApp(app: App) {
    this.app = app;
    localStorage.setItem("app", JSON.stringify(app));
    this.logado = app !== null;
    console.log('logado===>', this.logado)
    if (app !== null) {
      localStorage.setItem("logo", app.logo);
      this.navCtr.navigateRoot("planta");
    }
  }
  getApp(): App {
    return JSON.parse(localStorage.getItem("app"));
  }

  async setToken(token: string) {
    this.token = token;
    localStorage.setItem("token", this.token);
    this.logado = token !== null;
    console.log('logado===>', this.logado)
    if (this.ehExpedicao()) {this.router.navigateByUrl('/expedicao');}
    else{
    this.navCtr.navigateRoot("vendas/orcamento");}

  }

  getToken(): string {
    //    console.log(localStorage.getItem("token"))
    return localStorage.getItem("token");
  }

  getLogo(): string {
    return localStorage.getItem("logo");
  }

  setUsuario(usuario: string) {
    localStorage.setItem("usuario", usuario);
  }
  getUsuario(): string {
    return localStorage.getItem("usuario");
  }

  async setMensagem(msg: string,duration: number = 2000,btnOk: boolean = false, posicao: string = 'bottom') {
    let params = {}
    if(btnOk) {
      params = {
        message: msg,
        duration: duration,
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            position: posicao
          }
        ],
      };
    } else {
      params = {
        message: msg,
        duration: duration,
        position: posicao
      };
    }
    const toast = await this.toastController.create(params);
    toast.present();
  }

  formataInteiro(vlr) {
    let result = "";
    let vlrStr = vlr.toString();
    //    console.log("length", vlrStr.length);
    for (let i = vlrStr.length - 1; i >= 0; i--) {
      if ((result.length + 1) % 4 == 0) {
        result = "." + result;
      }
      result = vlrStr[i] + result;
    }
    if (result == "") result = "0";
    return result;
  }
  strToFloat(vlrStr) {
    let result = "";
    for (let i = 0; i < vlrStr.length; i++) {
      if (i == 0 && vlrStr[i] == "-") {
        result = "-";
      } else if (vlrStr[i] >= "0" && vlrStr[i] <= "9") {
        result += vlrStr[i];
        //        console.log("result", result);
      } else if (vlrStr[i] == "," && result.indexOf(".") < 0) {
        result += ".";
      }
    }
    //    console.log(result);
    if (result == "") result = "0";
    return +result;
  }

  keyTyped(event) {
    //    console.log(event);
    const carDec = ",";
    const carMil = ".";

    let obj = event.srcElement;
    //    console.log(obj);

    let maskType = "integer"; //obj.getAttribute("maskType");
    let mask = obj.getAttribute("mask");
    let dec = 2; //+obj.getAttribute("decimals");
    let len = +obj.getAttribute("length");

    let e: KeyboardEvent = event;

//    let charCode = (event.which) ? event.which : event.keyCode;
//    console.log

//    console.log(event.type,event.wich,event.code,event.repeat,event.srcElement);
    if ((event.type == "keydown")) {
      if (maskType == "integer") {
        // Caracteres aceitos: // Prever tb Ctrl+C e Ctrl+V
        if (
          !(
            (
              (event.key >= "0" && event.key <= "9") ||
              event.keyCode == 8 || // Backspace
              event.keyCode == 9 || // Tab
              event.keyCode == 35 || // End
              event.keyCode == 36 || // Home
              event.keyCode == 37 || // ArrowLeft
              event.keyCode == 39 || // ArrowRight
              event.keyCode == 46    // Delete
            )
          )
        ) {
          event.preventDefault();
        }
      }
    }
    if (event.type == "keyup") {
      if (maskType == "integer" && dec > 0) {
        let conteudo = Math.trunc(this.strToFloat(obj.value));
        console.log('conteudo',conteudo);
        if (obj.value !== obj.getAttribute("oldValue")) {
//          this.strVlrLance = this.formataInteiro(conteudo) + ',00';
          obj.value = this.formataInteiro(conteudo) + ",00";
          obj.setAttribute("oldValue", obj.value);
        }
        if (obj.selectionEnd > obj.value.length - dec - 1)
          obj.selectionEnd = obj.value.length - dec - 1;
      }
    }
    //                if(event.type == 'keypress') {
    //                    console.log('keypress:',obj.value);
    //                }
  }

  setLocal(local: string) {
    local = local
    localStorage.setItem("local", local)
  }

  getLocal(): string {
    _LOCAL = localStorage.getItem("local")
    if(_LOCAL !== "web" && _LOCAL !== "local") _LOCAL = 'web';
    return _LOCAL
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
        token: this.getToken()

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

  persiste(action: string, key: string , scope?: string, id?: string, obj?: any,){
//this.mostraProcessando()

   return this.svcApp.Persiste({
      action: action,
      token: this.getToken(),
      key: key,
      id:id,
      object: JSON.stringify(obj),
      scope: scope

    })
  }
  ehExpedicao() {
    let usr = this.getUsuario();
    return usr && (usr.toUpperCase() == 'SERGIO' || usr.toUpperCase() == 'ALLAN');
    //return false
  }
}


