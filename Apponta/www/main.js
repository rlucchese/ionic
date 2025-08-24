(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 8040:
/*!*************************************************!*\
  !*** ./src/app/agrupamento/agrupamento.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgrupamentoPage: () => (/* binding */ AgrupamentoPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _agrupamento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agrupamento.page.html?ngResource */ 8444);
/* harmony import */ var _agrupamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agrupamento.page.scss?ngResource */ 3096);
/* harmony import */ var _agrupamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_agrupamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/producao.service */ 4561);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);

var AgrupamentoPage_1;








let AgrupamentoPage = class AgrupamentoPage {
  static {
    AgrupamentoPage_1 = this;
  }
  db;
  prdSvc;
  mc;
  idRecurso;
  idsProgramacao = [];
  operacoes = [];
  status;
  qtdRepeticoes = 1;
  descricao;
  semProducao = false;
  frmAgrupa = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
  frmRepet = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
  constructor(db, prdSvc, mc) {
    this.db = db;
    this.prdSvc = prdSvc;
    this.mc = mc;
  }
  ngOnInit() {
    this.carrega();
  }
  carrega() {
    if (this.db.autenticado()) {
      if (this.idsProgramacao) {
        this.db.mostraProcessando();
        this.operacoes = [];
        this.prdSvc.GetOperacoes({
          token: this.db.token,
          operacoes: this.idsProgramacao
        }).subscribe(ret => {
          this.db.escondeProcessando();
          this.operacoes = ret.operacoes;
          for (let i = 0; i < this.operacoes.length; i++) {
            this.operacoes[i].quantidadeFabricada = +this.operacoes[i].quantidade;
            this.operacoes[i].quantidadeNaoConforme = 0;
          }
          console.log(this.operacoes);
        });
      }
    }
  }
  selecionaAgrupar(ids) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.mc.create({
        component: AgrupamentoPage_1,
        componentProps: {
          idsProgramacao: ids
        },
        cssClass: "modal-css"
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  cancela() {
    this.mc.dismiss({
      status: false
    });
  }
  alteraQtdRepeticoes(ev) {
    let qtd = +ev.srcElement.value;
    if (qtd < 0) qtd = 0;
    this.qtdRepeticoes = qtd;
    for (let i = 0; i < this.operacoes.length; i++) {
      let qtdFab = Math.round(this.operacoes[i].quantidade / qtd * 1000) / 1000;
      this.operacoes[i].quantidadeFabricada = qtdFab;
    }
  }
  alteraQtdFabricada(op, ev) {
    let qtd = +ev.srcElement.value;
    if (qtd < 0) qtd = 0;else if (qtd > +op.quantidade) {
      qtd = +op.quantidade;
    }
    op.quantidadeFabricada = qtd;
    op.quantidadeNaoConforme = +op.quantidade - qtd;
  }
  alteraQtdNaoConforme(op, ev) {
    let qtd = +ev.srcElement.value;
    if (qtd < 0) qtd = 0;else if (qtd > +op.quantidade) {
      qtd = +op.quantidade;
    }
    op.quantidadeNaoConforme = qtd;
    op.quantidadeFabricada = +op.quantidade - qtd;
  }
  agrupar() {
    console.log(this.operacoes);
    let opsAgrupar = [];
    for (let i = 0; i < this.operacoes.length; i++) {
      if (this.operacoes[i].quantidadeFabricada > 0) {
        opsAgrupar.push({
          id: this.operacoes[i].id,
          quantidadeAgrupar: this.operacoes[i].quantidadeFabricada
        });
      }
    }
    this.db.mostraProcessando();
    this.prdSvc.AgrupaOperacoes({
      token: this.db.token,
      descricao: this.descricao,
      operacoes: opsAgrupar,
      quantidadeRepeticoes: this.qtdRepeticoes
    }).subscribe(ret => {
      console.log(ret);
      this.db.escondeProcessando();
      if (ret.status) {
        this.mc.dismiss({
          status: true
        });
      }
    }, err => this.db.escondeProcessando(err.error));
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__.DbService
  }, {
    type: src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_3__.ProducaoService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }];
  static propDecorators = {
    idRecurso: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  };
};
AgrupamentoPage = AgrupamentoPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: "app-agrupamento",
  template: _agrupamento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_agrupamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AgrupamentoPage);


/***/ }),

/***/ 8467:
/*!************************************!*\
  !*** ./src/app/api/app.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppService: () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ws-reval.service */ 5727);



let AppService = class AppService {
  svc;
  _MODULO = 'App';
  constructor(svc) {
    this.svc = svc;
  }
  GetConfiguracoes() {
    return this.svc.consomeWS(this._MODULO, 'GetConfiguracoes', {
      'id': '123'
    });
  }
  GetDocumentos(params) {
    return this.svc.consomeWS(this._MODULO, 'GetDocumentos', params);
  }
  GetDocumento(params) {
    return this.svc.consomeWS(this._MODULO, 'GetDocumento', params);
  }
  static ctorParameters = () => [{
    type: _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__.WsProccedService
  }];
};
AppService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], AppService);


/***/ }),

/***/ 2300:
/*!*****************************************!*\
  !*** ./src/app/api/mensagem.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MensagemService: () => (/* binding */ MensagemService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ws-reval.service */ 5727);



let MensagemService = class MensagemService {
  svc;
  _MODULO = 'Mensagem';
  constructor(svc) {
    this.svc = svc;
  }
  GetContato(params) {
    return this.svc.consomeWS(this._MODULO, 'ContatoLista', params);
  }
  GetMensagem(params) {
    //    params.action = 'definition'    //lista definicao
    // params.id = 37     //apenas usuario 1
    //   
    //params.action="listRelation"
    //params.
    return this.svc.consomeWS(this._MODULO, 'GetMensagens', params);
  }
  EnviaMensagem(params) {
    return this.svc.consomeWS(this._MODULO, 'EnviaMensagem', params);
  }
  SetLida(params) {
    return this.svc.consomeWS(this._MODULO, 'MensagemSetLida', params);
  }
  static ctorParameters = () => [{
    type: _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__.WsProccedService
  }];
};
MensagemService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], MensagemService);


/***/ }),

/***/ 4561:
/*!*****************************************!*\
  !*** ./src/app/api/producao.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProducaoService: () => (/* binding */ ProducaoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ws-reval.service */ 5727);



let ProducaoService = class ProducaoService {
  svc;
  _MODULO = 'Producao';
  constructor(svc) {
    this.svc = svc;
  }
  TrocaOperadorLista(params) {
    return this.svc.consomeWS(this._MODULO, 'TrocaOperadorLista', params);
  }
  PlantaLista(params) {
    return this.svc.consomeWS(this._MODULO, 'PlantaLista', params);
  }
  CentroCustoLista(params) {
    return this.svc.consomeWS(this._MODULO, 'CentroCustoLista', params);
  }
  AdicionaOperacaoExtra(params) {
    return this.svc.consomeWS(this._MODULO, 'AdicionaOperacaoExtra', params);
  }
  GetOperacoesLiberadas(params) {
    return this.svc.consomeWS(this._MODULO, 'GetOperacoesLiberadas', params);
  }
  GetOperacoes(params) {
    let ret = this.svc.consomeWS(this._MODULO, 'GetOperacoes', params);
    console.log(ret);
    return ret;
  }
  GetEventosProducao(params) {
    return this.svc.consomeWS(this._MODULO, 'GetEventosProducao', params);
  }
  GetStatus(params) {
    return this.svc.consomeWS(this._MODULO, 'GetStatus', params);
  }
  RegistraEvento(params) {
    console.log('RegistraEvento - Params', params);
    //    let ret: any
    //    return ret
    return this.svc.consomeWS(this._MODULO, 'RegistraEvento', params);
  }
  FinalizaOperacao(params) {
    return this.svc.consomeWS(this._MODULO, 'FinalizaOperacao', params);
  }
  AgrupaOperacoes(params) {
    return this.svc.consomeWS(this._MODULO, 'AgrupaOperacoes', params);
  }
  DesagrupaOperacoes(params) {
    return this.svc.consomeWS(this._MODULO, 'DesagrupaOperacoes', params);
  }
  AcompanhamentoOrdens(params) {
    return this.svc.consomeWS(this._MODULO, 'AcompanhamentoOrdens', params);
  }
  AlteraBaixaOperacoes(params) {
    return this.svc.consomeWS(this._MODULO, 'AlteraBaixaOperacoes', params);
  }
  AlteraOrdemFabricacao(params) {
    return this.svc.consomeWS(this._MODULO, 'AlteraOrdemFabricacao', params);
  }
  AlteraCorOrdemFabricacao(params) {
    return this.svc.consomeWS(this._MODULO, 'AlteraCorOrdemFabricacao', params);
  }
  // Rafa
  GetMensagem(params) {
    //    params.action = 'definition'    //lista definicao
    // params.id = 37     //apenas usuario 1
    //   
    //params.action="listRelation"
    //params.
    return this.svc.consomeWS(this._MODULO, 'GetMensagens', params);
  }
  GetOrdemFabricacao(params) {
    console.log(params);
    return this.svc.consomeWS(this._MODULO, 'GetOrdemFabricacao', params);
  }
  ImprimeEtiqueta(params) {
    return this.svc.consomeWSAntigo('TsmServicos', 'EtiquetaOrdemFabricacao', params);
  }
  ResetaCentroCusto(params) {
    return this.svc.consomeWS(this._MODULO, 'ResetaCentroCusto', params);
  }
  static ctorParameters = () => [{
    type: _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__.WsProccedService
  }];
};
ProducaoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ProducaoService);


/***/ }),

/***/ 5365:
/*!****************************************!*\
  !*** ./src/app/api/produto.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProdutoService: () => (/* binding */ ProdutoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ws-reval.service */ 5727);



let ProdutoService = class ProdutoService {
  svc;
  _MODULO = 'ProdutoServico';
  constructor(svc) {
    this.svc = svc;
  }
  Lista(params) {
    return this.svc.consomeWS(this._MODULO, 'Lista', params);
  }
  static ctorParameters = () => [{
    type: _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__.WsProccedService
  }];
};
ProdutoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ProdutoService);


/***/ }),

/***/ 1520:
/*!****************************************!*\
  !*** ./src/app/api/usuario.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuarioService: () => (/* binding */ UsuarioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ws-reval.service */ 5727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



let UsuarioService = class UsuarioService {
  svc;
  _MODULO = 'Usuario';
  constructor(svc) {
    this.svc = svc;
  }
  GetToken(params) {
    return this.svc.consomeWS(this._MODULO, 'GetToken', params);
  }
  ResetaSenha(params) {
    return this.svc.consomeWS(this._MODULO, 'ResetaSenha', params);
  }
  AlteraSenha(params) {
    return this.svc.consomeWS(this._MODULO, 'AlteraSenha', params);
  }
  GetMenu(params) {
    return this.svc.consomeWS(this._MODULO, 'GetMenu', params);
  }
  static ctorParameters = () => [{
    type: _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__.WsProccedService
  }];
};
UsuarioService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], UsuarioService);


/***/ }),

/***/ 5727:
/*!*****************************************!*\
  !*** ./src/app/api/ws-reval.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WsProccedService: () => (/* binding */ WsProccedService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/load-setup.guard */ 118);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);






let WsProccedService = class WsProccedService {
  http;
  loadingCtrl;
  //  public _SERVER = 'http://localhost/apontamento'
  //  public _SERVER: string = 'http://192.168.1.220';
  //  public _SERVER: string = 'http://192.168.1.250/apontamento';   // Micromaq
  _URLBASE = 'app/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.versaoWs;
  //  protected _SERVER = 'http://200.248.44.2:17800'
  //  protected _SERVER = 'http://192.168.1.220';
  //  protected _URLPING = this._URLBASE + '/Ping'
  constructor(http, loadingCtrl) {
    this.http = http;
    this.loadingCtrl = loadingCtrl;
    //    this._SERVER = localStorage.getItem('_SERVER')
    //    this.dbSvc.setMensagem('Server: ' + this._SERVER)
    //    if(this._SERVER == '') {
    //      this.dbSvc.Abre('setup')
    //    }
  }
  consomeWS(modulo, servico, params) {
    let url = _guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__._SERVER + '/' + this._URLBASE + "/" + modulo + "/" + servico;
    //    let url = '/api/' + this._URLBASE + "/" + modulo + "/" + servico;
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().append('Content-Type', 'application/json').append('Access-Control-Allow-Headers', 'Content-Type').append('Access-Control-Allow-Methods', 'GET').append('Access-Control-Allow-Origin', '*');
    //  return this.http.get<Account>(baseUrl + 'accounts',  {headers});
    //    console.log(headers)
    console.log(url);
    let $ret = this.http.post(url, params); //, {headers});
    return $ret;
  }
  consomeWSAntigo(modulo, servico, params) {
    let url = 'http://192.168.1.240:17989/app/v1/' + modulo + '/' + servico;
    let $ret = this.http.post(url, params);
    return $ret;
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController
  }];
};
WsProccedService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], WsProccedService);


/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/load-setup.guard */ 118);




const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 1307)).then(m => m.LoginPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'alterarSenha',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_altera-senha_altera-senha_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./altera-senha/altera-senha.module */ 5583)).then(m => m.AlteraSenhaPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'planta',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_planta_planta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/planta/planta.module */ 240)).then(m => m.PlantaPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'equipamento',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_equipamento_equipamento_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/equipamento/equipamento.module */ 5438)).then(m => m.EquipamentoPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'operacao',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_operacao_operacao_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/operacao/operacao.module */ 5044)).then(m => m.OperacaoPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'apontamento',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_apontamento_apontamento_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/apontamento/apontamento.module */ 9930)).then(m => m.ApontamentoPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'parada',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_parada_parada_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/parada/parada.module */ 4038)).then(m => m.ParadaPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'finalizar',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_finalizar_finalizar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/finalizar/finalizar.module */ 7536)).then(m => m.FinalizarPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'selecao-evento',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_selecao-evento_selecao-evento_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./selecao-evento/selecao-evento.module */ 4405)).then(m => m.SelecaoEventoPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'agrupamento',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_agrupamento_agrupamento_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./agrupamento/agrupamento.module */ 4975)).then(m => m.AgrupamentoPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'acompanhamento-producao',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_acompanhamento-producao_acompanhamento-producao_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/acompanhamento-producao/acompanhamento-producao.module */ 3682)).then(m => m.AcompanhamentoProducaoPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'mensagem',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mensagem_mensagem_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mensagem/mensagem.module */ 4710)).then(m => m.MensagemPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'etiqueta',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_etiqueta_etiqueta_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/etiqueta/etiqueta.module */ 5432)).then(m => m.EtiquetaPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'nova-mensagem',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_nova-mensagem_nova-mensagem_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nova-mensagem/nova-mensagem.module */ 507)).then(m => m.NovaMensagemPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'etiqueta',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_etiqueta_etiqueta_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/etiqueta/etiqueta.module */ 5432)).then(m => m.EtiquetaPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'mensagem-contato',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mensagem-contato_mensagem-contato_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mensagem-contato/mensagem-contato.module */ 4472)).then(m => m.MensagemContatoPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'setup',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_setup_setup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./setup/setup.module */ 571)).then(m => m.SetupPageModule)
}, {
  path: 'operador',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_operador_operador_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./operador/operador.module */ 7601)).then(m => m.OperadorPageModule)
}, {
  path: 'produtos',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_produtos_produtos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/produtos/produtos.module */ 7680)).then(m => m.ProdutosPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'recebimentoCompra',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_recebimento-compra_recebimento-compra_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/recebimento-compra/recebimento-compra.module */ 3588)).then(m => m.RecebimentoCompraPageModule),
  canLoad: [_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_0__.LoadSetupGuard]
}, {
  path: 'cotas',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cotas_cotas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cotas/cotas.module */ 4446)).then(m => m.CotasPageModule)
  // canLoad: [LoadSetupGuard]
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 1584);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 7282);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_mensagem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/mensagem.service */ 2300);
/* harmony import */ var _storage_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage/db.service */ 5193);
/* harmony import */ var _api_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/usuario.service */ 1520);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4059);








