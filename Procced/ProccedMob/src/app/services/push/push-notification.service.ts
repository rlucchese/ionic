import { AlertController, ModalController } from '@ionic/angular';
import { UsuarioService } from './../../api/usuario.service';
import { HomePage } from './../../home/home.page';
import { SelecaoNotificacaoComponent } from './../../selecao-notificacao/selecao-notificacao.component';
import { DbService } from './../../storage/db.service';
import { Injectable } from '@angular/core';
import {
  PushNotifications
, PushNotificationToken, PushNotificationActionPerformed, PushNotification
  
} from '@capacitor/push-notifications';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(public db: DbService,
    public selNot: SelecaoNotificacaoComponent,
    public router: Router,
    public svc: UsuarioService,
    public mdl: ModalController,
    public alertController: AlertController) { }
   
   
    async presentPushConfirm(documento, param) {
      const alert = await this.alertController.create({
        header: 'Abrir notificação?',
        message: documento,
        buttons: [
          {
            text: 'Não',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Sim',
            handler: () => {
              this.router.navigateByUrl('login/'+ param)
            }
          }
        ]
      });
    
      await alert.present();
    }
    initPushNotifications(){

      // Request permission to use push notifications
        // iOS will prompt user and return if they granted permission or not
        // Android will just grant without prompting
        PushNotifications.requestPermissions().then( result => {
          if (result.receive === 'granted') {
            // Register with Apple / Google to receive push via APNS/FCM
            PushNotifications.register();
          } else {
            console.log('erro -' + result);
            // Show some error
          }
        });
    
        // On success, we should be able to receive notifications
        PushNotifications.addListener('registration',
          (token: PushNotificationToken) => {
            if (this.db.autenticado() && !this.db.pushToken){
              this.db.pushToken = token.value
              console.log(this.db.getApp().tipoUsuario)
              this.svc.VinculaDispositivo({
                token: this.db.getApp().token,
                tipoUsuario: this.db.getApp().tipoUsuario,
                player_id: this.db.pushToken
              }).subscribe(ret => {
                this.db.escondeProcessando(ret.error)
          
                if (ret.status == 'true') {
                  console.log('vinculado')
                }
              },
                err => {
                  this.db.escondeProcessando(err.error)
                })
          
            }else {
              this.db.pushToken = token.value

            }
            ///// vincula_id_push(token player_id)
            ///// desvincul
            console.log('Push registration success, token: ' + token.value);
          }
        );
    
        // Some issue with our setup and push will not work
        PushNotifications.addListener('registrationError',
          (error: any) => {
            console.log(error)
            alert('Error on registration: ' + JSON.stringify(error));
          }
        );
    
        // Show us the notification payload if the app is open on our device
        PushNotifications.addListener('pushNotificationReceived',
          (notification: PushNotification) => {
         //  alert("log - " + notification)
        /*    LocalNotifications.schedule({
            notifications: [
              {
                title: notification.title,
                body: notification.body,
                id: Date.now(),
              },
            ],
          });

          
         */ 
          this.presentPushConfirm(notification.title + "\n" + notification.body,notification.data.param)
          this.db.setMensagem(notification.title + "\n" + notification.body)
          console.table(notification)

           // alert('Push received: ' + JSON.stringify(notification));
          }
        );
    
        // Method called when tapping on a notification
        PushNotifications.addListener('pushNotificationActionPerformed',
          (notification: PushNotificationActionPerformed) => {
          //  console.log("lognoti - " + JSON.stringify(notification.notification.data))

    
         //   this.qtdNotificacoes = this.qtdNotificacoes + 1
        // alert(notification.notification.data.filter)
        // alert(notification.notification.data.usuario)

         //alert(notification.notification.data.page)

        // this.db.pushFilter = notification.notification.data.filter
       //  this.db.pushPage = notification.notification.data.page
         //alert(this.db.autenticado())
         //alert(notification.notification.data.usuario)
              this.mdl.dismiss()
            //  alert(this.db.usuario)
            this.db.param = notification.notification.data.param
              {this.router.navigateByUrl('login')}
             
    
           // alert(notification.notification.title + '-' + notification.notification.subtitle + '-' + notification.notification.notification);
          }
        );
    
    
      }
  }
