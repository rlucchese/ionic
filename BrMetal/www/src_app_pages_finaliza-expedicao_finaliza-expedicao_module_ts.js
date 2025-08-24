(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_finaliza-expedicao_finaliza-expedicao_module_ts"],{

/***/ 1927:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/finaliza-expedicao/finaliza-expedicao-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinalizaExpedicaoPageRoutingModule: () => (/* binding */ FinalizaExpedicaoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _finaliza_expedicao_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finaliza-expedicao.page */ 3289);




const routes = [{
  path: '',
  component: _finaliza_expedicao_page__WEBPACK_IMPORTED_MODULE_0__.FinalizaExpedicaoPage
}];
let FinalizaExpedicaoPageRoutingModule = class FinalizaExpedicaoPageRoutingModule {};
FinalizaExpedicaoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], FinalizaExpedicaoPageRoutingModule);


/***/ }),

/***/ 854:
/*!***********************************************************************!*\
  !*** ./src/app/pages/finaliza-expedicao/finaliza-expedicao.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinalizaExpedicaoPageModule: () => (/* binding */ FinalizaExpedicaoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _finaliza_expedicao_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finaliza-expedicao-routing.module */ 1927);
/* harmony import */ var _finaliza_expedicao_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finaliza-expedicao.page */ 3289);







let FinalizaExpedicaoPageModule = class FinalizaExpedicaoPageModule {};
FinalizaExpedicaoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _finaliza_expedicao_routing_module__WEBPACK_IMPORTED_MODULE_0__.FinalizaExpedicaoPageRoutingModule],
  declarations: [_finaliza_expedicao_page__WEBPACK_IMPORTED_MODULE_1__.FinalizaExpedicaoPage]
})], FinalizaExpedicaoPageModule);


/***/ }),

/***/ 3289:
/*!*********************************************************************!*\
  !*** ./src/app/pages/finaliza-expedicao/finaliza-expedicao.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinalizaExpedicaoPage: () => (/* binding */ FinalizaExpedicaoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _finaliza_expedicao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finaliza-expedicao.page.html?ngResource */ 4779);
/* harmony import */ var _finaliza_expedicao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finaliza-expedicao.page.scss?ngResource */ 5087);
/* harmony import */ var _finaliza_expedicao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_finaliza_expedicao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);
/* harmony import */ var src_app_api_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/app.service */ 8467);







let FinalizaExpedicaoPage = class FinalizaExpedicaoPage {
  db;
  router;
  route;
  svcApp;
  idPedido;
  volumes;
  itensPed;
  pesoLiq;
  pesoBruto;
  itensExped;
  obs;
  fatura;
  jsonExpedicao;
  params;
  constructor(db, router, route, svcApp) {
    this.db = db;
    this.router = router;
    this.route = route;
    this.svcApp = svcApp;
    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
      //   console.log(getNav);
      // console.log('construiu')
      if (getNav.extras.state) {
        this.params = getNav.extras.state;
        //    console.log(this.params);
      }
    });
  }
  ngOnInit() {}
  ionViewDidEnter() {
    this.idPedido = this.params.pedido;
    this.volumes = this.params.volumes;
    this.pesoLiq = this.params.pesoLiq;
    this.pesoBruto = this.params.pesoBruto;
    this.itensExped = this.params.itensExpedidos;
    this.itensPed = this.params.itensPedido;
    this.jsonExpedicao = JSON.parse(this.params.json);
  }
  finalizar() {
    this.jsonExpedicao.extras = {
      volume: this.volumes,
      pesoLiq: this.pesoLiq,
      pesoBruto: this.pesoBruto,
      itensExpedidos: this.itensExped,
      obs: this.obs,
      fatura: this.fatura
    };
    this.db.mostraProcessando();
    this.svcApp.GetObjeto('PedidoVenda', {
      action: "_setExpedicao",
      dados: this.jsonExpedicao,
      token: this.db.getToken()
    }).subscribe(ret => {
      if (ret.status) {
        this.db.persiste('_delete', 'Expedicao', 'user').subscribe();
        this.db.persiste('_delete', 'Expedicao', 'global', this.idPedido + '').subscribe();
        this.router.navigate(['/expedicao'], {
          state: {
            limpaPedido: true
          }
        });
        //  console.log(ret)
        this.db.escondeProcessando();
      } else {
        this.db.escondeProcessando();
      }
    }, err => this.db.escondeProcessando(err.error));
    console.log(this.jsonExpedicao);
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }, {
    type: src_app_api_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService
  }];
};
FinalizaExpedicaoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-finaliza-expedicao',
  template: _finaliza_expedicao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_finaliza_expedicao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FinalizaExpedicaoPage);


