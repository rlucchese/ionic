(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

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
/* harmony import */ var _ws_grape_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ws-grape.service */ 3496);



let AppService = class AppService {
  svc;
  _MODULO = 'App';
  constructor(svc) {
    this.svc = svc;
  }
  GetConfiguracoes() {
    return this.svc.consomeWS(this._MODULO, 'GetConfiguracoes', {});
  }
  GetObjeto(objeto, params) {
    // params.action = 'definition'    //lista definicao
    //  params.id = 37     //apenas usuario 1
    //   
    //params.action="listRelation"
    //params.
    return this.svc.consomeWS(this._MODULO, objeto, params);
  }
  Persiste(params) {
    return this.svc.consomeWS(this._MODULO, 'Persist', params);
  }
  GravaLog(params) {
    return this.svc.consomeWS(this._MODULO, 'GravaLog', params);
  }
  static ctorParameters = () => [{
    type: _ws_grape_service__WEBPACK_IMPORTED_MODULE_0__.WsGrapeService
  }];
};
AppService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], AppService);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ws_grape_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ws-grape.service */ 3496);



let UsuarioService = class UsuarioService {
  svc;
  _MODULO = 'Usuario';
  constructor(svc) {
    this.svc = svc;
  }
  GetToken(params) {
    return this.svc.consomeWS(this._MODULO, 'GetToken.php', params);
  }
  ResetaSenha(params) {
    return this.svc.consomeWS(this._MODULO, 'ResetaSenha', params);
  }
  AlteraSenha(params) {
    console.log(this._MODULO);
    console.log(params);
    return this.svc.consomeWS(this._MODULO, 'AlteraSenha', params);
  }
  ExcluiUsuario(params) {
    return this.svc.consomeWS(this._MODULO, 'ExcluiUsuario', params);
  }
  static ctorParameters = () => [{
    type: _ws_grape_service__WEBPACK_IMPORTED_MODULE_0__.WsGrapeService
  }];
};
UsuarioService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], UsuarioService);


/***/ }),

/***/ 1955:
/*!***************************************!*\
  !*** ./src/app/api/vendas.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendasService: () => (/* binding */ VendasService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ws_grape_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ws-grape.service */ 3496);



let VendasService = class VendasService {
  svc;
  _MODULO = 'Vendas';
  constructor(svc) {
    this.svc = svc;
  }
  ListaClientes(params) {
    return this.svc.consomeWS(this._MODULO, 'ListaClientes', params);
  }
  GetCliente(params) {
    return this.svc.consomeWS(this._MODULO, 'GetCliente', params);
  }
  GetProduto(params) {
    return this.svc.consomeWS(this._MODULO, 'GetProduto', params);
  }
  ListaProdutos(params) {
    return this.svc.consomeWS(this._MODULO, 'ListaProdutos', params);
  }
  IncluiPedido(params) {
    return this.svc.consomeWS(this._MODULO, 'IncluiPedido', params);
  }
  Valida(params) {
    return this.svc.consomeWS(this._MODULO, '_Validations', params);
  }
  static ctorParameters = () => [{
    type: _ws_grape_service__WEBPACK_IMPORTED_MODULE_0__.WsGrapeService
  }];
};
VendasService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], VendasService);


/***/ }),

/***/ 3496:
/*!*****************************************!*\
  !*** ./src/app/api/ws-grape.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WsGrapeService: () => (/* binding */ WsGrapeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _storage_db_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/db.service */ 5193);






let WsGrapeService = class WsGrapeService {
  http;
  loadingCtrl;
  //  protected _SERVER = 'http://app.procced.com.br/brmetal'
  //  protected _SERVER = environment._SERVER
  _URLBASE = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment._SERVER + '/app/v1';
  _URLPING = this._URLBASE + '/Ping';
  constructor(http, loadingCtrl) {
    this.http = http;
    this.loadingCtrl = loadingCtrl;
  }
  consomeWS(modulo, servico, params) {
    if (_storage_db_service__WEBPACK_IMPORTED_MODULE_1__._LOCAL == 'local') this._URLBASE = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment._SERVER_LOCAL + '/app/v1';else this._URLBASE = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment._SERVER + '/app/v1';
    let url = this._URLBASE + "/" + modulo + "/" + servico;
    let $ret = this.http.post(url, params);
    console.log(url);
    return $ret;
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController
  }];
};
WsGrapeService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], WsGrapeService);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 1307)).then(m => m.LoginPageModule)
}, {
  path: 'listaCadastro/:id',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_componentes_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_listaCadastro_listaCadastro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/listaCadastro/listaCadastro.module */ 4894)).then(m => m.ListaCadastroPageModule)
}, {
  path: 'cadastro',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_componentes_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cadastro_cadastro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cadastro/cadastro.module */ 3894)).then(m => m.CadastroPageModule)
}, {
  path: 'altera-senha/:id',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_altera-senha_altera-senha_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./altera-senha/altera-senha.module */ 5583)).then(m => m.AlteraSenhaPageModule)
}, {
  path: 'vendas/:id',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pedido/pedido.module */ 7550)).then(m => m.PedidoPageModule)
}, {
  path: 'identificacao-pedido',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_identificacao-pedido_identificacao-pedido_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/identificacao-pedido/identificacao-pedido.module */ 7026)).then(m => m.IdentificacaoPedidoPageModule)
}, {
  path: 'itens-pedido',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_itens-pedido_itens-pedido_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/itens-pedido/itens-pedido.module */ 7814)).then(m => m.ItensPedidoPageModule)
}, {
  path: 'confirmacao-pedido',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_componentes_components_module_ts"), __webpack_require__.e("src_app_pages_confirmacao-pedido_confirmacao-pedido_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/confirmacao-pedido/confirmacao-pedido.module */ 6896)).then(m => m.ConfirmacaoPedidoPageModule)
}, {
  path: 'home',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 6998)).then(m => m.HomePageModule)
}, {
  path: 'modal-valor',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modal-valor_modal-valor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modal-valor/modal-valor.module */ 6347)).then(m => m.ModalValorPageModule)
}, {
  path: 'expedicao',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_expedicao_expedicao_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/expedicao/expedicao.module */ 8098)).then(m => m.ExpedicaoPageModule)
}, {
  path: 'finaliza-expedicao',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_finaliza-expedicao_finaliza-expedicao_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/finaliza-expedicao/finaliza-expedicao.module */ 854)).then(m => m.FinalizaExpedicaoPageModule)
}, {
  path: 'modal-valida-itens',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modal-valida-itens_modal-valida-itens_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modal-valida-itens/modal-valida-itens.module */ 2835)).then(m => m.ModalValidaItensPageModule)
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 1584);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 7282);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _storage_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage/db.service */ 5193);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);






let AppComponent = class AppComponent {
  db;
  router;
  appPages = [
  // { title: 'Incluir Pedidos', url: 'vendas/pedido', icon: 'document' },
  {
    title: 'Incluir Orcamento',
    url: 'vendas/orcamento',
    icon: 'document'
  }, {
    title: 'Pedidos',
    url: 'listaCadastro/PedidoVenda',
    icon: 'list'
  }, {
    title: 'Orçamentos',
    url: 'listaCadastro/OrcamentoVenda',
    icon: 'list'
  }, {
    title: 'Clientes',
    url: 'listaCadastro/Cliente',
    icon: 'people'
  },
  // { title: 'Expedicao', url: 'expedicao', icon: 'list' },
  {
    title: 'Alterar Senha',
    url: '/altera-senha/altera',
    icon: 'lock-closed'
  }, {
    title: 'Excluir Usuario',
    url: '/altera-senha/exclui',
    icon: 'lock-closed'
  }, {
    title: 'Sair',
    url: '/login',
    icon: 'exit'
  }];
  versao = _storage_db_service__WEBPACK_IMPORTED_MODULE_2__._VERSAO;
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(db, router) {
    this.db = db;
    this.router = router;
    //   let usr = this.db.getUsuario();
    console.log(this.ehExpedicao());
    if (this.ehExpedicao()) {
      this.router.navigateByUrl('/expedicao');
    }
  }
  ehExpedicao() {
    let usr = this.db?.getUsuario();
    return usr && (usr.toUpperCase() == 'SERGIO' || usr.toUpperCase() == 'ALLAN');
    //return false
  }
  ionViewDidEnter() {
    //console.log(this.db.getUsuario().toUpperCase());
    //    if (this.ehExpedicao()) this.router.navigateByUrl('/expedicao')
  }
  static ctorParameters = () => [{
    type: _storage_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _pages_pedido_pedido_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pedido/pedido.module */ 7550);
/* harmony import */ var _pages_visualiza_pedido_visualiza_pedido_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/visualiza-pedido/visualiza-pedido.page */ 1811);
/* harmony import */ var _selecao_cliente_selecao_cliente_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selecao-cliente/selecao-cliente.page */ 6416);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9975);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _pages_cadastro_cadastro_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/cadastro/cadastro.page */ 4329);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ionic-selectable */ 4875);
/* harmony import */ var _pages_listaCadastro_listaCadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/listaCadastro/listaCadastro.page */ 1281);
/* harmony import */ var _selecao_item_selecao_item_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selecao-item/selecao-item.page */ 338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/pt */ 8581);
/* harmony import */ var _modal_valida_itens_modal_valida_itens_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-valida-itens/modal-valida-itens.page */ 1999);




















(0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.registerLocaleData)(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__["default"], 'pt-BR');
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _selecao_cliente_selecao_cliente_page__WEBPACK_IMPORTED_MODULE_2__.SelecaoClientePage, _selecao_item_selecao_item_page__WEBPACK_IMPORTED_MODULE_7__.SelecaoItemPage, _pages_visualiza_pedido_visualiza_pedido_page__WEBPACK_IMPORTED_MODULE_1__.VisualizaPedidoPage],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__.ScrollingModule],
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicRouteStrategy
  }, _pages_cadastro_cadastro_page__WEBPACK_IMPORTED_MODULE_5__.CadastroPage, ionic_selectable__WEBPACK_IMPORTED_MODULE_19__.IonicSelectableModule, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_12__.LOCALE_ID,
    useValue: 'pt-BR'
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__.HashLocationStrategy
  }, _pages_listaCadastro_listaCadastro_page__WEBPACK_IMPORTED_MODULE_6__.listaCadastroPage, _selecao_cliente_selecao_cliente_page__WEBPACK_IMPORTED_MODULE_2__.SelecaoClientePage, _selecao_item_selecao_item_page__WEBPACK_IMPORTED_MODULE_7__.SelecaoItemPage, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _pages_visualiza_pedido_visualiza_pedido_page__WEBPACK_IMPORTED_MODULE_1__.VisualizaPedidoPage, _pages_pedido_pedido_module__WEBPACK_IMPORTED_MODULE_0__.PedidoPageModule, _modal_valida_itens_modal_valida_itens_page__WEBPACK_IMPORTED_MODULE_8__.ModalValidaItensPage
  //  { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
})], AppModule);


