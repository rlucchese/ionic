import {
	Atividade,
	ListaResponse,
	OpcaoFiltro,
	OrdemServico,
	OrdemServicoAgenda,
	ResponseListaAgenda,
} from "./../interfaces/ordem-servico";
import {AppComponent} from "./../app.component";
import {Component, OnInit, ViewChild, EventEmitter} from "@angular/core";
import {UsuarioService} from "../api/usuario.service";
import {DbService} from "../storage/db.service";
import {Recurso} from "../../../../_componentes/interfaces/usuario";
import {ActivatedRoute, Router} from "@angular/router";
import {IncluiOrdemServicoPage} from "../inclui-ordem-servico/inclui-ordem-servico.page";
import {AlertController, IonContent, Platform} from "@ionic/angular";
import {SelecaoNotificacaoComponent} from "../selecao-notificacao/selecao-notificacao.component";
import {SelecaoClientePage} from "../selecao-cliente/selecao-cliente.page";
import {OrdemServicoService} from "../api/ordem-servico.service";
import {SelecaoAgendaPage} from "../selecao-agenda/selecao-agenda.page";

@Component({
	selector: "app-agenda",
	templateUrl: "./agenda.page.html",
	styleUrls: ["./agenda.page.scss"],
})
export class AgendaPage implements OnInit {
	public rotuloSingular: String = "Agenda";
	public rotuloPlural: String = "Agendas";
	public idTipoMob: number = 1;
	public opcoesFiltro: Recurso[];
	public agenda: any;
	public mostrandoFiltro: boolean = true;
	public mostraTodosCamposAuxiliares: boolean = true;
	public mostraBusca: boolean = false;
	public ordens: OrdemServicoAgenda[];
	public buscaOrd: string;
	public id: string;
	public idRecurso: number;
	public cliente?: string;
	public servico?: string;
	public ordem?: number;
	public dataInicial?: Date;
	public dataFinal?: Date;
	public dataBaixa?: Date;
	public baixados?: boolean;
	public aguardando?: boolean;
	public idStatus?: number;
	public observacao?: string;
	public campoAuxilair?: string;
	public periodo: any[];
	public tag?: string;
	public status: any[];
	public mostraDetalhes: boolean = false;
	public checkedOrdens: string[] = [];
	private scrollY: number;

	constructor(
		public os: OrdemServicoService,
		private selAge: SelecaoAgendaPage,
		public selNot: SelecaoNotificacaoComponent,
		public plt: Platform,
		public incOS: IncluiOrdemServicoPage,
		public router: ActivatedRoute,
		public app: AppComponent,
		public usuSvc: UsuarioService,
		public db: DbService,
		public route: Router,
		public alertController: AlertController
	) {}

	@ViewChild(IonContent) content: IonContent;

	ionViewWillEnter() {
		this.app.setSelectedIndex(this.rotuloPlural);
		//this.carrega()
		this.plt.ready().then(() => {
			this.getObjeto();

			console.log(this.db.agendas);

			if (!this.db.agendas) {
				this.selecionaAgenda();
			}
			this.carregaStatus();
		});
	}

	ngOnInit() {
		console.log(this.route.getCurrentNavigation().extras);
	}
	async selecionaAgenda(agenda?) {
		const ret = await this.selAge.selecionaAgenda();
		if ((ret.data.status == true)) {
			console.log(ret.data);
			this.carrega(ret.data.agenda);
			this.persiste();
		} else {			if (agenda){
			this.carrega(agenda);
			this.persiste()};}
		return ret;
	}
	achaAgenda(agenda: any) {
		this.db.agendas.forEach((ag, index) => {
			if (ag.id == agenda.id) this.id = index;
		});
	}
	carregaStatus() {
		this.os
			.GetStatus({
				token: this.db.app.token,
			})
			.subscribe(
				(ret) => {
					if (ret.status) {
						this.status = ret.statusOS;
						console.log(ret);
						// this.db.escondeProcessando();

						// this.status = ret
						//this.db.renovaToken(ret.novoToken)
					}
				},
				(err) => {
					//    this.db.escondeProcessando(err.error);
				}
			);
	}
	carregaAgendas() {
		// this.db.mostraProcessando();

		this.usuSvc
			.GetRecurso({
				token: this.db.app.token,
			})
			.subscribe(
				(ret) => {
					if (ret.status) {
						console.log(ret);
						// this.db.escondeProcessando();

						this.db.agendas = ret.recursos;
						this.db.renovaToken(ret.novoToken);
					}
				},
				(err) => {
					//    this.db.escondeProcessando(err.error);
				}
			);
	}

