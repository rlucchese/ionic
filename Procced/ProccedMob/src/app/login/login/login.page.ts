import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DbService } from './../../storage/db.service';
import { UsuarioService } from './../../api/usuario.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IonInput, IonRouterOutlet, MenuController, Platform } from '@ionic/angular';
import {  PluginListenerHandle,  } from '@capacitor/core';
import { DocumentoclienteService } from './../../api/documentocliente.service';
import { SelecaoNotificacaoComponent } from './../../selecao-notificacao/selecao-notificacao.component';
import { WsProccedService } from '../../api/ws-procced.service';
interface ICallback {
  ()
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  @ViewChild("emailInput") emailInput: IonInput;

  public logo: string;
  public email: string;
  public resetSenha: boolean;
  public backButtonListenerHandle: PluginListenerHandle
  public tipoLogin: string = 'usuario'
  public solNascimento: boolean = false
  public solNovaSenha: boolean = false
  public menuCtrl: MenuController
  public data: string = null
  public param: string;
  public solicitaLogin: string

  constructor(private svc: UsuarioService,
    public db: DbService,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private router: Router,
    public plt: Platform,
    public route: ActivatedRoute,
    public docSvc: DocumentoclienteService,
    public selNot: SelecaoNotificacaoComponent,
    private wsSvc: WsProccedService,


  ) {

  }

  noticias() {
    this.router.navigateByUrl("home", { replaceUrl: true });
  }

  ngOnInit() {

    if (this.db.app) console.log(this.db.app.logo)
    this.tipoLogin = this.db.getTipoLogin()

  }
  /*
    ionViewDidEnter() {
  
      this.route.params.subscribe( parametros => {
        this.param = parametros['param']
        if(this.param ) {
  
          let cod = this.getCodigoSemDV(this.param)
          if(cod > 0) {
            this.db.app = this.db.getApp()
            if (this.db.app.token) {
              this.db.getExpiraToken()
            if(this.db.timer > 0) 
              this.docSvc.abreDocumento(this.db.app.token, +cod, () => {});
              this.db.setApp(this.db.app);
          }
        }
        } else {
          this.db.limpaSessao()
          this.logo = this.db.getLogo()
          this.email = this.db.getUsuario()    
        } 
         console.log(this.param)
  
      })
  
    }
  */


  ionViewDidEnter() {

    this.route.params.subscribe(parametros => {
      console.log('entrou')
      //      console.log(this.db.autenticado())
      if(parametros['param']) {
        this.param = parametros['param']
      }
      else this.param = this.db.param

      if (this.param && this.param !== "") {
        let params = this.param.split('|')
        if (params[2] != undefined){
          this.svc.SolicitaLogin({
            usuario: params[1],
            idDocumento: params[0],
            chave: params[2]
          })
            .subscribe((ret) => {
          if (ret.solicitaLogin =="false"){
      
            if (params[0].substr(0, 3) == "COM"){
                    let cod = this.getCodigoSemDV(params[0].substr(4))
              this.docSvc.abreDocumento('sl|'+params[1]+'|'+params[2], "COM_" + cod, () => { })

            }else{
              let cod = this.getCodigoSemDV(params[0])
            this.docSvc.abreDocumento('sl|'+params[1]+'|'+params[2],  cod, () => { })
            }
          }else{
            this.processaLogin(this.param)
          }
        })
    /*     let cod = this.getCodigoSemDV(this.param)
        if(cod > 0) {
          this.db.app = this.db.getApp()
          if (this.db.app.token) {
            this.db.getExpiraToken()
            if(this.db.timer > 0)
               this.docSvc.abreDocumento(this.db.app.token, +cod, () => {});
          } 
        }
      */ 
     
     } else {  this.processaLogin(this.param)}
     } else {
        this.db.limpaSessao()
        this.logo = this.db.getLogo()
        this.email = this.db.getUsuario()
      }
      console.log(this.param)
    })

  }

  ionViewDidLeave() {
    if (this.backButtonListenerHandle) {
      this.backButtonListenerHandle.remove()
      this.backButtonListenerHandle = null
    }
  }