/***/ }),

/***/ 3070:
/*!**********************************************!*\
  !*** ./src/app/funcoes/genericas.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericasService: () => (/* binding */ GenericasService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



let GenericasService = class GenericasService {
  datePipe;
  constructor(datePipe) {
    this.datePipe = datePipe;
  }
  validaData(data) {
    console.log(data);
  }
  isValidDate(dateString) {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false;
    // Parse the date parts to integers
    let parts = dateString.split("/");
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10);
    let year = parseInt(parts[2], 10);
    //console.log(day, month, year)
    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;
    //console.log('1')
    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Adjust for leap years
    if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) monthLength[1] = 29;
    // Check the range of the day       
    // console.log('2')
    return day > 0 && day <= monthLength[month - 1];
  }
  ValidaCPF(CPF) {
    if (CPF) {
      let sCPF = CPF.replace(/\./g, '').replace(/\-/g, '').trim();
      // console.log(sCPF.length)
      // console.log(sCPF)
      if (sCPF.length != 11 || sCPF == '00000000000') {
        return false;
      } else {
        // console.log(sCPF[8])
        let iCalcCPF = +sCPF[8] * 2 + +sCPF[7] * 3 + +sCPF[6] * 4 + +sCPF[5] * 5 + +sCPF[4] * 6 + +sCPF[3] * 7 + +sCPF[2] * 8 + +sCPF[1] * 9 + +sCPF[0] * 10;
        let iDv01 = 11 - iCalcCPF % 11;
        if (iDv01 >= 10) {
          iDv01 = 0;
        }
        iCalcCPF = iDv01 * 2 + +sCPF[8] * 3 + +sCPF[7] * 4 + +sCPF[6] * 5 + +sCPF[5] * 6 + +sCPF[4] * 7 + +sCPF[3] * 8 + +sCPF[2] * 9 + +sCPF[1] * 10 + +sCPF[0] * 11;
        let iDv02 = 11 - iCalcCPF % 11;
        if (iDv02 >= 10) {
          iDv02 = 0;
        }
        //// console.log(sCPF[9],iDv01.toString().substr(1, 1),iDv02, sCPF[10])
        if (sCPF[9] == iDv01.toString().substr(0, 1) && sCPF[10] == iDv02.toString().substr(0, 1)) {
          return true;
        } else {
          return false;
        }
      }
    } else return false;
  }
  ValidaCNPJ(sCNPJ) {
    let sAux = sCNPJ.replace(/\./g, '').replace(/\-/g, '').replace(/\//g, '').trim();
    let iTamanho = sAux.length;
    //console.log(sAux, iTamanho)
    if ((iTamanho = 14) && sAux != '00000000000000') {
      let sSemDV = sAux.substr(0, 12);
      let sDVs = sAux.substr(12, 2);
      if (sAux != '' && (iTamanho = 14)) {
        let sResult1 = this.Mod11(sSemDV, 0);
        let sResult2 = this.Mod11(sSemDV + sResult1, 0);
        // console.log(sResult1, sResult2, sDVs)
        if (sResult1 + sResult2 == sDVs) {
          //  console.log(true)
          return true;
        } else {
          //   console.log(false)
          return false;
        }
      }
    }
  }
  Mod11(sNumSemDV, iResto10) {
    let iValorAux;
    let iBase = 9;
    sNumSemDV = sNumSemDV.trim();
    let iTamNum = sNumSemDV.length;
    let iSomaDV = 0;
    let iMult = 2;
    let iIndice = iTamNum - 1;
    while (iIndice >= 0) {
      iValorAux = +sNumSemDV.substr(iIndice, 1) * iMult;
      if (iMult == iBase) {
        iMult = 2;
      } else iMult++;
      iSomaDV = iSomaDV + iValorAux;
      iIndice--;
    }
    let iDV = 11 - iSomaDV % 11;
    if (iDV >= 10) {
      iDV = iResto10;
    }
    return iDV.toString().substr(0, 1);
  }
  mod10(iNumSemDV) {
    let iTam;
    let iSomaDV;
    let iMult;
    let iIndice;
    let iValorAux;
    let iDV;
    let iPos;
    iTam = iNumSemDV.length;
    iSomaDV = 0;
    iMult = 2;
    iIndice = iTam - 1;
    while (iIndice >= 0) {
      iValorAux = +iNumSemDV.substr(iIndice, 1) * iMult;
      if (iMult == 2) iMult = 1;else iMult = 2;
      if (iValorAux > 9) iValorAux = iValorAux - 9;
      iSomaDV = iSomaDV + iValorAux;
      iIndice--;
    }
    if (iSomaDV > 0) {
      iDV = 10 - iSomaDV % 10;
      if (iDV == 10) iDV = 0;
    } else iDV = 0;
    return iDV.toString();
  }
  removeDV(Car, Dv) {
    let iCar, iDv;
    //    iCar := StrToInt(Car);
    //    iDv := StrToInt(Dv);
    iCar = parseInt(Car) + parseInt(Dv);
    if (iCar >= 10) iCar = iCar - 10;
    return iCar.toString();
  }
  formataCampoSaida(valor, tipo, decimais) {
    if (tipo == 'date' && valor != null) {
      if (valor == 'Imediata') {
        return valor;
      } else if (valor.substr(8, 2) > 0) {
        return valor.substr(8, 2) + '/' + valor.substr(5, 2) + '/' + valor.substr(0, 4);
      } else return null;
    } else if (tipo == 'number') {
      return valor ? new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        minimumFractionDigits: decimais
      }).format(+valor) : 0;
    } else return valor;
  }
  removeCaracteres(valor) {
    if (valor) return valor.replace(/\./g, '').replace(/\-/g, '').replace(/\//g, '').trim();else return '';
  }
  cpfCnpjValidator() {
    return control => {
      if (control.value.toString().length <= 14) {
        ///console.log(this.ValidaCPF(control.value))
        if (this.ValidaCPF(control.value)) return null;else {
          //  console.log(control.value)
          return {
            cpfError: true
          };
        }
      } else {
        if (this.ValidaCNPJ(control.value)) return null;else {
          //console.log(control.value)
          return {
            cnpjError: true
          };
        }
      }
    };
  }
  static ctorParameters = () => [{
    type: _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe
  }];
};
GenericasService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], GenericasService);


/***/ }),

/***/ 1999:
/*!***************************************************************!*\
  !*** ./src/app/modal-valida-itens/modal-valida-itens.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalValidaItensPage: () => (/* binding */ ModalValidaItensPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _modal_valida_itens_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-valida-itens.page.html?ngResource */ 6296);
/* harmony import */ var _modal_valida_itens_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-valida-itens.page.scss?ngResource */ 3456);
/* harmony import */ var _modal_valida_itens_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_valida_itens_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _api_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/app.service */ 8467);
/* harmony import */ var _storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/db.service */ 5193);

var ModalValidaItensPage_1;







let ModalValidaItensPage = class ModalValidaItensPage {
  static {
    ModalValidaItensPage_1 = this;
  }
  mc;
  svcApp;
  db;
  itens;
  orcamento;
  constructor(mc, svcApp, db) {
    this.mc = mc;
    this.svcApp = svcApp;
    this.db = db;
  }
  ngOnInit() {}
  modalValidaItens(itens, orcamento) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(itens);
      const modal = yield _this.mc.create({
        component: ModalValidaItensPage_1,
        componentProps: {
          'itens': itens,
          orcamento: orcamento
        },
        cssClass: 'modalValidaClass'
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  okClick() {
    this.mc.dismiss();
  }
  ajustaItem() {
    this.db.mostraProcessando();
    this.svcApp.GetObjeto('OrcamentoVenda', {
      token: this.db.getToken(),
      action: '_ajustaQuantidades',
      orcamento: this.orcamento,
      itens: this.itens
    }).subscribe(ret => {
      if (ret.status == true) {
        this.svcApp.GetObjeto('OrcamentoVenda', {
          token: this.db.getToken(),
          action: '_geraPedido',
          id: this.orcamento
        }).subscribe(ret => {
          if (ret.status == true) {
            this.db.escondeProcessando();
            this.mc.dismiss();
          }
        });
      } else {
        this.db.escondeProcessando();
      }
    });
  }
  ajustaQtdItem(item) {
    item.qtdAjustadaAnt = item.qtdAjustada;
    item.qtdAjustada = 0;
    item.cor = '#ADD8E6';
  }
  retornaQtdItem(item) {
    item.qtdAjustada = item.qtdAjustadaAnt;
    item.qtdAjustadaAnt = 0;
    item.cor = '';
  }
  static ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }, {
    type: _api_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService
  }, {
    type: _storage_db_service__WEBPACK_IMPORTED_MODULE_4__.DbService
  }];
  static propDecorators = {
    itens: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    orcamento: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  };
};
ModalValidaItensPage = ModalValidaItensPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-modal-valida-itens',
  template: _modal_valida_itens_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_modal_valida_itens_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ModalValidaItensPage);


/***/ }),

/***/ 4329:
/*!*************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CadastroPage: () => (/* binding */ CadastroPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _cadastro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.page.html?ngResource */ 7451);
/* harmony import */ var _cadastro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.page.scss?ngResource */ 2587);
/* harmony import */ var _cadastro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cadastro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _listaCadastro_listaCadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../listaCadastro/listaCadastro.page */ 1281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var src_app_api_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/app.service */ 8467);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);










