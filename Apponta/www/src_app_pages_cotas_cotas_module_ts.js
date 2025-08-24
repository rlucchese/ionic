(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cotas_cotas_module_ts"],{

/***/ 4210:
/*!**************************************!*\
  !*** ./src/app/api/cotas.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CotasService: () => (/* binding */ CotasService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ws-reval.service */ 5727);



// Importe os tipos corretos para cotas se existirem, ou ajuste conforme necessário
// import { ListaCotasRequest, ListaCotasResponse, GetCotaRequest, GetCotaResponse } from '../interface/reval';
let CotasService = class CotasService {
  svc;
  _MODULO = 'Producao';
  constructor(svc) {
    this.svc = svc;
  }
  SetCotas(params) {
    return this.svc.consomeWS(this._MODULO, 'SetCotas', params);
  }
  GetCotas(params) {
    return this.svc.consomeWS(this._MODULO, 'GetCotas', params);
  }
  GetInstrumentos(params) {
    return this.svc.consomeWS(this._MODULO, 'GetInstrumentos', params);
  }
  static ctorParameters = () => [{
    type: _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__.WsProccedService
  }];
};
CotasService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], CotasService);


/***/ }),

/***/ 8767:
/*!*****************************************************!*\
  !*** ./src/app/pages/cotas/cotas-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CotasPageRoutingModule: () => (/* binding */ CotasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _cotas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cotas.page */ 2513);




const routes = [{
  path: '',
  component: _cotas_page__WEBPACK_IMPORTED_MODULE_0__.CotasPage
}];
let CotasPageRoutingModule = class CotasPageRoutingModule {};
CotasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CotasPageRoutingModule);


/***/ }),

/***/ 4446:
/*!*********************************************!*\
  !*** ./src/app/pages/cotas/cotas.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CotasPageModule: () => (/* binding */ CotasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _cotas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cotas.page */ 2513);
/* harmony import */ var _cotas_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cotas-routing.module */ 8767);







let CotasPageModule = class CotasPageModule {};
CotasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _cotas_routing_module__WEBPACK_IMPORTED_MODULE_1__.CotasPageRoutingModule],
  declarations: [_cotas_page__WEBPACK_IMPORTED_MODULE_0__.CotasPage]
})], CotasPageModule);


/***/ }),

/***/ 2513:
/*!*******************************************!*\
  !*** ./src/app/pages/cotas/cotas.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CotasPage: () => (/* binding */ CotasPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _cotas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cotas.page.html?ngResource */ 8923);
/* harmony import */ var _cotas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cotas.page.scss?ngResource */ 6447);
/* harmony import */ var _cotas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cotas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_api_cotas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/cotas.service */ 4210);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);







