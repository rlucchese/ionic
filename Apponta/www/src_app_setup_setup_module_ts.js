(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_setup_setup_module_ts"],{

/***/ 5202:
/*!***********************************************!*\
  !*** ./src/app/setup/setup-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetupPageRoutingModule: () => (/* binding */ SetupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _setup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup.page */ 9524);




const routes = [{
  path: '',
  component: _setup_page__WEBPACK_IMPORTED_MODULE_0__.SetupPage
}];
let SetupPageRoutingModule = class SetupPageRoutingModule {};
SetupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SetupPageRoutingModule);


/***/ }),

/***/ 571:
/*!***************************************!*\
  !*** ./src/app/setup/setup.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetupPageModule: () => (/* binding */ SetupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup-routing.module */ 5202);
/* harmony import */ var _setup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup.page */ 9524);







let SetupPageModule = class SetupPageModule {};
SetupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SetupPageRoutingModule],
  declarations: [_setup_page__WEBPACK_IMPORTED_MODULE_1__.SetupPage]
})], SetupPageModule);


/***/ }),

/***/ 9524:
/*!*************************************!*\
  !*** ./src/app/setup/setup.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetupPage: () => (/* binding */ SetupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _setup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup.page.html?ngResource */ 7840);
/* harmony import */ var _setup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup.page.scss?ngResource */ 6020);
/* harmony import */ var _setup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_setup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/load-setup.guard */ 118);






let SetupPage = class SetupPage {
  loadSetup;
  router;
  _SERVER = '';
  constructor(loadSetup, router) {
    this.loadSetup = loadSetup;
    this.router = router;
    this._SERVER = localStorage.getItem('_SERVER');
  }
  ngOnInit() {}
  salva() {
    console.log(this._SERVER);
    localStorage.setItem("_SERVER", this._SERVER);
    this.loadSetup.setServer(this._SERVER);
    this.goLogin();
    return false;
  }
  goLogin() {
    this.router.navigateByUrl('/login');
  }
  static ctorParameters = () => [{
    type: _guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_2__.LoadSetupGuard
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }];
};
SetupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-setup',
  template: _setup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_setup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SetupPage);


/***/ }),

/***/ 6020:
/*!**************************************************!*\
  !*** ./src/app/setup/setup.page.scss?ngResource ***!
  \**************************************************/
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

/***/ 7840:
/*!**************************************************!*\
  !*** ./src/app/setup/setup.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Configurações</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goLogin()\">\n        <ion-icon name=\"log-in\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"salva(form)\">\n    <ion-input placeholder=\"Servidor\" [(ngModel)]=\"_SERVER\" name=\"_SERVER\"></ion-input>\n    <ion-button type=\"submit\" expand=\"block\">Salvar</ion-button>\n  </form>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_setup_setup_module_ts.js.map