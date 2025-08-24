(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_confirmacao-pedido_confirmacao-pedido_module_ts"],{

/***/ 3977:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/confirmacao-pedido/confirmacao-pedido-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmacaoPedidoPageRoutingModule: () => (/* binding */ ConfirmacaoPedidoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _confirmacao_pedido_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmacao-pedido.page */ 3691);




const routes = [{
  path: '',
  component: _confirmacao_pedido_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmacaoPedidoPage
}];
let ConfirmacaoPedidoPageRoutingModule = class ConfirmacaoPedidoPageRoutingModule {};
ConfirmacaoPedidoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ConfirmacaoPedidoPageRoutingModule);


/***/ }),

/***/ 6896:
/*!***********************************************************************!*\
  !*** ./src/app/pages/confirmacao-pedido/confirmacao-pedido.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmacaoPedidoPageModule: () => (/* binding */ ConfirmacaoPedidoPageModule),
/* harmony export */   options: () => (/* binding */ options)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var src_app_componentes_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/componentes/components.module */ 3656);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _confirmacao_pedido_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmacao-pedido-routing.module */ 3977);
/* harmony import */ var _confirmacao_pedido_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmacao-pedido.page */ 3691);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ 6015);










const options = null;
let ConfirmacaoPedidoPageModule = class ConfirmacaoPedidoPageModule {};
ConfirmacaoPedidoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _confirmacao_pedido_routing_module__WEBPACK_IMPORTED_MODULE_1__.ConfirmacaoPedidoPageRoutingModule, src_app_componentes_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule],
  declarations: [_confirmacao_pedido_page__WEBPACK_IMPORTED_MODULE_2__.ConfirmacaoPedidoPage],
  providers: [ngx_mask__WEBPACK_IMPORTED_MODULE_8__.NgxMaskPipe]
})], ConfirmacaoPedidoPageModule);


/***/ }),

/***/ 3691:
/*!*********************************************************************!*\
  !*** ./src/app/pages/confirmacao-pedido/confirmacao-pedido.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmacaoPedidoPage: () => (/* binding */ ConfirmacaoPedidoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _confirmacao_pedido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmacao-pedido.page.html?ngResource */ 9045);
/* harmony import */ var _confirmacao_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmacao-pedido.page.scss?ngResource */ 6209);
/* harmony import */ var _confirmacao_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_confirmacao_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ 6015);
/* harmony import */ var _funcoes_genericas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../funcoes/genericas.service */ 3070);
/* harmony import */ var _pedido_pedido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../pedido/pedido.page */ 6337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);








let ConfirmacaoPedidoPage = class ConfirmacaoPedidoPage {
  ped;
  gen;
  maskPipe;
  fb;
  data;
  angForm;
  erroData = false;
  itemProblema = false;
  mostraDatePicker = false;
  constructor(ped, gen, maskPipe, fb) {
    this.ped = ped;
    this.gen = gen;
    this.maskPipe = maskPipe;
    this.fb = fb;
    this.createForm();
  }
  ngOnInit() {}
  ionViewDidEnter() {
    console.log(this.ped.identificacaoForm?.invalid, !this.ped.totalValor, this.itemProblema);
    /*
    this.itemProblema =false
     this.ped.itensPedido.forEach(item => {
       
       if (!item.ok) {this.itemProblema = true}
     });
     console.log(this.itemProblema)
     */
  }
  createForm() {
    this.angForm = this.fb.group({
      name: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.cpfCnpjValidator()]
      }]
    });
  }
  cpfCnpjValidator() {
    return control => {
      console.log(this.gen.ValidaCPF(control.value));
      if (this.gen.ValidaCPF(control.value)) return null;else {
        console.log(control.value);
        return {
          cpfError: true
        };
      }
    };
  }
  valida(campo, event) {
    console.log(event);
    console.log(campo);
    if (campo) {
      //this.gen.validaData(this.ped.dadosAuxiliares.dataEntrega)
      let ano = campo.substr(0, 4);
      let mes = campo.substr(5, 2);
      let dia = campo.substr(8, 2);
      let data = dia + "/" + mes + "/" + ano;
      console.log(dia + "/" + mes + "/" + ano);
      //console.log(this.ped.dadosAuxiliares.dataEntrega)
      if (!this.gen.isValidDate(data)) {
        this.erroData = true;
        this.data.setFocus();
      } else this.erroData = false;
    }
  }
  mascaraData(event) {
    console.log(document.getElementById('cond'));
    document.getElementById('cond').setAttribute('value', this.maskPipe.transform(event.detail.value, '00/00/0000'));
  }
  validaTransportadora() {
    if (this.ped.dadosAuxiliares.tipoFrete == '1') this.ped.dadosAuxiliares.transportadora = '';
  }
  static ctorParameters = () => [{
    type: _pedido_pedido_page__WEBPACK_IMPORTED_MODULE_3__.PedidoPage
  }, {
    type: _funcoes_genericas_service__WEBPACK_IMPORTED_MODULE_2__.GenericasService
  }, {
    type: ngx_mask__WEBPACK_IMPORTED_MODULE_5__.NgxMaskPipe
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }];
  static propDecorators = {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['data']
    }]
  };
};
ConfirmacaoPedidoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-confirmacao-pedido',
  template: _confirmacao_pedido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_confirmacao_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ConfirmacaoPedidoPage);


/***/ }),