let AppComponent = class AppComponent {
  msgSvc;
  db;
  usuSvc;
  navCtr;
  appPages = [{
    title: '',
    url: '',
    icon: ''
  }
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
      { title: 'Sair', url: '/login', icon: 'exit' }, */];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(msgSvc, db, usuSvc, navCtr) {
    this.msgSvc = msgSvc;
    this.db = db;
    this.usuSvc = usuSvc;
    this.navCtr = navCtr;
    console.log(this.db.getToken());
    if (this.db.getToken()) {
      this.db.getMenu();
    } else {
      this.db.getMenu();
    }
  }
  static ctorParameters = () => [{
    type: _api_mensagem_service__WEBPACK_IMPORTED_MODULE_2__.MensagemService
  }, {
    type: _storage_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService
  }, {
    type: _api_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
  }];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _agrupamento_agrupamento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agrupamento/agrupamento.page */ 8040);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _pages_finalizar_finalizar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/finalizar/finalizar.page */ 393);
/* harmony import */ var _pages_operacao_operacao_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/operacao/operacao.page */ 3551);
/* harmony import */ var _pages_parada_parada_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/parada/parada.page */ 5497);
/* harmony import */ var _selecao_evento_selecao_evento_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selecao-evento/selecao-evento.page */ 6062);
/* harmony import */ var _pages_equipamento_equipamento_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/equipamento/equipamento.page */ 401);
/* harmony import */ var _pages_planta_planta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/planta/planta.page */ 4283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/locales/pt */ 8581);
/* harmony import */ var _nova_mensagem_nova_mensagem_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nova-mensagem/nova-mensagem.page */ 340);
/* harmony import */ var _operador_operador_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./operador/operador.page */ 4938);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 8442);
/* harmony import */ var _componentes_selecao_nota_selecao_nota_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/selecao-nota/selecao-nota.component */ 7668);
/* harmony import */ var _componentes_selecao_pedido_selecao_pedido_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/selecao-pedido/selecao-pedido.component */ 8382);
/* harmony import */ var _componentes_selecao_produto_selecao_produto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/selecao-produto/selecao-produto.component */ 4016);
/* harmony import */ var _pages_produtos_produtos_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/produtos/produtos.page */ 1611);


























(0,_angular_common__WEBPACK_IMPORTED_MODULE_16__.registerLocaleData)(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_17__["default"], 'pt');
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent, _pages_planta_planta_page__WEBPACK_IMPORTED_MODULE_6__.PlantaPage, _pages_equipamento_equipamento_page__WEBPACK_IMPORTED_MODULE_5__.EquipamentoPage, _operador_operador_page__WEBPACK_IMPORTED_MODULE_10__.OperadorPage, _selecao_evento_selecao_evento_page__WEBPACK_IMPORTED_MODULE_4__.SelecaoEventoPage, _pages_parada_parada_page__WEBPACK_IMPORTED_MODULE_3__.ParadaPage, _pages_operacao_operacao_page__WEBPACK_IMPORTED_MODULE_2__.OperacaoPage, _pages_finalizar_finalizar_page__WEBPACK_IMPORTED_MODULE_1__.FinalizarPage, _agrupamento_agrupamento_page__WEBPACK_IMPORTED_MODULE_0__.AgrupamentoPage, _pages_produtos_produtos_page__WEBPACK_IMPORTED_MODULE_15__.ProdutosPage],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule],
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_25__.IonicRouteStrategy
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_16__.HashLocationStrategy
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_19__.LOCALE_ID,
    useValue: 'pt'
  }, _pages_planta_planta_page__WEBPACK_IMPORTED_MODULE_6__.PlantaPage, _pages_equipamento_equipamento_page__WEBPACK_IMPORTED_MODULE_5__.EquipamentoPage, _operador_operador_page__WEBPACK_IMPORTED_MODULE_10__.OperadorPage, _selecao_evento_selecao_evento_page__WEBPACK_IMPORTED_MODULE_4__.SelecaoEventoPage, _pages_parada_parada_page__WEBPACK_IMPORTED_MODULE_3__.ParadaPage, _pages_operacao_operacao_page__WEBPACK_IMPORTED_MODULE_2__.OperacaoPage, _pages_finalizar_finalizar_page__WEBPACK_IMPORTED_MODULE_1__.FinalizarPage, _agrupamento_agrupamento_page__WEBPACK_IMPORTED_MODULE_0__.AgrupamentoPage, _nova_mensagem_nova_mensagem_page__WEBPACK_IMPORTED_MODULE_9__.NovaMensagemPage, _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__.FileOpener, _componentes_selecao_nota_selecao_nota_component__WEBPACK_IMPORTED_MODULE_12__.SelecaoNotaComponent, _componentes_selecao_pedido_selecao_pedido_component__WEBPACK_IMPORTED_MODULE_13__.SelecaoPedidoComponent, _componentes_selecao_produto_selecao_produto_component__WEBPACK_IMPORTED_MODULE_14__.SelecaoProdutoComponent, _pages_produtos_produtos_page__WEBPACK_IMPORTED_MODULE_15__.ProdutosPage],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent]
})], AppModule);


/***/ }),

/***/ 7668:
/*!********************************************************************!*\
  !*** ./src/app/componentes/selecao-nota/selecao-nota.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelecaoNotaComponent: () => (/* binding */ SelecaoNotaComponent)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _selecao_nota_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selecao-nota.component.html?ngResource */ 8784);
/* harmony import */ var _selecao_nota_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selecao-nota.component.scss?ngResource */ 5454);
/* harmony import */ var _selecao_nota_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_selecao_nota_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);

var SelecaoNotaComponent_1;






let SelecaoNotaComponent = class SelecaoNotaComponent {
  static {
    SelecaoNotaComponent_1 = this;
  }
  db;
  mc;
  documentos;
  documentosFiltro;
  constructor(db, mc) {
    this.db = db;
    this.mc = mc;
  }
  ngOnInit() {
    this.documentosFiltro = this.documentos;
    console.log(this.documentosFiltro);
    // this.carrega();
  }
  carrega() {}
  busca(evt) {
    this.documentos = this.documentosFiltro.filter(ev => {
      return this.db.compara([ev.fornecedor, ev.cnpj, ev.emissao], evt.detail.value);
    });
  }
  selecionaDocumento(documentos) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.mc.create({
        component: SelecaoNotaComponent_1,
        componentProps: {
          documentos: documentos
        },
        cssClass: 'modal-css'
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  cancela() {
    this.mc.dismiss({
      status: false
    });
  }
  seleciona(documento) {
    this.mc.dismiss({
      status: true,
      documento: documento
    });
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
  }];
  static propDecorators = {
    documentos: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  };
};
SelecaoNotaComponent = SelecaoNotaComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-selecao-nota',
  template: _selecao_nota_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_selecao_nota_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SelecaoNotaComponent);


/***/ }),

/***/ 8382:
/*!************************************************************************!*\
  !*** ./src/app/componentes/selecao-pedido/selecao-pedido.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelecaoPedidoComponent: () => (/* binding */ SelecaoPedidoComponent)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _selecao_pedido_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selecao-pedido.component.html?ngResource */ 842);
/* harmony import */ var _selecao_pedido_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selecao-pedido.component.scss?ngResource */ 1120);
/* harmony import */ var _selecao_pedido_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_selecao_pedido_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);

var SelecaoPedidoComponent_1;






let SelecaoPedidoComponent = class SelecaoPedidoComponent {
  static {
    SelecaoPedidoComponent_1 = this;
  }
  db;
  mc;
  itens;
  notaItem;
  itensFiltro;
  constructor(db, mc) {
    this.db = db;
    this.mc = mc;
  }
  ngOnInit() {
    this.itensFiltro = this.itens;
    console.log(this.itens);
    // this.carrega();
  }
  carrega() {}
  busca(evt) {
    this.itens = this.itensFiltro.filter(ev => {
      return this.db.compara([ev.numeroPedido, ev.codigoItem, ev.descricao, ev.referencia, ev.quantidade], evt.detail.value);
    });
  }
  selecionaPedido(itens, notaItem) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.mc.create({
        component: SelecaoPedidoComponent_1,
        componentProps: {
          itens: itens,
          notaItem: notaItem
        },
        cssClass: 'modal-css'
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  cancela() {
    this.mc.dismiss({
      status: false
    });
  }
  seleciona(item) {
    this.mc.dismiss({
      status: true,
      item: item
    });
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
  }];
  static propDecorators = {
    itens: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    notaItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  };
};
SelecaoPedidoComponent = SelecaoPedidoComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-selecao-pedido',
  template: _selecao_pedido_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_selecao_pedido_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SelecaoPedidoComponent);


/***/ }),

/***/ 4016:
/*!**************************************************************************!*\
  !*** ./src/app/componentes/selecao-produto/selecao-produto.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelecaoProdutoComponent: () => (/* binding */ SelecaoProdutoComponent)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _selecao_produto_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selecao-produto.component.html?ngResource */ 6156);
/* harmony import */ var _selecao_produto_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selecao-produto.component.scss?ngResource */ 2834);
/* harmony import */ var _selecao_produto_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_selecao_produto_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_app_api_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/produto.service */ 5365);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);

var SelecaoProdutoComponent_1;







let SelecaoProdutoComponent = class SelecaoProdutoComponent {
  static {
    SelecaoProdutoComponent_1 = this;
  }
  db;
  mc;
  prdSvc;
  filtro;
  produtos;
  constructor(db, mc, prdSvc) {
    this.db = db;
    this.mc = mc;
    this.prdSvc = prdSvc;
  }
  ngOnInit() {
    //  this.produtosFiltro = this.filtro
    console.log(this.produtos);
    // this.carrega();
  }
  carrega(filtro) {
    var _this = this;
    console.log(filtro);
    if (filtro) {
      this.db.mostraProcessando();
      this.prdSvc.Lista({
        token: this.db.getToken(),
        filter: filtro
      }).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ret) {
          _this.db.escondeProcessando();
          if (ret.status) {
            console.log("ret", ret);
            _this.produtos = ret.produtos;
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), err => this.db.escondeProcessando(err.error));
    } else {
      this.db.setMensagem('Escolha um filtro para buscar');
    }
  }
  busca(evt) {
    this.produtos = this.produtos.filter(ev => {
      return this.db.compara([ev.numeroPedido, ev.codigoItem], evt.detail.value);
    });
  }
  selecionaProduto(produtos) {
    var _this2 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.mc.create({
        component: SelecaoProdutoComponent_1,
        componentProps: {
          produtos: produtos
        },
        cssClass: 'modal-css'
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  cancela() {
    this.mc.dismiss({
      status: false
    });
  }
  seleciona(produto) {
    this.mc.dismiss({
      status: true,
      produto: produto
    });
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__.DbService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }, {
    type: src_app_api_produto_service__WEBPACK_IMPORTED_MODULE_3__.ProdutoService
  }];
  static propDecorators = {
    filtro: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  };
};
SelecaoProdutoComponent = SelecaoProdutoComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-selecao-produto',
  template: _selecao_produto_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_selecao_produto_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SelecaoProdutoComponent);


/***/ }),

/***/ 118:
/*!********************************************!*\
  !*** ./src/app/guards/load-setup.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadSetupGuard: () => (/* binding */ LoadSetupGuard),
/* harmony export */   SERVER_KEY: () => (/* binding */ SERVER_KEY),
/* harmony export */   _SERVER: () => (/* binding */ _SERVER)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


const SERVER_KEY = '_SERVER';
var _SERVER = '';


let LoadSetupGuard = class LoadSetupGuard {
  router;
  constructor(router) {
    this.router = router;
  }
  canLoad() {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const server = yield localStorage.getItem("_SERVER");
      console.log(server);
      if (server && server !== '') {
        _this.setServer(server);
        return true;
      } else {
        _this.router.navigateByUrl('/setup');
        return false;
      }
    })();
  }
  setServer(server) {
    _SERVER = server;
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
  }];
};
LoadSetupGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], LoadSetupGuard);


/***/ }),

/***/ 340:
/*!*****************************************************!*\
  !*** ./src/app/nova-mensagem/nova-mensagem.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NovaMensagemPage: () => (/* binding */ NovaMensagemPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _nova_mensagem_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nova-mensagem.page.html?ngResource */ 2576);
/* harmony import */ var _nova_mensagem_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nova-mensagem.page.scss?ngResource */ 9004);
/* harmony import */ var _nova_mensagem_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nova_mensagem_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _api_mensagem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/mensagem.service */ 2300);
/* harmony import */ var _api_producao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/producao.service */ 4561);
/* harmony import */ var _storage_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage/db.service */ 5193);

var NovaMensagemPage_1;








let NovaMensagemPage = class NovaMensagemPage {
  static {
    NovaMensagemPage_1 = this;
  }
  mc;
  msgSvc;
  prdSvc;
  db;
  equipamento;
  mensagem;
  centrosCusto;
  equipamentos;
  constructor(mc, msgSvc, prdSvc, db) {
    this.mc = mc;
    this.msgSvc = msgSvc;
    this.prdSvc = prdSvc;
    this.db = db;
  }
  ngOnInit() {
    this.carrega();
  }
  EnviaMsg() {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.msgSvc.EnviaMensagem({
        token: _this.db.getToken(),
        idContato: 22,
        mensagem: _this.mensagem
      }).subscribe(ret => {
        console.log(ret);
        _this.mc.dismiss({
          status: true
        });
      }, err => _this.db.escondeProcessando(err.error));
    })();
  }
  cancela() {
    this.mc.dismiss({
      status: false
    });
  }
  novaMensagem() {
    var _this2 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.mc.create({
        component: NovaMensagemPage_1
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  carrega() {
    if (this.db.autenticado() && !this.db?.centrosCusto) {
      //      if (!this.db.clientes || forcaCarga) {
      this.db.mostraProcessando();
      this.prdSvc.CentroCustoLista({
        token: this.db.token,
        idPlanta: 1
        //this.db.planta.id,
      }).subscribe(ret => {
        this.db.escondeProcessando();
        if (ret.status) {
          this.db.centrosCusto = ret.centrosCusto;
          this.centrosCusto = ret.centrosCusto;
          //              this.centrosDb = ret.centrosCusto;
          //              this.centros = this.centrosDb;
          console.log(this.centrosCusto[0].equipamentos);
          this.equipamentos = this.centrosCusto[0].equipamentos;
        }
      }, err => this.db.escondeProcessando(err.error));
    } else {
      console.log('passou');
      this.equipamentos = this.db.centrosCusto[0].equipamentos;
    }
  }
  static ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }, {
    type: _api_mensagem_service__WEBPACK_IMPORTED_MODULE_3__.MensagemService
  }, {
    type: _api_producao_service__WEBPACK_IMPORTED_MODULE_4__.ProducaoService
  }, {
    type: _storage_db_service__WEBPACK_IMPORTED_MODULE_5__.DbService
  }];
};
NovaMensagemPage = NovaMensagemPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-nova-mensagem',
  template: _nova_mensagem_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_nova_mensagem_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], NovaMensagemPage);


