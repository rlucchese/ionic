import { CentroCusto, Equipamento, RegistraEventoRequest } from './../interface/reval';
import { Programacao, Planta } from 'src/app/interface/reval';
import { UsuarioService } from "./../api/usuario.service";
import {
  LoadingController,
  NavController,
} from "@ionic/angular";
import { Router } from "@angular/router";
import { App } from "../../../../_componentes/interfaces/usuario";
import { Injectable } from "@angular/core";
import { Storage } from "@capacitor/storage";
import { ToastController } from "@ionic/angular";
import { ProducaoService } from "../api/producao.service";
import { EventoProducao, RegistraEventoResponse } from "../interface/reval";
import { Observable } from "rxjs";


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
  public idEquipamento: string;
  public qtdMsgNaoLida: number
  //  public selecOper: number[] = []
  //  public eventosProducao: EventoProducao[]

  public filtroOrdem: string = '';
  public filtroPedido: string = '';
  public filtroPeca: string = '';
  public filtroAgrupamento: string = '';

  public plantas: Planta[]
  public planta: Planta
  public centrosCusto: CentroCusto[]
  public equipamento: Equipamento
  public idContato: string
  public contato: string
  public urlIni: string

public appPages: [{title: string, url: string, icon:string}] = [{title: '', url:'', icon:''}]
  constructor(
    public toastController: ToastController,
    private router: Router,
    public usuSvc: UsuarioService,
    public loadingController: LoadingController,
    public navCtr: NavController,
    public prdSvc: ProducaoService,
  ) { }

  async mostraProcessando(msg: string = "Carregando") {
    if (!this.isLoading) {
      this.isLoading = true;
      return await this.loadingController
        .create({
          message: msg,
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
  }

  async escondeProcessando(msg?: string) {
    if (this.isLoading) {
      this.isLoading = false;
      return await this.loadingController.dismiss().then(() => {
        if (msg) this.setMensagem(msg);
      });
    }
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
        if (arrCampos[i])
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
    //    this.navCtr.navigateRoot("/cotas");
    this.navCtr.navigateRoot(this.urlIni);

  }

  getToken(): string {
    //    console.log(localStorage.getItem("token"))
    return localStorage.getItem("token");
  }

  getTipoUsuario() {
/*
    {
      "iat": {
          "date": "2021-08-19 18:41:27.137240",
          "timezone_type": 3,
          "timezone": "America/Sao_Paulo"
      },
      "iss": "revalserras.com.br",
      "nbf": {
          "date": "2021-08-19 18:41:27.137240",
          "timezone_type": 3,
          "timezone": "America/Sao_Paulo"
      },
      "exp": 1629495687,
      "data": {
          "id": "170",
          "usuario": "HENRIQUE",
          "tipo": "2",
          "lang": "pt-br"
      }
  }
  */
   //console.log(this.getToken())
    if(this.getToken()) return this.parseJwt(this.getToken()).data.tipo
    else return -1;
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
  /*

  setEquipamento(equip: Equipamento) {
    this.equipamento = equip;
    localStorage.setItem("equipamento", equip.id.toString());
    localStorage.setItem("nomeEquipamento", equip.descricao);
  }

  getIdEquipamento() {
    return localStorage.getItem("equipamento");
  }
  getnomeEquipamento() {
    return localStorage.getItem("nomeEquipamento");
  }
  */

  setEquipamento(equip: Equipamento) {
    this.equipamento = equip
    localStorage.setItem("equipamento", JSON.stringify(equip))
  }

  setPlanta(planta: Planta) {
    this.planta = planta
    localStorage.setItem("planta", JSON.stringify(planta))
    //    localStorage.setItem("nomePlanta", planta.descricao)
  }

  carregaEquipamento(): Equipamento {
    this.equipamento = null

    let equipamento = JSON.parse(localStorage.getItem("equipamento"))
    console.log(equipamento)
    if (equipamento?.id > 0) this.equipamento = equipamento

    return this.equipamento
  }

  carregaPlanta(): Planta {
    this.planta = null

    let planta = JSON.parse(localStorage.getItem("planta"))
    console.log(planta)
    if (planta?.id > 0) this.planta = planta

    return this.planta
  }

  getIdPlanta(): number {
    return +localStorage.getItem("planta");
  }

  getNomePlanta() {
    return localStorage.getItem("nomePlanta");
  }

  async setMensagem(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  registraEvento(idRecurso: number, idEv: number, obs?: string, operacoes?: number[], idAgrupamento: number = 0, idNovoOperador: number = 0): Observable<RegistraEventoResponse> {

    this.mostraProcessando();
    let params: RegistraEventoRequest = {
      token: this.token,
      idRecurso: idRecurso,
      idEvento: idEv,
      idAgrupamento: idAgrupamento,
      idsProgramacao: operacoes,
      observacao: obs
    }
    if(idNovoOperador > 0) {
      params.idNovoOperador = idNovoOperador
    }

    console.log("#################################")
    console.log(params)
    return this.prdSvc
      .RegistraEvento(params)

      

    /*
          .subscribe(
            (ret) => {
    
              console.log('Ret', ret.id, ret.status)
              this.escondeProcessando();
              if (ret.status) {
                this.router.navigate(['apontamento'])   
                this.escondeProcessando();
    
                if(funCB) funCB();
    
              }
            },
            (err) =>
              this.escondeProcessando(err.error)
          );
    */
  }

  /* carregaEventoProducao(id: number) {
     if (this.autenticado()) {
       //      if (!this.db.clientes || forcaCarga) {
       this.mostraProcessando();
      
 
       this.prdSvc
         .GetEventosProducao({
           token: this.token,
           idRecurso: parseInt(this.idEquipamento),
           idAgrupador: id
         })
         .subscribe(
           (ret) => {
 
             console.log('Ret', ret.eventosProducao)
             this.escondeProcessando();
             if (ret) {
               this.eventosProducao = ret.eventosProducao
               // console.log(this.centros)
             }
           },
           (err) =>
             this.escondeProcessando(err.error)
         );
     }
   }*/


AbreMensagem(){

  this.router.navigateByUrl("mensagem", { replaceUrl: true });
}

Abre(pagina){
  this.router.navigateByUrl(pagina, { replaceUrl: true });
}


setContato(idContato: string, contato: string) {
  this.idContato = idContato
  this.contato = contato
  localStorage.setItem("idContato", idContato)
  localStorage.setItem("Contato", contato)

}
getContatoMsg() {
  //    console.log(localStorage.getItem("token"))
  this.idContato = localStorage.getItem("idContato");
  this.contato = localStorage.getItem("Contato");
}

parseJwt (token) {
  if(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
} else return -1
}

getMenu(token?){
  let ret = JSON.parse(localStorage.getItem("Menu"))


if (token){
  this.mostraProcessando();
    
  this.usuSvc
    .GetMenu({
      token: token,


    })
    .subscribe(
      (ret) => {
        this.escondeProcessando();
        if (ret.status) {
          console.log("ret", ret);
     this.appPages  = ret.menu
     this.urlIni = ret.urlInicial
       localStorage.setItem("Menu",  JSON.stringify(ret))
    


        }
      },
      (err) => this.escondeProcessando(err.error)
    );
  }
  else {
  if(ret){
    this.appPages  = ret.menu
    this.urlIni = ret.urlInicial
  } else {    this.navCtr.navigateRoot("login");
  }
  }
}

}
