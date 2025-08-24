import { FinalizarPage } from "./../finalizar/finalizar.page";
import { OperacaoPage } from "./../operacao/operacao.page";
import { ParadaPage } from "./../parada/parada.page";
import { EquipamentoPage } from "./../equipamento/equipamento.page";
import { PlantaPage } from "./../planta/planta.page";
import { Equipamento, EventoApontado } from "./../../interface/reval";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ProducaoService } from "src/app/api/producao.service";
import {
  Evento,
  StatusRecurso,
  Programacao,
  Planta,
} from "src/app/interface/reval";
import { DbService } from "src/app/storage/db.service";
import { OperadorPage } from "src/app/operador/operador.page";
import { _SERVER } from "src/app/guards/load-setup.guard";
//import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-apontamento",
  templateUrl: "./apontamento.page.html",
  styleUrls: ["./apontamento.page.scss"],
})
export class ApontamentoPage implements OnInit {
  public apontamento: string = " ";
  public statusRecurso: StatusRecurso;
  public produzindo: boolean = false;
  public setup: Evento[];
  public producao: Evento[];
  public parada: Evento[];
  public idsProgramacao: number[] = [];

  public operacoes: Programacao[] = [];

  public idEquipamento: string;

  public planta: Planta;
  public equipamento: Equipamento;
  public processando: boolean = false;
  public apontados: EventoApontado[]
  public atual: EventoApontado

  public dtaApontados: Date;
  public customPickerOptions: any;
  public timerRefresh: any;

  public sireneTimer: any;
  public arquivoSirene: string = '';
  public sirene: HTMLAudioElement;  
  public sireneVolume: number = 100;
  public sireneDuracao: number = 5000;
  public sireneIntervalo: number = 60;
  public sireneLigada: boolean = false;
  public sireneTocando: boolean = false;
  public idEvento: number = 0;
  public to: any;

  constructor(
    public plt: PlantaPage,
    public equip: EquipamentoPage,
    public oper: OperadorPage,
    public db: DbService,
    public alertController: AlertController,
    public router: Router,
    public prdSvc: ProducaoService,
    public prd: ParadaPage,
    public selOp: OperacaoPage,
    public fin: FinalizarPage,
  ) {
    this.customPickerOptions = {
      buttons: [{
        text: 'Hoje',
        handler: (res) => {
          this.dtaApontados = new Date();
          return false;
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          return false;
        }
      }, {
        text: 'Ok',
        handler: () => {
          return true;
        }
      }]
    }



    this.timerRefresh = setInterval(() => {

      this.carregaStatus(this.equipamento);
      //      let token = this.db.getToken();
      //      if (token && token !== '') {
      //        this.msgSvc.GetContato({
      //          token: token,
      //          apenasQuantidade: true
      //        })
      //          .subscribe(
      //            (ret) => {
      //              console.log(ret)
      //              this.db.qtdMsgNaoLida = ret.naoLidas
      //            },
      //          )
      //      }
    }, 5000)
  }

  ngOnInit() {
    //    if db.
    //    this.setaPlantaEquipamento()
    //    this.selecOper = this.db.selecOper
    //    this.idEquipamento = this.db.getEquipamento()
    //    this.carregaStatus()
  }

  ionViewDidEnter() {
    if (this.db.autenticado()) {
      this.setaPlantaEquipamento();
    }
    //    this.carregaStatus()
  }

  ionViewWillLeave() {
    clearInterval(this.timerRefresh)
  }

  setaPlantaEquipamento() {
    if (this.db.carregaPlanta()) {
      this.planta = this.db.planta;
      if (this.db.carregaEquipamento()) {
        this.equipamento = this.db.equipamento;
        this.carregaStatus(this.equipamento);
      } else {
        this.selecionaEquipamento();
      }
    } else this.selecionaPlanta();
  }

  async setOperacoes(idsPrg: number[]) {
    this.idsProgramacao = idsPrg;
  }

