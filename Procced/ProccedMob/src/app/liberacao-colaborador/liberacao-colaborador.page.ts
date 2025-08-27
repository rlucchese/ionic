import { DocumentosColaboradorPage } from './../documentos-colaborador/documentos-colaborador.page';
import { Platform } from '@ionic/angular';
import { UsuarioService } from './../api/usuario.service';
import { AppComponent } from './../app.component';
import { DbService } from './../storage/db.service';
import { SelecaoNotificacaoComponent } from './../selecao-notificacao/selecao-notificacao.component';
import { Component, createPlatform, OnInit } from '@angular/core';
import { SelecaoClientePage } from './../selecao-cliente/selecao-cliente.page';
import { Colaborador } from '../../../../_componentes/interfaces/usuario';
import { SenhaColaboradorPage } from '../senha-colaborador/senha-colaborador.page';
import { LogColaboradorPage } from '../log-colaborador/log-colaborador.page';

@Component({
  selector: 'app-liberacao-colaborador',
  templateUrl: './liberacao-colaborador.page.html',
  styleUrls: ['./liberacao-colaborador.page.scss'],
})
export class LiberacaoColaboradorPage implements OnInit {

  public colaboradores: Colaborador[]
  public buscaCol: string;

  constructor(public selNot: SelecaoNotificacaoComponent,
    public db: DbService,
    public selCli: SelecaoClientePage,
    public app: AppComponent,
    public usuSvc: UsuarioService,
    public plt: Platform,
    public senha: SenhaColaboradorPage,
    public docsCol: DocumentosColaboradorPage,
    private logCol: LogColaboradorPage) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.app.setSelectedIndex('Colaboradores');

    this.plt.ready().then(() => {
      if (!this.db.getCliente()) this.selecionaCliente();
      else {
        //console.log('willenter',1)
        this.carrega();
      }
    });

  }

  carrega(event?) {
    this.usuSvc.GetColaboradores({token: this.db.app.token, idCliente: this.db.cliente.id}).subscribe((ret)=>{
      this.db.colaboradores = ret.colaboradores;
      this.colaboradores = ret.colaboradores;
      this.db.renovaToken(ret.novoToken)

      console.log(ret);
    })
  }

  libera(colab: Colaborador ,liberado_func: boolean,  event?) {
    console.log(colab);
    this.usuSvc.LiberaColaborador({token: this.db.app.token, idCliente: this.db.cliente.id, cpf: colab.CPF, liberado: liberado_func}).subscribe((ret)=>{
      if (ret.status == "true")
      colab.Liberado = liberado_func?"1":"2"
      if (colab.PossuiSenha !== '1' && liberado_func == true)
           this.senhaColaborador(colab)

     // console.log(ret);
    })
  }

  async logAcessos(colab: Colaborador) {
    console.log(colab)
      const ret = await this.logCol.selecionaLog(
        colab.CPF,
        this.db.cliente.id,
        colab.Nome
      );
      console.log(ret.data);
    }
/*    console.log('logacessos')
    this.usuSvc.GetLogColaborador({token: this.db.app.token,idCliente: this.db.cliente.id,cpf: colab.CPF}).subscribe((ret=>{
      if(ret.status == "true") {
        console.log(ret.documentos)
      }
    }))

  }*/

  async documentosColaborador(colab: Colaborador) {
    const ret = await this.docsCol.documentosColaborador(colab.CPF,
      this.db.cliente.id, colab.Nome);
    console.log(ret.data);
  }
  
  async selecionaCliente() {
    const ret = await this.selCli.selecionaCliente();
    if (this.db.cliente) {
      this.carrega();
    }
  }

  async senhaColaborador(colab: Colaborador){
    const ret = await this.senha.senhaColaborador(colab.CPF,colab.Nome,colab.email,colab.celular,colab.senhaProvisoria,colab.PossuiSenha=='1'?true:false);
    if(ret.data.status) {
      
       colab.email= ret.data.email
       colab.celular = ret.data.celular
       
       colab.senhaProvisoria = ret.data.senhaProvisoria?ret.data.senhaProvisoria:''
       colab.Liberado = '1'
       if (ret.data.senhaProvisoria){
       colab.PossuiSenhaProvisoria = '1'
       colab.PossuiSenha = '0'
       }
    }

  }
    
  busca(chave: string) {
    this.buscaCol = chave;
    this.colaboradores = this.db.colaboradores.filter((col) => {
      return this.db.compara([col.CPF, col.Nome, col.email], this.buscaCol);
    });
  }
}
