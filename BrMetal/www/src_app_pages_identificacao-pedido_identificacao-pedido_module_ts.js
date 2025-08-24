(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_identificacao-pedido_identificacao-pedido_module_ts"],{

/***/ 2739:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/identificacao-pedido/identificacao-pedido-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentificacaoPedidoPageRoutingModule: () => (/* binding */ IdentificacaoPedidoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _identificacao_pedido_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identificacao-pedido.page */ 2149);




const routes = [{
  path: '',
  component: _identificacao_pedido_page__WEBPACK_IMPORTED_MODULE_0__.IdentificacaoPedidoPage
}];
let IdentificacaoPedidoPageRoutingModule = class IdentificacaoPedidoPageRoutingModule {};
IdentificacaoPedidoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], IdentificacaoPedidoPageRoutingModule);


/***/ }),

/***/ 7026:
/*!***************************************************************************!*\
  !*** ./src/app/pages/identificacao-pedido/identificacao-pedido.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentificacaoPedidoPageModule: () => (/* binding */ IdentificacaoPedidoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _identificacao_pedido_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identificacao-pedido-routing.module */ 2739);
/* harmony import */ var _identificacao_pedido_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identificacao-pedido.page */ 2149);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 6015);








let IdentificacaoPedidoPageModule = class IdentificacaoPedidoPageModule {};
IdentificacaoPedidoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _identificacao_pedido_routing_module__WEBPACK_IMPORTED_MODULE_0__.IdentificacaoPedidoPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  declarations: [_identificacao_pedido_page__WEBPACK_IMPORTED_MODULE_1__.IdentificacaoPedidoPage],
  providers: [ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]
})], IdentificacaoPedidoPageModule);


/***/ }),

/***/ 2149:
/*!*************************************************************************!*\
  !*** ./src/app/pages/identificacao-pedido/identificacao-pedido.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentificacaoPedidoPage: () => (/* binding */ IdentificacaoPedidoPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _identificacao_pedido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identificacao-pedido.page.html?ngResource */ 5359);
/* harmony import */ var _identificacao_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identificacao-pedido.page.scss?ngResource */ 5679);
/* harmony import */ var _identificacao_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_identificacao_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _funcoes_genericas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../funcoes/genericas.service */ 3070);
/* harmony import */ var _pedido_pedido_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../pedido/pedido.page */ 6337);
/* harmony import */ var _api_vendas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/vendas.service */ 1955);
/* harmony import */ var _storage_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../storage/db.service */ 5193);
/* harmony import */ var _selecao_cliente_selecao_cliente_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../selecao-cliente/selecao-cliente.page */ 6416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ 6015);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);