	consulta() {
		console.log(this.periodo);
		if (this.periodo) {
			this.dataInicial = this.periodo[0];
			this.dataFinal = this.periodo[1];
		}

		this.carrega(this.db.agendas[this.id]);
	}
	carrega(agenda: any) {
		console.log("entrou2");

		//      console.log(this.router.snapshot.queryParams)

		this.mostraTodosCamposAuxiliares = true;
		this.db.mostraProcessando();
		this.os
			.ListaAgenda({
				token: this.db.app.token,
				// idCliente: this.db.cliente.id,
				//tipoMob: 1,
				idRecurso: +agenda.id,
				servico: this.servico,
				dataInicial: this.dataInicial,
				dataFinal: this.dataFinal,
				cliente: this.cliente,
				dataBaixa: this.dataBaixa,
				ordem: this.ordem,
				observacao: this.observacao,
				tag: this.tag,
				baixados: this.baixados,
				aguardando: this.aguardando,
				idStatus: this.idStatus,
				// versao: 3,
			})
			.subscribe(
				(ret: ResponseListaAgenda): void => {
					console.log(ret);
					this.achaAgenda(agenda);
					// this.id = agenda.id
					this.ordens = ret.ordens;
					this.db.agendas[this.id].ordens = ret.ordens;
					this.db.agendas[this.id].podeExcluir = ret.podeExcluir;
          this.marcaChecks()
					console.log(this.db.agendas);

					this.db.escondeProcessando();
					this.db.renovaToken(ret.novoToken);
					this.getPos();
					this.content.scrollToPoint(0, this.scrollY, 100);
					this.scrollY = 0;
					this.persistePos();
					this.persiste();
					//console.log(this.content.getScrollElement())

					if (this.buscaOrd && this.buscaOrd !== "") this.busca(this.buscaOrd);
				},
				(err) => {
					this.db.escondeProcessando();
				}
			);
		this.selNot.carregaQtdNotificacoes();
	}

	busca(chave: string) {
		this.buscaOrd = chave;
		this.db.agendas[this.id].ordens = this.ordens.filter((ord) => {
			return this.db.compara([ord.servico, ord.cliente], this.buscaOrd);
		});
	}
	getRotuloLocalizar(): String {
		return "Localizar " + this.rotuloSingular.toLowerCase();
	}
	expandeCampo(os: OrdemServico, status: boolean) {
		os.mostraDocumentos = status;
		// this.get(os)

		if (os.qtdDocumentos > 0 && status && !os.documentos) {
			this.getDocumentos(os.id, os);
		}
		os.mostraCamposAuxiliares = status;
		if (os.qtdCamposAuxiliares > 0 && status && !os.camposAuxiliares) {
			this.getCamposAux(os);
		}
	}

	expandeCampos(ordens: OrdemServico[], status: boolean) {
		this.mostraTodosCamposAuxiliares = !status;
		for (let os of ordens) {
			this.expandeCampo(os, status);
		}
	}
 marcaChecks(){

  this.db.agendas[this.id].ordens.forEach(ordem => {
    console.log(this.checkedOrdens)
    console.log(ordem.id)
    if (this.checkedOrdens.includes(ordem.id))
    ordem.checked = true
    
  });
} 
	get(os: any) {
		// if (!os.atividades) {
		let agenda = {os};
		this.os
			.Get({
				token: this.db.app.token,
				id: os.id,
			})
			.subscribe((ret) => {
				console.log(ret);
				os.atividades = ret.atividades;
				this.persistePos();
				this.route.navigate(["/baixa"], {state: {ag: agenda}});
			});
		//  }
	}