  async selecionaOperacoes(tipoApt: string = "", evProd: Evento = null) {
    console.log(this.equipamento.id);
    const ret = await this.selOp.selecionaOperacao(
      this.equipamento.id,
      tipoApt == "" ? false : true
    );
    if (ret.data.status) {
      //      console.log(rettipoApt);
      if (tipoApt !== "") {
        let ops = [];
        console.log(ret.data);
        for (let i = 0; i < ret.data.operacoes.length; i++) {
          for (
            let j = 0;
            j < ret.data.operacoes[i].idsProgramacao.length;
            j++
          ) {
            ops.push(+ret.data.operacoes[i].idsProgramacao[j]);
          }
        }

        console.log(ops);

        this.setOperacoes(ops);

        this.registraEvento(tipoApt, evProd, ret.data.idAgrupamento);
      }
    }

    //    else {
    //      if(tipoApt !== "") this.db.setMensagem('Obrigatório selecionar ao menos 1 operação para este tipo de evento')
    //    }
  }

  async registraEvento(tipo: string, evProd: Evento = null, idAgrupamento: number = 0, evento: any = null) {

    if (evento) console.log(evento)
    console.log(tipo)
    if (!this.processando) {
      this.processando = true
      if (tipo == "parar") {
        const ret = await this.prd.selecionaParada(this.equipamento.id, 1, this.idsProgramacao, this.statusRecurso.idAgrupamento);
        if (ret.data.status) {
          this.carregaStatus(this.equipamento);
        }
        this.processando = false
      } else if (tipo == "finalizar") {
        const ret = await this.fin.selecionaFinalizar(this.equipamento.id);
        if (ret.data.status) {
          this.carregaStatus(this.equipamento);
        }
        this.processando = false
      } else {
        console.log("tam ids", this.idsProgramacao.length);
        if (!this.idsProgramacao || this.idsProgramacao.length <= 0) {
          this.selecionaOperacoes(tipo, evProd);
          this.processando = false
        } else {
          //        console.log(this.idsProgramacao)

          if (!idAgrupamento || idAgrupamento == 0) idAgrupamento = this.statusRecurso.idAgrupamento

          this.db
            .registraEvento(
              this.equipamento.id,
              evProd.id,
              "",
              this.idsProgramacao,
              idAgrupamento
            )
            .subscribe(
              (ret) => {
                console.log("Ret", ret.id, ret.status);
                this.db.escondeProcessando();
                if (ret.status) {
                  this.router.navigate(["apontamento"]);
                  this.db.escondeProcessando();
                  this.carregaStatus(this.equipamento);
                }
              },
              (err) => {
                this.db.escondeProcessando(err.error)
                this.processando = false
              }
            );
        }
        //      else {
        //        this.selOp.selecionaOperacao(this.equipamento.id)
        //      }
      }

    }
  }

  async selecionaOperador() {
    const ret = await this.oper.selecionaOperador(this.equipamento.id);
    if (ret.data.status) {
      let ops = this.operacoes.map(el => el.id)
      console.log('opoooosssss',ops)
      this.db.registraEvento(this.equipamento.id, 0, '', ops, 0, ret.data.operador.id).subscribe(
        (ret) => {
          this.db.escondeProcessando();
          if (ret.status) {
            this.db.escondeProcessando();
            this.db.limpaSessao();
            this.db.setUsuario(ret.novoUsuario);
            this.db.setToken(ret.novoToken);
            this.carregaStatus(this.equipamento);
          }
        },
        (err) => {
          this.db.escondeProcessando(err.error)
          this.processando = false
        })
    }
  }

  async selecionaEquipamento() {
    const ret = await this.equip.selecionaEquipamento(this.planta.id);
    if (ret.data.status) {
      this.db.setEquipamento(ret.data.equipamento);
      this.equipamento = ret.data.equipamento;
      this.carregaStatus(this.equipamento);
    }
  }

