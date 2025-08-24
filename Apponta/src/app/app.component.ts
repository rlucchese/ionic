import { Component } from '@angular/core';
import { MensagemService } from './api/mensagem.service';
import { DbService } from './storage/db.service';
import { UsuarioService } from './api/usuario.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [{title: '', url:'', icon:''}
/*     { title: 'Link de Produtos', url: '/produtos', icon: 'link' },
    { title: 'Apontamento', url: '/apontamento', icon: 'play' },
    { title: 'Acompanhamento da Produção', url: '/acompanhamento-producao', icon: 'calendar' },
    { title: 'Mensagens', url: '/mensagem', icon: 'chatbubbles' },
    { title: 'Etiquetas', url: '/etiqueta', icon: 'pricetag' },
    { title: 'Consultas', url: '/login', icon: 'print' },
    { title: 'Painel de Controle', url: '/login', icon: 'bar-chart' },
    { title: 'Carga Horária', url: '/login', icon: 'calendar' },
    { title: 'Usuários', url: '/login', icon: 'people' },
    { title: 'Eventos de Produção', url: '/login', icon: 'bookmark' },
    { title: 'Configurações', url: '/setup', icon: 'settings' },
    { title: 'Alterar Senha', url: '/alterarSenha', icon: 'lock-closed' },
    { title: 'Sair', url: '/login', icon: 'exit' }, */
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public msgSvc: MensagemService,
    public db: DbService
    , public usuSvc: UsuarioService,
    public navCtr: NavController
  ) {  /*   var intervalVar = setInterval(() => {
     let token = this.db.getToken();
      if (token && token !== '') {
        this.msgSvc.GetContato({
          token: token,
          apenasQuantidade: true
        })
          .subscribe(
            (ret) => {
              console.log(ret)
              this.db.qtdMsgNaoLida = ret.naoLidas
            },
          )
      }
    }, 5000)*/ 
    console.log(this.db.getToken())
if (this.db.getToken()){
  this.db.getMenu()
}
else { this.db.getMenu()}
  }

}