	getCamposAux(os: OrdemServico) {
		if (!os.camposAuxiliares) {
			this.os
				.GetCamposAuxiliares({
					token: this.db.app.token,
					idServico: os.idServico,
					idOrdem: os.id,
				})
				.subscribe((ret: any) => {
					os.camposAuxiliares = ret.camposAuxiliares;
					for (let i = 0; i < os.camposAuxiliares.length; i++) {
						os.strCamposAuxiliares += os.camposAuxiliares[i].conteudo + "\n";
					}
				});
		}
	}

	getDocumentos(idOrdem: number, os: OrdemServico) {
		this.os
			.GetDocumentos({
				token: this.db.app.token,
				idOrdem: idOrdem,
			})
			.subscribe((ret: any) => {
				os.documentos = ret.documentos;
			});
	}
	persiste() {
		localStorage.setItem("obj", JSON.stringify(this.db.agendas));
		localStorage.setItem("id", this.id);
	}
	persistePos() {
		localStorage.setItem("agendaPos", this.scrollY.toString());
	}

	getObjeto() {
		this.db.agendas = JSON.parse(localStorage.getItem("obj"));
		this.id = localStorage.getItem("id");

		if (this.db.agendas) this.carrega(this.db.agendas[this.id]);

		console.log(this.db.agendas);
	}
	getPos() {
		this.scrollY = +localStorage.getItem("agendaPos");
	}
	mostraDetalhe(event, ag) {
if (!ag.mostraDetalhes)(ag.mostraDetalhes = false)
		ag.mostraDetalhes = !ag.mostraDetalhes;
	console.log(ag)
		event.stopPropagation();
	}

	handleScroll(ev: CustomEvent<any>) {
		//   console.log(ev);

		this.scrollY = ev.detail.currentY;
	}

	checkOrdens(os, event) {
		console.log(event.target);
     event.stopPropagation()
		if (!event.target.checked) {
      this.checkedOrdens = this.checkedOrdens.filter((value)=>value!=os.id);
      os.checked = false
      console.log(this.db.agendas);
      this.persiste()
      
		} else {
			this.checkedOrdens.push(os.id)
      os.checked = true
      console.log(os);
      this.persiste()
      ;
		}
	}

	excluiOrdem() {
		this.confirmaExclusao();
	}

	async confirmaExclusao() {
		const alert = await this.alertController.create({
			header: "Confirma Exclusao",
			message:
				"Voce deseja confirmar a exclusão de " + this.checkedOrdens.length,
			buttons: [
				{
					text: "Não",
					role: "cancel",
					cssClass: "secondary",
					handler: () => {},
				},
				{
					text: "Sim",
					handler: () => {
						console.log("excluindo itens " + this.checkedOrdens.toString());
						this.checkedOrdens = [];
						this.carrega(this.db.agendas[this.id]);
					},
				},
			],
		});

		await alert.present();
	}
  stop(event){
    event.stopPropagation();

  }
}

/*

  @Input('rotuloSingular') rotuloSingular: String='';
  @Input('rotuloPlural') rotuloPlural: String='';
  @Input('idTipoMob') idTipoMob: number;
  @Input('opcoesFiltro') opcoesFiltro: OpcaoFiltro[];
  

  public idStatus: number = 1;
//  public opcoesFiltro: OpcaoFiltro[];
//  public _TIPO_MOB: number = 4

  //  public statusOS: [] = _STATUS_OS;

 
  


  
    async incluiOS() {
      const ret = await this.incOS.incluiOrdemServico(this.idTipoMob);
      if(ret && ret.data && ret.data.status) {
        this.carrega()
//        if(ret.data.qtdAnexos > 0) {
//          this.db.ordens.
//        }
      }
    }
  

  

  
   
    
    seleciona(idDoc: number, event) {
      this.docSvc.abreDocumento(this.db.app.token, idDoc,()=>{});
      event.stopPropagation();
    }
  


  }
  */
