(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mensagem_mensagem_module_ts"],{

/***/ 6007:
/*!***********************************************************!*\
  !*** ./src/app/pages/mensagem/mensagem-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MensagemPageRoutingModule: () => (/* binding */ MensagemPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _mensagem_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mensagem.page */ 1001);




const routes = [{
  path: '',
  component: _mensagem_page__WEBPACK_IMPORTED_MODULE_0__.MensagemPage
}];
let MensagemPageRoutingModule = class MensagemPageRoutingModule {};
MensagemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], MensagemPageRoutingModule);


/***/ }),

/***/ 4710:
/*!***************************************************!*\
  !*** ./src/app/pages/mensagem/mensagem.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MensagemPageModule: () => (/* binding */ MensagemPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _mensagem_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mensagem-routing.module */ 6007);
/* harmony import */ var _mensagem_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mensagem.page */ 1001);







let MensagemPageModule = class MensagemPageModule {};
MensagemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _mensagem_routing_module__WEBPACK_IMPORTED_MODULE_0__.MensagemPageRoutingModule],
  declarations: [_mensagem_page__WEBPACK_IMPORTED_MODULE_1__.MensagemPage]
})], MensagemPageModule);


/***/ }),

/***/ 1001:
/*!*************************************************!*\
  !*** ./src/app/pages/mensagem/mensagem.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MensagemPage: () => (/* binding */ MensagemPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _mensagem_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mensagem.page.html?ngResource */ 1939);
/* harmony import */ var _mensagem_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mensagem.page.scss?ngResource */ 2183);
/* harmony import */ var _mensagem_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mensagem_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_api_mensagem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/mensagem.service */ 2300);
/* harmony import */ var src_app_nova_mensagem_nova_mensagem_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/nova-mensagem/nova-mensagem.page */ 340);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);









let MensagemPage = class MensagemPage {
  msgSvc;
  db;
  nova;
  router;
  contatoMsg;
  contatoMsg2;
  idLidas = 2;
  idEquipamento;
  equipamentos;
  centrosCusto;
  equipamento;
  numMsg;
  intervalMsg;
  constructor(msgSvc, db, nova, router) {
    this.msgSvc = msgSvc;
    this.db = db;
    this.nova = nova;
    this.router = router;
  }
  ionViewDidLeave() {
    clearInterval(this.intervalMsg);
  }
  ngOnInit() {
    this.equipamento = this.db.carregaEquipamento();
    this.idEquipamento = this.equipamento?.id;
    //console.log(this.db.centrosCusto)
  }
  ionViewDidEnter() {
    this.carregaMsg();
    this.intervalMsg = setInterval(() => {
      this.carregaMsg();
    }, 5000);
  }
  carregaMsg() {
    this.msgSvc.GetContato({
      token: this.db.getToken()
    }).subscribe(ret => {
      //      console.log(ret.contatos)
      //       console.log(this.contatoMsg)
      //console.log(JSON.stringify(ret.contatos))
      //console.log(JSON.stringify(this.contatoMsg))
      if (JSON.stringify(ret.contatos) !== JSON.stringify(this.contatoMsg)) {
        console.log('diferentes');
        this.contatoMsg = ret.contatos;
        this.contatoMsg2 = ret.contatos;
      } else console.log('iguais');
    }, err => this.db.escondeProcessando(err.error));
  }
  novaMensagem() {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ret = yield _this.nova.novaMensagem();
      if (ret.data.status) {
        _this.carregaMsg();
      }
    })();
  }
  busca(evt) {
    this.contatoMsg = this.contatoMsg2.filter(cc => {
      return this.db.compara([cc.ultimaMensagem, cc.contato], evt.detail.value);
    });
  }
  abreConversa(idContato, contato) {
    this.db.setContato(idContato, contato);
    this.router.navigateByUrl("mensagem-contato");
  }
  AbreMensagem() {
    this.carregaMsg;
  }
  static ctorParameters = () => [{
    type: src_app_api_mensagem_service__WEBPACK_IMPORTED_MODULE_3__.MensagemService
  }, {
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_5__.DbService
  }, {
    type: src_app_nova_mensagem_nova_mensagem_page__WEBPACK_IMPORTED_MODULE_4__.NovaMensagemPage
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }];
};
MensagemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-mensagem',
  template: _mensagem_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_mensagem_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], MensagemPage);


/***/ }),