let CadastroPage = class CadastroPage {
  mc;
  svcApp;
  Router;
  db;
  navParams;
  nav;
  grapeCadastro;
  pagina;
  idGrid;
  update;
  grape2;
  item;
  state;
  _PAGINA;
  array = [];
  obj;
  btnLabel;
  constructor(mc, svcApp, Router, db, navParams, nav) {
    this.mc = mc;
    this.svcApp = svcApp;
    this.Router = Router;
    this.db = db;
    this.navParams = navParams;
    this.nav = nav;
  }
  ngOnInit() {}
  ionViewWillEnter() {
    console.log(history.state);
    let dados = history.state;
    this.grapeCadastro = dados.grapeCadastro;
    this.pagina = dados.pagina;
    this.idGrid = dados.idGrid;
    this.update = dados.update;
    this._PAGINA = this.pagina;
    this.svcApp.GetObjeto(this._PAGINA, {
      token: this.db.getToken()
    }).subscribe(ret => {
      console.log(ret);
      this.obj = ret;
      console.log(this.obj);
      if (this.grapeCadastro) {
        this.btnLabel = "Alterar";
        console.log(this.obj.fields);
        this.grape2 = this.grapeCadastro[this._PAGINA];
        console.log(this.grapeCadastro);
      } else {
        this.btnLabel = "Incluir";
        this.grape2 = [{
          ativo: "1"
        }];
        console.log(this.obj.fields);
        this.obj.fields.forEach(cmp => {
          this.grape2[0][cmp.campo] = '';
        });
        this.grape2[0]['ativo'] = "1";
        console.log(this.grape2);
      }
    }, err => this.db.escondeProcessando(err.error));
  }
  cadastro(grape, pagina, idGrid, update) {
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      ;
      /*     console.log(grape)
          const modal = await this.mc.create({
            component: CadastroPage,
            componentProps: {
              grapeCadastro: grape,
              pagina: pagina,
              idGrid: idGrid,
              update: update
            },
          });
      
      
          await modal.present();
          return await modal.onWillDismiss(); */
    })();
  }
  abreListaCadastro(pagina, otherField, value) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.state = {
        filtroObrigatorio: otherField,
        valor: value
      };
      _this.Router.navigate(['listaCadastro/' + pagina], {
        state: _this.state
      });
      /*     const modal = await this.mc.create({
            component: listaCadastroPage,
            componentProps: {
              pagina: pagina,
              filtroObrigatorio: otherField,
              valorFiltro: value
      
            },
          });
      
      
          await modal.present();
          return await modal.onWillDismiss(); */
    })();
  }
  getConteudo(json) {
    this.array = [];
    json.forEach(el => {
      this.array.push({
        codigo: el.codigo,
        name: el.label
      });
    });
    return this.array;
    //JSON.stringify(json)
  }
  acao(grape, acao) {
    console.log(grape);
    /*     this.svcApp.GetObjeto(
          this._PAGINA,
          {
            token: this.db.getToken(),
            action: acao,
            grape: this.grape2
          }
        ).subscribe(
    
          (ret) => {
            console.log(ret)
    
            if (ret.status){ */
    if (acao == '_update') {
      this.svcApp.GetObjeto(this._PAGINA, {
        token: this.db.getToken(),
        action: "_gridData",
        filters: {
          codigo: this.grape2[0].codigo
        },
        id: this.idGrid
      }).subscribe(ret => {
        this.grape2 = ret.data;
        this.mc.dismiss({
          status: true,
          grape: this.grape2
        });
      });
    } else if (acao == '_insert') {
      this.mc.dismiss({
        status: true,
        grape: this.grape2
      });
    }
    /*          this.svcApp.GetObjeto(
                this._PAGINA,
                {
                  token: this.db.getToken(),
                  action: "_gridData",
                  id: this.idGrid
                }
              ).subscribe(
                (ret) => {
                  this.mc.dismiss({
                    status: true,
                    grape: ret.data
                  })
                }
              )} */
    /*  }
                 },
          (err) => this.db.escondeProcessando(err.error)
        ) */
  }
  cancela() {
    this.nav.navigateBack('listaCadastro/' + this._PAGINA, {
      state: this.state
    }); /*
        console.log(this.mc)
        this.mc.dismiss({
        status: false,
        }); */
  }
  listaObjeto(obj) {
    var _this2 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.mc.create({
        component: _listaCadastro_listaCadastro_page__WEBPACK_IMPORTED_MODULE_3__.listaCadastroPage,
        componentProps: {
          pagina: obj
        },
        cssClass: 'modal-css'
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  selecionaObjeto(obj, id, campo) {
    var _this3 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(obj, id, campo);
      const ret = yield _this3.listaObjeto(obj);
      if (ret.data.status) {
        console.log(_this3.grape2);
        console.log(ret.data);
        console.log(_this3.grapeCadastro);
        _this3.grape2[0][campo] = ret.data.evento["codigo"];
        if (!_this3.grapeCadastro) {
          _this3.grapeCadastro = {};
          _this3.grapeCadastro[obj] = {};
        }
        console.log(_this3.grapeCadastro);
        _this3.grapeCadastro[obj][ret.data.evento["codigo"]] = {
          descricao: ret.data.evento["descricao"],
          sigla: ret.data.evento["sigla"]
        };
        console.log(_this3.grape2);
        console.log(_this3.grapeCadastro);
        //this.grape2[0][]=(ret.data.evento["codi"]);
        console.log(ret.data.evento);
        //console.log(ret.data.evento["title"])
        // console.log(campo)
      }
    })();
  }
  conteudo(campo, event) {
    console.log('conteudo:', event.value);
    this.grape2[0][campo] = event.value.codigo;
    console.log(this.grape2[0][campo]);
    console.log(campo);
  }
  getConteudo1to1(og, codigo) {
    let result = '';
    for (var i in this.grapeCadastro[og][codigo]) result += this.grapeCadastro[og][codigo][i] + ' ';
    return result;
  }
  static ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }, {
    type: src_app_api_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_5__.DbService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
  }];
  static propDecorators = {
    grapeCadastro: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    pagina: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    idGrid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }]
  };
};
CadastroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-cadastro',
  template: _cadastro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_cadastro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CadastroPage);


/***/ }),

/***/ 1281:
/*!***********************************************************!*\
  !*** ./src/app/pages/listaCadastro/listaCadastro.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listaCadastroPage: () => (/* binding */ listaCadastroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _listaCadastro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listaCadastro.page.html?ngResource */ 5883);
/* harmony import */ var _listaCadastro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listaCadastro.page.scss?ngResource */ 2615);
/* harmony import */ var _listaCadastro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_listaCadastro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_pages_cadastro_cadastro_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/cadastro/cadastro.page */ 4329);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_api_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/app.service */ 8467);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);









let listaCadastroPage = class listaCadastroPage {
  svcApp;
  db;
  activatedRoute;
  mc;
  cad;
  nav;
  navParams;
  pagina;
  id;
  valorFiltro;
  filtroObrigatorio;
  idHeaderDefault;
  actions;
  header;
  grape;
  grape2;
  grapeHeader;
  grapeHeader2;
  grapes = [];
  filtro;
  headers;
  obj;
  objStr;
  acao = "_list";
  _PAGINA;
  grid = true;
  definition;
  mail;
  filtroPadrao = {};
  constructor(svcApp, db, activatedRoute, mc, cad, nav, navParams) {
    this.svcApp = svcApp;
    this.db = db;
    this.activatedRoute = activatedRoute;
    this.mc = mc;
    this.cad = cad;
    this.nav = nav;
    this.navParams = navParams;
  }
  ngAfterViewInit() {}
  ngOnInit() {
    console.log(history.state);
    let dados = history.state;
    if (dados.filtroObrigatorio) {
      this.filtroObrigatorio = dados.filtroObrigatorio;
      this.valorFiltro = dados.valor;
      console.log(this.filtroObrigatorio);
      this.filtroPadrao[this.filtroObrigatorio] = this.valorFiltro;
      console.log(this.filtroPadrao);
      console.log(this._PAGINA);
    }
    if (!this.pagina) {
      console.log(!this._PAGINA);
      this._PAGINA = this.activatedRoute.snapshot.paramMap.get('id');
    } else this._PAGINA = this.pagina;
    console.log(this._PAGINA);
    if (!this.obj) this.svcApp.GetObjeto(this._PAGINA, {
      token: this.db.getToken()
    }).subscribe(ret => {
      console.log(ret);
      this.actions = ret.actions;
      this.obj = ret;
      this.definition = ret;
      this.headers = ret.headers;
      this.idHeaderDefault = this.headers[0]?.id;
      this.header = this.idHeaderDefault;
    }, err => this.db.escondeProcessando(err.error));
    //  this.objeto("_listHeader",  "PaisEstado")
  }
  _headerFilter(evt) {
    //this.header =  evt.detail.value
    // console.log(this.header)
  }
  objeto(actionobj, header, indice) {
    this.svcApp.GetObjeto(this._PAGINA, {
      token: this.db.getToken(),
      action: actionobj,
      idHeader: header
    }).subscribe(ret => {
      console.log(ret);
      if (ret[this._PAGINA].headers) {
        this.grapeHeader = ret[this._PAGINA].headers;
        this.grapeHeader2 = ret[this._PAGINA].headers;
        for (let index = 0; index < this.grapeHeader.length; index++) {
          const element = this.grapeHeader[index];
          this.grapes.push(element);
        }
        //console.log(element)
      }
      if (ret[this._PAGINA].data) {
        this.grape = ret[this._PAGINA].data;
        this.grape2 = ret[this._PAGINA].data;
      }
      this.grapes[indice] = this.grape;
      console.log(this.grapeHeader.headerFilter);
      console.log(this.grapes);
    }, err => this.db.escondeProcessando(err.error));
  }
  getConteudo(json) {
    //console.log(json)
    // let title = 'usuario';
    // let subTitle = 'tipoApontamento';
    //  return json[title] + '|' + json[subTitle]
    return JSON.stringify(json);
  }
  /*  async objetoCadastro(act: string, codigos?: number) {
     console.log(act)
         this.svcApp.GetObjeto(
       this._PAGINA,
       {
         token: this.db.getToken(),
         action: act,
         id: codigos
       }
     ).subscribe(
       (ret) => {
         //   console.log(ret)
         this.grape2 = ret;
         console.log(this.grape2)
         // console.log(this.grape2)
         const retCadastro = this.cad.cadastro(this.grape2, this._PAGINA);
           },
       (err) => this.db.escondeProcessando(err.error)
     )
     
   }
  */
  seleciona(obj) {
    this.mc.dismiss({
      status: true,
      evento: obj
    });
  }
  cancela() {
    console.log(this.nav);
    this.nav.back();
  }
  static ctorParameters = () => [{
    type: src_app_api_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService
  }, {
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__.DbService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }, {
    type: src_app_pages_cadastro_cadastro_page__WEBPACK_IMPORTED_MODULE_2__.CadastroPage
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams
  }];
  static propDecorators = {
    pagina: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    valorFiltro: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    filtroObrigatorio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  };
};
listaCadastroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-listaCadastro',
  template: _listaCadastro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_listaCadastro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], listaCadastroPage);


/***/ }),

/***/ 6575:
/*!*******************************************************!*\
  !*** ./src/app/pages/pedido/pedido-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PedidoPageRoutingModule: () => (/* binding */ PedidoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pedido_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedido.page */ 6337);




const routes = [{
  path: '',
  component: _pedido_page__WEBPACK_IMPORTED_MODULE_0__.PedidoPage,
  children: [{
    path: 'identificacaoPedido',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_identificacao-pedido_identificacao-pedido_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../identificacao-pedido/identificacao-pedido.module */ 7026)).then(m => m.IdentificacaoPedidoPageModule)
  }, {
    path: 'itensPedido',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_itens-pedido_itens-pedido_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../itens-pedido/itens-pedido.module */ 7814)).then(m => m.ItensPedidoPageModule)
  }, {
    path: 'confirmacaoPedido',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_componentes_components_module_ts"), __webpack_require__.e("src_app_pages_confirmacao-pedido_confirmacao-pedido_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../confirmacao-pedido/confirmacao-pedido.module */ 6896)).then(m => m.ConfirmacaoPedidoPageModule)
  }, {
    path: '',
    redirectTo: 'identificacaoPedido',
    pathMatch: 'full'
  }]
}];
let PedidoPageRoutingModule = class PedidoPageRoutingModule {};
PedidoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PedidoPageRoutingModule);


