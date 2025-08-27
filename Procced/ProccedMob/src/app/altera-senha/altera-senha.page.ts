import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuarioService } from '../api/usuario.service';
import { DbService } from '../storage/db.service';

@Component({
  selector: 'app-altera-senha',
  templateUrl: './altera-senha.page.html',
  styleUrls: ['./altera-senha.page.scss'],
})
export class AlteraSenhaPage implements OnInit {
  
  public email: string;
public tipo: string;

  constructor(private svc: UsuarioService,
              public db: DbService,
              public navCtr: NavController,
              public activatedRoute: ActivatedRoute
) { }


  ionViewDidEnter() {
    
  this.email = this.db.getUsuario()
  }
  ngOnInit() {
    this.tipo = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.tipo == 'excluir') this.db.excluiUsuario()
    this.db.autenticado()
  }
  
  alteraSenha(form){
    // Validações adicionais (tamanho, caracteres....)
    if(form.value.password !== form.value.passwordConf) this.db.setMensagem('Senhas não conferem')
    else {
      this.db.mostraProcessando();
      //    console.log(form.value.password)
          this.svc.AlteraSenha({
            token: this.db.app.token,
            novaSenha: form.value.password
          }).subscribe(ret=>{
            this.db.escondeProcessando(ret.error)
            if(ret.status == 'true') {
              this.db.setMensagem('Senha Alterada com Sucesso')
              this.navCtr.back()
            }
          },
          err=>{
            console.log(err.error)
            this.db.escondeProcessando(err.error)
          })
          }
  }
}
