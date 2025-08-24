"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cadastro_cadastro_module_ts"],{

/***/ 4567:
/*!***********************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CadastroPageRoutingModule: () => (/* binding */ CadastroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro.page */ 4329);




const routes = [{
  path: '',
  component: _cadastro_page__WEBPACK_IMPORTED_MODULE_0__.CadastroPage
}];
let CadastroPageRoutingModule = class CadastroPageRoutingModule {};
CadastroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CadastroPageRoutingModule);


/***/ }),

/***/ 3894:
/*!***************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CadastroPageModule: () => (/* binding */ CadastroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _listaCadastro_listaCadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../listaCadastro/listaCadastro-routing.module */ 3295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro-routing.module */ 4567);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.page */ 4329);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-selectable */ 4875);
/* harmony import */ var src_app_componentes_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/componentes/components.module */ 3656);










let CadastroPageModule = class CadastroPageModule {};
CadastroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_1__.CadastroPageRoutingModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_9__.IonicSelectableModule, src_app_componentes_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule, _listaCadastro_listaCadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__.listaCadastroPageRoutingModule],
  declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_2__.CadastroPage],
  providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams]
})], CadastroPageModule);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_cadastro_cadastro_module_ts.js.map