/***/ 6209:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/confirmacao-pedido/confirmacao-pedido.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `input {
  border: 0px;
}

p {
  color: red;
  font-size: small;
}

ion-button {
  margin: auto;
  min-width: 250px;
}

ion-col {
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/confirmacao-pedido/confirmacao-pedido.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;AACJ;;AAEA;EAEI,UAAA;EACA,gBAAA;AAAJ;;AAGA;EACI,YAAA;EACA,gBAAA;AAAJ;;AAEA;EACI,kBAAA;AACJ","sourcesContent":["input{\n    border: 0px\n}\n\np{\n\n    color: red;\n    font-size: small;\n}\n\nion-button {\n    margin: auto;\n    min-width: 250px;\n}\nion-col {\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9045:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/confirmacao-pedido/confirmacao-pedido.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>confirmacaoPedido</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label position=\"floating\">Condição Pagamento</ion-label>\n    <ion-input required [(ngModel)]=\"this.ped.dadosAuxiliares.condicaoPagamento\" type=\"text\" clear-on-edit=true\n      clearInput=true>\n    </ion-input>\n\n\n  </ion-item>\n  <ion-item>\n    <ion-label>Entrega Imediata</ion-label>\n    <ion-checkbox checked=\"true\" color=\"primary\" checked slot=\"start\"\n      [(ngModel)]=\"this.ped.dadosAuxiliares.entregaImediata\"></ion-checkbox>\n  </ion-item>\n  <ion-item *ngIf=\"!this.ped.dadosAuxiliares.entregaImediata\">\n    <ion-label position=\"floating\">Data de Entrega</ion-label>\n    <ion-input #data (ionBlur)=\"valida(this.ped.dadosAuxiliares.dataEntrega,$event)\" debounce=5\n      [(ngModel)]=\"this.ped.dadosAuxiliares.dataEntrega\" type=\"date\" max=\"2100-12-31\" clear-on-edit=true\n      clearInput=true></ion-input>\n\n  </ion-item>\n  <p *ngIf=\"erroData\">Data Invalida</p>\n  <ion-item >\n    <ion-label>Frete </ion-label>\n    <ion-select [value]=\"2\" (ngModelChange)=\"validaTransportadora()\" [(ngModel)]=\"this.ped.dadosAuxiliares.tipoFrete\">\n      <ion-select-option  value=\"1\">CIF </ion-select-option>\n      <ion-select-option  value=\"2\">FOB </ion-select-option>\n     \n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf=\"this.ped.dadosAuxiliares.tipoFrete == '2'\" >\n    <ion-label position=\"floating\">Transportadora</ion-label>\n    <ion-input [(ngModel)]=\"this.ped.dadosAuxiliares.transportadora\" type=\"text\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Observação</ion-label>\n    <ion-input [(ngModel)]=\"this.ped.dadosAuxiliares.observacao\" type=\"text\"></ion-input>\n  </ion-item>\n  <ion-item *ngIf=\"this.ped.tipo.toUpperCase() == 'ORCAMENTO'\">\n    <ion-label *ngIf=\"this.ped.tipo.toUpperCase() == 'PEDIDO'\">Envia pedido por email</ion-label>\n    <ion-label *ngIf=\"this.ped.tipo.toUpperCase() == 'ORCAMENTO'\">Envia orçamento por email</ion-label>\n\n    <ion-checkbox checked=\"true\" color=\"primary\" checked slot=\"start\" [(ngModel)]=\"this.ped.dadosAuxiliares.enviaEmail\">\n    </ion-checkbox>\n  </ion-item>\n\n  <div *ngIf=\"this.ped.tipo.toUpperCase() == 'ORCAMENTO' && this.ped.update == true\">\n    <ion-item>\n      <ion-label>Não Aprovado</ion-label>\n      <ion-checkbox checked=\"true\" color=\"primary\" checked slot=\"start\" [(ngModel)]=\"this.ped.dadosAuxiliares.naoAprovado\">\n      </ion-checkbox>\n    </ion-item>\n\n\n    <ion-item *ngIf=\"this.ped.dadosAuxiliares.naoAprovado\" >\n      <ion-label>Motivo Baixa </ion-label>\n      <ion-select clearInput=true [(ngModel)]=\"this.ped.dadosAuxiliares.motivoBaixa\">\n        <ion-select-option value=\"1\">Preço </ion-select-option>\n        <ion-select-option value=\"2\">Prazo de Entrega </ion-select-option>\n        <ion-select-option value=\"3\">Condições de Pagamento </ion-select-option>\n        <ion-select-option value=\"4\">Outros</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf=\"this.ped.dadosAuxiliares.naoAprovado\" >\n      <ion-label position=\"floating\">Observação Baixa</ion-label>\n      <ion-input [(ngModel)]=\"this.ped.dadosAuxiliares.observacaoBaixa\" type=\"text\"></ion-input>\n    </ion-item>\n\n\n  </div>\n\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col align-self-center>\n        <ion-button\n          (click)=\"this.ped.tipo.toUpperCase() == 'ORCAMENTO'?this.ped.incluiOrcamento():this.ped.incluiPedido()\"\n          size=\"large\" color=\"primary\">\n          Enviar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div>\n    <ion-label  class=\"ion-text-center\" style=\"color: red\">{{this.ped.error}} </ion-label>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_confirmacao-pedido_confirmacao-pedido_module_ts.js.map