let CotasPage = class CotasPage {
  cotsvc;
  db;
  filtro;
  cotas;
  msg;
  ordem = null;
  pecaSelecionada = null;
  cotaSelecionada = null;
  instrumentos = [];
  constructor(cotsvc, db) {
    this.cotsvc = cotsvc;
    this.db = db;
  }
  navegarCota(direcao) {
    if (!this.pecaSelecionada || !this.pecaSelecionada.cotas || this.pecaSelecionada.cotas.length < 2) return;
    const idx = this.pecaSelecionada.cotas.indexOf(this.cotaSelecionada);
    if (idx === -1) return;
    let novoIdx = idx + direcao;
    if (novoIdx < 0) novoIdx = this.pecaSelecionada.cotas.length - 1;
    if (novoIdx >= this.pecaSelecionada.cotas.length) novoIdx = 0;
    this.cotaSelecionada = this.pecaSelecionada.cotas[novoIdx];
  }
  adicionarMedida() {
    if (!this.instrumentos || this.instrumentos.length === 0) {
      this.db.setMensagem("Nenhum instrumento disponível para adicionar medida.");
    } else {
      if (this.cotaSelecionada) {
        if (!this.cotaSelecionada.resultados) {
          this.cotaSelecionada.resultados = [];
        }
        this.cotaSelecionada.resultados.push({
          medida: null
        });
      }
      console.log("Medida adicionada", this.ordem);
    }
  }
  removerMedida(index) {
    if (this.cotaSelecionada && this.cotaSelecionada.resultados.length > index) {
      this.cotaSelecionada.resultados[index].medida = 0;
    }
    this.setOrdem();
  }
  aoMudarPeca() {
    this.cotaSelecionada = null;
  }
  aoMudarCota() {
    // Ao selecionar uma cota, inicializa o instrumento do select com o instrumento da cota
    if (this.cotaSelecionada && this.cotaSelecionada.instrumento) {
      this.cotaSelecionada.instrumento = this.cotaSelecionada.instrumento;
    } else if (this.cotaSelecionada && this.instrumentos && this.instrumentos.length) {
      // Se não houver instrumento, pode inicializar com o primeiro da lista (opcional)
      // this.cotaSelecionada.instrumento = this.instrumentos[0];
    }
  }
  ngOnInit() {
    this.buscarInstrumentos();
  }
  ngDoCheck() {
    if (this.ordem && this.ordem.pecas && this.ordem.pecas.length === 1 && !this.pecaSelecionada) {
      this.pecaSelecionada = this.ordem.pecas[0];
    }
    if (this.pecaSelecionada && this.pecaSelecionada.cotas.length === 1 && !this.pecaSelecionada) {
      this.cotaSelecionada = this.pecaSelecionada.cotas[0];
    }
  }
  buscarOrdem() {
    var _this = this;
    console.log(this.ordem);
    if (this.filtro) {
      this.cotsvc.GetCotas({
        token: this.db.getToken(),
        numeroOrdem: this.filtro
      }).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ret) {
          _this.db.escondeProcessando();
          if (ret.status) {
            console.log("ret", ret);
            _this.msg = null;
            _this.ordem = ret;
          } else {
            _this.ordem = null;
            _this.pecaSelecionada = null;
            _this.cotaSelecionada = null;
            _this.msg = ret.error;
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), err => this.db.escondeProcessando(err.error));
    } else {
      this.db.setMensagem("Escolha um filtro para buscar");
    }
    // Exemplo: chamada de serviço para buscar cotas
  } // this.cotasService.buscar({ filtro: this.filtro }).subscribe(...)
  // this.msg = 'Busca de cotas realizada para: ' + this.filtro;
  // this.cotas = resultado;
  setOrdem() {
    var _this2 = this;
    console.log(this.ordem);
    if (this.filtro) {
      this.cotsvc.SetCotas({
        token: this.db.getToken(),
        ordem: this.ordem
      }).subscribe(/*#__PURE__*/function () {
        var _ref2 = (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ret) {
          _this2.db.escondeProcessando();
          if (ret.status) {
            console.log("ret", ret);
          } else {
            _this2.msg = ret.error;
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }(), err => this.db.escondeProcessando(err.error));
    } else {
      this.db.setMensagem("Escolha um filtro para buscar");
    }
    // Exemplo: chamada de serviço para buscar cotas
  }
  buscarInstrumentos() {
    var _this3 = this;
    this.cotsvc.GetInstrumentos({
      token: this.db.getToken()
    }).subscribe(/*#__PURE__*/function () {
      var _ref3 = (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ret) {
        _this3.db.escondeProcessando();
        if (ret && ret.instrumentos) {
          _this3.instrumentos = ret.instrumentos;
          console.log("Instrumentos encontrados:", _this3.instrumentos);
          _this3.instrumentos = ret.instrumentos.map(inst => ({
            ...inst,
            codigo: Number(inst.codigo)
          })); // Garantir que o código seja numérico
          console.log("isntrumentos ", _this3.instrumentos);
        } else {
          _this3.msg = "NENHUM INSTRUMENTO ENCONTRADO";
        }
      });
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }(), err => this.db.escondeProcessando(err.error));
  }
  comparaInstrumentos(inst1, inst2) {
    return inst1 && inst2 && inst1.codigo === inst2.codigo;
  }
  static ctorParameters = () => [{
    type: src_app_api_cotas_service__WEBPACK_IMPORTED_MODULE_3__.CotasService
  }, {
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__.DbService
  }];
};
CotasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-cotas',
  template: _cotas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_cotas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CotasPage);


/***/ }),

/***/ 6447:
/*!********************************************************!*\
  !*** ./src/app/pages/cotas/cotas.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Estilo para inputs de medida dentro do range */
.medida-verde {
  --background: #e6ffe6 !important;
  background-color: #e6ffe6 !important;
  border: 2px solid #2ecc40 !important;
  color: #222;
}

/* Estilo para inputs de medida fora do range */
.medida-vermelha {
  --background: #ffe6e6 !important;
  background-color: #ffe6e6 !important;
  border: 2px solid #ff4136 !important;
  color: #222;
}

