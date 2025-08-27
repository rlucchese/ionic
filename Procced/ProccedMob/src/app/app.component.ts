import { SelecaoNotificacaoComponent } from './selecao-notificacao/selecao-notificacao.component';
import { Router } from '@angular/router';
import { DbService } from './storage/db.service';
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';

import { UsuarioService } from './api/usuario.service';
//import firebase from 'firebase';

import { PushNotificationService } from './services/push/push-notification.service';

//import { FileSharer } from '@byteowls/capacitor-filesharer';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {


  public selectedIndex = 0;
//  public  appPages 
  /*[ 
    {
      title: 'Agenda',
      url: '/agenda',
      icon: 'calendar-outline',
      
    },
    {
      title: 'Documentos',
      url: '/tabs/documentos',
      icon: 'documents-outline',
      
    },
    {
      title: 'Solicitações',
      url: '/tabs/solicitacoes',
      icon: 'chatbubbles-outline',

    },
    {
      title: 'Protocolos',
      url: '/tabs/protocolos',
      icon: 'bookmark-outline',

    },
    {
      title:  'Colaboradores',
      url: '/tabs/colaboradores',
      icon: 'people-outline',
    },
    {
      title: 'Notícias',
      url: '/noticias',
      icon: 'newspaper-outline',

    },
    {
      title: 'Trocar Senha',
      url: '/altera-senha/altera',
      icon: 'lock-closed-outline',

    },

    {
      title: 'Sair',
      mostraUsuario: true,
      url: '/login',
      icon: 'log-out-outline',

    }
  ]*/


  constructor(

    public db: DbService,
    public svc: UsuarioService,
    public push: PushNotificationService,
    public plt: Platform
  ) {
    this.initializeApp();
    this.selectedIndex = 0;
    //console.log(this.db.mostraMenu)
    this.db.liberacaoColaborador = this.db.getLiberacaoColaborador()
    console.log(this.db.liberacaoColaborador)
    this.db.startaVersao();

    this.db.intervalVar = setInterval(()=>{
      if (!(this.db.app == null || this.db.app.token == null)){

      this.db.getExpiraToken()
      if(this.db.timer <= 0) this.db.logout()
//      if (this.db.timer <= this.db.minPedeRenovacao) {
//        this.db.presentAlertToken() 
//      }  
      }
    },15000)

  }

  initializeApp() {
  }
  ngOnInit() {
    console.log(2);
    //this.db.getLiberacaoColaborador()

    const path = window.location.pathname.split('/')[1];
//    console.log(path)
    if (path !== undefined) {
      this.selectedIndex = this.db._APP_MENU.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  //  console.log(this.db.getLiberacaoMenuColaborador())
   console.log('init app') 
   if (!this.plt.is("desktop")){
this.push.initPushNotifications()}

  }

  setSelectedIndex(rotulo: String) {
    for(let i = 0; i<this.db._APP_MENU.length;i++) {
      if(this.db._APP_MENU[i].title.toUpperCase() == rotulo.toUpperCase()) {
        this.selectedIndex = i
        break
      }
    }
  }
}