/***/ }),

/***/ 4938:
/*!*******************************************!*\
  !*** ./src/app/operador/operador.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperadorPage: () => (/* binding */ OperadorPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _operador_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operador.page.html?ngResource */ 8214);
/* harmony import */ var _operador_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operador.page.scss?ngResource */ 9474);
/* harmony import */ var _operador_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_operador_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _api_producao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/producao.service */ 4561);
/* harmony import */ var _storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/db.service */ 5193);

var OperadorPage_1;







let OperadorPage = class OperadorPage {
  static {
    OperadorPage_1 = this;
  }
  db;
  prdSvc;
  mc;
  idEquipamento;
  operadores;
  operadoresCarga;
  constructor(db, prdSvc, mc) {
    this.db = db;
    this.prdSvc = prdSvc;
    this.mc = mc;
  }
  ngOnInit() {}
  ionViewDidEnter() {
    this.carrega();
  }
  carrega() {
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
      this.db.mostraProcessando();
      this.prdSvc.TrocaOperadorLista({
        token: this.db.token,
        idEquipamento: this.idEquipamento
      }).subscribe(ret => {
        this.db.escondeProcessando();
        if (ret.status) {
          this.operadores = ret.operadores;
          this.operadoresCarga = ret.operadores;
        }
      }, err => this.db.escondeProcessando(err.error));
    }
  }
  busca(evt) {
    this.operadores = this.operadoresCarga.filter(oper => {
      return this.db.compara([oper.usuario], evt.detail.value);
    });
  }
  selecionaOperador(idEquip) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.mc.create({
        component: OperadorPage_1,
        componentProps: {
          idEquipamento: idEquip
        }
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  cancela() {
    this.mc.dismiss({
      status: false
    });
  }
  seleciona(oper) {
    this.mc.dismiss({
      status: true,
      operador: oper
    });
  }
  static ctorParameters = () => [{
    type: _storage_db_service__WEBPACK_IMPORTED_MODULE_4__.DbService
  }, {
    type: _api_producao_service__WEBPACK_IMPORTED_MODULE_3__.ProducaoService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }];
};
OperadorPage = OperadorPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-operador',
  template: _operador_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_operador_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], OperadorPage);


/***/ }),

/***/ 401:
/*!*******************************************************!*\
  !*** ./src/app/pages/equipamento/equipamento.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EquipamentoPage: () => (/* binding */ EquipamentoPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _equipamento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipamento.page.html?ngResource */ 9611);
/* harmony import */ var _equipamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipamento.page.scss?ngResource */ 3943);
/* harmony import */ var _equipamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_equipamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/producao.service */ 4561);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);

var EquipamentoPage_1;








let EquipamentoPage = class EquipamentoPage {
  static {
    EquipamentoPage_1 = this;
  }
  db;
  prdSvc;
  route;
  router;
  mc;
  idPlanta;
  nomePlanta;
  centrosCusto;
  constructor(db, prdSvc, route, router, mc) {
    /*
      this.route.queryParams.subscribe(params => {
        let getNav = this.router.getCurrentNavigation();
        if (getNav.extras.state) {
          this.idPlanta = getNav.extras.state.valorParaEnviar;
        }
      });
    */
    this.db = db;
    this.prdSvc = prdSvc;
    this.route = route;
    this.router = router;
    this.mc = mc;
    this.idPlanta = this.db.getIdPlanta();
    this.nomePlanta = this.db.getNomePlanta();
  }
  ngOnInit() {
    this.carrega();
  }
  /*
   async selecionaEquipamento() {
     const modal = await this.mc.create({
       component: SelecaoClientePage,
     });
     await modal.present();
     this.db.setClassificacoes(null);
     this.db.setClassificacoesCliente(null);
     //    this.classificacoes = null
     this.db.documentos = null;
     //    this.classificacao = null
     return await modal.onWillDismiss();
   }
  */
  carrega() {
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
      this.db.mostraProcessando();
      this.prdSvc.CentroCustoLista({
        token: this.db.token,
        idPlanta: this.idPlanta
      }).subscribe(ret => {
        this.db.escondeProcessando();
        if (ret.status) {
          for (let i = 0; i < ret.centrosCusto.length; i++) {
            ret.centrosCusto[i].strEquipamentos = '';
            for (let j = 0; j < ret.centrosCusto[i].equipamentos.length; j++) {
              ret.centrosCusto[i].strEquipamentos += ret.centrosCusto[i].equipamentos[j].descricao + ';';
            }
          }
          this.db.centrosCusto = ret.centrosCusto;
          this.centrosCusto = ret.centrosCusto;
          //              this.centrosDb = ret.centrosCusto;
          //              this.centros = this.centrosDb;
          // console.log(this.centros)
        }
      }, err => this.db.escondeProcessando(err.error));
    }
  }
  busca(evt) {
    this.centrosCusto = this.db.centrosCusto.filter(cc => {
      return this.db.compara([cc.descricao, cc.strEquipamentos], evt.detail.value);
    });
  }
  selecionaEquipamento(idPlanta) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.mc.create({
        component: EquipamentoPage_1,
        componentProps: {
          idPlanta: idPlanta
        }
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  cancela() {
    this.mc.dismiss({
      status: false
    });
  }
  seleciona(equip) {
    this.db.setEquipamento(equip);
    this.mc.dismiss({
      status: true,
      equipamento: equip
    });
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__.DbService
  }, {
    type: src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_3__.ProducaoService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }];
  static propDecorators = {
    idPlanta: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  };
};
EquipamentoPage = EquipamentoPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: "app-equipamento",
  template: _equipamento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_equipamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], EquipamentoPage);


/***/ }),

/***/ 393:
/*!***************************************************!*\
  !*** ./src/app/pages/finalizar/finalizar.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinalizarPage: () => (/* binding */ FinalizarPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _finalizar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finalizar.page.html?ngResource */ 979);
/* harmony import */ var _finalizar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finalizar.page.scss?ngResource */ 3743);
/* harmony import */ var _finalizar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_finalizar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/producao.service */ 4561);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);

var FinalizarPage_1;








let FinalizarPage = class FinalizarPage {
  static {
    FinalizarPage_1 = this;
  }
  db;
  prdSvc;
  mc;
  idRecurso;
  idEventoInicio;
  idsProgramacao = [];
  operacoes = [];
  status;
  qtdRepeticoes;
  semProducao = false;
  frmFinaliza = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
  frmRepet = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
  constructor(db, prdSvc, mc) {
    this.db = db;
    this.prdSvc = prdSvc;
    this.mc = mc;
  }
  ngOnInit() {
    this.carrega();
  }
  carrega() {
    if (this.db.autenticado()) {
      if (this.idEventoInicio) {} else {
        this.db.mostraProcessando();
        this.prdSvc.GetStatus({
          token: this.db.token,
          idRecurso: this.idRecurso
        }).subscribe(ret => {
          if (ret) {
            this.status = ret.statusRecurso;
            this.semProducao = false;
            this.idsProgramacao = ret.statusRecurso.idsProgramacao;
            this.qtdRepeticoes = +ret.statusRecurso.repeticoesAgrupamento;
            this.operacoes = [];
            this.prdSvc.GetOperacoes({
              token: this.db.token,
              operacoes: this.idsProgramacao
            }).subscribe(ret => {
              this.db.escondeProcessando();
              this.operacoes = ret.operacoes;
              for (let i = 0; i < this.operacoes.length; i++) {
                this.operacoes[i].quantidadeFabricada = +this.operacoes[i].quantidade;
                this.operacoes[i].quantidadeNaoConforme = 0;
              }
              console.log(this.operacoes);
            });
          } else this.db.escondeProcessando(ret.error);
        }, err => this.db.escondeProcessando(err.error));
      }
    }
  }
  trocaQtd(ev) {
    console.log(ev.target.value);
  }
  finalizarSemProducao() {
    this.semProducao = !this.semProducao;
    for (let i = 0; i < this.operacoes.length; i++) {
      if (this.semProducao) this.operacoes[i].quantidadeFabricada = 0;else this.operacoes[i].quantidadeFabricada = +this.operacoes[i].quantidade;
      this.operacoes[i].quantidadeNaoConforme = 0;
    }
  }
  selecionaEvento(idEventoInicio) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.mc.create({
        component: FinalizarPage_1,
        componentProps: {
          idEventoInicio: idEventoInicio
        },
        cssClass: 'modal-css'
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  selecionaFinalizar(idRecurso) {
    var _this2 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.mc.create({
        component: FinalizarPage_1,
        componentProps: {
          idRecurso: idRecurso
        },
        cssClass: 'modal-css'
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  cancela() {
    this.mc.dismiss({
      status: false
    });
  }
  alteraQtdRepeticoes(ev) {
    let qtd = +ev.srcElement.value;
    if (qtd < 0) qtd = 0;else if (qtd > +this.status.repeticoesAgrupamento) qtd = +this.status.repeticoesAgrupamento;
    this.qtdRepeticoes = qtd;
    for (let i = 0; i < this.operacoes.length; i++) {
      let qtdFab = (this.operacoes[i], this.operacoes[i].quantidade / this.status.repeticoesAgrupamento * qtd);
      if (qtdFab > this.operacoes[i].quantidade) qtdFab = +this.operacoes[i].quantidade;
      this.operacoes[i].quantidadeFabricada = qtdFab;
      this.operacoes[i].quantidadeNaoConforme = 0;
    }
  }
  alteraQtdFabricada(op, ev) {
    let qtd = +ev.srcElement.value;
    if (qtd < 0) qtd = 0;else if (qtd > +op.quantidade) {
      qtd = +op.quantidade;
    }
    op.quantidadeFabricada = qtd;
    if (qtd + op.quantidadeNaoConforme > +op.quantidade) op.quantidadeNaoConforme = +op.quantidade - qtd;
  }
  alteraQtdNaoConforme(op, ev) {
    let qtd = +ev.srcElement.value;
    if (qtd < 0) qtd = 0;else if (qtd > +op.quantidade) {
      qtd = +op.quantidade;
    }
    op.quantidadeNaoConforme = qtd;
    if (qtd + op.quantidadeFabricada > +op.quantidade) op.quantidadeFabricada = +op.quantidade - qtd;
    //op.quantidadeFabricada = +op.quantidade - qtd
  }
  finalizar() {
    for (let i = 0; i < this.operacoes.length; i++) {
      if (this.operacoes[i].quantidadeNaoConforme > 0 && this.operacoes[i].motivo == null) return false;
    }
    let oper = [];
    for (let i = 0; i < this.operacoes.length; i++) {
      let op = {
        id: this.operacoes[i].id,
        quantidadeFabricada: this.operacoes[i].quantidadeFabricada,
        quantidadeNaoConforme: this.operacoes[i].quantidadeNaoConforme,
        motivoNaoConforme: this.operacoes[i].motivo
      };
      oper.push(op);
    }
    console.log(oper);
    this.db.mostraProcessando();
    this.prdSvc.FinalizaOperacao({
      token: this.db.token,
      idRecurso: this.idRecurso,
      operacoes: oper
    }).subscribe(ret => {
      this.db.escondeProcessando();
      if (ret.status) {
        this.mc.dismiss({
          status: true
        });
      }
    }, err => this.db.escondeProcessando(err.error));
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__.DbService
  }, {
    type: src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_3__.ProducaoService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }];
  static propDecorators = {
    idRecurso: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    idEventoInicio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  };
};
FinalizarPage = FinalizarPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: "app-finalizar",
  template: _finalizar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_finalizar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], FinalizarPage);


/***/ }),

/***/ 3551:
/*!*************************************************!*\
  !*** ./src/app/pages/operacao/operacao.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperacaoPage: () => (/* binding */ OperacaoPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _operacao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operacao.page.html?ngResource */ 2273);
/* harmony import */ var _operacao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operacao.page.scss?ngResource */ 1173);
/* harmony import */ var _operacao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_operacao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _agrupamento_agrupamento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../agrupamento/agrupamento.page */ 8040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/producao.service */ 4561);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);

var OperacaoPage_1;








