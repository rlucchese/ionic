import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from '../api/usuario.service';
import { DbService } from '../storage/db.service';

@Component({
  selector: 'app-senha-colaborador',
  templateUrl: './senha-colaborador.page.html',
  styleUrls: ['./senha-colaborador.page.scss'],
})
export class SenhaColaboradorPage implements OnInit {
  @Input() cpf: string;
  @Input() email: string
  @Input() celular: string
  @Input() password: string
  @Input() nome: string
  @Input() senhaProvisoria: boolean 

  constructor(
    public mc: ModalController,
    public usuSvc: UsuarioService,
    public db: DbService
  ) { }

  ngOnInit() {
    if(this.password == "") this.password = this.geraSenhaAleatoria();
  }


  async senhaColaborador(cpf,nome,email,celular,senhaProvisoria: string, possuiSenha: boolean) {
    const modal = await this.mc.create({
      component: SenhaColaboradorPage,
      componentProps: { cpf: cpf,
                        nome: nome,
                        email: email,
                        celular: celular,
                        password: senhaProvisoria, 
                        senhaProvisoria: !possuiSenha },
      cssClass: 'modal-css'
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  liberaSenha() {
if (this.senhaProvisoria){
    this.usuSvc.LiberaColaborador({
      token: this.db.app.token,
      idCliente: this.db.cliente.id,
      cpf: this.cpf,
      liberado: true,
      email: this.email,
      celular: this.celular,
      senhaProvisoria: this.password
    })
      .subscribe((ret) => {
        console.log(ret);
        if (ret.status=="true") {
        this.mc.dismiss({
          status: true,
          email: this.email,
          celular: this.celular,
          senhaProvisoria: this.password
        })
      }
        else this.db.setMensagem(ret.compl)
      })
    }else{
      this.usuSvc.LiberaColaborador({
        token: this.db.app.token,
        idCliente: this.db.cliente.id,
        cpf: this.cpf,
        liberado: true,
        email: this.email,
        celular: this.celular,
      })
        .subscribe((ret) => {
          console.log(ret);
          if (ret.status=="true") {
          this.mc.dismiss({
            status: true,
            email: this.email,
            celular: this.celular,
          })
        }
          else this.db.setMensagem(ret.compl)
        })
    }
  }

  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  geraSenhaAleatoria(): string {
    let aux = String("00000000" + Math.random()).slice(-8);
    return aux;
  }

}
