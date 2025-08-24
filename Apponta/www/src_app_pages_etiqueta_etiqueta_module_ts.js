(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_etiqueta_etiqueta_module_ts"],{

/***/ 7953:
/*!***********************************************************!*\
  !*** ./src/app/pages/etiqueta/etiqueta-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EtiquetaPageRoutingModule: () => (/* binding */ EtiquetaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _etiqueta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etiqueta.page */ 2051);




const routes = [{
  path: '',
  component: _etiqueta_page__WEBPACK_IMPORTED_MODULE_0__.EtiquetaPage
}];
let EtiquetaPageRoutingModule = class EtiquetaPageRoutingModule {};
EtiquetaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], EtiquetaPageRoutingModule);


/***/ }),

/***/ 5432:
/*!***************************************************!*\
  !*** ./src/app/pages/etiqueta/etiqueta.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EtiquetaPageModule: () => (/* binding */ EtiquetaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _etiqueta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etiqueta-routing.module */ 7953);
/* harmony import */ var _etiqueta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./etiqueta.page */ 2051);







let EtiquetaPageModule = class EtiquetaPageModule {};
EtiquetaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _etiqueta_routing_module__WEBPACK_IMPORTED_MODULE_0__.EtiquetaPageRoutingModule],
  declarations: [_etiqueta_page__WEBPACK_IMPORTED_MODULE_1__.EtiquetaPage]
})], EtiquetaPageModule);


/***/ }),

/***/ 2051:
/*!*************************************************!*\
  !*** ./src/app/pages/etiqueta/etiqueta.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EtiquetaPage: () => (/* binding */ EtiquetaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _etiqueta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etiqueta.page.html?ngResource */ 9213);
/* harmony import */ var _etiqueta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./etiqueta.page.scss?ngResource */ 6473);
/* harmony import */ var _etiqueta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_etiqueta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/producao.service */ 4561);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);






let EtiquetaPage = class EtiquetaPage {
  db;
  svcProd;
  ordemFabricacao;
  pesoBruto = 0;
  pesoLiquido = 0;
  quantidade = 0;
  cliente = '';
  descricao = '';
  referencia = '';
  unidade = '';
  pedido = '';
  qtdEtiquetas = 1;
  codigoItem = '';
  operador = '';
  setup = '';
  rastreabilidade = '';
  data = new Date().toISOString().slice(0, 10);
  of;
  constructor(db, svcProd) {
    this.db = db;
    this.svcProd = svcProd;
  }
  ngOnInit() {}
  ionViewDidEnter() {
    if (this.db.autenticado()) {}
  }
  calculaPeso() {
    this.pesoLiquido = parseFloat((this.quantidade * this.ordemFabricacao.pesoLiquido).toFixed(3));
    this.pesoBruto = this.pesoLiquido + 6;
  }
  carregaOrdem() {
    this.db.mostraProcessando();
    this.svcProd.GetOrdemFabricacao({
      token: this.db.token,
      numero: this.of
    }).subscribe(ret => {
      if (ret.status) {
        this.db.escondeProcessando();
        this.ordemFabricacao = ret.ordem;
        this.cliente = this.ordemFabricacao.cliente;
        this.codigoItem = this.ordemFabricacao.referencia;
        this.descricao = this.ordemFabricacao.descricao;
        this.unidade = this.ordemFabricacao.unidade;
        this.pedido = this.ordemFabricacao.numeroPedido;
        this.quantidade = 0;
        this.calculaPeso();
      } else this.db.escondeProcessando(ret.error);
    }, err => {
      this.db.escondeProcessando(err);
    });
  }
  imprime() {
    /*
        joAux.AddPair(TJSONPair.Create('token',FLogin.FToken));
        joAux.AddPair(TJSONPair.Create('numeroOrdem',eOF.Text));
        joAux.AddPair(TJSONPair.Create('pedido',ePedido.Text));
        joAux.AddPair(TJSONPair.Create('quantidadeEtiquetas',eQtdEtiquetas.Text));
        joAux.AddPair(TJSONPair.Create('cliente',eCliente.Text));
        joAux.AddPair(TJSONPair.Create('codigoItem',eCodigoItem.Text));
        joAux.AddPair(TJSONPair.Create('descricaoItem',eDescricaoItem.Text));
        joAux.AddPair(TJSONPair.Create('unidade',eUnidade.Text));
        joAux.AddPair(TJSONPair.Create('operador',eOperador.Text));
        joAux.AddPair(TJSONPair.Create('setup',eSetup.Text));
        joAux.AddPair(TJSONPair.Create('rastreabilidade',eRastreabilidade.Text));
        joAux.AddPair(TJSONPair.Create('pesoLiquido',ePesoLiquido.Text));
        joAux.AddPair(TJSONPair.Create('pesoBruto',ePesoBruto.Text));
        joAux.AddPair(TJSONPair.Create('quantidadePecas',eQtdPecas.Text));
        joAux.AddPair(TJSONPair.Create('data',DateTimeToYMDString(deData.Date)));
      
        joAux := FLogin.ConsomePost('EtiquetaOrdemFabricacao',joAux);
    */
    if (this.qtdEtiquetas <= 0) this.db.setMensagem('Quantidade inválida');else {
      let etiqueta = {
        numeroOrdem: this.of,
        pedido: this.pedido,
        quantidadeEtiquetas: this.qtdEtiquetas,
        cliente: this.cliente,
        codigoItem: this.codigoItem,
        descricaoItem: this.descricao,
        unidade: this.unidade,
        operador: this.operador,
        setup: this.setup,
        rastreabilidade: this.rastreabilidade,
        pesoLiquido: this.pesoLiquido,
        pesoBruto: this.pesoBruto,
        quantidadePecas: this.quantidade,
        data: this.data
      };
      console.log(etiqueta);
      this.svcProd.ImprimeEtiqueta(etiqueta).subscribe(ret => {
        console.log(ret);
      });
    }
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService
  }, {
    type: src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_2__.ProducaoService
  }];
};
EtiquetaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-etiqueta',
  template: _etiqueta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_etiqueta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EtiquetaPage);


