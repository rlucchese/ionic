import { Component } from '@angular/core';
import { DbService, _VERSAO } from './storage/db.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
   // { title: 'Incluir Pedidos', url: 'vendas/pedido', icon: 'document' },
    { title: 'Incluir Orcamento', url: 'vendas/orcamento', icon: 'document' },
    { title: 'Pedidos', url: 'listaCadastro/PedidoVenda', icon: 'list' },
    { title: 'Orçamentos', url: 'listaCadastro/OrcamentoVenda', icon: 'list' },
    { title: 'Clientes', url: 'listaCadastro/Cliente', icon: 'people' },
   // { title: 'Expedicao', url: 'expedicao', icon: 'list' },
    { title: 'Alterar Senha', url: '/altera-senha/altera', icon: 'lock-closed' },
    { title: 'Excluir Usuario', url: '/altera-senha/exclui', icon: 'lock-closed' },

    { title: 'Sair', url: '/login', icon: 'exit' },
  ];
  public versao = _VERSAO;

  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public db: DbService,
    public router: Router
  ) {  //console.log(this.db.getUsuario().toUpperCase());
 //   let usr = this.db.getUsuario();
 console.log(this.ehExpedicao());

    if (this.ehExpedicao()) {this.router.navigateByUrl('/expedicao');}
  }

  ehExpedicao() {
    let usr = this.db?.getUsuario();
    return usr && (usr.toUpperCase() == 'SERGIO' || usr.toUpperCase() == 'ALLAN');
    //return false
  }

  ionViewDidEnter(){
    //console.log(this.db.getUsuario().toUpperCase());

//    if (this.ehExpedicao()) this.router.navigateByUrl('/expedicao')

  }
}