/***/ }),

/***/ 7550:
/*!***********************************************!*\
  !*** ./src/app/pages/pedido/pedido.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PedidoPageModule: () => (/* binding */ PedidoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 6015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _pedido_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedido-routing.module */ 6575);
/* harmony import */ var _pedido_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedido.page */ 6337);








let PedidoPageModule = class PedidoPageModule {};
PedidoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _pedido_routing_module__WEBPACK_IMPORTED_MODULE_0__.PedidoPageRoutingModule],
  declarations: [_pedido_page__WEBPACK_IMPORTED_MODULE_1__.PedidoPage],
  providers: [ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskPipe]
})], PedidoPageModule);


/***/ }),

/***/ 6337:
/*!*********************************************!*\
  !*** ./src/app/pages/pedido/pedido.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PedidoPage: () => (/* binding */ PedidoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _pedido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedido.page.html?ngResource */ 6771);
/* harmony import */ var _pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedido.page.scss?ngResource */ 6791);
/* harmony import */ var _pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_api_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/app.service */ 8467);
/* harmony import */ var _src_app_funcoes_genericas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../src/app/funcoes/genericas.service */ 3070);
/* harmony import */ var _api_vendas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../api/vendas.service */ 1955);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ 6015);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);











let PedidoPage = class PedidoPage {
  router;
  activatedRoute;
  db;
  venSvc;
  svcApp;
  maskPipe;
  gen;
  fb;
  Form = {};
  identificacaoForm;
  itensPedido = [{}];
  error;
  validaQuantidade;
  dadosAuxiliares = {
    condicaoPagamento: ' ',
    dataEntrega: ' ',
    observacao: ' ',
    entregaImediata: true,
    enviaEmail: true,
    tipoFrete: '2'
  };
  entregaImediata = true;
  update;
  totalItens = 0;
  totalQuantidade = 0;
  totalValor = 0;
  pedidoValido = true;
  tipo;
  constructor(router, activatedRoute, db, venSvc, svcApp, maskPipe, gen, fb) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.db = db;
    this.venSvc = venSvc;
    this.svcApp = svcApp;
    this.maskPipe = maskPipe;
    this.gen = gen;
    this.fb = fb;
  }
  ngOnInit() {
    this.createForm();
    this.tipo = this.activatedRoute.snapshot.paramMap.get('id');
  }
  ionViewWillEnter() {
    let dados = history.state;
    console.log(dados);
    if (dados.cliente) {
      this.identificacaoForm.patchValue(dados.cliente);
      this.itensPedido = dados.itens;
      this.dadosAuxiliares = dados.dadosAuxiliares;
      this.update = dados.update;
      this.totalizaPedido();
    }
  }
  navItensPedido() {
    console.log(this.Form);
    this.router.navigateByUrl('vendas/pedido/itensPedido');
  }
  createForm() {
    this.identificacaoForm = this.fb.group({
      codigo: [null],
      nome: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }],
      cnpjcpf: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, this.cpfCnpjValidator()]
      }],
      inscricaoEstadual: [null],
      nomeFantasia: [null],
      observacao: [null],
      cidade: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }],
      endereco: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }],
      bairro: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }],
      telefone: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }],
      cep: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }],
      uf: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }],
      enderecosEletronicos: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }]
    });
  }
  incluiPedido() {
    this.validaPedido();
    let itens = [];
    this.itensPedido.forEach(produto => {
      itens.push({
        codigo: produto.codigo,
        quantidade: produto.quantidade,
        valorUnitario: produto.valorUnitario,
        valorTotal: produto.valorTotal,
        observacao: produto.observacao,
        selected: false
      });
    });
    this.db.mostraProcessando();
    this.venSvc.IncluiPedido({
      token: this.db.token,
      cliente: this.identificacaoForm.value,
      itens: itens,
      dadosAuxiliares: this.dadosAuxiliares
    }).subscribe(ret => {
      if (ret.status == true) {
        this.db.escondeProcessando();
        this.db.setMensagem('Pedido incluído com sucesso: ' + ret.codigoPedido, 20000, true, 'middle');
        this.identificacaoForm.reset('');
        this.itensPedido = [{}];
        this.totalizaPedido();
        this.dadosAuxiliares = {
          condicaoPagamento: ' ',
          dataEntrega: ' ',
          observacao: ' ',
          entregaImediata: true,
          enviaEmail: true
        };
        this.router.navigateByUrl('vendas/pedido/identificacaoPedido');
        console.log(ret);
      } else {
        console.log(ret);
        this.error = 'Email Obrigaorio'; //ret.error
      }
    }, err => this.db.escondeProcessando(err.error));
    //
  }
  //  incluiPedido(){
  //    console.log('pedido')
  //  }
  incluiOrcamento() {
    this.validaPedido();
    if (this.validaQuantidade) {
      let itens = [];
      this.itensPedido.forEach(produto => {
        itens.push({
          codigo: produto.codigo,
          quantidade: produto.quantidade,
          valorUnitario: produto.valorUnitario,
          valorTotal: produto.valorTotal,
          observacao: produto.observacao,
          selected: false
        });
      });
      // this.db.mostraProcessando();
      if (!this.update) {
        this.db.mostraProcessando();
        this.svcApp.GetObjeto("OrcamentoVenda", {
          action: '_addJSON',
          token: this.db.token,
          cliente: this.identificacaoForm.value,
          itens: itens,
          dadosAuxiliares: this.dadosAuxiliares
        }).subscribe(ret => {
          this.db.escondeProcessando();
          if (ret.status == true) {
            console.log(ret.status);
            if (ret.status) this.db.setMensagem('Orçamento incluído com sucesso: ' + ret.numero, 20000, true, 'middle');
            this.identificacaoForm.reset('');
            this.itensPedido = [{}];
            this.totalizaPedido();
            this.dadosAuxiliares = {
              condicaoPagamento: ' ',
              dataEntrega: ' ',
              observacao: ' ',
              entregaImediata: true,
              enviaEmail: true
            };
            this.router.navigateByUrl('vendas/orcamento/identificacaoPedido');
            console.log(ret);
          } else {
            this.error = ret.error;
          }
        }, err => this.db.escondeProcessando(err.error));
        //
      } else if (this.update) {
        this.svcApp.GetObjeto("OrcamentoVenda", {
          action: '_updateJSON',
          token: this.db.token,
          cliente: this.identificacaoForm.value,
          itens: itens,
          dadosAuxiliares: this.dadosAuxiliares
        }).subscribe(ret => {
          this.db.escondeProcessando();
          if (ret.status) this.db.setMensagem('Orçamento atualizado  com sucesso: ' + ret.numero);
          this.identificacaoForm.reset('');
          this.itensPedido = [{}];
          this.totalizaPedido();
          this.dadosAuxiliares = {
            condicaoPagamento: ' ',
            dataEntrega: ' ',
            observacao: ' ',
            entregaImediata: true,
            enviaEmail: true
          };
          this.update = false;
          this.router.navigateByUrl('vendas/orcamento/identificacaoPedido');
          console.log(ret);
        }, err => this.db.escondeProcessando(err.error));
        //
      }
    }
  }
  quantidadeChange(index) {
    /* console.log(index)
    this.itensPedido[index].valorTotal = +((this.itensPedido[index].valorUnitario * this.itensPedido[index].quantidade).toFixed(2)) */
    this.valida('quantidade', index);
    // this.mascaraValor(event, id)
  }
  valorUnitarioChange(index) {
    /*    console.log('altera valorunitariop')
                 this.itensPedido[index].valorTotal= +((this.itensPedido[index].valorUnitario * this.itensPedido[index].quantidade).toFixed(2))
     */
    this.valida('valorUnitario', index);
  }
  valorTotalChange(index) {
    /*  this.itensPedido[index].valorUnitario = +((this.itensPedido[index].valorTotal / this.itensPedido[index].quantidade).toFixed(5))
     */
    this.valida('valorTotal', index);
  }
  totalizaPedido() {
    this.totalItens = 0;
    this.totalQuantidade = 0;
    this.totalValor = 0;
    console.log(this.itensPedido);
    this.itensPedido.forEach(item => {
      this.totalItens = item.codigo ? this.totalItens + 1 : this.totalItens;
      this.totalQuantidade = item.codigo ? +this.totalQuantidade + +item.quantidade : +this.totalQuantidade;
      this.totalValor = item.codigo ? +this.totalValor + +item.valorTotal : +this.totalValor;
    });
    console.log(this.totalValor);
  }
  /* validaData(){
  
    console.log(new Date(this.dadosAuxiliares.dataEntrega),this.dadosAuxiliares.dataEntrega)
  } */
  valida(campo, i) {
    this.venSvc.Valida({
      id: 'valorTotal',
      field: campo,
      codigo: this.itensPedido[i].codigo,
      quantidade: this.itensPedido[i].quantidade,
      valorUnitario: this.itensPedido[i].valorUnitario,
      valorTotal: this.itensPedido[i].valorTotal
    }).subscribe(ret => {
      this.itensPedido[i].quantidade = ret.quantidade;
      this.itensPedido[i].valorUnitario = ret.valorUnitario;
      this.itensPedido[i].valorTotal = ret.valorTotal;
      this.totalizaPedido();
    }, err => console.log(err));
    //
  }
  mascaraValor(event, id) {
    console.log(event.srcElement.value);
    document.getElementById(id).setAttribute('value', this.maskPipe.transform(event.detail.value, '000.000.000.000,00'));
    /* ('value',this.maskPipe.transform(event.detail.value, '00/00/0000')); */
  }
  validaPedido() {
    this.validaQuantidade = true;
    this.itensPedido.forEach(item => {
      if (item.quantidade > item.estoqueDisponivel) {
        this.db.setMensagem('Item ' + item.descricao + ' quantidade acima do estoque ', 20000, true, 'middle');
        this.validaQuantidade = false;
      }
    });
    /*   if (this.Form.cnpjcpf.toString().length <= 14) {
        if (!this.gen.ValidaCPF(this.Form.cnpjcpf)){
          console.log(document.getElementById('cpfcnpj').attributes)
          this.pedidoValido = false
        }
    
    
      }
        else{
           if (!this.gen.ValidaCNPJ(this.Form.cnpjcpf)){
             this.pedidoValido = false
           }
        } */
  }
  cpfCnpjValidator() {
    return control => {
      if (!control.value) {
        return {
          cpfcnpjObrigatorio: true
        };
      }
      let valor = this.gen.removeCaracteres(control.value);
      if (valor.toString().length < 14) {
        console.log(this.gen.ValidaCPF(valor));
        if (this.gen.ValidaCPF(valor)) return null;else {
          console.log(valor);
          return {
            cpfError: true
          };
        }
      } else {
        if (this.gen.ValidaCNPJ(valor)) return null;else {
          console.log(valor);
          return {
            cnpjError: true
          };
        }
      }
    };
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_5__.DbService
  }, {
    type: _api_vendas_service__WEBPACK_IMPORTED_MODULE_4__.VendasService
  }, {
    type: src_app_api_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService
  }, {
    type: ngx_mask__WEBPACK_IMPORTED_MODULE_8__.NgxMaskPipe
  }, {
    type: _src_app_funcoes_genericas_service__WEBPACK_IMPORTED_MODULE_3__.GenericasService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }];
};
PedidoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-pedido',
  template: _pedido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PedidoPage);


