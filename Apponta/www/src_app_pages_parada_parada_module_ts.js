"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_parada_parada_module_ts"],{

/***/ 5751:
/*!*******************************************************!*\
  !*** ./src/app/pages/parada/parada-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParadaPageRoutingModule: () => (/* binding */ ParadaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _parada_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parada.page */ 5497);




const routes = [{
  path: '',
  component: _parada_page__WEBPACK_IMPORTED_MODULE_0__.ParadaPage
}];
let ParadaPageRoutingModule = class ParadaPageRoutingModule {};
ParadaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ParadaPageRoutingModule);


/***/ }),

/***/ 4038:
/*!***********************************************!*\
  !*** ./src/app/pages/parada/parada.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParadaPageModule: () => (/* binding */ ParadaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _parada_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parada-routing.module */ 5751);
/* harmony import */ var _parada_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parada.page */ 5497);
/* harmony import */ var src_app_componentes_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/componentes/components.module */ 3656);








let ParadaPageModule = class ParadaPageModule {};
ParadaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _parada_routing_module__WEBPACK_IMPORTED_MODULE_0__.ParadaPageRoutingModule, src_app_componentes_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule],
  declarations: [_parada_page__WEBPACK_IMPORTED_MODULE_1__.ParadaPage]
})], ParadaPageModule);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_parada_parada_module_ts.js.map