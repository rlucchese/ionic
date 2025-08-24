(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_apontamento_apontamento_module_ts"],{

/***/ 4955:
/*!*****************************************************************!*\
  !*** ./src/app/pages/apontamento/apontamento-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApontamentoPageRoutingModule: () => (/* binding */ ApontamentoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _apontamento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apontamento.page */ 5565);




const routes = [{
  path: '',
  component: _apontamento_page__WEBPACK_IMPORTED_MODULE_0__.ApontamentoPage
}];
let ApontamentoPageRoutingModule = class ApontamentoPageRoutingModule {};
ApontamentoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ApontamentoPageRoutingModule);


/***/ }),

/***/ 9930:
/*!*********************************************************!*\
  !*** ./src/app/pages/apontamento/apontamento.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApontamentoPageModule: () => (/* binding */ ApontamentoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _apontamento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apontamento-routing.module */ 4955);
/* harmony import */ var _apontamento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apontamento.page */ 5565);
/* harmony import */ var src_app_componentes_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/componentes/components.module */ 3656);








let ApontamentoPageModule = class ApontamentoPageModule {};
ApontamentoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _apontamento_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApontamentoPageRoutingModule, src_app_componentes_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule],
  declarations: [_apontamento_page__WEBPACK_IMPORTED_MODULE_1__.ApontamentoPage]
})], ApontamentoPageModule);


/***/ }),

/***/ 5565:
/*!*******************************************************!*\
  !*** ./src/app/pages/apontamento/apontamento.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApontamentoPage: () => (/* binding */ ApontamentoPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _apontamento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apontamento.page.html?ngResource */ 7119);
/* harmony import */ var _apontamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apontamento.page.scss?ngResource */ 5587);
/* harmony import */ var _apontamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apontamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _finalizar_finalizar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../finalizar/finalizar.page */ 393);
/* harmony import */ var _operacao_operacao_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../operacao/operacao.page */ 3551);
/* harmony import */ var _parada_parada_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../parada/parada.page */ 5497);
/* harmony import */ var _equipamento_equipamento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../equipamento/equipamento.page */ 401);
/* harmony import */ var _planta_planta_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../planta/planta.page */ 4283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api/producao.service */ 4561);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);
/* harmony import */ var src_app_operador_operador_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/operador/operador.page */ 4938);
/* harmony import */ var src_app_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/guards/load-setup.guard */ 118);
