/***/ }),

/***/ 1811:
/*!*****************************************************************!*\
  !*** ./src/app/pages/visualiza-pedido/visualiza-pedido.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualizaPedidoPage: () => (/* binding */ VisualizaPedidoPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _visualiza_pedido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualiza-pedido.page.html?ngResource */ 8557);
/* harmony import */ var _visualiza_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualiza-pedido.page.scss?ngResource */ 5713);
/* harmony import */ var _visualiza_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_visualiza_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storage_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../storage/db.service */ 5193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5995);

var VisualizaPedidoPage_1;






let VisualizaPedidoPage = class VisualizaPedidoPage {
  static {
    VisualizaPedidoPage_1 = this;
  }
  mc;
  db;
  plt;
  constructor(mc, db, plt) {
    this.mc = mc;
    this.db = db;
    this.plt = plt;
  }
  ngOnInit() {}
  abrePedido() {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('abrePedido');
      const modal = yield _this.mc.create({
        component: VisualizaPedidoPage_1
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  convertBlobToBase64 = blob => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
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
  // Interno
  /*   abreDocumento(token: string, id: number, callback: ICallback, download?: boolean,) {
      this.db.mostraProcessando();
      if (this.plt.is('android')) { // only change for iOS
        this.Get({
          token: token,
          id: id,
          tipoRetorno: 1,
        })
          .subscribe((ret) => {
            this.db.renovaToken(ret.novoToken)
            this.svc.fileWrite(ret.titulo, ret.conteudo)
            this.escondeProcessando()
            callback();
          });
      } else if (download) {
        this.Get({
          token: token,
          id: id,
          tipoRetorno: 1,
        })
          .subscribe(async (ret) => {
            this.escondeProcessando()
            if (ret.status == 'true') {
              this.db.renovaToken(ret.novoToken)
              this.salvaArquivo(ret.conteudo, ret.titulo)
  
  
             } else {
              this.setMensagem(ret.error);
            }
          })
      } else if (!download)
        this.Get({
          token: token,
          id: id,
          tipoRetorno: 2,
        })
          .subscribe(async (ret) => {
            this.escondeProcessando()
            if (ret.status == 'true') {
              Browser.open({ url: ret.link })
            } else {
              this.setMensagem(ret.error);
            }
          })
    } */
  salvaArquivo(conteudo, nomeArq) {
    var a;
    var text = this.b64toBlob(conteudo);
    var data = new Blob([text]);
    a = document.createElement('a');
    a.setAttribute('download', nomeArq);
    a.href = "";
    var url = window.URL.createObjectURL(data);
    a.href = url;
    console.log(a);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  static ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
  }, {
    type: _storage_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
  }];
};
VisualizaPedidoPage = VisualizaPedidoPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-visualiza-pedido',
  template: _visualiza_pedido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_visualiza_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], VisualizaPedidoPage);


/***/ }),

/***/ 6416:
/*!*********************************************************!*\
  !*** ./src/app/selecao-cliente/selecao-cliente.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelecaoClientePage: () => (/* binding */ SelecaoClientePage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _selecao_cliente_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selecao-cliente.page.html?ngResource */ 60);
/* harmony import */ var _selecao_cliente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selecao-cliente.page.scss?ngResource */ 2011);
/* harmony import */ var _selecao_cliente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_selecao_cliente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_vendas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/vendas.service */ 1955);
/* harmony import */ var _storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../storage/db.service */ 5193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5995);

var SelecaoClientePage_1;







let SelecaoClientePage = class SelecaoClientePage {
  static {
    SelecaoClientePage_1 = this;
  }
  db;
  venSvc;
  mc;
  clientes = [];
  clientes2 = [];
  constructor(db, venSvc, mc) {
    this.db = db;
    this.venSvc = venSvc;
    this.mc = mc;
  }
  ngOnInit() {
    //this.carrega()
  }
  ionViewDidEnter() {
    //    this.carregaStatus()
    this.carrega();
  }
  selecionaCliente() {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('selecionaCliente');
      const modal = yield _this.mc.create({
        component: SelecaoClientePage_1
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  carrega() {
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
      console.log('entrou carrega clientes');
      this.db.mostraProcessando();
      this.venSvc.ListaClientes({
        token: this.db.token
      }).subscribe(ret => {
        //              if(ev) ev.target.complete();
        this.db.escondeProcessando();
        if (ret.status) {
          this.clientes = ret.clientes;
          this.clientes2 = ret.clientes;
          console.log(this.clientes);
        }
      }, err => this.db.escondeProcessando(err.error));
      //      } else this.clientes = this.db.clientes;
    }
  }
  seleciona(cliente) {
    this.mc.dismiss({
      status: true,
      cliente: cliente
    });
  }
  novoCliente() {
    this.mc.dismiss({
      status: true,
      cliente: {}
    });
  }
  atualiza(event) {}
  cancela() {
    this.mc.dismiss({
      status: false
    });
  }
  busca(evt) {
    this.clientes = this.clientes2.filter(cli => {
      return this.db.compara([cli.nome, cli.cnpjcpf, cli.nomeFantasia], evt.detail.value);
    });
  }
  static ctorParameters = () => [{
    type: _storage_db_service__WEBPACK_IMPORTED_MODULE_4__.DbService
  }, {
    type: _api_vendas_service__WEBPACK_IMPORTED_MODULE_3__.VendasService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }];
};
SelecaoClientePage = SelecaoClientePage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: "app-selecao-cliente",
  template: _selecao_cliente_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_selecao_cliente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SelecaoClientePage);


/***/ }),

/***/ 338:
/*!***************************************************!*\
  !*** ./src/app/selecao-item/selecao-item.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelecaoItemPage: () => (/* binding */ SelecaoItemPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _selecao_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selecao-item.page.html?ngResource */ 4318);
/* harmony import */ var _selecao_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selecao-item.page.scss?ngResource */ 3094);
/* harmony import */ var _selecao_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_selecao_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_vendas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/vendas.service */ 1955);
/* harmony import */ var _storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/db.service */ 5193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5995);

var SelecaoItemPage_1;







let SelecaoItemPage = class SelecaoItemPage {
  static {
    SelecaoItemPage_1 = this;
  }
  db;
  venSvc;
  mc;
  filtro;
  itens = [];
  itens2 = [];
  filtroBusca;
  constructor(db, venSvc, mc) {
    this.db = db;
    this.venSvc = venSvc;
    this.mc = mc;
  }
  ngOnInit() {
    //this.carrega()
  }
  ionViewDidEnter() {
    //    this.carregaStatus()
    this.carrega();
  }
  selecionaProduto(busca) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('selecionaItem');
      const modal = yield _this.mc.create({
        component: SelecaoItemPage_1,
        componentProps: {
          filtro: busca
        }
      });
      yield modal.present();
      return yield modal.onWillDismiss();
    })();
  }
  carrega() {
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
      console.log('entrou carrega itens');
      this.db.mostraProcessando();
      this.venSvc.ListaProdutos({
        token: this.db.token
      }).subscribe(ret => {
        //              if(ev) ev.target.complete();
        this.db.escondeProcessando();
        if (ret.status) {
          this.itens = ret.produtos;
          this.itens2 = ret.produtos;
          console.log(this.itens);
        }
      }, err => this.db.escondeProcessando(err.error));
      this.filtroBusca = this.filtro;
      //      } else this.clientes = this.db.clientes;
    }
  }
  seleciona(item) {
    this.mc.dismiss({
      status: true,
      item: item
    });
  }
  novoCliente() {
    this.mc.dismiss({
      status: true,
      cliente: {}
    });
  }
  atualiza(event) {}
  cancela() {
    this.mc.dismiss({
      status: false
    });
  }
  busca(evt) {
    this.itens = this.itens2.filter(item => {
      return this.db.compara([item.descricao, item.referencia], evt.detail.value);
    });
  }
  static ctorParameters = () => [{
    type: _storage_db_service__WEBPACK_IMPORTED_MODULE_4__.DbService
  }, {
    type: _api_vendas_service__WEBPACK_IMPORTED_MODULE_3__.VendasService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }];
  static propDecorators = {
    filtro: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  };
};
SelecaoItemPage = SelecaoItemPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: "app-selecao-item",
  template: _selecao_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_selecao_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SelecaoItemPage);


/***/ }),

/***/ 5193:
/*!***************************************!*\
  !*** ./src/app/storage/db.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DbService: () => (/* binding */ DbService),
/* harmony export */   _LOCAL: () => (/* binding */ _LOCAL),
/* harmony export */   _VERSAO: () => (/* binding */ _VERSAO)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _api_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api/usuario.service */ 1520);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/app.service */ 8467);


const _VERSAO = "v 3.3.24";
var _LOCAL = "web";






