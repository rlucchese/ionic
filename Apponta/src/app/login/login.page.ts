import { GetConfiguracaoResponse } from './../interface/reval';
import { Router } from '@angular/router';
import { DbService } from './../storage/db.service';
import { UsuarioService } from './../api/usuario.service';
import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, MenuController, Platform } from '@ionic/angular';
import {  PluginListenerHandle } from '@capacitor/core';
//import { ErrorsMessage } from '../../environments/messages'

import { AppService } from '../api/app.service';
import { _SERVER } from '../guards/load-setup.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public email: string;
  public resetSenha: boolean;
  public backButtonListenerHandle: PluginListenerHandle

  constructor(private svc: UsuarioService,
              public db: DbService,
              private platform: Platform,
              private routerOutlet: IonRouterOutlet,
              private router: Router,
              public menuCtrl: MenuController,
              public svcApp: AppService,
              ) {

              }




  ngOnInit() {
    console.log('ngOnInit1');
     this.svcApp.GetConfiguracoes().subscribe((ret) => {
      console.log('ret',ret);

       if(ret.status) {
        if(ret.urlLogo.substring(0,4) == "http") this.db.urlLogo = ret.urlLogo;
        else  this.db.urlLogo = _SERVER +'/app/v1/' + ret.urlLogo;
       }
     })
  //  this.menuCtrl.enable(false);
//    console.log(this.db.app.logo)
  }

  ionViewDidEnter() {
    this.db.limpaSessao()
//    this.logo = this.db.urlLogo;
    this.email = this.db.getUsuario()

  }

  ionViewDidLeave() {
  if (this.backButtonListenerHandle) {
    this.backButtonListenerHandle.remove()
    this.backButtonListenerHandle = null
  }
}

  login(form){
    this.db.mostraProcessando();
    this.svc.GetToken({
      usuario: form.value.email,
      senha: form.value.password
    }).subscribe(ret=>{
      if(ret.status) {
        this.db.escondeProcessando();
        console.log(ret)
        if(this.db.getUsuario() !== form.value.email) this.db.limpaSessao()
        this.db.setUsuario(form.value.email)
      this.db.getMenu(ret.token)
        this.db.setToken(ret.token);
      } else {
        this.db.escondeProcessando(ret.error);
      }
    },
    err=>{
      this.db.escondeProcessando('Erro de conexão ' + err.message)
    })
  }
 
  esqueciSenha(form) {
    console.log('form:',form)
    if(form.value.email == '') this.db.setMensagem('Informe o usuário')
    else {
      this.svc.ResetaSenha({
        usuario: form.value.email,
        metodo: 'email'
      }).subscribe(ret=>{
        if(ret.error) this.db.setMensagem(ret.error)
        else {
          this.db.setMensagem('Enviado email com nova senha')
          this.resetSenha = false
        }
      })
    }
  }

  setup() {
    this.db.Abre('setup')
  }
}