let OperacaoPage = class OperacaoPage {
  static {
    OperacaoPage_1 = this;
  }
  db;
  prdSvc;
  mc;
  agr;
  idEquipamento;
  permiteApontar = false;
  operacoes;
  operacoesIni;
  opsSelecionadas = [];
  opsAgrupadas = [];
  statusOFIndividual = 2;
  constructor(db, prdSvc, mc, agr) {
    this.db = db;
    this.prdSvc = prdSvc;
    this.mc = mc;
    this.agr = agr;
  }
  ngOnInit() {
    this.filtra();
  }
  filtra(mostraTodos = false) {
    console.log('filtrando');
    if (this.db.filtroAgrupamento == '' && this.db.filtroOrdem == '' && this.db.filtroPedido == '' && this.db.filtroPeca == '' && !mostraTodos) {
      this.operacoes = [];
      this.operacoesIni = [];
    } else {
      this.carrega(this.db.filtroAgrupamento, this.db.filtroOrdem, this.db.filtroPedido, this.db.filtroPeca);
    }
  }
  agrupa() {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let ops = [];
      for (let i = 0; i < _this.opsSelecionadas.length; i++) {
        for (let j = 0; j < _this.opsSelecionadas[i].idsProgramacao.length; j++) {
          ops.push(+_this.opsSelecionadas[i].idsProgramacao[j]);
        }
      }
      const ret = yield _this.agr.selecionaAgrupar(ops);
      if (ret.data.status) {
        _this.carrega(_this.db.filtroOrdem, _this.db.filtroPedido, _this.db.filtroPeca);
      }
    })();
  }
  desagrupa() {
    let agrupou = false;
    for (let i = 0; i < this.opsAgrupadas.length; i++) {
      this.prdSvc.DesagrupaOperacoes({
        token: this.db.token,
        idAgrupamento: this.opsAgrupadas[i].idAgrupamento
      }).subscribe(ret => {
        if (ret.status) {
          agrupou = true;
          this.db.escondeProcessando();
          this.carrega(this.db.filtroOrdem, this.db.filtroPedido, this.db.filtroPeca);
        }
      });
    }
  }
  aponta() {
    let ops = [];
    let idAgrupamento = 0;
    if (this.opsSelecionadas.length > 0) ops = this.opsSelecionadas;else {
      ops = this.opsAgrupadas;
      idAgrupamento = this.opsAgrupadas[0].idAgrupamento;
    }
    this.mc.dismiss({
      status: true,
      operacoes: ops,
      idAgrupamento: idAgrupamento
    });
  }
  adicionaOperacaoExtra() {
    console.log('adicionando');
    if (this.db.autenticado()) {
      this.db.mostraProcessando();
      this.prdSvc.AdicionaOperacaoExtra({
        token: this.db.token,
        idEquipamento: this.idEquipamento,
        ordem: this.db.filtroOrdem
      }).subscribe(ret => {
        this.db.escondeProcessando();
        if (ret.status) {
          console.log("ret", ret);
          this.filtra();
        }
      }, err => this.db.escondeProcessando(err.error));
    }
  }
  carrega(agrupamento = null, ordem = null, pedido = null, peca = null) {
    if (this.db.autenticado()) {
      this.statusOFIndividual = 2;
      this.db.mostraProcessando();
      this.prdSvc.GetOperacoesLiberadas({
        token: this.db.token,
        idEquipamento: this.idEquipamento,
        ordem: ordem,
        pedido: pedido,
        peca: peca,
        agrupamento: agrupamento
      }).subscribe(ret => {
        this.db.escondeProcessando();
        if (ret.status) {
          console.log("ret", ret);
          /*
          //// Verificar se opsAgrupadas não for vazia selecionar do retorno
          this.opsAgrupadas.filter((op)=> {
            ret.operacoes.findIndex(op)
          })
                 for(let i = 0; i< ret.operacoes.length; i++) {
            ret.operacoes[i].isChecked = this.opsAgrupadas.filter
            if(ret.operacoes[i])
            op.isChecked if()
          }
          */
          this.opsAgrupadas = [];
          this.opsSelecionadas = [];
          this.operacoes = ret.operacoes;
          this.operacoesIni = ret.operacoes;
          //              console.log(ret);
          if (ret.statusOFIndividual) {
            this.statusOFIndividual = ret.statusOFIndividual;
          }
        }
      }, err => this.db.escondeProcessando(err.error));
    }
  }
  busca(evt) {
    this.operacoes = this.operacoesIni.filter(op => {
      return this.db.compara([op.agrupamento, op.complemento, op.complemento2], evt.detail.value);
    });
  }
  check(op, event) {
    if (!op.isChecked) {
      if (op.idAgrupamento && this.opsSelecionadas.length > 0 || !op.idAgrupamento && this.opsAgrupadas.length > 0) {
        this.db.setMensagem('Não é possível selecionar Operações agrupadas e Não Agrupadas');
        op.isChecked = false;
      } else {
        if (!op.idAgrupamento) this.opsSelecionadas.push(op);else this.opsAgrupadas.push(op);
        op.isChecked = true;
      }
    } else {
      op.isChecked = false;
      if (!op.idAgrupamento) this.opsSelecionadas = this.opsSelecionadas.filter(o => {
        return o !== op;
      });else this.opsAgrupadas = this.opsAgrupadas.filter(o => {
        return o !== op;
      });
    }
  }
  selecionaOperacao(_x) {
    var _this2 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (idEquipamento, permiteApontar = false) {
      const modal = yield _this2.mc.create({
        component: OperacaoPage_1,
        componentProps: {
          idEquipamento: idEquipamento,
          permiteApontar: permiteApontar
        },
        cssClass: 'modal-css'
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    }).apply(this, arguments);
  }
  cancela() {
    this.mc.dismiss({
      status: false
    });
  }
  seleciona(op) {
    this.mc.dismiss({
      status: true,
      operacao: op
    });
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_5__.DbService
  }, {
    type: src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_4__.ProducaoService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }, {
    type: _agrupamento_agrupamento_page__WEBPACK_IMPORTED_MODULE_3__.AgrupamentoPage
  }];
  static propDecorators = {
    idEquipamento: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    permiteApontar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  };
};
OperacaoPage = OperacaoPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: "app-operacao",
  template: _operacao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_operacao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], OperacaoPage);


/***/ }),

/***/ 5497:
/*!*********************************************!*\
  !*** ./src/app/pages/parada/parada.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParadaPage: () => (/* binding */ ParadaPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _parada_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parada.page.html?ngResource */ 9707);
/* harmony import */ var _parada_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parada.page.scss?ngResource */ 2959);
/* harmony import */ var _parada_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parada_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _selecao_evento_selecao_evento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../selecao-evento/selecao-evento.page */ 6062);
/* harmony import */ var src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/producao.service */ 4561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);

var ParadaPage_1;









let ParadaPage = class ParadaPage {
  static {
    ParadaPage_1 = this;
  }
  db;
  alertController;
  router;
  prdSvc;
  mc;
  selecEv;
  idAgrupador;
  idRecurso;
  operacoes = [];
  idAgrupamento;
  evento;
  motivo;
  complemento = "";
  constructor(db, alertController, router, prdSvc, mc, selecEv) {
    this.db = db;
    this.alertController = alertController;
    this.router = router;
    this.prdSvc = prdSvc;
    this.mc = mc;
    this.selecEv = selecEv;
  }
  ngOnInit() {}
  parada() {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.evento || _this.evento.complementoObrigatorio && (!_this.complemento || _this.complemento == "")) {
        _this.db.setMensagem("Obrigatório selecionar motivo e informar complemento");
        return false;
      } else {
        _this.db.registraEvento(_this.idRecurso, _this.evento.id, _this.complemento, _this.operacoes, _this.idAgrupamento).subscribe(ret => {
          _this.db.escondeProcessando();
          if (ret.status) {
            _this.close(true);
            _this.db.escondeProcessando();
          }
        }, err => _this.db.escondeProcessando(err.error));
      }
    })();
  }
  selecionaParada(idRecurso, idAgrupador, operacoes, idAgrupamento) {
    var _this2 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.mc.create({
        component: ParadaPage_1,
        componentProps: {
          idRecurso: idRecurso,
          idAgrupador: idAgrupador,
          operacoes: operacoes,
          idAgrupamento: idAgrupamento
        }
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  close(status = false) {
    this.mc.dismiss({
      status: status
    });
  }
  selecionaEvento() {
    var _this3 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ret = yield _this3.selecEv.selecionaEvento(_this3.idRecurso, _this3.idAgrupador);
      if (ret.data.status) {
        _this3.evento = ret.data.evento;
      }
    })();
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_5__.DbService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_4__.ProducaoService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }, {
    type: _selecao_evento_selecao_evento_page__WEBPACK_IMPORTED_MODULE_3__.SelecaoEventoPage
  }];
  static propDecorators = {
    idAgrupador: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    idRecurso: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    operacoes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    idAgrupamento: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }]
  };
};
ParadaPage = ParadaPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: "app-parada",
  template: _parada_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_parada_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ParadaPage);


/***/ }),

/***/ 4283:
/*!*********************************************!*\
  !*** ./src/app/pages/planta/planta.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlantaPage: () => (/* binding */ PlantaPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _planta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planta.page.html?ngResource */ 9525);
/* harmony import */ var _planta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planta.page.scss?ngResource */ 4181);
/* harmony import */ var _planta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_planta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/producao.service */ 4561);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);

var PlantaPage_1;








let PlantaPage = class PlantaPage {
  static {
    PlantaPage_1 = this;
  }
  db;
  prdSvc;
  router;
  mc;
  plantas;
  plantasDB;
  navCtr;
  constructor(db, prdSvc, router, mc) {
    this.db = db;
    this.prdSvc = prdSvc;
    this.router = router;
    this.mc = mc;
  }
  ngOnInit() {
    //    this.carrega();
  }
  ionViewDidEnter() {
    this.carrega();
    //    this.carregaStatus()
  }
  carrega() {
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
      this.db.mostraProcessando();
      this.prdSvc.PlantaLista({
        token: this.db.token
      }).subscribe(ret => {
        this.db.escondeProcessando(ret.error);
        if (ret.status) {
          this.db.plantas = ret.plantas;
          this.plantas = ret.plantas;
          if (this.plantas.length == 1) {
            this.seleciona(this.plantas[0]);
            this.mc.dismiss({
              status: true
            });
          }
        }
      }, err => this.db.escondeProcessando(err.error));
    }
  }
  busca(evt) {
    this.plantas = this.db.plantas.filter(plt => {
      return this.db.compara([plt.descricao], evt.detail.value);
    });
  }
  selecionaPlanta() {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.mc.create({
        component: PlantaPage_1
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  cancela() {
    this.mc.dismiss({
      status: false
    });
  }
  seleciona(planta) {
    this.db.setPlanta(planta);
    this.mc.dismiss({
      status: true,
      planta: planta
    });
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__.DbService
  }, {
    type: src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_3__.ProducaoService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }];
};
PlantaPage = PlantaPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: "app-planta",
  template: _planta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_planta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PlantaPage);


/***/ }),

/***/ 1611:
/*!*************************************************!*\
  !*** ./src/app/pages/produtos/produtos.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProdutosPage: () => (/* binding */ ProdutosPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _produtos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produtos.page.html?ngResource */ 9109);
/* harmony import */ var _produtos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./produtos.page.scss?ngResource */ 1801);
/* harmony import */ var _produtos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_produtos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/filesystem */ 3474);
/* harmony import */ var src_app_api_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/app.service */ 8467);
/* harmony import */ var src_app_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/load-setup.guard */ 118);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 8442);

var ProdutosPage_1;










//import { checkEncoding } from '_node_modules/smart-buffer/typings/utils';

let ProdutosPage = class ProdutosPage {
  static {
    ProdutosPage_1 = this;
  }
  db;
  appSvc;
  plt;
  http;
  file;
  mc;
  referencia;
  produtos;
  // public referencia: string
  descricao;
  uri;
  constructor(db, appSvc, plt, http, file, mc) {
    this.db = db;
    this.appSvc = appSvc;
    this.plt = plt;
    this.http = http;
    this.file = file;
    this.mc = mc;
  }
  ngOnInit() {
    if (this.referencia || this.descricao) {
      this.buscarProduto();
    }
  }
  buscarProduto() {
    //let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMasdfasidasdfasdgadgsdfgyJpYXQiOnsiZGF0ZSI6IjIwMjItMDItMDggMTk6NDY6MzQuMDAwMDAwIiwidGltZXpvbmVfdHlwZSI6MywidGltZXpvbmUiOiJBbWVyaWNhXC9CdWVub3NfQWlyZXMifSwiaXNzIjoicmV2YWxzZXJyYXMuY29tLmJyIiwibmJmIjp7ImRhdGUiOiIyMDIyLTAyLTA4IDE5OjQ2OjM0LjAwMDAwMCIsInRpbWV6b25lX3R5cGUiOjMsInRpbWV6b25lIjoiQW1lcmljYVwvQnVlbm9zX0FpcmVzIn0sImV4cCI6MTY0Njk1MjM5NCwiZGF0YSI6eyJpZCI6IjEiLCJ1c3VhcmlvIjoiUk9EUklHTyIsInRpcG8iOiIyIiwibGFuZyI6InB0LWJyIn19.dkk7R2ZX3ewHCTxS5CyinaDPcfAP310wuF-I3kgKQCAz7gqJIujFtYIA8QWlJSAOMKQj"
    if (this.referencia || this.descricao) {
      this.db.mostraProcessando();
      this.appSvc.GetDocumentos({
        token: this.db.getToken(),
        tabela: "ProdutoServico",
        referencia: this.referencia,
        descricao: this.descricao
      }).subscribe(ret => {
        this.db.escondeProcessando();
        if (ret.status) {
          console.log("ret", ret);
          this.produtos = ret.produtos;
        }
      }, err => this.db.escondeProcessando(err.error));
    } else {
      this.db.setMensagem('Escolha uma referência ou descrição');
    }
  }
  getIcone(rotulo) {
    let extensao = rotulo.split(".");
    if (extensao[1] && extensao[1].toUpperCase() == "PDF") {
      return "/assets/pdf.png";
    }
    if (extensao[1] && extensao[1].toUpperCase() == "DXF") {
      return "/assets/dwg.png";
    }
    if (extensao[1] && extensao[1].toUpperCase() == "TXT") {
      return "/assets/txt.png";
    }
    return "";
  }
  abrirDocumento(link, codigo) {
    console.log(link);
    let conteudo = src_app_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_5__._SERVER + "/app/v1/App/GetDocumento?link=" + link;
    if (this.plt.is('android') && this.plt.is('capacitor'))
      // only change for iOS
      conteudo = src_app_guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_5__._SERVER + "/app/v1/App/GetDocumento2?link=" + link;
    //  this.salvaArquivo(conteudo, link)
    //  window.open(conteudo)
    this.abreDocumento(this.db.getToken(), codigo, conteudo);
    // this.fileWrite('dowload.sev', conteudo)
  }
  b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, {
      type: contentType
    });
    return blob;
  };
  downloadFile(urlArquivo) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders().append('Content-Type', 'application/octet-stream').append('Access-Control-Allow-Headers', 'Content-Type').append('Access-Control-Allow-Methods', 'GET').append('Access-Control-Allow-Origin', '*');
    const headers2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders({
      'Content-Type': 'application/octet-stream',
      // Adjust content type based on your API requirements
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*' // Allow requests from any origin (not recommended for production)
      // Add any other required headers here
    });
    console.log(headers);
    console.log(headers2);
    return this.http.get(urlArquivo, {
      headers: headers2,
      responseType: 'arraybuffer'
    });
  }
  blobToString(blob) {
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result;
          resolve(result);
        };
        reader.onerror = () => {
          reject('Error reading Blob as text.');
        };
        reader.readAsText(blob);
      });
    })();
  }
  saveFileLocally(blob, fileName) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //    const data = new Blob([blob], { type: 'application/octet-stream'})
      //const aData = utf8Encode(blob)
      //    foreach()
      //    const sData =      const binaryData = new Uint8Array(response);
      //    utf8 (blob); //await this.blobToString(data)
      //    let binary = '';
      let sData = '';
      const bytes = new Uint8Array(blob); //utf8Encode(blob);   
      const len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        sData += String.fromCharCode(bytes[i]);
      }
      //    fileName = "LD.pdf"// fileName
      //console.log(111)
      //console.log(bytes)
      //console.log(2222)
      //console.log(sData)
      //console.log(333)
      const base64Data = window.btoa(sData);
      console.log(base64Data);
      console.log(_capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__.Directory.Data);
      try {
        console.log("antes de salvar");
        _this.uri = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__.Filesystem.writeFile({
          path: fileName,
          data: base64Data,
          //  encoding: FilesystemEncoding.ASCII,
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__.Directory.Data,
          recursive: true
        });
        console.log("depois de salvar");
      } catch (error) {
        console.error("Erro ao salvar o arquivo: ", error);
        throw new Error("Não foi possível salvar o arquivo localmente.");
      }
    })();
  }
  getFilename(fullPath) {
    return fullPath.substring(fullPath.lastIndexOf('\\') + 1);
  }
  openFile(fileName) {
    var _this2 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("antes de open");
      const path = _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__.Directory.Data + "/" + fileName;
      // await Browser.open({ url: path });
      _this2.file.open(_this2.uri.uri, _this2.getMimeType(fileName)).then(() => console.log('file is opened')).catch(error => console.log('error opening file', error));
      console.log("depois do open2");
    })();
  }
  // Interno
  abreDocumento(token, codigo, conteudo) {
    /*  this.db.mostraProcessando();
       this.appSvc.GetDocumento({
         token: token,
         codigoDocumento: id,
         tipoRetorno: 1,
       })
         .subscribe((ret) => {
           this.fileWrite(ret.titulo, ret.conteudo)
           this.db.escondeProcessando()
         //  callback();
         }, (err) => this.db.escondeProcessando(err.error)
         ); */
    if (this.plt.is('android') && this.plt.is('capacitor')) {
      // only change for iOS
      //conteudo = "http://filtroar.duckdns.org:17880/app/v1/13025.pdf"
      console.log(conteudo);
      //      this.db.mostraProcessando();
      let fileName = "Apponta/" + this.getFilename(conteudo);
      this.downloadFile(conteudo).subscribe(blob => {
        this.saveFileLocally(blob, fileName).then(() => {
          this.openFile(fileName);
        });
      });
      console.log(codigo);
      //      this.fileWrite(codigo, conteudo
    } else this.salvaArquivo(conteudo, codigo);
  }
  getMimeType(nomeArq) {
    const extensao = nomeArq.split('.');
    switch (extensao[1]) {
      case 'pdf':
        {
          return 'application/pdf';
        }
      case 'txt':
        {
          return 'text/plain';
        }
      case 'doc':
        {
          return 'application/msword';
        }
      case 'doc':
        {
          return 'application/msword';
        }
      case 'ppt':
        {
          return 'application/vnd.ms-powerpoint';
        }
      case 'rtf':
        {
          return 'application/rtf';
        }
      case 'xls':
        {
          return 'application/vnd.ms-excel';
        }
      case 'png':
        {
          return 'image/png';
        }
      case 'jpg':
        {
          return 'image/jpeg';
        }
      case 'jpeg':
        {
          return 'image/jpeg';
        }
      default:
        {
          return 'application/octet-stream';
        }
    }
  }
  salvaArquivo(conteudo, nomeArq) {
    var a;
    //  var text = this.b64toBlob(conteudo)
    var data = conteudo;
    a = document.createElement('a');
    a.setAttribute('download', nomeArq);
    a.href = "";
    var url = data;
    a.href = url;
    console.log(a);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  fileWrite(nome, conteudo) {
    var _this3 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        /*
              const result = await Filesystem.writeFile({
                path: nome,
                data: conteudo,
                directory: FilesystemDirectory.Documents,
              })*/
        /*
        await Filesystem.deleteFile({
          path: nome,
          directory: FilesystemDirectory.Documents
        });
        */
        const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__.Filesystem.writeFile({
          path: nome,
          data: conteudo,
          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__.Directory.Data
        });
        const path = savedFile.uri;
        console.log(path);
        const mimeType = _this3.getMimeType(nome);
        /* this.file.open(path, mimeType)
           .then(() => console.log('file is opened'))
           .catch(error => console.log('error opening file', error));*/
      } catch (e) {
        console.log('erro: ' + e);
      }
    })();
  }
  SelecionaProduto(referencia) {
    var _this4 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.mc.create({
        component: ProdutosPage_1,
        componentProps: {
          referencia: referencia
        },
        cssClass: 'modal-css'
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  cancela() {
    this.mc.dismiss({
      status: false
    });
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_6__.DbService
  }, {
    type: src_app_api_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
  }, {
    type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__.FileOpener
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
  }];
  static propDecorators = {
    referencia: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }]
  };
};
ProdutosPage = ProdutosPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-produtos',
  template: _produtos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_produtos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ProdutosPage);