let IdentificacaoPedidoPage = class IdentificacaoPedidoPage {
  selCli;
  db;
  venSvc;
  ped;
  gen;
  maskPipe;
  fb;
  constructor(selCli, db, venSvc, ped, gen, maskPipe, fb) {
    this.selCli = selCli;
    this.db = db;
    this.venSvc = venSvc;
    this.ped = ped;
    this.gen = gen;
    this.maskPipe = maskPipe;
    this.fb = fb;
  }
  ngOnInit() {}
  selecionaCliente() {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const retCliente = yield _this.selCli.selecionaCliente();
      console.log(retCliente);
      _this.getCliente(retCliente.data.cliente.codigo);
    })();
  }
  // funcao p[ara form modelo ngmodel
  /* getCliente(codigo: number){
  
    this.db.mostraProcessando();
    this.venSvc
      .GetCliente({
        token: this.db.token,
        codigo: codigo
      })
      .subscribe(
        (ret) => {
          //              if(ev) ev.target.complete();
          this.db.escondeProcessando();
            this.ped.Form = ret;
            console.log(ret)
            console.log(this.ped.Form)
  
        },
        (err) => this.db.escondeProcessando(err.error)
      );
    //      } else this.clientes = this.db.clientes;
  } */
  getCliente(codigo) {
    this.db.mostraProcessando();
    this.venSvc.GetCliente({
      token: this.db.token,
      codigo: codigo
    }).subscribe(ret => {
      //              if(ev) ev.target.complete();
      this.db.escondeProcessando();
      //  console.log(this.ped.identificacaoForm['nome'])
      //console.log(this.ped.identificacaoForm.value.nome)
      this.ped.identificacaoForm.patchValue(ret);
      this.ped.identificacaoForm.value.nomeFantasia = ret.nomeFantasia;
      //console.log(this.ped.identificacaoForm.value.nome)
      console.log(this.ped.identificacaoForm);
      console.log(ret);
    }, err => this.db.escondeProcessando(err.error));
    //      } else this.clientes = this.db.clientes;
  }
  /*   valida(valor) {
      console.log(this.ped.Form.cnpjcpf)
      console.log(valor.toString().length)
      if (valor.toString().length <= 14) {
        if (!this.gen.ValidaCPF(valor)) {
          console.log(document.getElementById('cpfcnpj').toggleAttribute('isValid'))
          console.log(document.getElementById('cpfcnpj').attributes)
          this.ped.pedidoValido = false
        }
  
  
      }
      else {
        return this.gen.ValidaCNPJ(valor)
      }
    } */
  mascaraCPFCNPJ(valor) {
    if (valor.toString().length < 14) {
      document.getElementById('cpfcnpj').setAttribute('value', this.maskPipe.transform(valor, '000.000.000-00'));
    } else {
      document.getElementById('cpfcnpj').setAttribute('value', this.maskPipe.transform(valor, '00.000.000/0000-00'));
    }
  }
  onBlur(event) {
    console.log(event);
    // input.setCustomValidity('fff')
    //cpfcnpj.className = "ion-invalid"
  }
  removeMascara() {}
  static ctorParameters = () => [{
    type: _selecao_cliente_selecao_cliente_page__WEBPACK_IMPORTED_MODULE_7__.SelecaoClientePage
  }, {
    type: _storage_db_service__WEBPACK_IMPORTED_MODULE_6__.DbService
  }, {
    type: _api_vendas_service__WEBPACK_IMPORTED_MODULE_5__.VendasService
  }, {
    type: _pedido_pedido_page__WEBPACK_IMPORTED_MODULE_4__.PedidoPage
  }, {
    type: _funcoes_genericas_service__WEBPACK_IMPORTED_MODULE_3__.GenericasService
  }, {
    type: ngx_mask__WEBPACK_IMPORTED_MODULE_8__.NgxMaskPipe
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
  }];
};
IdentificacaoPedidoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-identificacao-pedido',
  template: _identificacao_pedido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_identificacao_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], IdentificacaoPedidoPage);


/***/ }),

/***/ 5679:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/identificacao-pedido/identificacao-pedido.page.scss?ngResource ***!
  \**************************************************************************************/
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