  async selecionaPlanta() {
    const ret = await this.plt.selecionaPlanta();
    if (ret.data.status) {
      this.db.setPlanta(ret.data.planta);
      //      this.db.planta = ret.data.planta
      this.planta = ret.data.planta;
      this.selecionaEquipamento();
    }
  }

  reseta() {
    console.log('11')
    this.db.mostraProcessando();
    this.prdSvc.ResetaCentroCusto({
      token: this.db.token,
      idCentroCusto: this.equipamento.id
    })
      .subscribe((ret) => {
        console.log(ret)
        this.db.escondeProcessando();
        if (ret.status) {
          this.carregaStatus(this.equipamento)
        } else {
          this.db.setMensagem(ret.error)
        }
      },
        (err) => {
          this.db.escondeProcessando(err.error)
        })
  }

  carregaStatus(equip: Equipamento) {
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
      //      console.log(this.db.idEquipamento)
      if (!this.dtaApontados) this.dtaApontados = new Date()
//      console.log(this.dtaApontados)

      //      this.db.mostraProcessando();
      this.prdSvc
        .GetStatus({
          token: this.db.token,
          idRecurso: equip.id,
          inicio: this.dtaApontados,
          termino: this.dtaApontados,
        })
        .subscribe(
          (ret) => {
//            console.log(ret);
            this.db.escondeProcessando();
            if (ret.status) {
              //              console.log(this.statusRecurso?.idEventoRecurso,ret.statusRecurso.idEventoRecurso)
              //              if (this.statusRecurso?.idEventoRecurso != ret.statusRecurso.idEventoRecurso) {
              this.statusRecurso = ret.statusRecurso;
//              console.log('=====', ret, '======')
              if (ret.statusRecurso && ret.statusRecurso.idsProgramacao && ret.statusRecurso.idsProgramacao.length > 0) {
                //                if (this.statusRecurso !== ret.statusRecurso) {
//                console.log("carrega tudo");
                this.statusRecurso = ret.statusRecurso;
                this.idsProgramacao = ret.statusRecurso.idsProgramacao;
                this.prdSvc
                  .GetOperacoes({
                    token: this.db.getToken(),
                    operacoes: this.idsProgramacao,
                  })
                  .subscribe((ret) => {
                    this.operacoes = ret.operacoes;
                    console.log(this.operacoes)
                  });
              } else {
                this.idsProgramacao = [];
                this.operacoes = [];
              }
            } else {
              this.idsProgramacao = [];
              this.operacoes = [];
            }
            //              }

            //              this.db.selecOper = ret.statusRecurso.idsProgramacao}
            this.setup = ret.eventosSetup;
            this.producao = ret.eventosProducao;
            this.parada = ret.eventosParada;
            this.apontados = ret.eventosApontados;
            this.atual = ret.eventoAtual;

            
          if(this.sireneLigada && (this.idEvento !== this.statusRecurso.idEventoProducao || 
            this.sireneVolume !== this.statusRecurso.sireneVolume ||
            this.sireneIntervalo !== this.statusRecurso.sireneIntervalo ||
            this.arquivoSirene !== this.statusRecurso.arquivoSirene)
            ) this.stopSirene();
            //            this.statusRecurso.idEventoProducao

          if (this.idEvento !== this.statusRecurso.idEventoProducao || 
              this.sireneVolume !== this.statusRecurso.sireneVolume ||
              this.sireneIntervalo !== this.statusRecurso.sireneIntervalo ||
              this.arquivoSirene !== this.statusRecurso.arquivoSirene) {

              this.sireneVolume = this.statusRecurso.sireneVolume 
              if (this.statusRecurso.sireneIntervalo && this.statusRecurso.sireneIntervalo > 0) this.sireneIntervalo = this.statusRecurso.sireneIntervalo;
              if (this.statusRecurso.arquivoSirene && this.statusRecurso.arquivoSirene !== "") this.arquivoSirene = this.statusRecurso.arquivoSirene
              else this.arquivoSirene = 'siren1.mp3';
  
              if (this.sireneVolume > 0) {
                this.startSirene();
              }
              this.idEvento = this.statusRecurso.idEventoProducao;
            }
//            console.log(this.atual)
            //            }
          },
          (err) => {
            console.log(err.error);
            this.db.escondeProcessando(err.error);
          }
        );
      this.processando = false
    }
  }

  convertTime(seg: number) {
    var pad = function (input) { return input < 10 ? "0" + input : input; };
    return [
      pad(Math.floor(seg / 3600)),
      pad(Math.floor(seg % 3600 / 60)),
      pad(Math.floor(seg % 60)),
    ].join(':');
  }
  /*  async confirmaApontamento(tipo: string, id: number) {
    if (this.selecOper && this.selecOper?.length > 0) {


      if (tipo == 'X') { this.router.navigate(['parada']) }
      else if (tipo == 'F') { this.router.navigate(['finalizar']) }
      else {
        const alert = await this.alertController.create({
          //cssClass: 'my-custom-class',
          header: '' + this.selecOper,
          message: "Confirma " + tipo,
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('cancelou');
                this.carregaStatus()

              },
            },
            {
              text: 'Confirmar',
              handler:() => {
                  this.db.registraEvento(id).subscribe(
                    (ret) => {
            
                      console.log('Ret', ret.id, ret.status)
                      this.db.escondeProcessando();
                      if (ret.status) {
                        this.router.navigate(['apontamento'])   
                        this.db.escondeProcessando();
                        this.carregaStatus()
            
            
                      }
                    },
                    (err) =>
                      this.db.escondeProcessando(err.error)
                  )
//                 this.carregaStatus()

                  console.log(tipo + ' dos itens' + this.selecOper)
              

              },
            },
          ],
        });
        await alert.present();


      }

    

    } else { this.router.navigate(['operacao']) }



  }

*/

  startSirene() {
    console.log('startSirene')
    this.sireneLigada = true
    this.sireneTimer = setInterval(() => {
      console.log("executando timer sirene",this.sireneLigada,this.sireneTocando)
      if (this.sireneLigada && !this.sireneTocando) {
        this.playSirene(this.sireneVolume);
      }

    }, this.sireneIntervalo * 1000)
    this.playSirene(this.sireneVolume);
  }

  stopSirene() {
    console.log('stopSirene')
    this.pauseSirene()
    clearInterval(this.sireneTimer)
    this.sireneLigada = false
  }

  pauseSirene() {
    console.log('pauseSirene')
    this.sirene.pause();
    this.sireneTocando = false;
  }

  playSirene(volume: number = 100) {
    if (!this.sireneTocando) {
      this.sireneTocando = true;
      console.log('playSirene',this.sireneVolume, this.sireneIntervalo, _SERVER + "/app/v1/sounds/" + this.arquivoSirene)

//      if(!this.arquivoSirene || this.arquivoSirene < 1 || this.arquivoSirene > 3) this.arquivoSirene = 1;

      this.sirene = new Audio(_SERVER + "/app/v1/sounds/" + this.arquivoSirene);
      this.sirene.currentTime = 0;
      this.sirene.volume = (volume / 100);
      this.sirene.play();

//      var sir = this.sirene; //new Audio(_SERVER + "/app/v1/sounds/siren1.mp3"); 
//      sir.play();
//      this.sirene.onpause = function() {
//        this.sireneTocando 
//      }
//this.sirene.pause();
      var self = this;
      setTimeout(function () {
        this.to = console.log('executando timeout',self.sireneTocando)
//        self.stopSirene()
//        this.pauseSirene();
        self.sirene.pause() 
        self.sireneTocando = false;
        clearTimeout(this.to)
      }, this.sireneDuracao);
    }
  }
}