/***/ }),

/***/ 6473:
/*!**************************************************************!*\
  !*** ./src/app/pages/etiqueta/etiqueta.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-label {
  color: var(--ion-color-primary);
}

ion-row {
  border-bottom: 1px solid var(--ion-color-secondary);
}

ion-toolbar {
  border: none;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/etiqueta/etiqueta.page.scss"],"names":[],"mappings":"AAAA;EACI,+BAAA;AACJ;;AACA;EACI,mDAAA;AAEJ;;AAAA;EACI,YAAA;AAGJ","sourcesContent":["ion-label {\r\n    color: var(--ion-color-primary);\r\n}\r\nion-row {\r\n    border-bottom: 1px solid var(--ion-color-secondary);\r\n}\r\nion-toolbar {\r\n    border: none;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9213:
/*!**************************************************************!*\
  !*** ./src/app/pages/etiqueta/etiqueta.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Etiqueta</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n  <form autocomplete=\"chrome-off\" #form=\"ngForm\" (ngSubmit)=\"imprime(form)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"ion-text-wrap\">\n            OF\n          </ion-label>\n          <ion-toolbar>\n            <ion-input autocomplete=\"chrome-off\" [attr.maxLength]=\"11\" type=\"text\" [(ngModel)]=\"of\" name=\"of\">\n            </ion-input>\n            <ion-buttons slot=\"end\">\n              <ion-button (click)=\"carregaOrdem()\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"ion-text-wrap\">\n            Data\n          </ion-label>\n          <ion-input autocomplete=\"chrome-off\" [attr.maxLength]=\"10\" type=\"date\" [(ngModel)]='data' name=\"data\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"ion-text-wrap\">\n            Pedido\n          </ion-label>\n          <ion-input autocomplete=\"chrome-off\" [attr.maxLength]=\"50\" type=\"mail\" [(ngModel)]='pedido' name=\"pedido\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"ion-text-wrap\">\n            Cliente\n          </ion-label>\n          <ion-input autocomplete=\"chrome-off\" [attr.maxLength]=\"50\" type=\"mail\" [(ngModel)]='cliente' name=\"cliente\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"ion-text-wrap\">\n            Cód Item\n          </ion-label>\n          <ion-input autocomplete=\"chrome-off\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]='codigoItem'\n            name=\"codigoItem\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"ion-text-wrap\">\n            Descrição\n          </ion-label>\n          <ion-input autocomplete=\"chrome-off\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]='descricao'\n            name=\"descricao\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"ion-text-wrap\">\n            Qtd de Peças\n          </ion-label>\n          <ion-input autocomplete=\"chrome-off\" [attr.maxLength]=\"100\" type=\"text\" [(ngModel)]='quantidade'\n            name=\"quantidade\" (ionChange)=\"calculaPeso()\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"ion-text-wrap\">\n            Peso Líquido </ion-label>\n          <ion-input autocomplete=\"chrome-off\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]='pesoLiquido'\n            name=\"pesoLiquido\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"ion-text-wrap\">\n            <!-- <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon> -->\n            Peso Bruto\n          </ion-label>\n          <ion-input autocomplete=\"chrome-off\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]='pesoBruto'\n            name=\"pesoBruto\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"ion-text-wrap\">\n            Unidade\n          </ion-label>\n          <ion-input autocomplete=\"chrome-off\" [required]=\"true\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]='unidade'\n            name=\"unidade\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"ion-text-wrap\">\n            Setup\n          </ion-label>\n          <ion-input autocomplete=\"chrome-off\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]='setup' name=\"setup\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"ion-text-wrap\">\n            Operador\n          </ion-label>\n          <ion-input autocomplete=\"chrome-off\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]='operador' name=\"operador\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"ion-text-wrap\">\n            Rastreabilidade\n          </ion-label>\n          <ion-input autocomplete=\"chrome-off\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]='rastreabilidade'\n            name=\"rastreabilidade\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label position=\"floating\" class=\"ion-text-wrap\">\n            Quantidade de Etiquetas </ion-label>\n          <ion-input autocomplete=\"chrome-off\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]='qtdEtiquetas'\n            name=\"qtdEtiquetas\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-button class=\"btnEntrar\" size=\"large\" color=\"primary\" type=\"submit\" expand=\"block\">Imprimir</ion-button>\n  </form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_etiqueta_etiqueta_module_ts.js.map