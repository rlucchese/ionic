(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_altera-senha_altera-senha_module_ts"],{

/***/ 7750:
/*!*************************************************************!*\
  !*** ./src/app/altera-senha/altera-senha-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlteraSenhaPageRoutingModule: () => (/* binding */ AlteraSenhaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _altera_senha_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./altera-senha.page */ 3480);




const routes = [{
  path: '',
  component: _altera_senha_page__WEBPACK_IMPORTED_MODULE_0__.AlteraSenhaPage
}];
let AlteraSenhaPageRoutingModule = class AlteraSenhaPageRoutingModule {};
AlteraSenhaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AlteraSenhaPageRoutingModule);


/***/ }),

/***/ 5583:
/*!*****************************************************!*\
  !*** ./src/app/altera-senha/altera-senha.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlteraSenhaPageModule: () => (/* binding */ AlteraSenhaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _altera_senha_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./altera-senha-routing.module */ 7750);
/* harmony import */ var _altera_senha_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./altera-senha.page */ 3480);







let AlteraSenhaPageModule = class AlteraSenhaPageModule {};
AlteraSenhaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _altera_senha_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlteraSenhaPageRoutingModule],
  declarations: [_altera_senha_page__WEBPACK_IMPORTED_MODULE_1__.AlteraSenhaPage]
})], AlteraSenhaPageModule);


/***/ }),

/***/ 3480:
/*!***************************************************!*\
  !*** ./src/app/altera-senha/altera-senha.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlteraSenhaPage: () => (/* binding */ AlteraSenhaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _altera_senha_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./altera-senha.page.html?ngResource */ 2068);
/* harmony import */ var _altera_senha_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./altera-senha.page.scss?ngResource */ 1256);
/* harmony import */ var _altera_senha_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_altera_senha_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _api_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/usuario.service */ 1520);
/* harmony import */ var _storage_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/db.service */ 5193);







let AlteraSenhaPage = class AlteraSenhaPage {
  svc;
  db;
  navCtr;
  email;
  constructor(svc, db, navCtr) {
    this.svc = svc;
    this.db = db;
    this.navCtr = navCtr;
  }
  ionViewDidEnter() {
    this.email = this.db.getUsuario();
  }
  ngOnInit() {
    this.db.autenticado();
  }
  alteraSenha(form) {
    // Validações adicionais (tamanho, caracteres....)
    if (form.value.password !== form.value.passwordConf) this.db.setMensagem('Senhas não conferem');else {
      this.db.mostraProcessando();
      //    console.log(form.value.password)
      this.svc.AlteraSenha({
        token: this.db.getToken(),
        novaSenha: form.value.password
      }).subscribe(ret => {
        this.db.escondeProcessando(ret.error);
        if (ret.status) {
          this.db.setMensagem('Senha Alterada com Sucesso');
          this.navCtr.back();
        }
      }, err => {
        console.log(err.error);
        this.db.escondeProcessando(err.error);
      });
    }
  }
  static ctorParameters = () => [{
    type: _api_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService
  }, {
    type: _storage_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
  }];
};
AlteraSenhaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-altera-senha',
  template: _altera_senha_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_altera_senha_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AlteraSenhaPage);


/***/ }),

/***/ 1256:
/*!****************************************************************!*\
  !*** ./src/app/altera-senha/altera-senha.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.itemSemBorda {
  display: flex;
}
.itemSemBorda ion-input {
  margin: auto;
}

div {
  width: 50%;
  margin: auto;
  min-width: 250px;
}

ion-button {
  min-width: 250px;
}`, "",{"version":3,"sources":["webpack://./src/app/altera-senha/altera-senha.page.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;AACI;EACI,YAAA;AACR;;AAGA;EACG,UAAA;EACA,YAAA;EACA,gBAAA;AAAH;;AAGA;EACI,gBAAA;AAAJ","sourcesContent":[".itemSemBorda {\n    display: flex;\n\n    ion-input { \n        margin: auto;\n    }\n}\n\ndiv {\n   width: 50%; \n   margin: auto;\n   min-width: 250px;\n}\n\nion-button {\n    min-width: 250px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2068:
/*!****************************************************************!*\
  !*** ./src/app/altera-senha/altera-senha.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n<ion-toolbar color=\"primary\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n  <ion-title>Alterar Senha</ion-title>\n  <ion-title size=\"small\" slot=\"end\"> {{ this.db.getUsuario() }}</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form #form=\"ngForm\" (ngSubmit)=\"alteraSenha(form)\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center>\n          <ion-item class=\"itemSemBorda\" style=\"margin-top: 30px\">\n            <div>\n              \n            </div>\n          </ion-item>\n          <ion-item class=\"itemSemBorda\" style=\"margin-bottom: 30px\">\n            <div style=\"width: 50%; margin: auto\">\n              <ion-input\n                name=\"password\"\n                type=\"password\"\n                placeholder=\"Nova Senha\"\n                ngModel\n                required></ion-input>\n            </div>\n          </ion-item>\n          <ion-item class=\"itemSemBorda\" style=\"margin-bottom: 30px\">\n            <div style=\"width: 50%; margin: auto\">\n              <ion-input\n                name=\"passwordConf\"\n                type=\"password\"\n                placeholder=\"Confirmação de Senha\"\n                ngModel\n                required></ion-input>\n            </div>\n          </ion-item>\n          <ion-button class=\"btnEntrar\"\n            size=\"large\"\n            color=\"primary\"\n            type=\"submit\"\n            [disabled]=\"form.invalid\"\n            expand=\"block\">Trocar Senha\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_altera-senha_altera-senha_module_ts.js.map