/***/ 2183:
/*!**************************************************************!*\
  !*** ./src/app/pages/mensagem/mensagem.page.scss?ngResource ***!
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

/***/ 1939:
/*!**************************************************************!*\
  !*** ./src/app/pages/mensagem/mensagem.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"carregaMsg()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh-outline\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"alturamenor\" (click)=\"this.db.Abre('apontamento')\">\n        <ion-icon slot=\"icon-only\" name=\"play\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Mensagens</ion-title>\n  </ion-toolbar>\n\n  <!--   <ion-toolbar>\n    <ion-grid>\n      <ion-row class=\"barraFiltro\">\n        <ion-col style=\"width: 30%;\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"fonteSmall fim\"> Status </ion-label>\n\n            <ion-select class=\"fonteSmall\" (ionChange)=\"carregaMsg()\" [(ngModel)]=\"idLidas\" okText=\"Ok\"\n              cancelText=\"Cancelar\">\n              <ion-select-option [value]=\"1\">Lidas</ion-select-option>\n              <ion-select-option [value]=\"2\">Não Lidas</ion-select-option>\n              <ion-select-option [value]=\"3\">Todas</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n        </ion-col>\n        <ion-col style=\"width: 70%;\">\n\n\n\n          <ion-item>\n            <ion-label position=\"floating\">Equipamento</ion-label>\n            <ionic-selectable #selecEquip [(ngModel)]=\"equipamento\" name=\"equipamento\" itemValueField=\"id\"\n              itemTextField=\"descricao\" [items]=\"equipamentos\" [canSearch]=\"equipamentos?.length > 5\"\n              (onChange)=\"this.idEquipamento = equipamento.id ; carregaMsg()\"\n              searchPlaceholder=\"Localizar Equipamentos\">\n              <ng-template ionicSelectableSearchFailTemplate>\n                <ion-item>Nenhum item encontrado</ion-item>\n              </ng-template>\n              <ng-template ionicSelectableHeaderTemplate>\n                <ion-toolbar>\n                  <ion-title color=\"primary\">Equipamentos</ion-title>\n                </ion-toolbar>\n              </ng-template>\n\n              <ng-template ionicSelectableFooterTemplate>\n                <ion-toolbar>\n                  <ion-buttons slot=\"end\">\n                    <ion-button color=\"primary\" slot=\"end\" (click)=\"selecEquip.close()\">\n                      Cancelar\n                    </ion-button>\n                    <ion-button color=\"primary\" slot=\"end\" (click)=\"selecEquip.confirm();selecEquip.close();\">\n                      Ok\n                    </ion-button>\n                  </ion-buttons>\n                </ion-toolbar>\n              </ng-template>\n            </ionic-selectable>\n\n          </ion-item>\n\n\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar> -->\n\n  <ion-item class=\"itemSemBorda\">\n    <ion-searchbar style=\"border-top: 5px\" placeholder=\"Buscar \" (ionChange)=\"busca($event)\"></ion-searchbar>\n    <ion-badge slot=\"end\">\n      {{this.contatoMsg?.length}}\n    </ion-badge>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor=\"let msg of contatoMsg\"  (click)=\"abreConversa(msg.idContato, msg.contato)\">\n       <ion-label>\n         <h1>{{msg.contato}}</h1>\n         <div>\n           <h2>{{msg.ultimaMensagem}}</h2>\n         </div>\n        </ion-label>\n        <div slot='end' class=\"ion-text-center\">\n          <ion-label>{{msg.dhUltimaMensagemStr}}</ion-label>\n          <ion-badge color=\"primary\" mode=\"ios\" class=\"ion-text-right\">{{msg.naoLidas}}</ion-badge>\n        </div>\n      \n      \n        \n\n<!--      <ion-card (click)=\"abreConversa(msg.idContato, msg.contato)\">\n        <ion-card-header>\n          <ion-card-title>{{msg.contato}}</ion-card-title>\n          <ion-card-subtitle>{{msg.ultimaMensagem}}</ion-card-subtitle>\n          <ion-card-subtitle class=\"ion-text-right\">{{msg.dhUltimaMensagem}}</ion-card-subtitle>\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"5\">\n              </ion-col>\n              <ion-col size=\"5\" >\n                {{msg.dhUltimaMensagem}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"8\">\n              </ion-col>\n\n              <ion-col size=2>\n                <ion-badge color=\"primary\" mode=\"ios\" class=\"ion-text-right\">{{msg.naoLidas}}</ion-badge>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-card-header>\n\n      </ion-card>-->\n      <!--       {{ cmp.title }} -  {{ cmp.ativo?cmp.ativo:null}} \n -->\n    </ion-item>\n\n  </ion-list>\n\n  <!--<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" slot=\"fixed\">\n    <ion-fab-button (click)=\"novaMensagem()\">+</ion-fab-button>\n  </ion-fab>-->\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mensagem_mensagem_module_ts.js.map