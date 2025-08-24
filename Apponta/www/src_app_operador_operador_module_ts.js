"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_operador_operador_module_ts"],{

/***/ 8928:
/*!*****************************************************!*\
  !*** ./src/app/operador/operador-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperadorPageRoutingModule: () => (/* binding */ OperadorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _operador_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operador.page */ 4938);




const routes = [{
  path: '',
  component: _operador_page__WEBPACK_IMPORTED_MODULE_0__.OperadorPage
}];
let OperadorPageRoutingModule = class OperadorPageRoutingModule {};
OperadorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], OperadorPageRoutingModule);


/***/ }),

/***/ 7601:
/*!*********************************************!*\
  !*** ./src/app/operador/operador.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperadorPageModule: () => (/* binding */ OperadorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _operador_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operador-routing.module */ 8928);
/* harmony import */ var _operador_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operador.page */ 4938);







let OperadorPageModule = class OperadorPageModule {};
OperadorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _operador_routing_module__WEBPACK_IMPORTED_MODULE_0__.OperadorPageRoutingModule],
  declarations: [_operador_page__WEBPACK_IMPORTED_MODULE_1__.OperadorPage]
})], OperadorPageModule);


/***/ })

}]);
//# sourceMappingURL=src_app_operador_operador_module_ts.js.map