let DbService = class DbService {
  toastController;
  alert;
  router;
  usuSvc;
  loadingController;
  navCtr;
  svcApp;
  urlLogo;
  usuario;
  app;
  isLoading = false;
  logado = false;
  token;
  grapeDb;
  grid = true;
  tipo;
  objetoPersistido;
  //  public local: string = 'web'
  constructor(toastController, alert, router, usuSvc, loadingController, navCtr, svcApp) {
    this.toastController = toastController;
    this.alert = alert;
    this.router = router;
    this.usuSvc = usuSvc;
    this.loadingController = loadingController;
    this.navCtr = navCtr;
    this.svcApp = svcApp;
  }
  mostraProcessando() {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      return yield _this.loadingController.create({
        message: "Carregando",
        spinner: "crescent"
      }).then(ld => {
        ld.present().then(() => {
          if (!_this.isLoading) {
            ld.dismiss();
          }
        });
      });
    })();
  }
  escondeProcessando(msg) {
    var _this2 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isLoading = false;
      return yield _this2.loadingController.dismiss().then(() => {
        if (msg) _this2.setMensagem(msg);
      });
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
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.token = token;
      localStorage.setItem("token", _this4.token);
      _this4.logado = token !== null;
      console.log('logado===>', _this4.logado);
      if (_this4.ehExpedicao()) {
        _this4.router.navigateByUrl('/expedicao');
      } else {
        _this4.navCtr.navigateRoot("vendas/orcamento");
      }
    })();
  }
  getToken() {
    //    console.log(localStorage.getItem("token"))
    return localStorage.getItem("token");
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
  setMensagem(_x) {
    var _this5 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (msg, duration = 2000, btnOk = false, posicao = 'bottom') {
      let params = {};
      if (btnOk) {
        params = {
          message: msg,
          duration: duration,
          buttons: [{
            text: 'Ok',
            role: 'cancel',
            position: posicao
          }]
        };
      } else {
        params = {
          message: msg,
          duration: duration,
          position: posicao
        };
      }
      const toast = yield _this5.toastController.create(params);
      toast.present();
    }).apply(this, arguments);
  }
  formataInteiro(vlr) {
    let result = "";
    let vlrStr = vlr.toString();
    //    console.log("length", vlrStr.length);
    for (let i = vlrStr.length - 1; i >= 0; i--) {
      if ((result.length + 1) % 4 == 0) {
        result = "." + result;
      }
      result = vlrStr[i] + result;
    }
    if (result == "") result = "0";
    return result;
  }
  strToFloat(vlrStr) {
    let result = "";
    for (let i = 0; i < vlrStr.length; i++) {
      if (i == 0 && vlrStr[i] == "-") {
        result = "-";
      } else if (vlrStr[i] >= "0" && vlrStr[i] <= "9") {
        result += vlrStr[i];
        //        console.log("result", result);
      } else if (vlrStr[i] == "," && result.indexOf(".") < 0) {
        result += ".";
      }
    }
    //    console.log(result);
    if (result == "") result = "0";
    return +result;
  }
  keyTyped(event) {
    //    console.log(event);
    const carDec = ",";
    const carMil = ".";
    let obj = event.srcElement;
    //    console.log(obj);
    let maskType = "integer"; //obj.getAttribute("maskType");
    let mask = obj.getAttribute("mask");
    let dec = 2; //+obj.getAttribute("decimals");
    let len = +obj.getAttribute("length");
    let e = event;
    //    let charCode = (event.which) ? event.which : event.keyCode;
    //    console.log
    //    console.log(event.type,event.wich,event.code,event.repeat,event.srcElement);
    if (event.type == "keydown") {
      if (maskType == "integer") {
        // Caracteres aceitos: // Prever tb Ctrl+C e Ctrl+V
        if (!(event.key >= "0" && event.key <= "9" || event.keyCode == 8 ||
        // Backspace
        event.keyCode == 9 ||
        // Tab
        event.keyCode == 35 ||
        // End
        event.keyCode == 36 ||
        // Home
        event.keyCode == 37 ||
        // ArrowLeft
        event.keyCode == 39 ||
        // ArrowRight
        event.keyCode == 46 // Delete
        )) {
          event.preventDefault();
        }
      }
    }
    if (event.type == "keyup") {
      if (maskType == "integer" && dec > 0) {
        let conteudo = Math.trunc(this.strToFloat(obj.value));
        console.log('conteudo', conteudo);
        if (obj.value !== obj.getAttribute("oldValue")) {
          //          this.strVlrLance = this.formataInteiro(conteudo) + ',00';
          obj.value = this.formataInteiro(conteudo) + ",00";
          obj.setAttribute("oldValue", obj.value);
        }
        if (obj.selectionEnd > obj.value.length - dec - 1) obj.selectionEnd = obj.value.length - dec - 1;
      }
    }
    //                if(event.type == 'keypress') {
    //                    console.log('keypress:',obj.value);
    //                }
  }
  setLocal(local) {
    local = local;
    localStorage.setItem("local", local);
  }
  getLocal() {
    _LOCAL = localStorage.getItem("local");
    if (_LOCAL !== "web" && _LOCAL !== "local") _LOCAL = 'web';
    return _LOCAL;
  }
  presentAlertConfirm(header, msg) {
    var _this6 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this6.alert.create({
        header: header,
        message: msg,
        buttons: [{
          text: 'Nao',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('false');
            return false;
          }
        }, {
          text: 'sim',
          role: 'confirm',
          handler: () => {
            console.log('true');
            return true;
          }
        }]
      }).then(alertEl => {
        alertEl.present();
        return alertEl.onDidDismiss();
      });
      ;
    })();
  }
  excluiUsuario() {
    var _this7 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = false;
      let confirm = yield _this7.presentAlertConfirm('Atenção!! ', 'Tem certeza que deseja excluir o seu Usuário');
      if (confirm.role === 'confirm') {
        result = true;
      } else {
        result = false;
        _this7.navCtr.back();
      }
      if (result) {
        _this7.usuSvc.ExcluiUsuario({
          token: _this7.getToken()
        }).subscribe(ret => {
          _this7.escondeProcessando(ret.error);
          if (ret.status) {
            _this7.setMensagem('Usuário Excluído com Sucesso');
            _this7.logout();
          }
        }, err => {
          console.log(err.error);
          _this7.escondeProcessando(err.error);
        });
      }
    })();
  }
  persiste(action, key, scope, id, obj) {
    //this.mostraProcessando()
    return this.svcApp.Persiste({
      action: action,
      token: this.getToken(),
      key: key,
      id: id,
      object: JSON.stringify(obj),
      scope: scope
    });
  }
  ehExpedicao() {
    let usr = this.getUsuario();
    return usr && (usr.toUpperCase() == 'SERGIO' || usr.toUpperCase() == 'ALLAN');
    //return false
  }
  static ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _api_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
  }, {
    type: _api_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService
  }];
};
DbService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
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
  _SERVER: 'https://brmetal.com.br/ws',
  //'http://app.procced.com.br/brmetal/ws',
  _SERVER_LOCAL: 'http://app.procced.com.br/brmetal/ws'
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
		2273,
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
		2244,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		1769,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		2569,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		6534,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
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
	"./ion-input.entry.js": [
		761,
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
		393,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		3970,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		437,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
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
	"./ion-segment_2.entry.js": [
		469,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8471,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		9073,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
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
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		198,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1735,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		7510,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		1018,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
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

/***/ 3456:
/*!****************************************************************************!*\
  !*** ./src/app/modal-valida-itens/modal-valida-itens.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-row {
  border-bottom: solid lightgray 1px;
  vertical-align: center;
}

ion-col {
  vertical-align: center;
}

ion-grid {
  margin: 2px !important;
  width: 100% !important;
}

.row {
  background: white;
}

.rowdif {
  background: #8597ff;
}

ion-icon {
  color: black;
}

.white {
  color: white !important;
}`, "",{"version":3,"sources":["webpack://./src/app/modal-valida-itens/modal-valida-itens.page.scss"],"names":[],"mappings":"AAAA;EAEE,kCAAA;EACF,sBAAA;AAAA;;AAEA;EACE,sBAAA;AACF;;AACA;EACE,sBAAA;EACA,sBAAA;AAEF;;AACA;EACE,iBAAA;AAEF;;AAAA;EACE,mBAAA;AAGF;;AADA;EACE,YAAA;AAIF;;AAFA;EACE,uBAAA;AAKF","sourcesContent":["ion-row{\n\n  border-bottom: solid lightgray 1px;\nvertical-align: center;\n}\nion-col{\n  vertical-align: center;\n}\nion-grid{\n  margin: 2px !important;\n  width: 100% !important\n}\n\n.row{\n  background: white;\n}\n.rowdif{\n  background:#8597ff;\n}\nion-icon {\n  color: black\n}\n.white{\n  color: white !important\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2587:
/*!**************************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.page.scss?ngResource ***!
  \**************************************************************/
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

/***/ 2615:
/*!************************************************************************!*\
  !*** ./src/app/pages/listaCadastro/listaCadastro.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `app-grape-grid {
  height: 100%;
}

.divgrid {
  height: 100%;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/listaCadastro/listaCadastro.page.scss"],"names":[],"mappings":"AAEA;EACI,YAAA;AADJ;;AAGA;EACI,YAAA;AAAJ","sourcesContent":["\n\napp-grape-grid {\n    height: 100%;\n  }\n.divgrid{\n    height: 100%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6791:
/*!**********************************************************!*\
  !*** ./src/app/pages/pedido/pedido.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-item {
  font-size: small;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/pedido/pedido.page.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ","sourcesContent":["ion-item{\n    font-size: small;\n\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5713:
/*!******************************************************************************!*\
  !*** ./src/app/pages/visualiza-pedido/visualiza-pedido.page.scss?ngResource ***!
  \******************************************************************************/
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

/***/ 2011:
/*!**********************************************************************!*\
  !*** ./src/app/selecao-cliente/selecao-cliente.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `table {
  table-layout: fixed;
  font-family: var(--ion-font-family, inherit);
  font-size: x-small;
}
table td {
  padding: 2px 0px 0px 10px;
}

tr:hover {
  background-color: lightblue;
}

ion-label {
  font-size: x-small;
}

.row {
  background: white;
}

.rowdif {
  background: lightsteelblue;
}`, "",{"version":3,"sources":["webpack://./src/app/selecao-cliente/selecao-cliente.page.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,4CAAA;EASA,kBAAA;AAPJ;AAAI;EAGI,yBAAA;AAAR;;AAMA;EAAU,2BAAA;AAFV;;AAIA;EACI,kBAAA;AADJ;;AAGA;EAEG,iBAAA;AADH;;AAGE;EAEI,0BAAA;AADN","sourcesContent":["table{\n    table-layout: fixed;\n    font-family: var(--ion-font-family, inherit);\n   // border: solid 1px gray;\n    td {\n     //  border-left: solid 1px gray;\n      // border-right: solid 1px gray;\n        padding: 2px 0px 0px 10px;;\n    }\n\n  \n    font-size: x-small;\n}\ntr:hover {background-color: lightblue\n}\nion-label{\n    font-size: x-small;\n}\n.row{\n    //  border: solid 1px  black;\n   background: white;\n  }\n  .rowdif{\n     //  border: solid 1px  black;\n      background:lightsteelblue\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3094:
/*!****************************************************************!*\
  !*** ./src/app/selecao-item/selecao-item.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `table {
  table-layout: fixed;
  font-family: var(--ion-font-family, inherit);
  font-size: x-small;
}
table td {
  padding: 2px 0px 0px 10px;
}

ion-label {
  font-size: x-small;
}

tr:hover {
  background-color: lightblue;
}

.row {
  background: white;
}

.rowdif {
  background: lightsteelblue;
}

.menorquezero {
  color: red;
}`, "",{"version":3,"sources":["webpack://./src/app/selecao-item/selecao-item.page.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,4CAAA;EASA,kBAAA;AAPJ;AAAI;EAGI,yBAAA;AAAR;;AAMA;EACI,kBAAA;AAHJ;;AAKA;EAAU,2BAAA;AADV;;AAIA;EAEG,iBAAA;AAFH;;AAIE;EAEI,0BAAA;AAFN;;AAIA;EACA,UAAA;AADA","sourcesContent":["table{\n    table-layout: fixed;\n    font-family: var(--ion-font-family, inherit);\n   // border: solid 1px gray;\n    td {\n     //  border-left: solid 1px gray;\n      // border-right: solid 1px gray;\n        padding: 2px 0px 0px 10px;;\n    }\n\n\n    font-size: x-small;\n}\nion-label{\n    font-size: x-small;\n}\ntr:hover {background-color: lightblue\n}\n\n.row{\n    //  border: solid 1px  black;\n   background: white;\n  }\n  .rowdif{\n     //  border: solid 1px  black;\n      background:lightsteelblue\n  }\n.menorquezero{\ncolor: red\n  }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1584:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane when=\"false\" contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" [swipeGesture]=\"false\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <!--  <ion-list-header>Inbox</ion-list-header>\n          <ion-note>hi@ionicframework.com</ion-note>\n --> <ion-list-header>Menu</ion-list-header>\n\n          <ion-menu-toggle  auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item *ngIf=\"!ehExpedicao()\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\"\n              routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }} </ion-label>\n            </ion-item>\n\n          </ion-menu-toggle>\n          <ion-menu-toggle *ngIf=\"ehExpedicao()\" auto-hide=\"false\" >\n            <ion-item routerDirection=\"root\" [routerLink]=\"'expedicao'\" lines=\"none\" detail=\"false\"\n              routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"'list-outline'\" [md]=\"'list-sharp'\"></ion-icon>\n              <ion-label> EXPEDICAO</ion-label>\n            </ion-item>\n            <ion-item routerDirection=\"root\" [routerLink]=\"'login'\" lines=\"none\" detail=\"false\"\n              routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"'exit-outline'\" [md]=\"'exit-sharp'\"></ion-icon>\n              <ion-label> SAIR </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n        <div color=\"primary\" style=\"width: 100%; text-align: right; font-size: 70%; padding-right: 20px;\">\n          {{ versao }}\n        </div>\n\n\n        <!--\n          <ion-list id=\"labels-list\">\n          <ion-list-header>Labels</ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list>\n-->\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";

/***/ }),