.custom-input ion-label.disabled,
.custom-input ion-label {
  transform: translateY(15px) translateX(5px) translateZ(0) scale(0.85);
  color: black;
  z-index: 2;
}

.custom-input ion-input {
  font-size: 12px;
  color: black;
  text-align: center;
  padding-right: 0px !important;
  border-radius: 8px;
  transition: border-color 0.3s ease;
  --background: #f0f0f0;
  border-radius: 5px;
  padding: 10px;
  margin-top: -20px; /* Ajuste para alinhar o texto com o topo do input */
}

.read {
  background-color: lightgrey;
}

.custom-input ion-input.ng-valid + ion-label,
.custom-input ion-input.ng-touched + ion-label {
  transform: translateY(-24px) scale(0.85);
  font-size: 12px;
}

.custom-input ion-item.item-native {
  padding: 2px 2px;
}

.completo {
  background-color: green;
  border: 1px solid black;
}

.atencao {
  background-color: yellow;
  border: 1px solid black;
}

.cuidado {
  background-color: red;
  border: 1px solid black;
}

.custom-input2 {
  position: relative;
}

.custom-input2 ion-label.floating-label {
  position: absolute;
  top: 0px;
  left: 0;
  background-color: transparent;
  border-radius: 5px;
  z-index: 5;
  transform: scale(0.8);
  font-size: 12px;
  color: green;
}

.custom-input2 ion-icon.floating-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border-radius: 5px;
  z-index: 5;
  font-size: 24px;
  cursor: pointer;
}

.custom-input2 ion-icon.floating-icon2 {
  position: absolute;
  top: 15px;
  left: 10px;
  background-color: transparent;
  border-radius: 5px;
  z-index: 5;
  font-size: 24px;
  cursor: pointer;
}

.borda {
  border: solid black 1px;
  margin-top: 5px;
  padding-top: 2px;
}

.custom-input2 p {
  --background: white;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
  --padding-bottom: 5px !important;
  border: solid black 1px;
}

.cabecalho ion-input {
  background-color: var(--ion-color-secondary);
}

.corpo ion-input {
  background-color: lightgrey;
}

ion-content {
  font-size: small;
  font-weight: 300;
}

ion-col {
  padding-top: 2px;
  padding-bottom: 2px;
}

.fundo {
  background-color: white;
}

.texto {
  padding-left: 30px !important;
}

ion-input {
  position: relative;
  z-index: 0;
}
ion-input ion-button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 2;
  margin: 0;
  --padding-start: 8px;
  --padding-end: 8px;
}

.input-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon-btn {
  position: absolute;
  left: 8px;
  z-index: 2;
  background: transparent;
  border: none;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.input-icon-btn ion-icon {
  font-size: 20px;
  color: var(--ion-color-medium);
}

.input-icon-wrapper ion-input {
  flex: 1;
  --padding-start: 36px;
}

.select-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  justify-content: center;
  text-align: center;
}

.select {
  width: 100%;
  text-align: center;
  --placeholder-color: #3880ff;
  --placeholder-opacity: 1;
  --background: #f4f5f8;
  --color: #222;
  --border-radius: 8px;
  --padding-start: 12px;
  --padding-end: 12px;
}

.select-text {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 1.1em;
  white-space: normal;
  word-break: break-word;
}

.maior {
  font-weight: bold;
  font-size: 1.2em;
  text-align: center;
}

ion-alert .alert-wrapper {
  min-width: 500px !important;
  max-width: 95vw !important;
  width: 95vw !important;
}

