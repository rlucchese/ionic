import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/api/mensagem.service';
import { Mensagem, UsuarioMensagem } from 'src/app/interface/reval';
import { DbService } from 'src/app/storage/db.service';

@Component({
  selector: 'app-mensagem-contato',
  templateUrl: './mensagem-contato.page.html',
  styleUrls: ['./mensagem-contato.page.scss'],
})
export class MensagemContatoPage implements OnInit {
  public msg2: Mensagem[]
  public msg: Mensagem[] 
  public usuarios: UsuarioMensagem[]
  public ultimaMensagem: string
  public primeiraMensagem: string
  public mensagem: string
  public intervalMsg: any;
  public carregandoMais: boolean = false
  constructor(
    public db: DbService,
    public msgSvc: MensagemService,
  ) {
    //console.log(this.db.getTipoUsuario())
  }

  ngOnInit() {

  }

  ionViewDidLeave() {
    clearInterval(this.intervalMsg);
  }

  ionViewDidEnter() {
    this.db.getContatoMsg()

    this.carregaMsg()

     this.intervalMsg = setInterval(()=>{
      if (!this.carregandoMais)
     this.carregaMsg(this.ultimaMensagem,null);
    },1000) 
 }
  carregaMsg(idUltimaMensagem?: string, idPrimeiraMensagem?: string, evt?) {
    //let mostraCarregando = evt !== null
    //console.log(evt)
    this.msgSvc.GetMensagem(
      {
        token: this.db.getToken(),
        idContato: parseInt(this.db.idContato),
        idUltimaMensagem: parseInt(idUltimaMensagem),
        idPrimeiraMensagem: parseInt(idPrimeiraMensagem)
      }
    ).subscribe(
      (ret) => {
//        console.log(ret)
     console.log(this.msg)
console.log('primeira - ' + idPrimeiraMensagem)
console.log('ultima - ' + idUltimaMensagem)

        if (!this.msg){
        console.log(ret.mensagens)
          this.msg = ret.mensagens}
        else if (parseInt(idPrimeiraMensagem) > 0){
          for (let i = 0; i < ret.mensagens.length; i++) {
            console.log('primeiraMsg')
            this.msg.push(ret.mensagens[i])}
          }
        else if (parseInt(idUltimaMensagem) > 0) {
          console.log('primeira')
          for (let i = ret.mensagens.length - 1; i >= 0;i--) {
 //           console.log('ultima')
//            console.log(ret.mensagens)
            this.msg.unshift(ret.mensagens[i])

//            console.log(ret.mensagens)
          }
//          this.msg = ret.mensagens
        }
        this.usuarios = []
        let iCor = 0;

        let cores = [];


        cores[0] = '#EC407A'
        cores[1] = '#5C6BC0'
        cores[2] = '#26C6DA'
        cores[3] = '#9CCC65'
        cores[4] = '#FFCA28'
        cores[5] = '#8D6E63'
        cores[6] = '#AB47BC'
        cores[7] = '#42A5F5'
        cores[8] = '#26A69A'
        cores[9] = '#D4E157'
        cores[10] = '#FFA726'
        cores[11] = '#BDBDBD'
        cores[12] = '#7E57C2'
        cores[13] = '#29B6F6'
        cores[14] = '#66BB6A'
        cores[15] = '#FFEE58'
        cores[16] = '#FF7043'
        cores[17] = '#78909C'

        if (ret.usuarios) {
          for (let i = 0; i < ret.usuarios.length; i++) {
            if (!ret.usuarios[i].id) ret.usuarios[i].id = 0;

            if (!ret.usuarios[i].cor) {
              if (ret.usuarios[i].id == 0) ret.usuarios[i].cor = '#EF5350'
              else {
                ret.usuarios[i].cor = cores[iCor++ % 18]
              }
            }
            this.usuarios[ret.usuarios[i].id] = ret.usuarios[i]
          }
        }
        if(ret.mensagens[0]) {
          console.log(this.msg[this.msg.length - 1].id)

          this.ultimaMensagem = this.msg[0]?.id
          this.primeiraMensagem = this.msg[this.msg.length - 1].id

//          console.log(this.usuarios)
          
        } 
        if (ret.mensagens[0]) {
          this.MensagemSetLida(ret.mensagens[0]?.id)
        }
        if (evt) evt?.target.complete()
          if (this.primeiraMensagem) this.carregandoMais = false
      },
      (err) => {this.db.escondeProcessando(err.error)
      this.carregandoMais = false}
    )


  }

carregaMais(evt){
this.carregandoMais = true
this.carregaMsg(null,this.primeiraMensagem, evt)

}

  busca(evt: any) {
    this.msg = this.msg2.filter((cc) => {
      return this.db.compara([cc.mensagem], evt.detail.value);
    });
  }

  EnviaMsg() {
    if (this.mensagem && this.mensagem.trim() !=  '' )
    this.msgSvc.EnviaMensagem(
      {
        token: this.db.getToken(),
        idContato: parseInt(this.db.idContato),
        mensagem: this.mensagem
      }
    ).subscribe(
      (ret) => {
        console.log(ret)
        this.mensagem = ''
        //msg.mensagem = this.mensagem
        //msg.equipamento = this.db.idContato;
        //this.msg.unshift(ret.mensagens[0]);
//        this.carregaMsg()
      }
    )


  }
  MensagemSetLida(idMensagem: string) {
//    this.db.mostraProcessando()
    this.msgSvc.SetLida(
      {
        token: this.db.getToken(),
        idMensagem: idMensagem
      }
    ).subscribe(
      (ret) => {
//        this.db.escondeProcessando()
//        console.log(ret)

      },
      (err) => this.db.escondeProcessando(err.error)
    )

  }
}