/***/ 6296:
/*!****************************************************************************!*\
  !*** ./src/app/modal-valida-itens/modal-valida-itens.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Revisar Quantidade de Itens</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button  size=\"large\" color=\"primary\"(click)=\"this.mc.dismiss()\">\n        <ion-icon class=\"white\" slot=\"end\"  name=\"close-outline\"></ion-icon>\n\n     </ion-button>\n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid fixed >\n\n  <ion-row>\n    <ion-col size=\"8\">Descrição</ion-col>\n    <ion-col size=\"1\">Qtd Disp.</ion-col>\n    <ion-col size=\"1\">Qtd Orç.</ion-col>\n    <ion-col size=\"1\">Qtd Ajust.</ion-col>\n\n\n  </ion-row>\n\n  <ion-row       [style]=\"'font-size: small ;background:' + item.cor\" *ngFor=\"let item of itens, let i = index\" >\n    <ion-col size=\"8\"><b> {{item.referencia}}</b> - {{item.descricao}}</ion-col>\n    <ion-col size=\"1\">{{item.maximoDisponivel}}</ion-col>\n    <ion-col size=\"1\">{{item.qtdOrc}}</ion-col>\n    <ion-col size=\"1\"><span style=\"font-weight:700;\">{{item.qtdAjustada}}</span></ion-col>\n    <ion-col size=\"1\">\n      <ion-button fill=\"clear\" (click)=\"(item.qtdAjustada > 0)?ajustaQtdItem(item):retornaQtdItem(item)\">\n      <ion-icon *ngIf=\"item.qtdAjustada > 0\" slot=\"icon-only\"  name=\"close-outline\"></ion-icon>\n      <ion-icon *ngIf=\"item.qtdAjustadaAnt > 0\" slot=\"icon-only\"  name=\"arrow-undo-outline\"></ion-icon>\n    </ion-button>\n\n  </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-button (click)=\"ajustaItem()\" expand=\"block\" color=\"primary\" shape=\"round\">\n  Ajustar Itens\n</ion-button>\n</ion-content>\n";

/***/ }),

/***/ 7451:
/*!**************************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{obj?.label}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancela()\">\n        <ion-icon\n          slot=\"icon-only\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n<!-- <form #form=\"ngForm\" (ngSubmit)=\"acao()\">\n<ion-item *ngFor=\"let cmp of obj?.fields\">\n  <ion-label position=\"floating\">{{cmp.label}}</ion-label>\n  <ion-input [required]=\"cmp.obrigatorio\" [[(ngModel)]]=\"grape2[0][cmp.campo]\"[name]=\"grape2[0][cmp.campo]\" [size]=\"cmp.tamanho\" [type]=\"cmp.type\">{{grape2[0][cmp.campo]}}</ion-input>\n</ion-item>\n<button type=\"submit\" >\n  Save\n</button>\n</form> -->\n\n<div *ngFor=\"let grp of grape2\">\n  <form  #form=\"ngForm\" (ngSubmit)=\"this.btnLabel == 'Incluir'?acao(form,'_insert'):acao(form,'_update')\" > \n    <ion-list no-lines>\n      <div *ngFor=\"let cmp of obj?.fields\">\n     \n        <ion-button *ngIf=\"cmp.type == 'relation_1toN'\" (click)=\"abreListaCadastro(cmp.otherGrape, cmp.otherField, grp[cmp.campo])\">\n          <ion-label>{{cmp.label}}</ion-label>\n        </ion-button>\n        <!-- <app-grape-grid *ngIf=\"cmp.type == 'relation_1toN'\" [objeto]=\"cmp.otherGrape\" [callbackFunction]=\"seleciona.bind(this)\"  [filterDefault]=\"filtroPadrao\">\n        </app-grape-grid>\n         -->\n         <ion-item no-lines *ngIf=\"!cmp.hidden\">\n          <ion-label  position=\"floating\" class=\"ion-text-wrap\">\n            <ion-icon\n              *ngIf=\"cmp.obrigatorio\"\n              name=\"star\"\n              class=\"iconeObrig\"\n            ></ion-icon>\n            {{cmp.label}} <!-- - {{grape2[0][cmp.campo]}} - {{cmp.campo}} -->\n          </ion-label>\n\n          <ion-input [readonly]=\"!this.update\"\n          *ngIf=\"!cmp.items && !(cmp.type == 'relation_1to1')\"\n            [required]=\"cmp.obrigatorio\"\n            [attr.maxLength]=\"cmp.tamanho\"\n            [type]=\"cmp.type\"\n            [(ngModel)]=\"grp[cmp.campo]\"\n            [name]=\"cmp.campo\"\n            [placeholder]=\"cmp.title\"\n          ></ion-input>\n       <!--    <ion-button fill=\"clear\" (click)=\"selecionaObjeto(cmp.otherGrape ,grp.codigo ,cmp.campo)\" *ngIf=\"cmp.type == 'relation_1to1'\" slot=\"start\">\n            <ion-label>{{ getConteudo1to1(cmp.otherGrape,grp[cmp.campo]) }}</ion-label>\n            <ion-icon slot=\"icon-only\" [name]=\"obj.icon\"></ion-icon>             (click)=\"selecionaObjeto(cmp.otherGrape ,grp.codigo ,cmp.campo)\"\n\n          </ion-button> -->\n            <app-relation1to1 \n            [codigo]=\"grp[cmp.campo]\" \n            [otherGrape]=\"cmp.otherGrape\" \n            [grapeCadastro]=\"this.grapeCadastro\"\n            [icon]=\"obj.icon\" \n            *ngIf=\"cmp.type == 'relation_1to1'\" \n            (click)=\"this.update?selecionaObjeto(cmp.otherGrape ,grp.codigo ,cmp.campo):''\"\n            slot=\"start\"></app-relation1to1>\n  \n\n            \n          <ionic-selectable\n          disabled=\"!this.update\"\n              #itOpcoes\n              item-content\n              *ngIf=\"cmp.items\"\n              [(ngModel)]=\"grape2[0][cmp.campo]\"\n              [name]=\"cmp.campo\"\n              [items]=\"getConteudo(cmp.items)\"\n              [canSearch]=\"cmp.items.length > 5\"\n              [searchPlaceholder]=\"'Localizar ' + cmp.label\"\n              [required]=\"cmp.obrigatorio\"\n              itemValueField=\"codigo\" \n              itemTextField=\"name\"\n              (onChange)=\"conteudo(cmp.campo, $event)\">\n              >\n              <ng-template ionicSelectableSearchFailTemplate>\n                <ion-item>Nenhum item encontrado</ion-item>\n              </ng-template>\n              <ng-template ionicSelectableHeaderTemplate>\n                <ion-toolbar>\n                  <ion-title color=\"primary\">{{cmp.label}}</ion-title>\n                </ion-toolbar>\n              </ng-template>\n  \n              <ng-template ionicSelectableFooterTemplate>\n                <ion-toolbar>\n                  <ion-buttons slot=\"end\">\n                    <ion-button \n                      color=\"primary\"\n                      slot=\"end\"\n                      (click)=\"itOpcoes.close()\"\n                    >\n                      Cancelar\n                    </ion-button>\n                    <ion-button\n                      color=\"primary\"\n                      slot=\"end\"\n                      (click)=\"itOpcoes.confirm();itOpcoes.close()\"\n                    >\n                      Ok\n                    </ion-button>\n                  </ion-buttons>\n                </ion-toolbar>\n              </ng-template>\n            </ionic-selectable>\n          </ion-item>\n          </div>\n    </ion-list>\n    <ion-grid >\n      <ion-row justify-content-center>\n        <ion-col align-self-center>\n          <ion-button\n          *ngIf=\"this.update\"\n            class=\"btnEntrar\"\n            size=\"large\"\n            color=\"primary\"\n            type=\"submit\"\n            [disabled]=\"form.invalid\"\n            expand=\"block\"\n            >{{this.btnLabel}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</div>\n\n      <ion-fab-button color=\"light\" *ngFor=\"let cmp of obj?.relations\">\n        <ion-icon [name]=\"cmp.icon\"></ion-icon>\n      </ion-fab-button>\n\n</ion-content>";

/***/ }),