ion-alert .alert-radio-label, ion-alert .alert-checkbox-label {
  white-space: normal !important;
  font-size: 1.1em !important;
  word-break: break-word !important;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/cotas/cotas.page.scss"],"names":[],"mappings":"AAAA,iDAAA;AACA;EACE,gCAAA;EACA,oCAAA;EACA,oCAAA;EACA,WAAA;AACF;;AAEA,+CAAA;AACA;EACE,gCAAA;EACA,oCAAA;EACA,oCAAA;EACA,WAAA;AACF;;AAEA;;EAEE,qEAAA;EACA,YAAA;EACA,UAAA;AACF;;AACA;EACE,eAAA;EACA,YAAA;EACA,kBAAA;EACA,6BAAA;EACA,kBAAA;EACA,kCAAA;EACA,qBAAA;EACA,kBAAA;EACA,aAAA;EACA,iBAAA,EAAA,oDAAA;AAEF;;AAAA;EACE,2BAAA;AAGF;;AADA;;EAEE,wCAAA;EACA,eAAA;AAIF;;AAFA;EACE,gBAAA;AAKF;;AAHA;EACE,uBAAA;EACA,uBAAA;AAMF;;AAJA;EACE,wBAAA;EACA,uBAAA;AAOF;;AALA;EACE,qBAAA;EACA,uBAAA;AAQF;;AANA;EACE,kBAAA;AASF;;AAPA;EACE,kBAAA;EACA,QAAA;EACA,OAAA;EACA,6BAAA;EACA,kBAAA;EACA,UAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;AAUF;;AARA;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,6BAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;EACA,eAAA;AAWF;;AATA;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,6BAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;EACA,eAAA;AAYF;;AAVA;EACE,uBAAA;EACA,eAAA;EACA,gBAAA;AAaF;;AAXA;EACE,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,gCAAA;EACA,uBAAA;AAcF;;AAZA;EACE,4CAAA;AAeF;;AAbA;EACE,2BAAA;AAgBF;;AAdA;EACE,gBAAA;EACA,gBAAA;AAiBF;;AAfA;EACE,gBAAA;EACA,mBAAA;AAkBF;;AAhBA;EACE,uBAAA;AAmBF;;AAjBA;EACE,6BAAA;AAoBF;;AAlBA;EACE,kBAAA;EACA,UAAA;AAqBF;AApBE;EACE,kBAAA;EACA,QAAA;EACA,MAAA;EACA,YAAA;EACA,UAAA;EACA,SAAA;EACA,oBAAA;EACA,kBAAA;AAsBJ;;AAnBA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;AAsBF;;AApBA;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,uBAAA;EACA,YAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;AAuBF;;AArBA;EACE,eAAA;EACA,8BAAA;AAwBF;;AAtBA;EACE,OAAA;EACA,qBAAA;AAyBF;;AAvBE;EACE,kBAAA;EACA,sBAAA;EACA,uBAAA;EACA,kBAAA;AA0BJ;;AAxBE;EACE,WAAA;EACA,kBAAA;EACA,4BAAA;EACA,wBAAA;EACA,qBAAA;EACA,aAAA;EACA,oBAAA;EACA,qBAAA;EACA,mBAAA;AA2BJ;;AAzBC;EACG,cAAA;EACA,WAAA;EACA,kBAAA;EACE,gBAAA;EACJ,mBAAA;EACA,sBAAA;AA4BF;;AAzBA;EACE,iBAAA;EACA,gBAAA;EACA,kBAAA;AA4BF;;AAzBA;EACE,2BAAA;EACA,0BAAA;EACA,sBAAA;AA4BF;;AAzBA;EACE,8BAAA;EACA,2BAAA;EACA,iCAAA;AA4BF","sourcesContent":["/* Estilo para inputs de medida dentro do range */\r\n.medida-verde {\r\n  --background: #e6ffe6 !important;\r\n  background-color: #e6ffe6 !important;\r\n  border: 2px solid #2ecc40 !important;\r\n  color: #222;\r\n}\r\n\r\n/* Estilo para inputs de medida fora do range */\r\n.medida-vermelha {\r\n  --background: #ffe6e6 !important;\r\n  background-color: #ffe6e6 !important;\r\n  border: 2px solid #ff4136 !important;\r\n  color: #222;\r\n}\r\n\r\n.custom-input ion-label.disabled,\r\n.custom-input ion-label {\r\n  transform: translateY(15px) translateX(5px) translateZ(0) scale(0.85);\r\n  color: black; \r\n  z-index: 2;\r\n}\r\n.custom-input ion-input {\r\n  font-size: 12px;\r\n  color: black; \r\n  text-align: center;\r\n  padding-right: 0px !important;\r\n  border-radius: 8px;\r\n  transition: border-color 0.3s ease;\r\n  --background: #f0f0f0; \r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin-top: -20px; /* Ajuste para alinhar o texto com o topo do input */\r\n}\r\n.read{\r\n  background-color: lightgrey;\r\n}\r\n.custom-input ion-input.ng-valid+ion-label,\r\n.custom-input ion-input.ng-touched+ion-label {\r\n  transform: translateY(-24px) scale(0.85);\r\n  font-size: 12px;\r\n}\r\n.custom-input ion-item.item-native {\r\n  padding: 2px 2px;\r\n}\r\n.completo{\r\n  background-color: green;\r\n  border: 1px solid black\r\n}\r\n.atencao{\r\n  background-color: yellow;\r\n  border: 1px solid black\r\n}\r\n.cuidado{\r\n  background-color: red;\r\n  border: 1px solid black   \r\n}\r\n.custom-input2  {\r\n  position: relative;\r\n}\r\n.custom-input2 ion-label.floating-label {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0;\r\n  background-color: transparent;\r\n  border-radius: 5px;\r\n  z-index: 5;\r\n  transform:  scale(0.8);\r\n  font-size: 12px;\r\n  color: green;\r\n}\r\n.custom-input2 ion-icon.floating-icon {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n  background-color: transparent;\r\n  border-radius: 5px;\r\n  z-index: 5;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n}\r\n.custom-input2 ion-icon.floating-icon2 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left:10px;\r\n  background-color: transparent;\r\n  border-radius: 5px;\r\n  z-index: 5;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n}\r\n.borda{\r\n  border: solid black 1px;\r\n  margin-top: 5px;\r\n  padding-top: 2px;\r\n}\r\n.custom-input2 p {\r\n  --background: white;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  text-align: center;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  --padding-bottom: 5px !important;\r\n  border: solid black 1px;\r\n}\r\n.cabecalho ion-input{\r\n  background-color: var(--ion-color-secondary);\r\n}\r\n.corpo ion-input{\r\n  background-color: lightgrey;\r\n}\r\nion-content{\r\n  font-size: small;\r\n  font-weight: 300;\r\n}\r\nion-col{\r\n  padding-top: 2px;\r\n  padding-bottom: 2px;\r\n}\r\n.fundo{\r\n  background-color: white;\r\n}\r\n.texto {\r\n  padding-left: 30px !important\r\n}\r\nion-input {\r\n  position: relative;\r\n  z-index: 0 ;\r\n  ion-button {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    z-index: 2;\r\n    margin: 0;\r\n    --padding-start: 8px;\r\n    --padding-end: 8px;\r\n  }\r\n}\r\n.input-icon-wrapper {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.input-icon-btn {\r\n  position: absolute;\r\n  left: 8px;\r\n  z-index: 2;\r\n  background: transparent;\r\n  border: none;\r\n  padding: 0;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n.input-icon-btn ion-icon {\r\n  font-size: 20px;\r\n  color: var(--ion-color-medium);\r\n}\r\n.input-icon-wrapper ion-input {\r\n  flex: 1;\r\n  --padding-start: 36px;\r\n}\r\n  .select-item {\r\n    --padding-start: 0;\r\n    --inner-padding-end: 0;\r\n    justify-content: center;\r\n    text-align: center;\r\n  }\r\n  .select {\r\n    width: 100%;\r\n    text-align: center;\r\n    --placeholder-color: #3880ff;\r\n    --placeholder-opacity: 1;\r\n    --background: #f4f5f8;\r\n    --color: #222;\r\n    --border-radius: 8px;\r\n    --padding-start: 12px;\r\n    --padding-end: 12px;\r\n  }\r\n .select-text {\r\n    display: block;\r\n    width: 100%;\r\n    text-align: center;\r\n      font-size: 1.1em;\r\n  white-space: normal;\r\n  word-break: break-word;\r\n  }\r\n\r\n.maior {\r\n  font-weight: bold;\r\n  font-size: 1.2em;\r\n  text-align: center;\r\n}\r\n\r\nion-alert .alert-wrapper {\r\n  min-width: 500px !important;\r\n  max-width: 95vw !important;\r\n  width: 95vw !important;\r\n}\r\n\r\nion-alert .alert-radio-label, ion-alert .alert-checkbox-label {\r\n  white-space: normal !important;\r\n  font-size: 1.1em !important;\r\n  word-break: break-word !important;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8923:
/*!********************************************************!*\
  !*** ./src/app/pages/cotas/cotas.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title color=\"primary\">Cotas</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"campos\">\r\n    <ion-row>\r\n      <ion-col size-sm=\"8\" size=\"12\">\r\n        <div class=\"input-icon-wrapper\">\r\n          <button type=\"button\" class=\"input-icon-btn\" (click)=\"buscarOrdem()\">\r\n            <ion-icon name=\"search-outline\"></ion-icon>\r\n          </button>\r\n          <ion-input (keyup.enter)=\"buscarOrdem()\" type=\"text\" name=\"filtro\" placeholder=\"Buscar OF\"\r\n            [(ngModel)]=\"filtro\"></ion-input>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-item *ngIf=\"msg\">{{msg}}</ion-item>\r\n  <ion-item *ngIf=\"ordem && ordem.numero\" class=\"select-item\">\r\n    <ion-label>Ordem de Fabricação: {{ordem.numero}} - {{ordem.descricao}}</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"ordem && ordem.pecas\" class=\"select-item\">\r\n    <ion-select [(ngModel)]=\"pecaSelecionada\" placeholder=\"Escolha a peça\" class=\"select\" interface=\"alert\"\r\n      (ionChange)=\"aoMudarPeca()\">\r\n      <ion-select-option *ngFor=\"let peca of ordem.pecas\" [value]=\"peca\">\r\n        <span class=\"select-text\">{{peca.codigo}} - {{peca.descricao}} ({{peca.referencia}})</span>\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"pecaSelecionada && pecaSelecionada.cotas && pecaSelecionada.cotas.length > 0\" class=\"select-item\">\r\n    <ion-select [(ngModel)]=\"cotaSelecionada\" placeholder=\"Escolha a cota\" style=\"flex:1\" class=\"select\"\r\n      interface=\"alert\" (ionChange)=\"aoMudarCota()\">\r\n      <ion-select-option *ngFor=\"let cota of pecaSelecionada.cotas; let i = index\" [value]=\"cota\">\r\n        <span class=\"select-text\">Cota {{cota.codigo}} - {{cota.descricao || 'Sem descrição'}}</span>\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n\r\n\r\n  <div *ngIf=\"cotaSelecionada\">\r\n    <ion-item>\r\n      <ion-label>Instrumento</ion-label>\r\n      <ion-select [disabled]=\"true\" [(ngModel)]=\"cotaSelecionada.instrumento\" [compareWith]=\"comparaInstrumentos\"\r\n        placeholder=\"Escolha o instrumento\">\r\n        <ion-select-option *ngFor=\"let instrumento of instrumentos\" [value]=\"instrumento\" [disabled]=\"true\">\r\n          {{instrumento.descricao}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Medida Mínima - {{cotaSelecionada.medidaMinima}}</ion-label>\r\n      <ion-label>Medida Máxima - {{cotaSelecionada.medidaMaxima}}</ion-label>\r\n    </ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"2\"></ion-col>\r\n        <ion-col size=\"8\"><b>Medida</b></ion-col>\r\n        <ion-col size=\"2\"></ion-col>\r\n      </ion-row>\r\n      <ion-row *ngFor=\"let resultado of cotaSelecionada.resultados; let i = index\">\r\n        <ion-col size=\"2\" class=\"ion-text-right maior\"><b>{{i+1}}</b></ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-input type=\"number\" [(ngModel)]=\"cotaSelecionada.resultados[i].medida\" placeholder=\"Informe a medida\"\r\n            [ngClass]=\"{\r\n            'medida-verde':cotaSelecionada.resultados[i].medida != 0 &&  cotaSelecionada.resultados[i].medida >= cotaSelecionada.medidaMinima && cotaSelecionada.resultados[i].medida <= cotaSelecionada.medidaMaxima,\r\n            'medida-vermelha': cotaSelecionada.resultados[i].medida !=  0 && cotaSelecionada.resultados[i].medida < cotaSelecionada.medidaMinima || cotaSelecionada.resultados[i].medida > cotaSelecionada.medidaMaxima\r\n          }\" (ionBlur)=\"setOrdem()\"></ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-button color=\"danger\" (click)=\"removerMedida(i)\" size=\"small\" fill=\"clear\">\r\n            <ion-icon name=\"trash\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div *ngIf=\"cotaSelecionada\"\r\n        style=\"display: flex; align-items: center; justify-content: center; margin-bottom: 8px;\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"6\" class=\"ion-text-left\">\r\n              <ion-button expand=\"block\" (click)=\"navegarCota(-1)\"\r\n                [disabled]=\"!cotaSelecionada || pecaSelecionada.cotas.length < 2\">\r\n                Cota Anterior\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"ion-text-right\">\r\n              <ion-button expand=\"block\" (click)=\"navegarCota(1)\"\r\n                [disabled]=\"!cotaSelecionada || pecaSelecionada.cotas.length < 2\">\r\n                Próxima Cota </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        </ion-grid>\r\n\r\n      </div>\r\n\r\n      <!--     <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-button expand=\"block\" (click)=\"adicionarMedida()\">Adicionar Medida</ion-button>\r\n      </ion-col>\r\n    </ion-row> -->\r\n\r\n</ion-grid>\r\n</div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cotas_cotas_module_ts.js.map