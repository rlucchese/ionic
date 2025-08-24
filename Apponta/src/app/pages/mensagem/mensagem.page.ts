import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/api/mensagem.service';
import { CentroCusto, Contato, Equipamento, Mensagem } from 'src/app/interface/reval';
import { NovaMensagemPage } from 'src/app/nova-mensagem/nova-mensagem.page';
import { DbService } from 'src/app/storage/db.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.page.html',
  styleUrls: ['./mensagem.page.scss'],
})
export class MensagemPage implements OnInit {

  public contatoMsg: Contato[]
  public contatoMsg2: Contato[]
  public idLidas: number = 2
  public idEquipamento: number
  public equipamentos: Equipamento[] 
  public centrosCusto: CentroCusto[]
  public equipamento: Equipamento
  public numMsg: number
  public intervalMsg: any;


  constructor(
    public msgSvc: MensagemService,
    public db: DbService,
    public nova: NovaMensagemPage,
    private router: Router

  ) { }

  ionViewDidLeave() {
    clearInterval(this.intervalMsg);
  }

  ngOnInit() {
    this.equipamento = this.db.carregaEquipamento();
   this.idEquipamento = this.equipamento?.id;

  
    //console.log(this.db.centrosCusto)
  }

  ionViewDidEnter() {
    this.carregaMsg()

    this.intervalMsg = setInterval(()=>{
      this.carregaMsg();
    },5000)
  }

  carregaMsg() {

    this.msgSvc.GetContato(
      {
        token: this.db.getToken(),

      }
    ).subscribe(
      (ret) => {
  //      console.log(ret.contatos)
 //       console.log(this.contatoMsg)
//console.log(JSON.stringify(ret.contatos))
//console.log(JSON.stringify(this.contatoMsg))
       if(JSON.stringify(ret.contatos) !== JSON.stringify(this.contatoMsg)) {
          console.log('diferentes')
          this.contatoMsg = ret.contatos;
          this.contatoMsg2 = ret.contatos;
     } else           console.log('iguais')

      },
      (err) => this.db.escondeProcessando(err.error)
    )  
    
  
  }

  async novaMensagem() {
    const ret = await this.nova.novaMensagem();
    if (ret.data.status) {
      this.carregaMsg();
    }

  }

  busca(evt: any) {
    this.contatoMsg = this.contatoMsg2.filter((cc) => {
      return this.db.compara([cc.ultimaMensagem,cc.contato], evt.detail.value);
    });
  }

   abreConversa(idContato: string, contato: string){
this.db.setContato(idContato, contato);
this.router.navigateByUrl("mensagem-contato")
  } 

  AbreMensagem(){

    this.carregaMsg
  }
}