/***/ 5359:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/identificacao-pedido/identificacao-pedido.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>identificacaoPedido</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n<!--   <form (ngSubmit)=\"this.ped.navItensPedido()\" #form=\"ngForm\">\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n        Nome\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]=\"this.ped.Form.nome\" name=\"nome\">\n      </ion-input>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"selecionaCliente()\" fill=\"clear\" shape=\"round\">\n          <ion-icon name=\"search\" class=\"iconeObrig\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        Nome Fantasia\n      </ion-label>\n      <ion-input [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]=\"this.ped.Form.nomeFantasia\" name=\"nomeFantasia\">\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n        CNPJ/CPF\n      </ion-label>\n      <ion-input id=\"cpfCnpj\" [class.ion-invalid]=\"this.pedidoInvalido\" (ionFocus)=\"this.ped.Form.cnpjcpf =this.gen.removeCaracteres(this.ped.Form.cnpjcpf)\" id=\"cpfcnpj\" (ionBlur)=\"mascaraCPFCNPJ(this.ped.Form.cnpjcpf);valida(this.ped.Form.cnpjcpf)\" \n        [attr.maxLength]=\"18\" type=\"tel\" [(ngModel)]=\"this.ped.Form.cnpjcpf\" name=\"cnpjcpf\"\n        clearInput=true (focus)=\"!valida(this.ped.Form.cnpjcpf)\" (ionBlur)=\"onBlur($event)\">\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        Inscrição Estadual\n      </ion-label>\n      <ion-input [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]=\"this.ped.Form.inscricaoEstadual\"\n        name=\"inscricaoEstadual\">\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n        Cidade\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]=\"this.ped.Form.cidade\" name=\"cidade\">\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n        Estado\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]=\"this.ped.Form.uf\" name=\"uf\">\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n        CEP\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]=\"this.ped.Form.cep\" name=\"cep\">\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n        Endereco\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]=\"this.ped.Form.endereco\"\n        name=\"endereco\">\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n\n        Bairro\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]=\"this.ped.Form.bairro\" name=\"bairro\">\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n\n        Email\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]=\"this.ped.Form.enderecosEletronicos\"\n        name=\"enderecosEletronicos\">\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n\n        Telefone\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]=\"this.ped.Form.telefone\"\n        name=\"telefone\">\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n\n        Observação\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" type=\"text\" [(ngModel)]=\"this.ped.Form.observacao\"\n        name=\"observacao\">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-buttons slot=\"end\">\n        <ion-button class=\"btnEntrar\" size=\"large\" color=\"primary\" type=\"submit\" [disabled]=\"form.invalid\">\n          <ion-icon name=\"arrow-forward\" class=\"iconeObrig\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </form> -->\n\n\n  <form (ngSubmit)=\"this.ped.navItensPedido()\" [formGroup]=\"this.ped.identificacaoForm\">\n    <div class=\"form-group\">\n    <ion-item no-lines class=\"form-group\">\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n        Nome\n      </ion-label>\n      <ion-input class=\"form-control\" formControlName=\"nome\" type=\"text\">\n      </ion-input>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"selecionaCliente()\" fill=\"clear\" shape=\"round\">\n          <ion-icon name=\"search\" class=\"iconeObrig\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        Nome Fantasia\n      </ion-label>\n      <ion-input  class=\"form-control\" formControlName=\"nomeFantasia\" type=\"text\">\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n        CNPJ/CPF\n      </ion-label>\n      <ion-input id=\"cpfCnpj\"(ionFocus)=\"this.ped.identificacaoForm.patchValue({cnpjcpf: this.gen.removeCaracteres(this.ped.identificacaoForm.get('cnpjcpf').value)})\" id=\"cpfcnpj\" (ionBlur)=\"mascaraCPFCNPJ(this.ped.identificacaoForm.get('cnpjcpf').value)\" \n        [attr.maxLength]=\"18\" type=\"tel\"  class=\"form-control\" formControlName=\"cnpjcpf\" \n        clearInput=true >\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        Inscrição Estadual\n      </ion-label>\n      <ion-input  class=\"form-control\" formControlName=\"inscricaoEstadual\"  type=\"text\">\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n        Cidade\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" class=\"form-control\" formControlName=\"cidade\" \n      clearInput=true >\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n        Estado\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" class=\"form-control\" formControlName=\"uf\" type=\"text\"\n      clearInput=true >\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n        CEP\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" class=\"form-control\" formControlName=\"cep\" type=\"text\"\n      clearInput=true >\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n        Endereco\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" class=\"form-control\" formControlName=\"endereco\" type=\"text\"\n      clearInput=true >\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n\n        Bairro\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" class=\"form-control\" formControlName=\"bairro\" type=\"text\"\n      clearInput=true >\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n\n        Email\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" class=\"form-control\" formControlName=\"enderecosEletronicos\" type=\"text\"\n      clearInput=true >\n      </ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n        <ion-icon name=\"star\" class=\"iconeObrig\"></ion-icon>\n\n        Telefone\n      </ion-label>\n      <ion-input [required]=\"true\" [attr.maxLength]=\"50\" class=\"form-control\" formControlName=\"telefone\" type=\"text\"\n      clearInput=true >\n      </ion-input>\n    </ion-item>\n<!--     <ion-item no-lines>  \n      <ion-label position=\"floating\" class=\"ion-text-wrap\">\n\n        Observação\n      </ion-label>\n      <ion-input  class=\"form-control\" formControlName=\"observacao\" type=\"text\"\n        clearInput=true >\n      </ion-input>\n    </ion-item> -->\n   \n  </div>\n  <ion-item>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"large\" color=\"primary\" type=\"submit\" [disabled]=\"this.ped.identificacaoForm.invalid\" class=\"btn btn-success\">\n        <ion-icon name=\"arrow-forward\" class=\"iconeObrig\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-item>\n  </form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_identificacao-pedido_identificacao-pedido_module_ts.js.map