/***/ }),

/***/ 6062:
/*!*******************************************************!*\
  !*** ./src/app/selecao-evento/selecao-evento.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelecaoEventoPage: () => (/* binding */ SelecaoEventoPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _selecao_evento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selecao-evento.page.html?ngResource */ 3386);
/* harmony import */ var _selecao_evento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selecao-evento.page.scss?ngResource */ 9998);
/* harmony import */ var _selecao_evento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_selecao_evento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/producao.service */ 4561);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);

var SelecaoEventoPage_1;







let SelecaoEventoPage = class SelecaoEventoPage {
  static {
    SelecaoEventoPage_1 = this;
  }
  db;
  prdSvc;
  mc;
  idRecurso;
  idAgrupador;
  eventos;
  eventosIni;
  constructor(db, prdSvc, mc) {
    this.db = db;
    this.prdSvc = prdSvc;
    this.mc = mc;
  }
  ngOnInit() {
    this.carrega();
  }
  carrega() {
    if (this.db.autenticado()) {
      this.db.mostraProcessando();
      this.prdSvc.GetEventosProducao({
        token: this.db.token,
        idAgrupador: this.idAgrupador,
        idRecurso: this.idRecurso
      }).subscribe(ret => {
        this.db.escondeProcessando();
        if (ret.status) {
          this.eventosIni = ret.eventosProducao;
          this.eventos = ret.eventosProducao;
          console.log(this.eventos);
        }
      }, err => this.db.escondeProcessando(err.error));
    }
  }
  busca(evt) {
    this.eventos = this.eventosIni.filter(ev => {
      return this.db.compara([ev.descricao, ev.id], evt.detail.value);
    });
  }
  selecionaEvento(idRecurso, idAgrupador) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.mc.create({
        component: SelecaoEventoPage_1,
        componentProps: {
          idRecurso: idRecurso,
          idAgrupador: idAgrupador
        },
        cssClass: 'modal-css'
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  cancela() {
    this.mc.dismiss({
      status: false
    });
  }
  seleciona(evt) {
    this.mc.dismiss({
      status: true,
      evento: evt
    });
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__.DbService
  }, {
    type: src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_3__.ProducaoService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }];
  static propDecorators = {
    idRecurso: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    idAgrupador: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  };
};
SelecaoEventoPage = SelecaoEventoPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-selecao-evento',
  template: _selecao_evento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_selecao_evento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SelecaoEventoPage);


/***/ }),

/***/ 5193:
/*!***************************************!*\
  !*** ./src/app/storage/db.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DbService: () => (/* binding */ DbService)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _api_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api/usuario.service */ 1520);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_producao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/producao.service */ 4561);








let DbService = class DbService {
  toastController;
  router;
  usuSvc;
  loadingController;
  navCtr;
  prdSvc;
  urlLogo;
  usuario;
  app;
  isLoading = false;
  logado = false;
  token;
  idEquipamento;
  qtdMsgNaoLida;
  //  public selecOper: number[] = []
  //  public eventosProducao: EventoProducao[]
  filtroOrdem = '';
  filtroPedido = '';
  filtroPeca = '';
  filtroAgrupamento = '';
  plantas;
  planta;
  centrosCusto;
  equipamento;
  idContato;
  contato;
  urlIni;
  appPages = [{
    title: '',
    url: '',
    icon: ''
  }];
  constructor(toastController, router, usuSvc, loadingController, navCtr, prdSvc) {
    this.toastController = toastController;
    this.router = router;
    this.usuSvc = usuSvc;
    this.loadingController = loadingController;
    this.navCtr = navCtr;
    this.prdSvc = prdSvc;
  }
  mostraProcessando() {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (msg = "Carregando") {
      if (!_this.isLoading) {
        _this.isLoading = true;
        return yield _this.loadingController.create({
          message: msg,
          spinner: "crescent"
        }).then(ld => {
          ld.present().then(() => {
            if (!_this.isLoading) {
              ld.dismiss();
            }
          });
        });
      }
    }).apply(this, arguments);
  }
  escondeProcessando(msg) {
    var _this2 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.isLoading) {
        _this2.isLoading = false;
        return yield _this2.loadingController.dismiss().then(() => {
          if (msg) _this2.setMensagem(msg);
        });
      }
    })();
  }
  // Mover para funger
  removerAcentos(newStringComAcento) {
    var string = newStringComAcento;
    var mapaAcentosHex = {
      a: /[\xE0-\xE6]/g,
      A: /[\xC0-\xC6]/g,
      e: /[\xE8-\xEB]/g,
      E: /[\xC8-\xCB]/g,
      i: /[\xEC-\xEF]/g,
      I: /[\xCC-\xCF]/g,
      o: /[\xF2-\xF6]/g,
      O: /[\xD2-\xD6]/g,
      u: /[\xF9-\xFC]/g,
      U: /[\xD9-\xDC]/g,
      c: /\xE7/g,
      C: /\xC7/g,
      n: /\xF1/g,
      N: /\xD1/g
    };
    for (var letra in mapaAcentosHex) {
      var expressaoRegular = mapaAcentosHex[letra];
      string = string.replace(expressaoRegular, letra);
    }
    return string;
  }
  // Mover para funger
  compara(arrCampos, strBusca) {
    if (strBusca.replace(/;+ /g, '') == '') return true;
    let achou = false;
    let strCampos = '';
    for (let i = 0; i < arrCampos.length; i++) {
      if (arrCampos[i]) {
        if (arrCampos[i]) strCampos += arrCampos[i] + '\r';
      }
    }
    let arrBusca = strBusca.split(';');
    for (let j = 0; j < arrBusca.length; j++) {
      if (arrBusca[j].trim() !== '') {
        let arrAnd = this.removerAcentos(arrBusca[j]).toLowerCase().split('+');
        for (let k = 0; k < arrAnd.length; k++) {
          achou = this.removerAcentos(strCampos).toLowerCase().indexOf(arrAnd[k]) > -1;
          if (!achou) break;
        }
        if (achou) break;
      }
    }
    return achou;
  }
  limpaSessao() {
    this.setApp(null);
    this.logado = false;
  }
  logout() {
    if (this.app) this.app.token = null;
    this.setApp(this.app);
    this.router.navigateByUrl("login", {
      replaceUrl: true
    });
  }
  autenticado() {
    this.token = this.getToken();
    //    console.log('autenticado token', this.token)
    if (this.token == null) {
      this.logout();
    }
    return this.token !== null;
  }
  setApp(app) {
    var _this3 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.app = app;
      localStorage.setItem("app", JSON.stringify(app));
      _this3.logado = app !== null;
      console.log('logado===>', _this3.logado);
      if (app !== null) {
        localStorage.setItem("logo", app.logo);
        _this3.navCtr.navigateRoot("planta");
      }
    })();
  }
  getApp() {
    return JSON.parse(localStorage.getItem("app"));
  }
  setToken(token) {
    var _this4 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.token = token;
      localStorage.setItem("token", _this4.token);
      _this4.logado = token !== null;
      console.log('logado===>', _this4.logado);
      //    this.navCtr.navigateRoot("/cotas");
      _this4.navCtr.navigateRoot(_this4.urlIni);
    })();
  }
  getToken() {
    //    console.log(localStorage.getItem("token"))
    return localStorage.getItem("token");
  }
  getTipoUsuario() {
    /*
        {
          "iat": {
              "date": "2021-08-19 18:41:27.137240",
              "timezone_type": 3,
              "timezone": "America/Sao_Paulo"
          },
          "iss": "revalserras.com.br",
          "nbf": {
              "date": "2021-08-19 18:41:27.137240",
              "timezone_type": 3,
              "timezone": "America/Sao_Paulo"
          },
          "exp": 1629495687,
          "data": {
              "id": "170",
              "usuario": "HENRIQUE",
              "tipo": "2",
              "lang": "pt-br"
          }
      }
      */
    //console.log(this.getToken())
    if (this.getToken()) return this.parseJwt(this.getToken()).data.tipo;else return -1;
  }
  getLogo() {
    return localStorage.getItem("logo");
  }
  setUsuario(usuario) {
    localStorage.setItem("usuario", usuario);
  }
  getUsuario() {
    return localStorage.getItem("usuario");
  }
  /*
     setEquipamento(equip: Equipamento) {
    this.equipamento = equip;
    localStorage.setItem("equipamento", equip.id.toString());
    localStorage.setItem("nomeEquipamento", equip.descricao);
  }
     getIdEquipamento() {
    return localStorage.getItem("equipamento");
  }
  getnomeEquipamento() {
    return localStorage.getItem("nomeEquipamento");
  }
  */
  setEquipamento(equip) {
    this.equipamento = equip;
    localStorage.setItem("equipamento", JSON.stringify(equip));
  }
  setPlanta(planta) {
    this.planta = planta;
    localStorage.setItem("planta", JSON.stringify(planta));
    //    localStorage.setItem("nomePlanta", planta.descricao)
  }
  carregaEquipamento() {
    this.equipamento = null;
    let equipamento = JSON.parse(localStorage.getItem("equipamento"));
    console.log(equipamento);
    if (equipamento?.id > 0) this.equipamento = equipamento;
    return this.equipamento;
  }
  carregaPlanta() {
    this.planta = null;
    let planta = JSON.parse(localStorage.getItem("planta"));
    console.log(planta);
    if (planta?.id > 0) this.planta = planta;
    return this.planta;
  }
  getIdPlanta() {
    return +localStorage.getItem("planta");
  }
  getNomePlanta() {
    return localStorage.getItem("nomePlanta");
  }
  setMensagem(msg) {
    var _this5 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this5.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
    })();
  }
  registraEvento(idRecurso, idEv, obs, operacoes, idAgrupamento = 0, idNovoOperador = 0) {
    this.mostraProcessando();
    let params = {
      token: this.token,
      idRecurso: idRecurso,
      idEvento: idEv,
      idAgrupamento: idAgrupamento,
      idsProgramacao: operacoes,
      observacao: obs
    };
    if (idNovoOperador > 0) {
      params.idNovoOperador = idNovoOperador;
    }
    console.log("#################################");
    console.log(params);
    return this.prdSvc.RegistraEvento(params);
    /*
          .subscribe(
            (ret) => {
    
              console.log('Ret', ret.id, ret.status)
              this.escondeProcessando();
              if (ret.status) {
                this.router.navigate(['apontamento'])
                this.escondeProcessando();
    
                if(funCB) funCB();
    
              }
            },
            (err) =>
              this.escondeProcessando(err.error)
          );
    */
  }
  /* carregaEventoProducao(id: number) {
     if (this.autenticado()) {
       //      if (!this.db.clientes || forcaCarga) {
       this.mostraProcessando();
      
           this.prdSvc
         .GetEventosProducao({
           token: this.token,
           idRecurso: parseInt(this.idEquipamento),
           idAgrupador: id
         })
         .subscribe(
           (ret) => {
                 console.log('Ret', ret.eventosProducao)
             this.escondeProcessando();
             if (ret) {
               this.eventosProducao = ret.eventosProducao
               // console.log(this.centros)
             }
           },
           (err) =>
             this.escondeProcessando(err.error)
         );
     }
   }*/
  AbreMensagem() {
    this.router.navigateByUrl("mensagem", {
      replaceUrl: true
    });
  }
  Abre(pagina) {
    this.router.navigateByUrl(pagina, {
      replaceUrl: true
    });
  }
  setContato(idContato, contato) {
    this.idContato = idContato;
    this.contato = contato;
    localStorage.setItem("idContato", idContato);
    localStorage.setItem("Contato", contato);
  }
  getContatoMsg() {
    //    console.log(localStorage.getItem("token"))
    this.idContato = localStorage.getItem("idContato");
    this.contato = localStorage.getItem("Contato");
  }
  parseJwt(token) {
    if (token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } else return -1;
  }
  getMenu(token) {
    let ret = JSON.parse(localStorage.getItem("Menu"));
    if (token) {
      this.mostraProcessando();
      this.usuSvc.GetMenu({
        token: token
      }).subscribe(ret => {
        this.escondeProcessando();
        if (ret.status) {
          console.log("ret", ret);
          this.appPages = ret.menu;
          this.urlIni = ret.urlInicial;
          localStorage.setItem("Menu", JSON.stringify(ret));
        }
      }, err => this.escondeProcessando(err.error));
    } else {
      if (ret) {
        this.appPages = ret.menu;
        this.urlIni = ret.urlInicial;
      } else {
        this.navCtr.navigateRoot("login");
      }
    }
  }
  static ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _api_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
  }, {
    type: _api_producao_service__WEBPACK_IMPORTED_MODULE_2__.ProducaoService
  }];
};
DbService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: "root"
})], DbService);