/***/ 5883:
/*!************************************************************************!*\
  !*** ./src/app/pages/listaCadastro/listaCadastro.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">{{obj?.labelPlur}}</ion-title>\n    <ion-buttons class=\"alturamenor\" slot=\"start\">\n      <ion-menu-button class=\"alturamenor\"></ion-menu-button>\n      <ion-button (click)=\"cancela()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n<!--     <ion-buttons slot=\"end\">\n      <ion-toggle [(ngModel)]=\"this.db.grid\"></ion-toggle>\n    </ion-buttons> -->\n  </ion-toolbar>\n  <!--   <ion-item class=\"itemSemBorda\">\n    <ion-searchbar style=\"border-top: 5px\" placeholder=\"Buscar \" (ionChange)=\"busca($event)\" [(ngModel)]=\"filtro\">\n    </ion-searchbar>\n    <ion-badge slot=\"end\">\n      {{this.grape?.length}}\n    </ion-badge>\n  </ion-item> -->\n\n\n  <ion-grid *ngIf=\"!this.db.grid\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-label class=\"fonteSmall\">Header:<br></ion-label>\n        <ion-chip>\n          <ion-select class=\"fonteSmall\" (ionChange)=\"_headerFilter($event)\" okText=\"Ok\" cancelText=\"Cancelar\"\n            placeholder=\"Selecione o Header\" [(ngModel)]=\"header\" [value]=\"idHeaderDefault\">\n            <ion-select-option *ngFor=\"let head of headers\" [value]=\"head.id\">{{head.label}}</ion-select-option>\n          </ion-select>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<!--  <ion-content id=\"content\">\n -->\n\n  <!--   <ion-item *ngIf=\"!grid\">\n    <div *ngFor=\"let item of this.db.grapeDb\">\n      <app-lista-objeto-grid [objeto]=\"item.headers\"></app-lista-objeto-grid>\n    </div>\n  </ion-item> -->\n  <!--     <ion-list  *ngIf=\"acao !== 'definition'\">\n    <ion-item *ngFor=\"let cmp of grape\" (click)=\"objetoCadastro('_get',cmp.codigo);\">   \n       \n<ion-card>\n  <ion-card-header>\n    <ion-card-title>{{cmp.title}}</ion-card-title>\n\n    <ion-card-subtitle>{{cmp.subTitle}}</ion-card-subtitle>\n  </ion-card-header>\n\n</ion-card>        \n  </ion-item>\n\n    </ion-list>  -->\n  <div *ngIf=\"!this.db.grid\">\n    <app-grape-header *ngIf=\"this.header\" [objeto]=\"this._PAGINA\" [header]=\"this.header\" [keyHeader]=\"\"\n      [headerFilter]=\"filtro\"></app-grape-header>\n  </div>\n  <div class=\"divgrid\" *ngIf=\"this.db.grid\">\n    <app-grape-grid [objeto]=\"this._PAGINA\" [definition]=\"this.definition\" [callbackFunction]=\"seleciona.bind(this)\"  [filterDefault]=\"filtroPadrao\" >\n    </app-grape-grid>\n  </div>\n  <!-- <ion-virtual-scroll [items]=\"grapeHeader\"> -->\n  <!--   <ion-item *virtualItem=\"let cmp\" (click)=\"objetoCadastro('_get',cmp.codigo);\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>{{cmp.title}}</ion-card-title>\n    \n        <ion-card-subtitle>{{cmp.subTitle}}</ion-card-subtitle>\n      </ion-card-header>\n\n    </ion-card>        \n  </ion-item> -->\n  <!--   <ion-label></ion-label>\n  <ion-list *ngFor=\"let cmp of grapes\" >\n    <ion-list-header (click)=\"objeto('_list',cmp,'paisEstado', grapes.indexOf(cmp))\">\n      <ion-label >{{cmp.headerFilter}} </ion-label>\n    </ion-list-header>\n    <ion-list-header>\n      <ion-label>Nivel 2</ion-label>\n    </ion-list-header>\n    <ion-list >\n    <ion-item *ngFor=\"let item of cmp\" (click)=\"objetoCadastro('_get',cmp.codigo);\" >\n      <ion-label>{{item.descricao}}</ion-label>\n    </ion-item>\n  </ion-list>\n  </ion-list> -->\n  <!-- </ion-virtual-scroll> -->\n\n  <ion-list *ngIf=\"acao=='_definition'\">\n    {{ this.getConteudo(obj) }}\n  </ion-list>\n  {{obj?.action}}\n  <!--   <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" slot=\"fixed\">\n    <ion-fab-button *ngFor=\"let act of obj?.actions\" (click)=\"objeto(act.id); this.acao=act.id\">{{act.label}}\n    </ion-fab-button>\n  </ion-fab> -->\n<!-- </ion-content>  -->";

/***/ }),

/***/ 6771:
/*!**********************************************************!*\
  !*** ./src/app/pages/pedido/pedido.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"!this.update\"  class=\"ion-text-center\">Incluir  {{this.tipo=='orcamento'?'Orçamento':this.tipo}}</ion-title>\n    <ion-title *ngIf=\"this.update\"  class=\"ion-text-center\">Alterar {{this.tipo=='orcamento'?'Orçamento':this.tipo}} - {{dadosAuxiliares.numero}} </ion-title>\n\n    \n  </ion-toolbar>\n\n  \n\n\n\n \n</ion-header>\n\n<ion-tabs>\n  <ion-item  *ngIf=\"this.totalValor > 0\" color=\"primary\" font-color=\"white\">\n    <table width=\"100%\">\n      <tr>\n\n        <td width=\"20%\">\n          Itens: {{this.gen.formataCampoSaida(this.totalItens.toString(),'number','0')}}\n        </td>\n        <td width=\"40%\">\n          Quantidade: {{this.gen.formataCampoSaida(this.totalQuantidade.toString(),'number','2')}}\n        </td>\n        <td width=\"40%\">\n          Valor Total: {{this.gen.formataCampoSaida(this.totalValor.toString(),'number','2')}}\n        </td>\n      </tr>\n    </table>\n  </ion-item>\n  <ion-tab-bar slot=\"bottom\" color=\"primary\">\n    <ion-tab-button tab=\"identificacaoPedido\">\n      <ion-label>Identificacao</ion-label>\n      <ion-icon name=\"person-sharp\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"itensPedido\">\n      <ion-label>Itens</ion-label>\n      <ion-icon name=\"pricetag-sharp\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"confirmacaoPedido\">\n      <ion-label>Confirmacao</ion-label>\n      <ion-icon name=\"checkmark-sharp\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";

/***/ }),

/***/ 8557:
/*!******************************************************************************!*\
  !*** ./src/app/pages/visualiza-pedido/visualiza-pedido.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>visualizaPedido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ }),

/***/ 60:
/*!**********************************************************************!*\
  !*** ./src/app/selecao-cliente/selecao-cliente.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <app-sel></app-sel>  -->\n\n<ion-header>\n    <ion-toolbar>\n      <ion-title>Cliente</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"cancela()\">\n          <ion-icon\n            color=\"secondary\"\n            slot=\"icon-only\"\n            name=\"arrow-back-outline\"\n          ></ion-icon>\n        </ion-button>\n      </ion-buttons> \n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"novoCliente()\">\n          <ion-icon\n            slot=\"icon-only\"\n            name=\"add\"\n          ></ion-icon>\n        </ion-button>\n      </ion-buttons> \n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"carrega()\">\n          <ion-icon\n            slot=\"icon-only\"\n            name=\"refresh-outline\"\n          ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-item class=\"itemSemBorda\">\n    <ion-searchbar\n    style=\"border-top: 5px\"\n    placeholder=\"Buscar Cliente\"\n    (ionChange)=\"busca($event)\"\n  ></ion-searchbar>\n  <ion-badge *ngIf=\"this.clientes\" slot=\"end\">\n    {{this.clientes.length}}\n  </ion-badge>\n  </ion-item>\n  \n  </ion-header>\n  \n  <ion-content fullscreen>\n  \n  <!--  <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"carrega($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>-->\n<!--     <ion-list>\n      <ion-item *ngFor=\"let cli of clientes\" (click)=\"seleciona(cli)\">\n        <ion-label class=\"ion-text-wrap\">{{cli.nome}}</ion-label>\n      </ion-item>\n    </ion-list> -->\n    <ion-list>\n      <!--       <ion-item *ngIf=\"this.clientes.length == 0\">Nenhum item encontrado</ion-item>\n   -->\n    \n        <table widht=\"100%\" fixed>\n          <tr  *ngFor=\"let cli of clientes; let i = index\" [class]=\"i % 2 == 0?'rowdif':'row'\"  (click)=\"seleciona(cli)\" >\n            <td width=\"20%\">\n              {{cli.cnpjcpf}}\n            </td>\n            <td width=\"50%\" >\n              <ion-label  >{{cli.nome}}</ion-label>\n            </td>\n            <td width=\"30%\">\n              <ion-label  >{{cli.nomeFantasia}}</ion-label>\n            </td>\n  \n          </tr>\n        </table>\n  \n    </ion-list>\n  </ion-content>\n  \n";

/***/ }),

/***/ 4318:
/*!****************************************************************!*\
  !*** ./src/app/selecao-item/selecao-item.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <app-sel></app-sel>  -->\n\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Produtos</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancela()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"carrega()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item class=\"itemSemBorda\">\n    <ion-searchbar [(ngModel)]=\"filtroBusca\" style=\"border-top: 5px\" placeholder=\"Buscar Produto\"\n      (ionChange)=\"busca($event)\"></ion-searchbar>\n    <ion-badge *ngIf=\"this.itens\" slot=\"end\">\n      {{this.itens.length}}\n    </ion-badge>\n  </ion-item>\n\n</ion-header>\n\n<ion-content fullscreen>\n\n  <!--  <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"carrega($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>-->\n  <ion-list>\n    <!--       <ion-item *ngIf=\"this.clientes.length == 0\">Nenhum item encontrado</ion-item>\n -->\n\n      <table widht=\"100%\" fixed>\n        <tr  *ngFor=\"let item of itens; let i = index\" [class]=\"i % 2 == 0?'rowdif':'row'\"  (click)=\"seleciona(item)\" >\n          <td width=\"20%\">\n            {{item.referencia}}\n          </td>\n          <td width=\"70%\" >\n            <ion-label  >{{item.descricao}}</ion-label>\n          </td>\n          <td >\n            <ion-label width=\"10%\" >{{item.unidade}}</ion-label>\n          </td>\n          <td class=\"ion-text-right\">\n            <ion-label width=\"20%\" [class]=\"item.quantidadeEstoque <= 0?'menorquezero':''\">{{item.quantidadeEstoque | number}}</ion-label>\n          </td>\n\n        </tr>\n      </table>\n\n  </ion-list>\n</ion-content>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map