//import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
let ApontamentoPage = class ApontamentoPage {
  plt;
  equip;
  oper;
  db;
  alertController;
  router;
  prdSvc;
  prd;
  selOp;
  fin;
  apontamento = " ";
  statusRecurso;
  produzindo = false;
  setup;
  producao;
  parada;
  idsProgramacao = [];
  operacoes = [];
  idEquipamento;
  planta;
  equipamento;
  processando = false;
  apontados;
  atual;
  dtaApontados;
  customPickerOptions;
  timerRefresh;
  sireneTimer;
  arquivoSirene = '';
  sirene;
  sireneVolume = 100;
  sireneDuracao = 5000;
  sireneIntervalo = 60;
  sireneLigada = false;
  sireneTocando = false;
  idEvento = 0;
  to;
  constructor(plt, equip, oper, db, alertController, router, prdSvc, prd, selOp, fin) {
    this.plt = plt;
    this.equip = equip;
    this.oper = oper;
    this.db = db;
    this.alertController = alertController;
    this.router = router;
    this.prdSvc = prdSvc;
    this.prd = prd;
    this.selOp = selOp;
    this.fin = fin;
    this.customPickerOptions = {
      buttons: [{
        text: 'Hoje',
        handler: res => {
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
    };
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
    }, 5000);
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
    clearInterval(this.timerRefresh);
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
  setOperacoes(idsPrg) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.idsProgramacao = idsPrg;
    })();
  }
  selecionaOperacoes() {
    var _this2 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tipoApt = "", evProd = null) {
      console.log(_this2.equipamento.id);
      const ret = yield _this2.selOp.selecionaOperacao(_this2.equipamento.id, tipoApt == "" ? false : true);
      if (ret.data.status) {
        //      console.log(rettipoApt);
        if (tipoApt !== "") {
          let ops = [];
          console.log(ret.data);
          for (let i = 0; i < ret.data.operacoes.length; i++) {
            for (let j = 0; j < ret.data.operacoes[i].idsProgramacao.length; j++) {
              ops.push(+ret.data.operacoes[i].idsProgramacao[j]);
            }
          }
          console.log(ops);
          _this2.setOperacoes(ops);
          _this2.registraEvento(tipoApt, evProd, ret.data.idAgrupamento);
        }
      }
      //    else {
      //      if(tipoApt !== "") this.db.setMensagem('Obrigatório selecionar ao menos 1 operação para este tipo de evento')
      //    }
    }).apply(this, arguments);
  }
  registraEvento(_x) {
    var _this3 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tipo, evProd = null, idAgrupamento = 0, evento = null) {
      if (evento) console.log(evento);
      console.log(tipo);
      if (!_this3.processando) {
        _this3.processando = true;
        if (tipo == "parar") {
          const ret = yield _this3.prd.selecionaParada(_this3.equipamento.id, 1, _this3.idsProgramacao, _this3.statusRecurso.idAgrupamento);
          if (ret.data.status) {
            _this3.carregaStatus(_this3.equipamento);
          }
          _this3.processando = false;
        } else if (tipo == "finalizar") {
          const ret = yield _this3.fin.selecionaFinalizar(_this3.equipamento.id);
          if (ret.data.status) {
            _this3.carregaStatus(_this3.equipamento);
          }
          _this3.processando = false;
        } else {
          console.log("tam ids", _this3.idsProgramacao.length);
          if (!_this3.idsProgramacao || _this3.idsProgramacao.length <= 0) {
            _this3.selecionaOperacoes(tipo, evProd);
            _this3.processando = false;
          } else {
            //        console.log(this.idsProgramacao)
            if (!idAgrupamento || idAgrupamento == 0) idAgrupamento = _this3.statusRecurso.idAgrupamento;
            _this3.db.registraEvento(_this3.equipamento.id, evProd.id, "", _this3.idsProgramacao, idAgrupamento).subscribe(ret => {
              console.log("Ret", ret.id, ret.status);
              _this3.db.escondeProcessando();
              if (ret.status) {
                _this3.router.navigate(["apontamento"]);
                _this3.db.escondeProcessando();
                _this3.carregaStatus(_this3.equipamento);
              }
            }, err => {
              _this3.db.escondeProcessando(err.error);
              _this3.processando = false;
            });
          }
          //      else {
          //        this.selOp.selecionaOperacao(this.equipamento.id)
          //      }
        }
      }
    }).apply(this, arguments);
  }
  selecionaOperador() {
    var _this4 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ret = yield _this4.oper.selecionaOperador(_this4.equipamento.id);
      if (ret.data.status) {
        let ops = _this4.operacoes.map(el => el.id);
        console.log('opoooosssss', ops);
        _this4.db.registraEvento(_this4.equipamento.id, 0, '', ops, 0, ret.data.operador.id).subscribe(ret => {
          _this4.db.escondeProcessando();
          if (ret.status) {
            _this4.db.escondeProcessando();
            _this4.db.limpaSessao();
            _this4.db.setUsuario(ret.novoUsuario);
            _this4.db.setToken(ret.novoToken);
            _this4.carregaStatus(_this4.equipamento);
          }
        }, err => {
          _this4.db.escondeProcessando(err.error);
          _this4.processando = false;
        });
      }
    })();
  }
  selecionaEquipamento() {
    var _this5 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ret = yield _this5.equip.selecionaEquipamento(_this5.planta.id);
      if (ret.data.status) {
        _this5.db.setEquipamento(ret.data.equipamento);
        _this5.equipamento = ret.data.equipamento;
        _this5.carregaStatus(_this5.equipamento);
      }
    })();
  }
  selecionaPlanta() {
    var _this6 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ret = yield _this6.plt.selecionaPlanta();
      if (ret.data.status) {
        _this6.db.setPlanta(ret.data.planta);
        //      this.db.planta = ret.data.planta
        _this6.planta = ret.data.planta;
        _this6.selecionaEquipamento();
      }
    })();
  }
  reseta() {
    console.log('11');
    this.db.mostraProcessando();
    this.prdSvc.ResetaCentroCusto({
      token: this.db.token,
      idCentroCusto: this.equipamento.id
    }).subscribe(ret => {
      console.log(ret);
      this.db.escondeProcessando();
      if (ret.status) {
        this.carregaStatus(this.equipamento);
      } else {
        this.db.setMensagem(ret.error);
      }
    }, err => {
      this.db.escondeProcessando(err.error);
    });
  }
  carregaStatus(equip) {
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
      //      console.log(this.db.idEquipamento)
      if (!this.dtaApontados) this.dtaApontados = new Date();
      //      console.log(this.dtaApontados)
      //      this.db.mostraProcessando();
      this.prdSvc.GetStatus({
        token: this.db.token,
        idRecurso: equip.id,
        inicio: this.dtaApontados,
        termino: this.dtaApontados
      }).subscribe(ret => {
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
            this.prdSvc.GetOperacoes({
              token: this.db.getToken(),
              operacoes: this.idsProgramacao
            }).subscribe(ret => {
              this.operacoes = ret.operacoes;
              console.log(this.operacoes);
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
        if (this.sireneLigada && (this.idEvento !== this.statusRecurso.idEventoProducao || this.sireneVolume !== this.statusRecurso.sireneVolume || this.sireneIntervalo !== this.statusRecurso.sireneIntervalo || this.arquivoSirene !== this.statusRecurso.arquivoSirene)) this.stopSirene();
        //            this.statusRecurso.idEventoProducao
        if (this.idEvento !== this.statusRecurso.idEventoProducao || this.sireneVolume !== this.statusRecurso.sireneVolume || this.sireneIntervalo !== this.statusRecurso.sireneIntervalo || this.arquivoSirene !== this.statusRecurso.arquivoSirene) {
          this.sireneVolume = this.statusRecurso.sireneVolume;
          if (this.statusRecurso.sireneIntervalo && this.statusRecurso.sireneIntervalo > 0) this.sireneIntervalo = this.statusRecurso.sireneIntervalo;
          if (this.statusRecurso.arquivoSirene && this.statusRecurso.arquivoSirene !== "") this.arquivoSirene = this.statusRecurso.arquivoSirene;else this.arquivoSirene = 'siren1.mp3';
          if (this.sireneVolume > 0) {
            this.startSirene();
          }
          this.idEvento = this.statusRecurso.idEventoProducao;
        }
        //            console.log(this.atual)
        //            }
      }, err => {
        console.log(err.error);
        this.db.escondeProcessando(err.error);
      });
      this.processando = false;
    }
  }
  convertTime(seg) {
    var pad = function (input) {
      return input < 10 ? "0" + input : input;
    };
    return [pad(Math.floor(seg / 3600)), pad(Math.floor(seg % 3600 / 60)), pad(Math.floor(seg % 60))].join(':');
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
    console.log('startSirene');
    this.sireneLigada = true;
    this.sireneTimer = setInterval(() => {
      console.log("executando timer sirene", this.sireneLigada, this.sireneTocando);
      if (this.sireneLigada && !this.sireneTocando) {
        this.playSirene(this.sireneVolume);
      }
    }, this.sireneIntervalo * 1000);
    this.playSirene(this.sireneVolume);
  }
  stopSirene() {
    console.log('stopSirene');
    this.pauseSirene();
    clearInterval(this.sireneTimer);
    this.sireneLigada = false;
  }
  pauseSirene() {
    console.log('pauseSirene');
    this.sirene.pause();
    this.sireneTocando = false;
  }
  playSirene(volume = 100) {
    if (!this.sireneTocando) {
      this.sireneTocando = true;
      console.log('playSirene', this.sireneVolume, this.sireneIntervalo, src_app_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_11__._SERVER + "/app/v1/sounds/" + this.arquivoSirene);
      //      if(!this.arquivoSirene || this.arquivoSirene < 1 || this.arquivoSirene > 3) this.arquivoSirene = 1;
      this.sirene = new Audio(src_app_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_11__._SERVER + "/app/v1/sounds/" + this.arquivoSirene);
      this.sirene.currentTime = 0;
      this.sirene.volume = volume / 100;
      this.sirene.play();
      //      var sir = this.sirene; //new Audio(_SERVER + "/app/v1/sounds/siren1.mp3"); 
      //      sir.play();
      //      this.sirene.onpause = function() {
      //        this.sireneTocando 
      //      }
      //this.sirene.pause();
      var self = this;
      setTimeout(function () {
        this.to = console.log('executando timeout', self.sireneTocando);
        //        self.stopSirene()
        //        this.pauseSirene();
        self.sirene.pause();
        self.sireneTocando = false;
        clearTimeout(this.to);
      }, this.sireneDuracao);
    }
  }
  static ctorParameters = () => [{
    type: _planta_planta_page__WEBPACK_IMPORTED_MODULE_7__.PlantaPage
  }, {
    type: _equipamento_equipamento_page__WEBPACK_IMPORTED_MODULE_6__.EquipamentoPage
  }, {
    type: src_app_operador_operador_page__WEBPACK_IMPORTED_MODULE_10__.OperadorPage
  }, {
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_9__.DbService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
  }, {
    type: src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_8__.ProducaoService
  }, {
    type: _parada_parada_page__WEBPACK_IMPORTED_MODULE_5__.ParadaPage
  }, {
    type: _operacao_operacao_page__WEBPACK_IMPORTED_MODULE_4__.OperacaoPage
  }, {
    type: _finalizar_finalizar_page__WEBPACK_IMPORTED_MODULE_3__.FinalizarPage
  }];
};
ApontamentoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: "app-apontamento",
  template: _apontamento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_apontamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ApontamentoPage);