/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  versaoWs: 'v1'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 8996:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		7518,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		1981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		1603,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4654,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9642,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		2095,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		2335,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7184,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8759,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4248,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		9863,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		1769,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		2569,
		"default-node_modules_ionic_core_dist_esm_data-CKHMWxfe_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		6534,
		"default-node_modules_ionic_core_dist_esm_data-CKHMWxfe_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		5458,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		654,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		6034,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input-otp.entry.js": [
		381,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input-otp_entry_js"
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js"
	],
	"./ion-input.entry.js": [
		761,
		"default-node_modules_ionic_core_dist_esm_input_utils-be4gBvVY_js-node_modules_ionic_core_dist-a8d71f",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		6492,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		8353,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		1024,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		9160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2774,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-option.entry.js": [
		6061,
		"node_modules_ionic_core_dist_esm_ion-picker-column-option_entry_js"
	],
	"./ion-picker-column.entry.js": [
		3110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column_entry_js"
	],
	"./ion-picker.entry.js": [
		5575,
		"node_modules_ionic_core_dist_esm_ion-picker_entry_js"
	],
	"./ion-popover.entry.js": [
		6772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4810,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		4639,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		628,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		852,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1479,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4065,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7971,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		3184,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment-content.entry.js": [
		4312,
		"node_modules_ionic_core_dist_esm_ion-segment-content_entry_js"
	],
	"./ion-segment-view.entry.js": [
		4540,
		"node_modules_ionic_core_dist_esm_ion-segment-view_entry_js"
	],
	"./ion-segment_2.entry.js": [
		469,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select-modal.entry.js": [
		7101,
		"node_modules_ionic_core_dist_esm_ion-select-modal_entry_js"
	],
	"./ion-select_3.entry.js": [
		8471,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		388,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2392,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		6059,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5427,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		198,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1735,
		"default-node_modules_ionic_core_dist_esm_input_utils-be4gBvVY_js-node_modules_ionic_core_dist-a8d71f",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		7510,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 8996;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4140:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 4140;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 3096:
/*!**************************************************************!*\
  !*** ./src/app/agrupamento/agrupamento.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-list-header ion-title {
  font-size: 120%;
  font-weight: bold;
  text-align: center;
}

.itDados ion-label {
  color: var(--ion-color-primary);
  text-align: center;
}
.itDados div, .itDados ion-input {
  font-weight: bold;
  text-align: center;
}
.itDados ion-input {
  border: 1px solid var(--ion-icon-primary);
  color: var(--ion-color-warning);
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
}`, "",{"version":3,"sources":["webpack://./src/app/agrupamento/agrupamento.page.scss"],"names":[],"mappings":"AACI;EACI,eAAA;EACA,iBAAA;EACA,kBAAA;AAAR;;AAKI;EACI,+BAAA;EACA,kBAAA;AAFR;AAII;EACI,iBAAA;EACA,kBAAA;AAFR;AAII;EACI,yCAAA;EACA,+BAAA;AAFR;;AAOI;EACI,UAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AAJR;AAMI;EACI,4BAAA;EACA,iBAAA;AAJR","sourcesContent":["ion-list-header {\r\n    ion-title {\r\n        font-size: 120%;\r\n        font-weight: bold;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n.itDados {\r\n    ion-label {\r\n        color: var(--ion-color-primary);\r\n        text-align: center;\r\n    }\r\n    div, ion-input {\r\n        font-weight: bold;\r\n        text-align: center;\r\n    }\r\n    ion-input {\r\n        border: 1px solid var(--ion-icon-primary);\r\n        color: var(--ion-color-warning);\r\n    }\r\n}\r\n\r\n.botoes {\r\n    .btn {\r\n        width: 80%;\r\n        max-width: 600px;\r\n        min-width: 200px;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        margin-top: 10px;\r\n        margin-bottom: 10px;\r\n    }\r\n    ion-icon {\r\n        --ionicon-stroke-width: 16px;\r\n        font-size: 1024px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7282:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;
  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;
  margin-bottom: 18px;
  color: #757575;
  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;
  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}`, "",{"version":3,"sources":["webpack://./src/app/app.component.scss"],"names":[],"mappings":"AAAA;EACE,2EAAA;AACF;;AAEA;EACE,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,sBAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;;EAEE,kBAAA;AACF;;AAEA;EACE,2DAAA;AACF;;AAEA;EACE,eAAA;EACA,gBAAA;EAEA,gBAAA;AAAF;;AAGA;EACE,eAAA;EAEA,mBAAA;EAEA,cAAA;EAEA,gBAAA;AAHF;;AAMA;EACE,qBAAA;EACA,mBAAA;EACA,kBAAA;AAHF;;AAMA;EACE,sDAAA;AAHF;;AAMA;EACE,+BAAA;AAHF;;AAMA;EACE,cAAA;AAHF;;AAMA;EACE,gBAAA;AAHF;;AAMA;EACE,sBAAA;AAHF;;AAMA;EACE,mBAAA;AAHF;;AAMA;EACE,iBAAA;EACA,mBAAA;AAHF;;AAMA;EACE,qBAAA;EACA,mBAAA;EACA,kBAAA;AAHF;;AAMA;EACE,+BAAA;AAHF;;AAMA;EACE,eAAA;EACA,cAAA;AAHF;;AAMA;EACE,kBAAA;AAHF;;AAMA;;EAEE,kBAAA;EACA,mBAAA;AAHF;;AAMA;EACE,kBAAA;AAHF;;AAMA;EACE,qBAAA;EACA,eAAA;EAEA,oCAAA;AAJF;;AAOA;EACE,iCAAA;AAJF","sourcesContent":["ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n\n  margin-bottom: 18px;\n\n  color: #757575;\n\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5454:
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/selecao-nota/selecao-nota.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.texto {
  font-size: small;
  font-weight: 300;
}`, "",{"version":3,"sources":["webpack://./src/app/componentes/selecao-nota/selecao-nota.component.scss"],"names":[],"mappings":"AAAA;EACA,gBAAA;EACA,gBAAA;AACA","sourcesContent":[".texto{\nfont-size: small;\nfont-weight: 300;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1120:
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/selecao-pedido/selecao-pedido.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-label {
  font-weight: 250;
  font-size: 65%;
}`, "",{"version":3,"sources":["webpack://./src/app/componentes/selecao-pedido/selecao-pedido.component.scss"],"names":[],"mappings":"AAAA;EAEI,gBAAA;EACA,cAAA;AAAJ","sourcesContent":["ion-label{\n\n    font-weight:250;\n    font-size: 65%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2834:
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/selecao-produto/selecao-produto.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-label {
  font-weight: 250;
  font-size: 65%;
}`, "",{"version":3,"sources":["webpack://./src/app/componentes/selecao-produto/selecao-produto.component.scss"],"names":[],"mappings":"AAAA;EAEI,gBAAA;EACA,cAAA;AAAJ","sourcesContent":["ion-label{\n\n    font-weight:250;\n    font-size: 65%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9004:
/*!******************************************************************!*\
  !*** ./src/app/nova-mensagem/nova-mensagem.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9474:
/*!********************************************************!*\
  !*** ./src/app/operador/operador.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3943:
/*!********************************************************************!*\
  !*** ./src/app/pages/equipamento/equipamento.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3743:
/*!****************************************************************!*\
  !*** ./src/app/pages/finalizar/finalizar.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-list-header ion-title {
  font-size: 120%;
  font-weight: bold;
  text-align: center;
}

.itDados ion-label {
  color: var(--ion-color-primary);
  text-align: center;
}
.itDados div, .itDados ion-input {
  font-weight: bold;
  text-align: center;
}
.itDados ion-input {
  border: 1px solid var(--ion-icon-primary);
  color: var(--ion-color-warning);
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
}`, "",{"version":3,"sources":["webpack://./src/app/pages/finalizar/finalizar.page.scss"],"names":[],"mappings":"AACI;EACI,eAAA;EACA,iBAAA;EACA,kBAAA;AAAR;;AAKI;EACI,+BAAA;EACA,kBAAA;AAFR;AAII;EACI,iBAAA;EACA,kBAAA;AAFR;AAII;EACI,yCAAA;EACA,+BAAA;AAFR;;AAOI;EACI,UAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AAJR;AAMI;EACI,4BAAA;EACA,iBAAA;AAJR","sourcesContent":["ion-list-header {\r\n    ion-title {\r\n        font-size: 120%;\r\n        font-weight: bold;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n.itDados {\r\n    ion-label {\r\n        color: var(--ion-color-primary);\r\n        text-align: center;\r\n    }\r\n    div, ion-input {\r\n        font-weight: bold;\r\n        text-align: center;\r\n    }\r\n    ion-input {\r\n        border: 1px solid var(--ion-icon-primary);\r\n        color: var(--ion-color-warning);\r\n    }\r\n}\r\n\r\n.botoes {\r\n    .btn {\r\n        width: 80%;\r\n        max-width: 600px;\r\n        min-width: 200px;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        margin-top: 10px;\r\n        margin-bottom: 10px;\r\n    }\r\n    ion-icon {\r\n        --ionicon-stroke-width: 16px;\r\n        font-size: 1024px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1173:
/*!**************************************************************!*\
  !*** ./src/app/pages/operacao/operacao.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-title {
  font-weight: bold;
  font-size: 130%;
}

.badgeDesagr {
  background-color: var(--ion-color-warning);
  position: absolute;
  top: 7px;
  right: 7px;
  border-radius: 100%;
}

.badgeAgr {
  background-color: var(--ion-color-primary);
  position: absolute;
  top: 7px;
  right: 7px;
  border-radius: 100%;
}

.badgeApt {
  background-color: var(--ion-color-success);
  position: absolute;
  top: 7px;
  right: 7px;
  border-radius: 100%;
}

.itDados ion-label {
  color: var(--ion-color-primary);
  text-align: center;
}
.itDados div {
  font-weight: bold;
  text-align: center;
}

.operacao ion-label {
  color: navy;
  font-size: 130%;
}

.sc-ion-modal-md {
  width: 90%;
}

.btn {
  width: 80%;
  max-width: 600px;
  min-width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/operacao/operacao.page.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,eAAA;AACF;;AAEA;EACI,0CAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,mBAAA;AACJ;;AAEA;EACI,0CAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,mBAAA;AACJ;;AAEA;EACI,0CAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,mBAAA;AACJ;;AAGI;EACI,+BAAA;EACA,kBAAA;AAAR;AAEI;EACI,iBAAA;EACA,kBAAA;AAAR;;AAKI;EACI,WAAA;EACA,eAAA;AAFR;;AAOA;EACI,UAAA;AAJJ;;AAOA;EACI,UAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AAJJ","sourcesContent":["ion-title{\r\n  font-weight: bold;\r\n  font-size: 130%;\r\n}\r\n\r\n.badgeDesagr {\r\n    background-color: var(--ion-color-warning);\r\n    position: absolute;\r\n    top: 7px;\r\n    right: 7px;\r\n    border-radius: 100%;\r\n}\r\n\r\n.badgeAgr {\r\n    background-color:  var(--ion-color-primary);\r\n    position: absolute;\r\n    top: 7px;\r\n    right: 7px;\r\n    border-radius: 100%;\r\n}\r\n\r\n.badgeApt {\r\n    background-color: var(--ion-color-success);\r\n    position: absolute;\r\n    top: 7px;\r\n    right: 7px;\r\n    border-radius: 100%;\r\n}\r\n\r\n.itDados {\r\n    ion-label {\r\n        color: var(--ion-color-primary);\r\n        text-align: center;\r\n    }\r\n    div {\r\n        font-weight: bold;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n.operacao {\r\n    ion-label {\r\n        color: navy;\r\n        font-size: 130%;\r\n    }\r\n\r\n}\r\n\r\n.sc-ion-modal-md {\r\n    width: 90%;\r\n}\r\n\r\n.btn {\r\n    width: 80%;\r\n    max-width: 600px;\r\n    min-width: 200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2959:
/*!**********************************************************!*\
  !*** ./src/app/pages/parada/parada.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4181:
/*!**********************************************************!*\
  !*** ./src/app/pages/planta/planta.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1801:
/*!**************************************************************!*\
  !*** ./src/app/pages/produtos/produtos.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-card {
  margin: 0;
}

ion-item {
  background-color: #f0e6d9;
}

.anexos {
  margin-bottom: 10px;
}

.arquivo {
  border: 1px solid black;
  display: flex;
  align-items: center;
}

.arquivo:hover {
  background-color: lightgrey;
}

.icone-img {
  width: 10%;
  padding: 5px;
  max-width: 50px;
}

.campos {
  margin: 0 !important;
  padding: 0 !important;
  display: unset;
}

.item {
  display: flex;
  margin: 3% 0;
  flex-direction: column;
  justify-content: center;
  color: #012D4E;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: rgba(197, 197, 0, 0.2);
  outline: solid;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/produtos/produtos.page.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;AACJ;;AACA;EACQ,yBAAA;AAER;;AACA;EAEI,mBAAA;AACJ;;AACA;EACI,uBAAA;EACA,aAAA;EACA,mBAAA;AAEJ;;AAGA;EACI,2BAAA;AAAJ;;AAIA;EACC,UAAA;EACG,YAAA;EACA,eAAA;AADJ;;AAIG;EACC,oBAAA;EACA,qBAAA;EACA,cAAA;AADJ;;AAIG;EAEC,aAAA;EACJ,YAAA;EACA,sBAAA;EACA,uBAAA;EACA,cAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kCAAA;EACA,cAAA;AAFA","sourcesContent":["ion-card{\n    margin:0\n}\nion-item{\n        background-color: #f0e6d9;\n}\n\n.anexos{\n   // margin-top: 2px;\n    margin-bottom: 10px;\n}\n.arquivo{\n    border: 1px solid black;\n    display: flex;\n    align-items: center;\n\n\n\n}\n.arquivo:hover {\n    background-color: lightgrey;\n}\n\n\n.icone-img\n{width: 10%;\n    padding: 5px;\n    max-width: 50px;\n   }\n\n   .campos{\n    margin: 0 !important;\n    padding: 0 !important;\n    display: unset;\n   }\n\n   .item{\n    \n    display: flex;\nmargin: 3% 0;\nflex-direction: column;\njustify-content: center;\ncolor: #012D4E;\nfont-family: Roboto;\nfont-size: 12px;\nfont-style: normal;\nfont-weight: 700;\nline-height: normal;\nbackground: rgba(197, 197, 0, 0.20);\noutline: solid;\n\n   }\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9998:
/*!********************************************************************!*\
  !*** ./src/app/selecao-evento/selecao-evento.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8444:
/*!**************************************************************!*\
  !*** ./src/app/agrupamento/agrupamento.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"primary\">Agrupar</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancela()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"carrega()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"refresh-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <form [formGroup]=\"frmRepet\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <div class=\"itDados\">\n              <ion-label>Repetições</ion-label>\n              <ion-input\n                type=\"number\"\n                [(ngModel)]=\"qtdRepeticoes\"\n                [ngModelOptions]=\"{standalone: true}\"\n                min=\"0\" [max]=\"this.qtdRepeticoes\"\n                (change)=\"alteraQtdRepeticoes($event)\"\n                autocomplete=\"nop\"\n              ></ion-input>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class=\"itDados\">\n              <ion-label>Descrição</ion-label>\n              <ion-input\n                type=\"text\"\n                [(ngModel)]=\"descricao\"\n                [ngModelOptions]=\"{standalone: true}\"\n                autocomplete=\"nop\"\n                required\n              ></ion-input>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-toolbar>\n  <ion-button\n    class=\"btnEntrar\"\n    size=\"large\"\n    color=\"primary\"\n    type=\"submit\"\n    expand=\"block\"\n    (click)=\"agrupar()\"\n    >Agrupar\n  </ion-button>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"frmAgrupa\">\n    <ion-list *ngIf=\"this.operacoes && this.operacoes.length > 0\">\n      <ion-item *ngFor=\"let op of this.operacoes\" class=\"itDados\">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-label>Número da Ordem</ion-label>\n              <div>{{op.numeroOrdem}}</div>\n            </ion-col>\n            <ion-col>\n              <ion-label *ngIf=\"+op.quantidadeOrdem != +op.quantidade\"\n                >Qtd Ordem</ion-label\n              >\n              <div *ngIf=\"+op.quantidadeOrdem != +op.quantidade\">\n                {{op.quantidadeOrdem}}\n              </div>\n            </ion-col>\n            <ion-col>\n              <ion-label>Qtd Fabricar</ion-label>\n              <div>{{op.quantidade}}</div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col> </ion-col>\n            <ion-col>\n              <ion-label>Qtd por Rept</ion-label>\n              <ion-input\n                [disabled]=\"this.semProducao\"\n                style=\"margin: auto\"\n                type=\"number\"\n                [(ngModel)]=\"op.quantidadeNaoConorme\"\n                [ngModelOptions]=\"{standalone: true}\"\n                (change)=\"alteraQteRepeticao(op,$event)\"\n                min=\"0\"\n                [max]=\"op.quantidade\"\n                autocomplete=\"nop\"\n              ></ion-input>\n            </ion-col>\n            <ion-col>\n              <ion-label>Qtd Agrupar</ion-label>\n              <ion-input\n                [disabled]=\"this.semProducao\"\n                style=\"margin: auto\"\n                type=\"number\"\n                [(ngModel)]=\"op.quantidadeFabricada\"\n                [ngModelOptions]=\"{standalone: true}\"\n                (change)=\"alteraQtdFabricada(op,$event)\"\n                min=\"0\"\n                [max]=\"op.quantidade\"\n                autocomplete=\"nop\"\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-label>Pedido</ion-label>\n              <div>{{op.numeroPedido}}</div>\n            </ion-col>\n            <ion-col>\n              <ion-label>Entrega</ion-label>\n              <div>{{op.entregaPedido | date: \"dd/MM/yyyy\"}}</div>\n            </ion-col>\n            <ion-col>\n              <ion-label>Cliente</ion-label>\n              <div>{{op.cliente}}</div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <!--    <ion-card *ngFor=\"let oper of operacoes\">\n      <ion-grid class=\"ion-text-center\">\n        <ion-label color=\"primary\">OF - {{oper.numeroOrdem}}</ion-label><br />\n        <ion-label>{{oper.quantidadeOrdem}}</ion-label>\n        <ion-label>quantidade</ion-label>\n        <ion-input\n          style=\"margin: auto\"\n          name=\"oper.quantidadeFabricada\"\n          type=\"text\"\n          (ngModel)=\"oper.quantidadeFabricada\"\n          [value]=\"oper.quantidade\"\n          placeholder=\"Qtd. Fab\"\n          ngModel\n          required\n        ></ion-input>\n      </ion-grid>\n    </ion-card> -->\n  </form>\n</ion-content>\n";

/***/ }),