  retornaApenasDigitos(str: string) {
    let result: string = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= '0' && str[i] <= '9') {
        result += str[i];
      }
    }

    return result;
  }

  getCodigoSemDV(codigo: any): number {
    let cod = codigo.toString();
    let dv1Param = cod.substr(-1, 1);
    let dv2Param = cod.substr(0, 1);
    cod = cod.substr(1, cod.length - 2);
    let dv1Calc = this.db.mod10(cod);
    let dv2Calc = this.db.mod10(cod + dv1Calc);

    if (dv1Calc !== dv1Param || dv2Calc !== dv2Param) {
      this.db.setMensagem("Token inválido")
      return -1
    } else
      return +cod;
  }



  login(form) {

    this.db.setTipoLogin(this.tipoLogin)

    let cpf = this.retornaApenasDigitos(form.value.email.trim())
    if (cpf == '' || cpf.length != 11) {
      //    if (this.tipoLogin == 'usuario'){
      this.db.mostraProcessando();
      this.svc.GetToken({
        usuario: form.value.email,
        senha: form.value.password,
        platform: this.plt.is("desktop") ? 1 : 2,
        player_id: this.db.pushToken
      }).subscribe(ret => {
        this.db.escondeProcessando(ret.error)

        if (ret.status == 'true') {
          if (this.db.getUsuario() !== form.value.email) this.db.limpaSessao()
          this.db.setUsuario(form.value.email)
          if (this.db.pushPage) {
            this.selNot.selecionaNotificacao()
          }
          if (this.param) {

            console.log('this.param: ' + this.param)
            this.db.setApp(ret.tokenApps[0], false);

            this.processaLogin(this.param) 
        /*     let cod = this.getCodigoSemDV(this.param)
            if (cod > 0) this.docSvc.abreDocumento(ret.tokenApps[0].token, +cod, () => { });
         */  } else {
            this.db.setApp(ret.tokenApps[0]);
            this.db.mostraMenu = true;
          }

        }
      },
        err => {
          this.db.escondeProcessando(err.error)
        })

    } else {
      form.value.email = cpf
      if (this.solNascimento == true) {
        this.data = this.retornaApenasDigitos(form.value.nascimento.trim())
        console.log(this.data)
        this.data = this.data.substr(4, 4) + "-" + this.data.substr(2, 2) + "-" + this.data.substr(0, 2)
      }

      console.log(form.value.nascimento)
      console.log(form.value.novaSenha)
      this.db.mostraProcessando();
      this.svc.GetTokenColaborador({
        cpf: form.value.email,
        senha: form.value.password,
        nascimento: this.solNascimento ? this.data : null,
        novaSenha: form.value.novaSenha,
        platform: this.plt.is("desktop") ? 1 : 2,
        player_id: this.db.pushToken


      }).subscribe(ret => {
        if (ret.status == 'true') {
          this.db.escondeProcessando()

          if (this.param) {
            console.log('this.param: ' + this.param)
            this.db.setUsuario(form.value.email)
            this.db.setAppColaborador(ret.tokenApps[0])
            this.processaLogin(this.param)
          }
          {
            if (this.db.getUsuario() !== form.value.email) this.db.limpaSessao()
            this.db.setUsuario(form.value.email)
            this.db.setAppColaborador(ret.tokenApps[0])
            this.router.navigate(['documentos-colaborador']);
            if (this.db.pushPage) {
              this.selNot.selecionaNotificacao()
            }
          }
        } else if (ret.status == 'false') {
          if (ret.errorId == -4002) {
            this.solNascimento = true
            this.db.escondeProcessando('Informe sua data de nascimento');
          } else if (ret.errorId == -4003) {
            this.solNovaSenha = true
            this.db.escondeProcessando('Defina uma senha');
          } else
            this.db.escondeProcessando(ret.error)
        }
      },
        err => {
          this.db.escondeProcessando(err.error)
        })


    }
  }
  processaLogin(param) {
    if (param){
      this.db.param = ""
    let params = param.split('|')
    console.log(params)
    this.db.setApp(this.db.getApp())     
    console.log(this.db.getUsuario())
    if (this.db.app && this.db.app.token && params[1] == this.db.getUsuario().toUpperCase()) {
      if (params[0].substr(0, 3) == "COM") {
        let cod = this.getCodigoSemDV(params[0].substr(4))
        console.log(params)
        this.db.app = this.db.getApp()
        if (this.db.app && this.db.app.token) {
          this.db.getExpiraToken()
          if (this.db.timer > 0)
          {//alert('arquivo'+ "COM_" + cod);
          
            this.docSvc.abreDocumento(this.db.app.token, "COM_" + cod, () => { })
            this.router.navigate(['tabs/documentos']);

          };
        }
      }
      else if (params[0].substr(0, 3) == "COL") {
        let cod = params[0].substr(4)
        console.log(cod)
        console.log(params)
        this.db.app = this.db.getApp()
        if (this.db.app && this.db.app.token) {
          this.db.getExpiraToken()
          if (this.db.timer > 0)
            this.abreDocumentoColaborador(this.db.app.token, cod, () => { },false);
            this.router.navigate(['documentos-colaborador']);

        }
      }
      else {
        let cod = this.getCodigoSemDV(params[0])
        console.log(params)
        this.db.app = this.db.getApp()
        if (this.db.app.token) {
          this.db.getExpiraToken()
          if (this.db.timer > 0)
            this.docSvc.abreDocumento(this.db.app.token, +cod, () => { });
            this.router.navigate(['tabs/documentos']);

        }
      }
    }
    else {
     // this.db.logout()

      this.router.navigateByUrl("login/" + param, { replaceUrl: true });
      console.log(params[1]);

      this.emailInput.value = params[1]
      console.log(this.emailInput.value)
return false
    }
  }else {
    return true
  }
  } 
  abreDocumentoColaborador(token: string, id: any, callback: ICallback, download?: boolean,) {
    this.db.mostraProcessando();
    if (this.plt.is('android') && this.plt.is('capacitor')) { // only change for iOS
      this.svc.GetDocumentoColaborador({
        token: this.db.app.token,
        tokenDocumento: id,
        tipoRetorno: 1
      })
        .subscribe((ret) => {
          this.db.renovaToken(ret.novoToken)
          this.wsSvc.fileWrite(ret.titulo, ret.conteudo)
          this.db.escondeProcessando()
          callback();
        });
    } else if (download) {
      this.svc.GetDocumentoColaborador({
        token: this.db.app.token,
        tokenDocumento: id,
        tipoRetorno: 1
      })
        .subscribe(async (ret) => {
          this.db.escondeProcessando()
          if (ret.status == 'true') {
            this.db.renovaToken(ret.novoToken)
            this.docSvc.salvaArquivo(ret.conteudo, ret.titulo)
            callback();

          } else {
            this.db.setMensagem(ret.error);
          }
        })
    } else if (!download)
      this.svc.GetDocumentoColaborador({
        token: this.db.app.token,
        tokenDocumento: id,
        tipoRetorno: 2,
      })
        .subscribe(async (ret) => {
          this.db.escondeProcessando()
          if (ret.status == 'true') {
            //            this.db.renovaToken(ret.novoToken)
          //  Browser.open({ url: ret.link })
            window.location.assign(ret.link) 

            callback();

          } else {
            this.db.setMensagem(ret.error);
          }
        })
        this.db.escondeProcessando()

  }

  /*
  login(form) {
  
    this.db.setTipoLogin(this.tipoLogin)
  
    let cpf = this.retornaApenasDigitos(form.value.email.trim())
    if(cpf == '' || cpf.length != 11) {
  //    if (this.tipoLogin == 'usuario'){
    this.db.mostraProcessando();
    this.svc.GetToken({
      usuario: form.value.email,
      senha: form.value.password,
      platform: this.plt.is("desktop")?1:2
    }).subscribe(ret => {
      this.db.escondeProcessando(ret.error)
  
      if (ret.status == 'true') {
        if (this.db.getUsuario() !== form.value.email) this.db.limpaSessao()
        this.db.setUsuario(form.value.email)
        if(this.param) 
        { 
          console.log('this.param: ' + this.param)
          let cod = this.getCodigoSemDV(this.param)
          if (cod > 0) this.docSvc.abreDocumento(ret.tokenApps[0].token, cod, () => {});
          this.db.setApp(ret.tokenApps[0]);
        } else {
          this.db.setApp(ret.tokenApps[0]);
          this.db.mostraMenu = true;
        }
      }
    },
      err => {
        this.db.escondeProcessando(err.error)
      })
  
    } else 
    {
      form.value.email = cpf
      if (this.solNascimento == true) {
      this.data = this.retornaApenasDigitos(form.value.nascimento.trim())
      console.log(this.data)
      this.data = this.data.substr(4,4) + "-" + this.data.substr(2,2) + "-" + this.data.substr(0,2)}
      
      console.log(form.value.nascimento)
      console.log(form.value.novaSenha)
      this.db.mostraProcessando();
      this.svc.GetTokenColaborador({
        cpf: form.value.email,
        senha: form.value.password,
        nascimento: this.solNascimento?this.data:null,
        novaSenha: form.value.novaSenha,
        platform: this.plt.is("desktop")?1:2
  
      }).subscribe(ret => {
        if (ret.status == 'true') {
          this.db.escondeProcessando()
  
          if (this.db.getUsuario() !== form.value.email) this.db.limpaSessao()
          this.db.setUsuario(form.value.email)
          this.db.setAppColaborador(ret.tokenApps[0])
  
          this.router.navigate(['documentos-colaborador']);
  
        } else if (ret.status == 'false')
        {
            if (ret.errorId == -4002){ 
              this.solNascimento = true
              this.db.escondeProcessando('Informe sua data de nascimento');
            } else if (ret.errorId == -4003){
              this.solNovaSenha = true
              this.db.escondeProcessando('Defina uma senha');
            } else 
              this.db.escondeProcessando(ret.error)
        } 
      },
        err => {
          this.db.escondeProcessando(err.error)
        })
  
  
    }
  }
  */


  esqueciSenha(form) {
    console.log('form:', form)
    if (form.value.email == '') this.db.setMensagem('Informe o usuário')
    else {
      this.svc.ResetaSenha({
        usuario: form.value.email,
        metodo: 'email'
      }).subscribe(ret => {
        if (ret.error) this.db.setMensagem(ret.error)
        else {
          this.db.setMensagem('Enviado email com nova senha')
          this.resetSenha = false
        }
      })
    }
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    this.tipoLogin = ev.detail.value
  }
}