/***/ }),

/***/ 8099:
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].rules[0].oneOf[1].use[0]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].rules[0].oneOf[1].use[1]!./node_modules/material-icons/iconfont/material-icons.css ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url('material-icons.woff2') format("woff2"), url('material-icons.woff') format("woff");
}
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: "liga";
}

@font-face {
  font-family: "Material Icons Outlined";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url('material-icons-outlined.woff2') format("woff2"), url('material-icons-outlined.woff') format("woff");
}
.material-icons-outlined {
  font-family: "Material Icons Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: "liga";
}

@font-face {
  font-family: "Material Icons Round";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url('material-icons-round.woff2') format("woff2"), url('material-icons-round.woff') format("woff");
}
.material-icons-round {
  font-family: "Material Icons Round";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: "liga";
}

@font-face {
  font-family: "Material Icons Sharp";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url('material-icons-sharp.woff2') format("woff2"), url('material-icons-sharp.woff') format("woff");
}
.material-icons-sharp {
  font-family: "Material Icons Sharp";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: "liga";
}

@font-face {
  font-family: "Material Icons Two Tone";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url('material-icons-two-tone.woff2') format("woff2"), url('material-icons-two-tone.woff') format("woff");
}
.material-icons-two-tone {
  font-family: "Material Icons Two Tone";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: "liga";
}
`, "",{"version":3,"sources":["webpack://./node_modules/material-icons/iconfont/material-icons.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,2FAA+F;AACjG;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,mCAAmC;EACnC,kCAAkC;EAClC,kCAAkC;EAClC,6BAA6B;AAC/B;;AAEA;EACE,sCAAsC;EACtC,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,6GAAiH;AACnH;AACA;EACE,sCAAsC;EACtC,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,mCAAmC;EACnC,kCAAkC;EAClC,kCAAkC;EAClC,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;EACnC,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,uGAA2G;AAC7G;AACA;EACE,mCAAmC;EACnC,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,mCAAmC;EACnC,kCAAkC;EAClC,kCAAkC;EAClC,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;EACnC,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,uGAA2G;AAC7G;AACA;EACE,mCAAmC;EACnC,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,mCAAmC;EACnC,kCAAkC;EAClC,kCAAkC;EAClC,6BAA6B;AAC/B;;AAEA;EACE,sCAAsC;EACtC,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,6GAAiH;AACnH;AACA;EACE,sCAAsC;EACtC,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,mCAAmC;EACnC,kCAAkC;EAClC,kCAAkC;EAClC,6BAA6B;AAC/B","sourcesContent":["@font-face {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url(\"./material-icons.woff2\") format(\"woff2\"), url(\"./material-icons.woff\") format(\"woff\");\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: \"liga\";\n}\n\n@font-face {\n  font-family: \"Material Icons Outlined\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url(\"./material-icons-outlined.woff2\") format(\"woff2\"), url(\"./material-icons-outlined.woff\") format(\"woff\");\n}\n.material-icons-outlined {\n  font-family: \"Material Icons Outlined\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: \"liga\";\n}\n\n@font-face {\n  font-family: \"Material Icons Round\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url(\"./material-icons-round.woff2\") format(\"woff2\"), url(\"./material-icons-round.woff\") format(\"woff\");\n}\n.material-icons-round {\n  font-family: \"Material Icons Round\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: \"liga\";\n}\n\n@font-face {\n  font-family: \"Material Icons Sharp\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url(\"./material-icons-sharp.woff2\") format(\"woff2\"), url(\"./material-icons-sharp.woff\") format(\"woff\");\n}\n.material-icons-sharp {\n  font-family: \"Material Icons Sharp\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: \"liga\";\n}\n\n@font-face {\n  font-family: \"Material Icons Two Tone\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url(\"./material-icons-two-tone.woff2\") format(\"woff2\"), url(\"./material-icons-two-tone.woff\") format(\"woff\");\n}\n.material-icons-two-tone {\n  font-family: \"Material Icons Two Tone\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: \"liga\";\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5587:
/*!********************************************************************!*\
  !*** ./src/app/pages/apontamento/apontamento.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].rules[0].oneOf[1].use[0]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].rules[0].oneOf[1].use[1]!../../../../node_modules/material-icons/iconfont/material-icons.css */ 8099);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.btnSetup, .btnProducao, .btnParada, .btnFinalizar {
  min-height: 140px;
}

.btnFinalizar {
  background: #90A4AE;
  color: black;
}

.itDados ion-label {
  color: var(--ion-color-primary);
  text-align: center;
}
.itDados div {
  font-weight: bold;
  text-align: center;
}

.botoes .btn {
  width: 80%;
  max-width: 600px;
  min-width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.botoes ion-icon {
  --ionicon-stroke-width: 16px;
  font-size: 1024px;
}

ion-chip {
  color: white;
  --background: var(--ion-color-primary) ;
}

.qtdAndamento {
  color: var(--ion-color-primary);
  --background: white;
}

.dtaApontados {
  color: white;
}

ion-badge {
  background-color: var(--ion-color-danger);
}`, "",{"version":3,"sources":["webpack://./src/app/pages/apontamento/apontamento.page.scss"],"names":[],"mappings":"AAEA;EACI,iBAAA;AAAJ;;AAGA;EACI,mBAAA;EACA,YAAA;AAAJ;;AAKI;EACI,+BAAA;EACA,kBAAA;AAFR;AAII;EACI,iBAAA;EACA,kBAAA;AAFR;;AAOI;EACI,UAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AAJR;AAMI;EACI,4BAAA;EACA,iBAAA;AAJR;;AAQA;EACI,YAAA;EACA,uCAAA;AALJ;;AAQA;EACI,+BAAA;EACA,mBAAA;AALJ;;AAQA;EACI,YAAA;AALJ;;AAQA;EACI,yCAAA;AALJ","sourcesContent":["@import 'material-icons/iconfont/material-icons.css';\r\n\r\n.btnSetup, .btnProducao, .btnParada, .btnFinalizar {\r\n    min-height: 140px;\r\n}\r\n\r\n.btnFinalizar {\r\n    background: #90A4AE;\r\n    color: black;\r\n}\r\n\r\n\r\n.itDados {\r\n    ion-label {\r\n        color: var(--ion-color-primary);\r\n        text-align: center;\r\n    }\r\n    div {\r\n        font-weight: bold;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n.botoes {\r\n    .btn {\r\n        width: 80%;\r\n        max-width: 600px;\r\n        min-width: 200px;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        margin-top: 10px;\r\n        margin-bottom: 10px;\r\n    }\r\n    ion-icon {\r\n        --ionicon-stroke-width: 16px;\r\n        font-size: 1024px;\r\n    }\r\n}\r\n\r\nion-chip {\r\n    color: white;\r\n    --background: var(--ion-color-primary)\r\n}\r\n\r\n.qtdAndamento {\r\n    color: var(--ion-color-primary);\r\n    --background: white;\r\n}\r\n\r\n.dtaApontados {\r\n    color: white;\r\n}\r\n\r\nion-badge {\r\n    background-color:  var(--ion-color-danger);\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7119:
/*!********************************************************************!*\
  !*** ./src/app/pages/apontamento/apontamento.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--<app-header nomePagina=\"Apontamento\">\n</app-header>-->\n\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"secondary\">\n      <ion-button *ngIf=\"this.db.getTipoUsuario() == 3 || this.db.getTipoUsuario() == 4\" (click)=\"reseta()\">\n        <ion-icon slot=\"icon-only\"></ion-icon>\n        <span class=\"material-icons-round\">start</span>  \n      </ion-button>\n      <ion-button (click)=\"carregaStatus(this.equipamento)\">\n        <ion-icon slot=\"icon-only\" name=\"refresh-outline\"></ion-icon>\n      </ion-button>\n      <!--<ion-button (click)=\"selecionaOperacoes()\">\n        <ion-icon slot=\"icon-only\" name=\"list-outline\"></ion-icon>\n      </ion-button>-->\n    </ion-buttons>\n    <ion-title>Apontamento</ion-title> \n    <ion-buttons class=\"alturamenor\" slot=\"end\">\n      <ion-button class=\"alturamenor\" (click)='this.db.AbreMensagem()'>\n        <ion-icon slot=\"icon-only\" name=\"chatbubbles\">\n        </ion-icon>\n        <ion-badge *ngIf=\"this.db.qtdMsgNaoLida > 0\">{{ this.db.qtdMsgNaoLida }}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar class=\"alturamenor\">\n    <!--<ion-buttons class=\"alturamenor\" slot=\"end\">\n      <ion-button class=\"alturamenor\" (click)='abreNotificacao()'>\n        <ion-icon slot=\"icon-only\" name=\"notifications-outline\">\n        </ion-icon>\n        <ion-badge *ngIf=\"this.db.qtdNotificacoes > 0\" top color=\"danger\">{{ this.db.qtdNotificacoes }}</ion-badge>\n      </ion-button>\n    </ion-buttons>-->\n    <ion-buttons slot=\"end\">\n      <ion-chip (click)=\"selecionaOperador()\">{{ this.db.getUsuario() }}</ion-chip>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-chip [disabled]=\"this.db?.plantas?.length == 1\" (click)=\"selecionaPlanta()\">{{\n        (this.planta?.descricao?this.planta.descricao:\"Planta\")\n        }}</ion-chip>\n\n      <ion-chip [disabled]=\"this.db?.centrosCusto?.length == 1 && this.db?.centrosCusto[0].equipamentos?.length == 1\"\n        (click)=\"selecionaEquipamento()\">\n        {{\n        (this.equipamento?.descricao?this.equipamento.descricao:\"Equipamento\")\n        }}\n      </ion-chip>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"none\" *ngIf=\"this.statusRecurso?.idEventoProducao\"\n    [style]=\"'--background: #' + this.statusRecurso.corFundo\">\n    <ion-label class=\"ion-text-center\" style=\"font-size: 150%;\">\n      <strong>{{this.statusRecurso?.operador}} | </strong>\n      <strong *ngIf=\"statusRecurso?.evento !== statusRecurso?.agrupador\">\n        {{ this.statusRecurso?.agrupador }} |\n      </strong>\n      <strong>{{this.statusRecurso?.evento}}</strong>\n      <strong><br>{{ this.statusRecurso?.inicio | date : \"dd/MM/yyyy HH:mm\" }}</strong>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" *ngIf=\"this.statusRecurso?.observacaoEvento\"\n    [style]=\"'--background: #' + this.statusRecurso.corFundo\">\n    <ion-label class=\"ion-text-center\">{{ this.statusRecurso?.observacaoEvento }}</ion-label>\n  </ion-item>\n  <ion-item class=\"itDados\" *ngIf=\"this.atual?.agrupadores?.length > 0\">\n    <ion-grid>\n      <ion-row style=\"font-size: 150%;\">\n        <ion-col>\n          <ion-label>Inicio</ion-label>\n          <div>\n            {{this.atual.inicio| date: \"dd/MM - HH:mm:ss\"}}\n          </div>\n        </ion-col>\n        <!--              <ion-col>\n          <ion-label \n          >Termino</ion-label\n        >\n        <div >\n          {{this.atual.termino| date: \"dd/MM - HH:mm:ss\"}}\n        </div>\n        </ion-col> -->\n        <ion-col>\n          <ion-label>Tempo</ion-label>\n          <div>{{this.convertTime(this.atual.tempo)}}</div>\n        </ion-col>\n      </ion-row> \n      <ion-row *ngIf=\"this.atual.agrupadores[0].tempo > 0\">\n        <ion-item *ngFor=\"let ag of this.atual.agrupadores\"\n          [style]=\"'font-size: 150%; --background: #' + ag.corFundo + '; width: ' + ((ag.tempo / this.atual.tempo) * 100) + '%;'\">\n          {{ ((ag.tempo / this.atual.tempo) * 100).toFixed(1) + ' %' }}<br>\n          {{this.convertTime(ag.tempo)}}\n        </ion-item>\n\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <div class=\"botoes\">\n    <div class=\"btn\" *ngIf=\"setup && setup.length > 0\">\n      <ion-button *ngFor=\"let set of setup\" class=\"btnSetup\" size=\"large\"\n        [style]=\"'--background:' + set.corFundo + '; color: ' + set.corFonte + ''\" expand=\"full\"\n        (click)=\"registraEvento('setup',set,null,$event)\" \n        [style.display]=\"set.id == statusRecurso.idEventoProducao?'none':'block'\">\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-text-center\">\n              <ion-icon size=\"large\" name=\"cog-outline\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col> {{set.descricao}} </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-button>\n    </div>\n\n    <div class=\"btn\" *ngIf=\"producao && producao.length > 0\">\n      <ion-button *ngFor=\"let prod of producao\" class=\"btnProducao\" size=\"large\" expand=\"block\"\n        [style]=\"'--background:' + prod.corFundo + '; color: ' + prod.corFonte + ''\"\n        (click)=\"registraEvento('produzir',prod,null,$event)\" [style.display]=\"prod.id == statusRecurso.idEventoProducao?'none':'block'\">\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-text-center\">\n              <ion-icon size=\"large\" name=\"play-outline\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col> {{prod.descricao}} </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-button>\n    </div>\n\n    <div class=\"btn\" *ngIf=\"this.operacoes && this.operacoes.length > 0\">\n      <ion-button class=\"btnFinalizar\" size=\"large\" expand=\"block\"\n        (click)=\"registraEvento('finalizar',null,null,$event)\" color=\"#90A4AE\">\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-text-center\">\n              <ion-icon size=\"large\" name=\"stop-outline\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col> FINALIZAR </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-button>\n    </div>\n\n    <div class=\"btn\" *ngIf=\"parada && parada.length > 0\">\n      <ion-button class=\"btnParada\" size=\"large\" type=\"submit\" expand=\"block\"\n        [style]=\"'--background:' + parada[0].corFundo + '; color: ' + parada[0].corFonte + ''\"\n        (click)=\"registraEvento('parar',null,null,$event)\">\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-text-center\">\n              <ion-icon size=\"large\" name=\"pause-outline\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col> PARADA </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-button>\n    </div>\n  </div>\n\n  <ion-list *ngIf=\"this.operacoes && this.operacoes.length > 0\">\n    <ion-list-header class=\"titLista\" color=\"primary\">\n      <ion-toolbar color='primary'>\n        <ion-title>Em andamento</ion-title>\n        <ion-label slot=\"end\">{{ statusRecurso.agrupamento }}</ion-label>\n        <ion-chip class=\"qtdAndamento\" slot=\"end\">{{ operacoes.length }}</ion-chip>\n      </ion-toolbar>\n    </ion-list-header>\n    <ion-item *ngFor=\"let op of this.operacoes\" class=\"itDados\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label>Número da Ordem</ion-label>\n            <div>{{op.numeroOrdem}}</div>\n          </ion-col>\n          <ion-col>\n            <ion-label>Qtd Fabricar</ion-label>\n            <div>{{op.quantidade | number: \"1.0-3\"}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"op.numeroPedido\">\n          <ion-col>\n            <ion-label>Pedido</ion-label>\n            <div>{{op.numeroPedido}}</div>\n          </ion-col>\n          <ion-col>\n            <ion-label>Entrega</ion-label>\n            <div>{{op.entregaPedido | date: \"dd/MM/yyyy\"}}</div>\n          </ion-col>\n          <ion-col>\n            <ion-label>Cliente</ion-label>\n            <div>{{op.cliente}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"op.descricaoOrdem\">\n          <ion-col>\n            <ion-label>Produto</ion-label>\n            <div>{{op.referenciaOrdem}} - {{op.descricaoOrdem}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label>Operação</ion-label>\n            <div>{{op.operacao}}</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n\n  <!-- /*----------------ENCERRADOS-------------------*/-->\n\n<!--\n    <ion-list *ngIf=\"this.apontados && this.apontados.length > 0\">\n    <ion-list-header class=\"titLista\" color=\"primary\">\n      <ion-toolbar color='primary'>\n        <ion-title>Apontados</ion-title>\n        <ion-chip slot=\"end\" class=\"dtaApontados\">\n          <ion-datetime placeholder=\"Outra data\" [(ngModel)]=\"dtaApontados\" display-format=\"DD/MM/YYYY\"\n            (ionChange)=\"carregaStatus(this.equipamento)\"></ion-datetime>\n          <ion-label slot=\"end\">{{ statusRecurso.agrupamento }}</ion-label>\n        </ion-chip>\n        <ion-chip class=\"qtdAndamento\" slot=\"end\">{{ apontados.length }}</ion-chip>\n      </ion-toolbar>\n    </ion-list-header>\n    <ion-item *ngFor=\"let ap of this.apontados\" class=\"itDados\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label>Inicio</ion-label>\n            <div>\n              {{ap.inicio| date: \"dd/MM - HH:mm:ss\"}}\n            </div>\n          </ion-col>\n          <ion-col>\n            <ion-label>Termino</ion-label>\n            <div>\n              {{ap.termino| date: \"dd/MM - HH:mm:ss\"}}\n            </div>\n          </ion-col>\n          <ion-col>\n            <ion-label>Tempo</ion-label>\n            <div>{{this.convertTime(ap.tempo)}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n\n          <ion-item *ngFor=\"let ag of ap.agrupadores\"\n            [style]=\"'--background: #' + ag.corFundo + '; width: ' + ((ag.tempo / ap.tempo) * 100) + '%;'\"></ion-item>\n\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  -->\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_apontamento_apontamento_module_ts.js.map