/***/ 1584:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane  when=\"false\" contentId=\"main-content\">\n    <ion-menu  contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n         <!--  <ion-list-header>Inbox</ion-list-header>\n          <ion-note>hi@ionicframework.com</ion-note>\n -->\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of this.db.appPages; let i = index\">\n            <ion-item  routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>         </ion-list>\n\n<!--\n          <ion-list id=\"labels-list\">\n          <ion-list-header>Labels</ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list>\n-->\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";

/***/ }),

/***/ 8784:
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/selecao-nota/selecao-nota.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"primary\">NOTAS</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancela()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"carrega()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"refresh-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item class=\"itemSemBorda\">\n    <ion-searchbar\n      style=\"border-top: 5px\"\n      placeholder=\"Buscar Documento\"\n      (ionChange)=\"busca($event)\"\n    ></ion-searchbar>\n    <ion-badge *ngIf=\"this.documentos\" slot=\"end\">\n      {{this.documentos.length}}\n    </ion-badge>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngIf=\"this.documentos?.length == 0 \">Nenhum item encontrado</ion-item>\n\n  <ion-list>\n    <div *ngFor=\"let doc of documentos\">\n   \n      <ion-item\n        class=\"itemSelecao itemCard\"\n        (click)=\"seleciona(doc)\"\n      >\n      <ion-grid>\n        <ion-row>\n          <ion-col  sizeMd=\"3\" sizeXs=\"3\">\n            <ion-label class=\"texto ion-text-wrap\">NF:{{doc.numero}}</ion-label>\n          </ion-col>\n          <ion-col  sizeMd=\"3\" sizeXs=\"3\">\n            <ion-label class=\"texto ion-text-wrap\">{{doc.emissao | date:'shortDate'}}</ion-label>\n          </ion-col>\n         \n          <ion-col  sizeMd=\"6\" sizeXs=\"6\">\n            <ion-label class=\"texto ion-text-wrap\">{{doc.naturezaOperacao}}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col  sizeMd=\"4\" sizeXs=\"12\">\n            <ion-label  class=\"texto ion-text-wrap\">{{doc.cnpj}}</ion-label>\n          </ion-col>\n          <ion-col  sizeMd=\"8\" sizeXs=\"12\">\n            <ion-label class=\"texto ion-text-wrap\">{{doc.fornecedor}}</ion-label>\n          </ion-col>\n        </ion-row> \n        </ion-grid>   \n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 842:
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/selecao-pedido/selecao-pedido.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"primary\">ITENS</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancela()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"carrega()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"refresh-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-item class=\"ion-align-items-center\">\n    <p>\n{{notaItem}}\n\n    </p>\n  </ion-item>\n  <ion-item class=\"itemSemBorda\">\n    <ion-searchbar\n      style=\"border-top: 5px\"\n      placeholder=\"Buscar Item\"\n      (ionChange)=\"busca($event)\"\n    ></ion-searchbar>\n    <ion-badge *ngIf=\"this.itens\" slot=\"end\">\n      {{this.itens?.length}}\n    </ion-badge>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngIf=\"this.itens?.length == 0 \">Nenhum item encontrado</ion-item>\n\n  <ion-list>\n    <div *ngFor=\"let ite of this.itens\">\n   \n      <ion-item\n        class=\"itemSelecao itemCard\"\n        (click)=\"seleciona(ite)\"\n      >\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\" size=2>\n            <ion-label class=\"ion-text-wrap\">Pedido: {{ite.numeroPedido}}</ion-label>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\" size=10>\n            <ion-label class=\"ion-text-wrap\">Entrega: {{ite.dataEntrega | date:'shortDate'}}</ion-label>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\" size=12>\n            <ion-label class=\"ion-text-wrap\">Item: {{ite.item}} - {{ite.referencia}} {{ite.descricao}}  - {{ite.quantidade}} {{ite.unidade}}</ion-label>\n          </ion-col>\n        </ion-row> \n        </ion-grid>   \n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 6156:
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/selecao-produto/selecao-produto.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"primary\">PRODUTOS</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancela()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"carrega()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"refresh-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item class=\"itemSemBorda\">\n    <ion-searchbar\n      style=\"border-top: 5px\"\n      placeholder=\"Buscar Produto\"\n      (ionChange)=\"carrega(filtro)\"\n      [debounce]=\"1000\"\n      [(ngModel)]=\"filtro\"\n    ></ion-searchbar>\n    <ion-badge *ngIf=\"this.produtos\" slot=\"end\">\n      {{this.produtos?.length}}\n    </ion-badge>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngIf=\"this.produtos?.length == 0 \">Nenhum item encontrado</ion-item>\n\n  <ion-list>\n    <div *ngFor=\"let prod of this.produtos\">\n   \n      <ion-item\n        class=\"itemSelecao itemCard\"\n        (click)=\"seleciona(prod)\"\n      >\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\" size=12>\n            <ion-label class=\"ion-text-wrap\">{{prod.referencia}} - {{prod.descricao}} - {{prod.unidade}}</ion-label>\n          </ion-col>\n\n        </ion-row> \n        </ion-grid>   \n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 2576:
/*!******************************************************************!*\
  !*** ./src/app/nova-mensagem/nova-mensagem.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Nova Mensagem</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancela()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (ngSubmit)=\"EnviaMsg()\" #form=\"ngForm\">\n    <ion-item>\n      <ion-label position=\"floating\">Equipamento</ion-label>\n<!--       <ionic-selectable\n    #selecEquip\n    [(ngModel)]=\"equipamento\"\n    name=\"equipamento\"\n    itemValueField=\"id\"\n    itemTextField=\"descricao\"\n    [items]=\"this.db.centrosCusto[0].equipamentos\"\n    [canSearch]=\"true\"\n\n    searchPlaceholder=\"Localizar Equipamentos\"\n    >\n    <ng-template ionicSelectableSearchFailTemplate>\n      <ion-item>Nenhum item encontrado</ion-item>\n    </ng-template>\n    <ng-template ionicSelectableHeaderTemplate>\n      <ion-toolbar>\n        <ion-title color=\"primary\">Equipamentos</ion-title>\n      </ion-toolbar>\n    </ng-template>\n\n    <ng-template ionicSelectableFooterTemplate>\n      <ion-toolbar>\n        <ion-buttons slot=\"end\">\n          <ion-button\n            color=\"primary\"\n            slot=\"end\"\n            (click)=\"selecEquip.close()\"\n          >\n            Cancelar\n          </ion-button>\n          <ion-button\n            color=\"primary\"\n            slot=\"end\"\n            (click)=\"selecEquip.confirm();selecEquip.close();\"\n          >\n            Ok\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ng-template>\n  </ionic-selectable> -->\n\n     \n     \n<!--       <ion-input required [(ngModel)]=\"idEquipamento\" name=\"idEquipamento\" type=\"text\"></ion-input>\n -->  \n  </ion-item>\n   \n    <ion-item>\n      <ion-label position=\"floating\">Mensagem</ion-label>\n      <ion-textarea rows=15 [(ngModel)]=\"mensagem\" name=\"mensagem\" type=\"text\"></ion-textarea>\n    </ion-item>\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center>\n          <ion-button\n            class=\"btnEntrar\"\n            size=\"large\"\n            color=\"primary\"\n            type=\"submit\"\n            [disabled]=\"form.invalid\"\n            expand=\"block\"\n            >Envia Mensagem\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n\n\n\n\n\n\n\n\n\n";

/***/ }),

/***/ 8214:
/*!********************************************************!*\
  !*** ./src/app/operador/operador.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"primary\">Operadores</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancela()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"carrega()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"refresh-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item class=\"itemSemBorda\">\n  <ion-searchbar\n  style=\"border-top: 5px\"\n  placeholder=\"Buscar operador\"\n  (ionChange)=\"busca($event)\"\n></ion-searchbar>\n<ion-badge *ngIf=\"this.operadores\" slot=\"end\">\n  {{this.operadores.length}}\n</ion-badge>\n</ion-item>\n\n</ion-header>\n<ion-content >\n          <ion-list>\n            <ion-item *ngIf=\"this.operadores?.length == 0\">Nenhum item encontrado</ion-item>\n            <ion-item class=\"itemSelecao\" *ngFor=\"let oper of operadores\" (click)=\"seleciona(oper)\">\n              <ion-label class=\"ion-text-wrap\">{{oper.usuario}}</ion-label>\n            </ion-item>\n          </ion-list>\n </ion-content>\n\n        \n";

/***/ }),

/***/ 9611:
/*!********************************************************************!*\
  !*** ./src/app/pages/equipamento/equipamento.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"primary\">Equipamentos</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancela()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"carrega()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"refresh-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item class=\"itemSemBorda\">\n  <ion-searchbar\n  style=\"border-top: 5px\"\n  placeholder=\"Buscar equipamento\"\n  (ionChange)=\"busca($event)\"\n></ion-searchbar>\n<ion-badge *ngIf=\"this.centrosCusto\" slot=\"end\">\n  {{this.centrosCusto.length}}\n</ion-badge>\n</ion-item>\n\n</ion-header>\n\n<ion-content>\n  <ion-item *ngIf=\"this.centrosCusto?.length == 0 \">Nenhum item encontrado</ion-item>\n\n  <ion-list *ngFor=\"let centro of centrosCusto\">\n    <ion-list-header color=\"primary\">{{ centro.descricao }}</ion-list-header>\n    <ion-item class=\"itemSelecao\" *ngFor=\"let equ of centro.equipamentos\" (click)=\"seleciona(equ)\">\n      <ion-label class=\"ion-text-wrap\">{{equ.descricao}}</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <!--<ion-list>\n    <ion-card *ngFor=\"let centro of centros\" >\n      <ion-list-header>\n        <ion-title class=\"ion-text-wrap\">{{centro.descricao}}</ion-title>\n      </ion-list-header>\n      <ion-item class=\"itemCard\" *ngFor=\"let equ of centro.equipamentos\" (click)=\"seleciona(equ)\">\n          <ion-title class=\"titulo\"> {{equ.descricao}}</ion-title>\n        <ion-badge slot=\"end\">{{equ.qtdOperacoes}}</ion-badge>  \n           <ion-button slot=\"end\" fill='clear'>\n             <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n           </ion-button>  \n      </ion-item>\n    </ion-card>\n  </ion-list>-->\n</ion-content>\n";

/***/ }),