/***/ }),

/***/ 5087:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/finaliza-expedicao/finaliza-expedicao.page.scss?ngResource ***!
  \**********************************************************************************/
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

/***/ 4779:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/finaliza-expedicao/finaliza-expedicao.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>FINALIZAR EXPEDIÇÃO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-item no-lines class=\"form-group\">\n\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        Pedido\n      </ion-label>\n      <ion-input class=\"form-control\" name=\"idpedido\" [(ngModel)]=\"idPedido\" type=\"none\">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <table width=\"100%\" >\n      <tr >\n        <td width=\"70%\" >\n          <ion-label position=\"floating\">\n            Volumes\n          </ion-label>\n          <ion-input class=\"form-control\" name=\"volumes\" [(ngModel)]=\"volumes\" type=\"text\">\n          </ion-input>\n        </td>\n        <td width=\"30%\" >\n          <ion-label position=\"floating\" >\n            Itens Pedido\n          </ion-label>\n          <ion-input class=\"form-control\" name=\"itensPed\" [(ngModel)]=\"itensPed\" type=\"text\">\n          </ion-input>\n        </td>\n\n      </tr>\n    </table>\n    </ion-item>\n    <ion-item>\n      <table width=\"100%\" >\n      <tr >\n        <td width=\"35%\" >\n          <ion-label position=\"floating\" class=\"ion-text-wrap\">\n            Peso Liquido\n          </ion-label>\n          <ion-input class=\"form-control\" name=\"pesoLiq\" [(ngModel)]=\"pesoLiq\" type=\"text\">\n          </ion-input>\n        </td>\n        <td width=\"35%\" >\n\n          <ion-label position=\"floating\" class=\"ion-text-wrap\">\n            Peso Bruto\n          </ion-label>\n          <ion-input class=\"form-control\" name=\"pesoBruto\" [(ngModel)]=\"pesoBruto\" type=\"text\">\n          </ion-input>\n        </td>\n        <td width=\"30%\" >\n          <ion-label position=\"floating\" class=\"ion-text-wrap\">\n            Itens Exped\n          </ion-label>\n          <ion-input class=\"form-control\" name=\"itensExped\" [(ngModel)]=\"itensExped\" type=\"text\">\n          </ion-input>\n        </td>\n\n      </tr>\n    </table>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        Observações\n      </ion-label>\n      <ion-textarea class=\"form-control\" name=\"obs\" [(ngModel)]=\"obs\" type=\"textarea\">\n      </ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-checkbox class=\"form-control\" name=\"fatura\" [(ngModel)]=\"fatura\" type=\"text\">\n      </ion-checkbox>\n      <ion-label  class=\"ion-text-wrap\">\n        Libera Faturamento\n      </ion-label>\n    </ion-item>\n\n  </form>\n</ion-content>\n<ion-footer class=\"ion-text-center\">\n\n\n  <ion-button [routerLink]=\"['/expedicao']\" >\n    <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n    Itens\n  </ion-button>\n  <ion-button (click)=\"finalizar()\" >\n    <ion-icon slot=\"icon-only\" name=\"ok\"></ion-icon>\n    Finalizar\n  </ion-button>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_finaliza-expedicao_finaliza-expedicao_module_ts.js.map