/***/ 979:
/*!****************************************************************!*\
  !*** ./src/app/pages/finalizar/finalizar.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"primary\">Finalizar</ion-title>\n    <ion-title color=\"primary\" slot=\"end\" *ngIf=\"this.status?.idAgrupamento\"\n      >{{ this.status?.agrupamento }}</ion-title\n    >\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancela()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"carrega()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"refresh-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <form [formGroup]=\"frmRepet\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <div class=\"itDados\" *ngIf=\"this.status?.idAgrupamento\">\n              <ion-label>Repetições</ion-label>\n              <ion-input\n                type=\"number\"\n                [(ngModel)]=\"qtdRepeticoes\"\n                [ngModelOptions]=\"{standalone: true}\"\n                min=\"0\" [max]=\"this.qtdRepeticoes\"\n                (change)=\"alteraQtdRepeticoes($event)\"\n                autocomplete=\"nop\"\n              ></ion-input>\n            </div>\n          </ion-col>\n          <ion-col>\n            <ion-item\n              class=\"itDados\"\n              lines=\"none\"\n              (click)=\"finalizarSemProducao()\"\n            >\n              <ion-label>Finalizar sem produção</ion-label>\n              <ion-checkbox\n                color=\"warning\"\n                [checked]=\"semProducao\"\n              ></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-toolbar>\n  <ion-button\n    class=\"btnEntrar\"\n    size=\"large\"\n    color=\"primary\"\n    type=\"submit\"\n    expand=\"block\"\n    (click)=\"finalizar()\"\n    >Finalizar\n  </ion-button>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"frmFinaliza\" (ngSubmit)=\"this.finalizar()\" >\n    <ion-list *ngIf=\"this.operacoes && this.operacoes.length > 0\">\n      <ion-item *ngFor=\"let op of this.operacoes\" class=\"itDados\">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-label>Número da Ordem</ion-label>\n              <div>{{op.numeroOrdem}}</div>\n            </ion-col>\n            <ion-col>\n              <ion-label *ngIf=\"+op.quantidadeOrdem != +op.quantidade\"\n                >Qtd Ordem</ion-label\n              >\n              <div *ngIf=\"+op.quantidadeOrdem != +op.quantidade\">\n                {{op.quantidadeOrdem}}\n              </div>\n            </ion-col>\n            <ion-col>\n              <ion-label>Qtd Fabricar</ion-label>\n              <div>{{op.quantidade}}</div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col> </ion-col>\n            <ion-col>\n              <ion-label>Qtd não Conforme</ion-label>\n              <ion-input\n                [disabled]=\"this.semProducao\"\n                style=\"margin: auto\"\n                type=\"number\"\n                [(ngModel)]=\"op.quantidadeNaoConforme\"\n                [ngModelOptions]=\"{standalone: true}\"\n                (change)=\"alteraQtdNaoConforme(op,$event)\"\n                min=\"0\"\n                [max]=\"op.quantidade\"\n                autocomplete=\"nop\"\n              ></ion-input>\n            </ion-col>\n            <ion-col>\n              <ion-label>Qtd Fabricada</ion-label>\n              <!--              <ion-input\n                [disabled]=\"this.semProducao\"\n                style=\"margin: auto\"\n                name=\"op.quantidadeFabricada\"\n                type=\"text\"\n                (ngModel)=\"op.quantidadeFabricada\"\n                [value]=\"op.quantidadeFabricada\"\n                ngModel\n                required\n                (change)=\"alteraQtdFabricada(op,$event)\"\n              ></ion-input>-->\n              <ion-input\n                [disabled]=\"this.semProducao\"\n                style=\"margin: auto\"\n                type=\"number\"\n                [(ngModel)]=\"op.quantidadeFabricada\"\n                [ngModelOptions]=\"{standalone: true}\"\n                (change)=\"alteraQtdFabricada(op,$event)\"\n                min=\"0\"\n                [max]=\"op.quantidade\"\n                autocomplete=\"nop\"\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-label    style=\"margin: auto\" >Motivo Não Conforme</ion-label>\n            <ion-input  *ngIf=\"op.quantidadeNaoConforme > 0\" type=\"text\" [required]=\"true\" [(ngModel)]=\"op.motivo\"> \n            </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-label>Pedido</ion-label>\n              <div>{{op.numeroPedido}}</div>\n            </ion-col>\n            <ion-col>\n              <ion-label>Entrega</ion-label>\n              <div>{{op.entregaPedido | date: \"dd/MM/yyyy\"}}</div>\n            </ion-col>\n            <ion-col>\n              <ion-label>Cliente</ion-label>\n              <div>{{op.cliente}}</div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <!--    <ion-card *ngFor=\"let oper of operacoes\">\n      <ion-grid class=\"ion-text-center\">\n        <ion-label color=\"primary\">OF - {{oper.numeroOrdem}}</ion-label><br />\n        <ion-label>{{oper.quantidadeOrdem}}</ion-label>\n        <ion-label>quantidade</ion-label>\n        <ion-input\n          style=\"margin: auto\"\n          name=\"oper.quantidadeFabricada\"\n          type=\"text\"\n          (ngModel)=\"oper.quantidadeFabricada\"\n          [value]=\"oper.quantidade\"\n          placeholder=\"Qtd. Fab\"\n          ngModel\n          required\n        ></ion-input>\n      </ion-grid>\n    </ion-card> -->\n  </form>\n</ion-content>\n";

/***/ }),

/***/ 2273:
/*!**************************************************************!*\
  !*** ./src/app/pages/operacao/operacao.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"primary\">Operações liberadas</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancela()\">\n        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"carrega()\">\n        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"refresh-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar class='idDados'>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>Agrupamento</ion-label>\n          <ion-input [(ngModel)]=\"this.db.filtroAgrupamento\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label>Número da Ordem</ion-label>\n          <ion-input type=\"number\" [(ngModel)]=\"this.db.filtroOrdem\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label>Pedido</ion-label>\n          <ion-input type=\"number\" [(ngModel)]=\"this.db.filtroPedido\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label>Peça</ion-label>\n          <ion-input [(ngModel)]=\"this.db.filtroPeca\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)='filtra(true)'>\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-item class=\"itemSemBorda\" *ngIf=\"this.operacoesIni?.length > 0\">\n    <ion-searchbar style=\"border-top: 5px\" placeholder=\"Buscar operação\" inputmode=\"numeric\"\n      (ionChange)=\"busca($event)\">\n    </ion-searchbar>\n    <ion-badge *ngIf=\"this.operacoes\" slot=\"end\">\n      {{this.operacoes.length}}\n    </ion-badge>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <!--\n    <ion-fab-button\n    color=\"warning\"\n    *ngIf=\"this.opsAgrupadas?.length > 0\"\n    (click)=\"desagrupa()\"\n  >\n    <ion-icon name=\"git-merge-outline\"></ion-icon>\n    <ion-badge class=\"badgeDesagr\">{{this.opsAgrupadas?.length}}</ion-badge>\n  </ion-fab-button>\n  <ion-fab-button\n    color=\"primary\"\n    *ngIf=\"this.opsSelecionadas?.length > 0\"\n    (click)=\"agrupa()\"\n  >\n    <ion-icon name=\"git-branch-outline\"></ion-icon>\n    <ion-badge class=\"badgeAgr\">{{this.opsSelecionadas?.length}}</ion-badge>\n  </ion-fab-button>\n-->\n    <ion-fab-button color=\"success\" *ngIf=\"this.permiteApontar && \n          (\n            this.opsSelecionadas?.length > 0 || this.opsAgrupadas?.length == 1\n          )\" (click)=\"aponta()\">\n      <ion-icon name=\"play-outline\"></ion-icon>\n      <ion-badge class=\"badgeApt\">{{this.opsSelecionadas?.length + this.opsAgrupadas?.length}}</ion-badge>\n    </ion-fab-button>\n  </ion-fab>\n  <div *ngIf=\"this.operacoesIni?.length == 0 && statusOFIndividual == 1\">\n    <ion-button\n    class=\"btnEntrar\"\n    size=\"large\"\n    color=\"primary\"\n    type=\"submit\"\n    expand=\"block\"\n    (click)=\"adicionaOperacaoExtra()\"\n    >Adicionar operação extra\n  </ion-button>\n  </div>\n  <div *ngIf=\"this.operacoesIni?.length > 0\">\n\n    <ion-item *ngIf=\"this.operacoes?.length == 0 \">Nenhum item encontrado</ion-item>\n\n    <ion-list *ngIf=\"this.operacoesIni?.length > 0\">\n      <div *ngFor=\"let op of operacoes\">\n        <ion-item class=\"itemSelecao\" (click)=\"check(op,$event)\">\n          <ion-checkbox [checked]=\"op?.isChecked\"></ion-checkbox>\n          <ion-grid>\n            <ion-row class=\"operacao\" *ngIf=\"op.operacao\">\n              <ion-col>\n                <ion-label class=\"ion-text-wrap\">{{op.operacao}}</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-right\" >\n                <ion-label color=\"error\">{{op.tipoOperacao}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"op.agrupamento\">\n              <ion-col>\n                <ion-title class=\"ion-text-wrap\">{{op.agrupamento}}</ion-title>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"op.complemento\">\n              <ion-col>\n                <ion-label class=\"ion-text-wrap\">{{op.complemento}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"op.complemento2 !== ''\">\n              <ion-col>\n                <ion-label class=\"ion-text-wrap\">{{op.complemento2}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </div>\n    </ion-list>\n  </div>\n\n</ion-content>\n\n<!--\n  \n  <app-header [nomePagina]=\"this.nomeEquipamento\">\n\n</app-header>\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"aponta()\">\n      <ion-icon name=\"arrow-forward-circle\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button (click)=\"aponta()\">\n      <ion-icon name=\"layers-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-list>\n    <ion-card *ngFor=\"let oper of operacoes\">\n<ion-grid class=\"ion-text-center\" *ngIf=\"oper.tipo == 1\" (click)=\"aponta(oper.idsProgramacao)\">\n  <ion-label color=\"primary\" ><strong>{{oper.agrupamento}}</strong></ion-label>\n  <p>{{oper.complemento}}</p>\n</ion-grid>\n      \n      \n      <ion-grid fixed *ngIf=\"oper.tipo == 2\">\n        <ion-row>\n          <ion-col size=\"2\" color=\"primary\" class=\"ion-align-items-center\">\n            <ion-item class=\"itemCard\">\n              <ion-checkbox slot=\"start\" [(ngModel)]=\"oper.isChecked\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n\n          <ion-col size=\"10\">\n            <ion-label class=\"ion-text-wrap\">{{oper.complemento}} </ion-label>\n\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-card>\n    <ion-item *ngIf=\"this.oper?.length == 0 \">Nenhum item encontrado</ion-item>\n  </ion-list>\n\n\n</ion-content>\n\n-->";

/***/ }),

/***/ 9707:
/*!**********************************************************!*\
  !*** ./src/app/pages/parada/parada.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"primary\">Parada</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close(false)\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item class=\"itemSemBorda\">\n    <ion-toolbar class=\"alturamenor\" (click)=\"selecionaEvento()\">\n      <ion-title *ngIf=\"!this.evento\">Selecione a motivo de parada</ion-title>\n      <ion-title *ngIf=\"this.evento\"\n        >{{ this.evento.id }} {{ this.evento.descricao }}</ion-title\n      >\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n  <form  #form=\"ngForm\" (ngSubmit)=\"parada()\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center>\n          <ion-item\n            class=\"itemSemBorda\"\n            style=\"margin-top: 30px; width: 50%; margin: auto;\"\n          >\n            <ion-textarea\n              type=\"text\"\n              placeholder=\"Complemento\"\n              rows='15'\n              [required]=\"evento?.complementoObrigatorio\"\n              [(ngModel)]=\"complemento\"\n              name=\"complemento\"\n            >\n            </ion-textarea>   \n          </ion-item>\n          <ion-button\n            class=\"btnEntrar\"\n            size=\"large\"\n            color=\"primary\"\n            type=\"submit\"\n            expand=\"block\"\n            >Apontar Parada\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";

/***/ }),

/***/ 9525:
/*!**********************************************************!*\
  !*** ./src/app/pages/planta/planta.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"primary\">Plantas</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancela()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"carrega()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"refresh-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item class=\"itemSemBorda\">\n  <ion-searchbar\n  style=\"border-top: 5px\"\n  placeholder=\"Buscar planta\"\n  (ionChange)=\"busca($event)\"\n></ion-searchbar>\n<ion-badge *ngIf=\"this.plantas\" slot=\"end\">\n  {{this.plantas.length}}\n</ion-badge>\n</ion-item>\n\n</ion-header>\n<ion-content >\n          <ion-list>\n            <ion-item *ngIf=\"this.plantas?.length == 0\">Nenhum item encontrado</ion-item>\n            <ion-item class=\"itemSelecao\" *ngFor=\"let plt of plantas\" (click)=\"seleciona(plt)\">\n              <ion-label class=\"ion-text-wrap\">{{plt.descricao}}</ion-label>\n            </ion-item>\n          </ion-list>\n </ion-content>\n\n        \n";

/***/ }),

/***/ 9109:
/*!**************************************************************!*\
  !*** ./src/app/pages/produtos/produtos.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title color=\"primary\">Produtos</ion-title>\n\t\t<ion-buttons *ngIf=\"!this.referencia\" slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t  </ion-buttons>\n\n\t\t  <ion-buttons *ngIf=\"this.referencia\" slot=\"start\">\n\t\t\t<ion-button (click)=\"cancela()\">\n\t\t\t  <ion-icon\n\t\t\t\tcolor=\"primary\"\n\t\t\t\tslot=\"icon-only\"\n\t\t\t\tname=\"arrow-back-outline\"\n\t\t\t  ></ion-icon>\n\t\t\t</ion-button>\n\t\t  </ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid class=\"campos\" fixed>\n\t\t<ion-row>\n\t\t\t<ion-col size-sm=\"6\" size=\"12\">\n\t\t\t\t<ion-input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tname=\"descr\"\n\t\t\t\t\tplaceholder=\"Referencia\"\n\t\t\t\t\t[(ngModel)]=\"referencia\"></ion-input>\n\t\t\t</ion-col>\n\t\t\t<ion-col size-sm=\"5\" size=\"9\">\n\t\t\t\t<ion-input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tname=\"descr\"\n\t\t\t\t\tplaceholder=\"Descricao\"\n\t\t\t\t\t[(ngModel)]=\"descricao\"></ion-input>\n\t\t\t</ion-col>\n\t\t\t<ion-col size-sm=\"1\" size=\"3\">\n\t\t\t\t<ion-button fill=\"clear\" (click)=\"buscarProduto()\">\n\t\t\t\t<ion-icon name=\"search-outline\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\n<div *ngFor=\"let prod of produtos\">\n<div class=\"item\" >\n\t<!--<ion-label >{{prod?.codigo}}</ion-label>-->\n\n\t<ion-label >{{prod.rotulo}}</ion-label>\n\n\t\n</div>\n\n\n\t<div class=\"arquivo\" *ngFor=\"let link of prod.links\" (click)=\"abrirDocumento(link.link, link.codigo)\">\n\n<!-- \t\t<ion-img class=\"icone-img\" [src]=\"getIcone(link.rotulo)\"></ion-img>\n -->\t\t<ion-badge style=\"margin: 5px;\">{{link.extensao}}</ion-badge>\n\t\t<ion-label>{{link.rotulo}}</ion-label>\n\t</div>\n</div>\n</ion-content>\n";

/***/ }),

/***/ 3386:
/*!********************************************************************!*\
  !*** ./src/app/selecao-evento/selecao-evento.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"primary\">Evento</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancela()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"carrega()\">\n        <ion-icon\n          color=\"primary\"\n          slot=\"icon-only\"\n          name=\"refresh-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item class=\"itemSemBorda\">\n    <ion-searchbar\n      style=\"border-top: 5px\"\n      placeholder=\"Buscar equipamento\"\n      (ionChange)=\"busca($event)\"\n    ></ion-searchbar>\n    <ion-badge *ngIf=\"this.eventos\" slot=\"end\">\n      {{this.eventos.length}}\n    </ion-badge>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngIf=\"this.eventos?.length == 0 \">Nenhum item encontrado</ion-item>\n\n  <ion-list>\n    <div *ngFor=\"let ev of eventos\">\n      <ion-list-header class=\"tituloLista\" *ngIf=\"ev.apenasTitulo\" color=\"primary\"\n        >{{ ev.descricao }}</ion-list-header\n      >\n      <ion-item\n        *ngIf=\"!ev.apenasTitulo\"\n        class=\"itemSelecao\"\n        (click)=\"seleciona(ev)\"\n      >\n      <ion-grid>\n        <ion-row>\n          <ion-col size=2>\n            <ion-label class=\"ion-text-wrap\">{{ev.id}}</ion-label>\n          </ion-col>\n          <ion-col size=8>\n            <ion-label class=\"ion-text-wrap\">{{ev.descricao}}</ion-label>\n          </ion-col>\n        </ion-row> \n        </ion-grid>   \n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map