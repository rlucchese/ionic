(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_itens-pedido_itens-pedido_module_ts"],{

/***/ 39:
/*!*******************************************************************!*\
  !*** ./src/app/pages/itens-pedido/itens-pedido-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItensPedidoPageRoutingModule: () => (/* binding */ ItensPedidoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _itens_pedido_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itens-pedido.page */ 6489);




const routes = [{
  path: '',
  component: _itens_pedido_page__WEBPACK_IMPORTED_MODULE_0__.ItensPedidoPage
}];
let ItensPedidoPageRoutingModule = class ItensPedidoPageRoutingModule {};
ItensPedidoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ItensPedidoPageRoutingModule);


/***/ }),

/***/ 7814:
/*!***********************************************************!*\
  !*** ./src/app/pages/itens-pedido/itens-pedido.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItensPedidoPageModule: () => (/* binding */ ItensPedidoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _modal_valor_modal_valor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../modal-valor/modal-valor.page */ 3604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _itens_pedido_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itens-pedido-routing.module */ 39);
/* harmony import */ var _itens_pedido_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itens-pedido.page */ 6489);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ 6015);
/* harmony import */ var src_app_modal_valida_itens_modal_valida_itens_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modal-valida-itens/modal-valida-itens.page */ 1999);










let ItensPedidoPageModule = class ItensPedidoPageModule {};
ItensPedidoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _itens_pedido_routing_module__WEBPACK_IMPORTED_MODULE_1__.ItensPedidoPageRoutingModule],
  declarations: [_itens_pedido_page__WEBPACK_IMPORTED_MODULE_2__.ItensPedidoPage],
  providers: [ngx_mask__WEBPACK_IMPORTED_MODULE_9__.NgxMaskPipe, _modal_valor_modal_valor_page__WEBPACK_IMPORTED_MODULE_0__.ModalValorPage, src_app_modal_valida_itens_modal_valida_itens_page__WEBPACK_IMPORTED_MODULE_3__.ModalValidaItensPage]
})], ItensPedidoPageModule);


/***/ }),

/***/ 6489:
/*!*********************************************************!*\
  !*** ./src/app/pages/itens-pedido/itens-pedido.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItensPedidoPage: () => (/* binding */ ItensPedidoPage),
/* harmony export */   options: () => (/* binding */ options)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _itens_pedido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itens-pedido.page.html?ngResource */ 3683);
/* harmony import */ var _itens_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itens-pedido.page.scss?ngResource */ 3063);
/* harmony import */ var _itens_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_itens_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modal_valida_itens_modal_valida_itens_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../modal-valida-itens/modal-valida-itens.page */ 1999);
/* harmony import */ var _modal_valor_modal_valor_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../modal-valor/modal-valor.page */ 3604);
/* harmony import */ var _funcoes_genericas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../funcoes/genericas.service */ 3070);
/* harmony import */ var _selecao_item_selecao_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../selecao-item/selecao-item.page */ 338);
/* harmony import */ var _api_vendas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../api/vendas.service */ 1955);
/* harmony import */ var _storage_db_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../storage/db.service */ 5193);
/* harmony import */ var _pedido_pedido_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../pedido/pedido.page */ 6337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ 6015);













const options = null;
let ItensPedidoPage = class ItensPedidoPage {
  ped;
  db;
  venSvc;
  selPro;
  gen;
  maskPipe;
  modVal;
  modValida;
  selectedItens = 0;
  constructor(ped, db, venSvc, selPro, gen, maskPipe, modVal, modValida) {
    this.ped = ped;
    this.db = db;
    this.venSvc = venSvc;
    this.selPro = selPro;
    this.gen = gen;
    this.maskPipe = maskPipe;
    this.modVal = modVal;
    this.modValida = modValida;
  }
  ngOnInit() {}
  adicionaItem() {
    this.ped.itensPedido.push({});
    console.log(this.ped.itensPedido);
  }
  buscaProduto(referencia, descricao, index) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(referencia, descricao, index);
      if (referencia) {
        yield _this.getProdutoRef(referencia, descricao, index);
        console.log(_this.ped.itensPedido.length);
      } else {
        _this.seleciona(referencia, descricao, index);
      }
    })();
  }
  getProdutoRef(referencia, descricao, index) {
    var _this2 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.db.mostraProcessando();
      _this2.venSvc.GetProduto({
        token: _this2.db.token,
        referencia: referencia
      }).subscribe(ret => {
        //              if(ev) ev.target.complete();
        _this2.db.escondeProcessando();
        if (ret.referencia) {
          _this2.ped.itensPedido[index] = ret;
          console.log(ret);
          console.log(_this2.ped.itensPedido);
          _this2.ped.totalizaPedido();
          _this2.quantidadeModal(index);
        } else {
          _this2.seleciona(referencia, descricao, index);
        }
      }, err => _this2.db.escondeProcessando(err.error));
      //
    })();
  }
  getProdutoCodigo(codigo, index) {
    this.db.mostraProcessando();
    this.venSvc.GetProduto({
      token: this.db.token,
      codigo: codigo
    }).subscribe(ret => {
      //              if(ev) ev.target.complete();
      this.db.escondeProcessando();
      this.ped.itensPedido[index] = ret;
      this.ped.itensPedido[index].selected = false;
      this.ped.totalizaPedido();
      console.log(ret);
      this.quantidadeModal(index);
      console.log(ret);
      console.log(this.ped.itensPedido);
    }, err => this.db.escondeProcessando(err.error));
    //
  }
  seleciona(referencia, descricao, index) {
    var _this3 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let busca = '';
      if (referencia) busca = referencia;
      if (descricao) busca = busca + ';' + descricao;
      const retItem = yield _this3.selPro.selecionaProduto(busca);
      if (retItem.data.status == true) {
        console.log(retItem);
        _this3.getProdutoCodigo(retItem.data.item.codigo, index);
      }
    })();
  }
  temEstoque(item) {
    if (item?.estoqueDisponivel && item?.quantidade > 0) {
      if (+item.estoqueDisponivel >= +item.quantidade) {
        item.ok = true;
        return "temEstoque";
      } else {
        item.ok = false;
        return "naoTemEstoque";
      }
    }
  }
  checkItem(i) {
    this.ped.itensPedido[i].selected = !this.ped.itensPedido[i].selected;
    this.contaSelecionados();
  }
  contaSelecionados() {
    this.selectedItens = 0;
    this.ped.itensPedido.forEach(item => {
      if (item.selected == true) this.selectedItens = this.selectedItens + 1;
    });
  }
  excluiItens() {
    this.ped.itensPedido = this.ped.itensPedido.filter(item => {
      return !item.selected;
    });
    this.ped.totalizaPedido();
    this.contaSelecionados();
  }
  quantidadeModal(index) {
    var _this4 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let valor = yield _this4.modalValor('Quantidade Disp.', _this4.ped.itensPedido[index].quantidade, _this4.ped.itensPedido[index].estoqueDisponivel);
      if (valor) {
        _this4.ped.itensPedido[index].quantidade = valor;
        _this4.ped.quantidadeChange(index);
      }
      if (_this4.ped.itensPedido[index].valorUnitario == 0) _this4.valorUnitarioModal(index);
    })();
  }
  valorUnitarioModal(index) {
    var _this5 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let valor = yield _this5.modalValor('Valor Unitario', _this5.ped.itensPedido[index].valorUnitario);
      if (valor) {
        _this5.ped.itensPedido[index].valorUnitario = valor;
        _this5.ped.valorUnitarioChange(index);
      }
    })();
  }
  valorTotalModal(index) {
    var _this6 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let valor = yield _this6.modalValor('Valor Total', _this6.ped.itensPedido[index].valorTotal);
      if (valor) {
        _this6.ped.itensPedido[index].valorTotal = valor;
        _this6.ped.valorTotalChange(index);
      }
    })();
  }
  modalValor(titulo, valorOrig, estoqueDisponivel) {
    var _this7 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ret = yield _this7.modVal.modalValor(titulo, valorOrig, estoqueDisponivel);
      console.log(ret);
      return ret.data;
    })();
  }
  enterKeyProduto(event, referencia, descricao, i) {
    if (event.key === 'Enter') {
      this.buscaProduto(referencia, descricao, i);
    }
  }
  enterKeyDescricao(event, referencia, descricao, i) {
    if (event.key === 'Enter') {
      this.buscaProduto(referencia, descricao, i);
    }
  }
  clearContents(i) {
    this.ped.itensPedido[i].descricao = '';
  }
  static ctorParameters = () => [{
    type: _pedido_pedido_page__WEBPACK_IMPORTED_MODULE_9__.PedidoPage
  }, {
    type: _storage_db_service__WEBPACK_IMPORTED_MODULE_8__.DbService
  }, {
    type: _api_vendas_service__WEBPACK_IMPORTED_MODULE_7__.VendasService
  }, {
    type: _selecao_item_selecao_item_page__WEBPACK_IMPORTED_MODULE_6__.SelecaoItemPage
  }, {
    type: _funcoes_genericas_service__WEBPACK_IMPORTED_MODULE_5__.GenericasService
  }, {
    type: ngx_mask__WEBPACK_IMPORTED_MODULE_10__.NgxMaskPipe
  }, {
    type: _modal_valor_modal_valor_page__WEBPACK_IMPORTED_MODULE_4__.ModalValorPage
  }, {
    type: _modal_valida_itens_modal_valida_itens_page__WEBPACK_IMPORTED_MODULE_3__.ModalValidaItensPage
  }];
};
ItensPedidoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-itens-pedido',
  template: _itens_pedido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_itens_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ItensPedidoPage);


/***/ }),

/***/ 3063:
/*!**********************************************************************!*\
  !*** ./src/app/pages/itens-pedido/itens-pedido.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.msgEstoque {
  color: red;
}

body {
  font-family: var(--ion-font-family, inherit) !important;
}

ion-col {
  border: 1px solid var(--ion-color-primary);
  border-radius: 5px;
}

.temEstoque {
  background: lightblue;
}

.naoTemEstoque {
  background-color: lightcoral;
}

.rotModal {
  font-size: 70%;
  color: var(--ion-color-primary);
  vertical-align: top;
}

.cmpModal {
  text-align: center;
  font-weight: 500;
}

table {
  width: 100%;
  height: 100%;
}

td {
  word-wrap: break-word;
}

.container {
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
}

/*
.row {
    display: flex;
    flex-flow: row;
    justify-content:left;
}

.col {
    display: flex;
    flex-flow: column;
    min-width: 100px;
    width: 25%;
    min-height: 50px;
    height: 100%;
//    margin: auto;
//    border-collapse: collapse;
//    border: 1px solid rgba(255, 255, 255, 0.6);
//    background-color: rgb(112, 112, 112,0.2);
    padding: 3px;
//    margin-block-end: 5px;
    border: 1px solid rgb(112, 112, 112,0.2);
}
*/
@media only screen and (min-width: 851px) {
  .row {
    display: flex;
    flex-flow: row;
    justify-content: left;
  }
  .col {
    display: flex;
    flex-flow: column;
    min-width: 100px;
    width: 25%;
    min-height: 50px;
    height: 100%;
    padding: 3px;
    border: 1px solid rgba(112, 112, 112, 0.2);
  }
  .dsc {
    min-width: 300px;
    width: 60%;
  }
  .ref {
    min-width: 100px;
    width: 40%;
  }
  .lin1 {
    min-width: 400px;
    width: 50%;
  }
  .lin2 {
    min-width: 400px;
    width: 50%;
  }
  .lin3 {
    min-width: 400px;
    width: 100%;
  }
  .vlr {
    min-width: 100px;
    width: 25%;
  }
  .obs {
    min-width: 400px;
    width: 100%;
  }
}
@media only screen and (min-width: 451px) and (max-width: 851px) {
  .row {
    display: flex;
    flex-flow: row;
    justify-content: left;
  }
  .col {
    display: flex;
    flex-flow: column;
    min-width: 100px;
    width: 25%;
    min-height: 50px;
    height: 100%;
    padding: 3px;
    border: 1px solid rgba(112, 112, 112, 0.2);
  }
  .dsc {
    min-width: 300px;
    width: 60%;
  }
  .ref {
    min-width: 100px;
    width: 40%;
  }
  .lin1 {
    min-width: 400px;
    width: 100%;
  }
  .lin2 {
    min-width: 400px;
    width: 100%;
  }
  .lin3 {
    min-width: 400px;
    width: 100%;
  }
  .vlr {
    min-width: 100px;
    width: 25%;
  }
  .obs {
    min-width: 400px;
    width: 100%;
  }
}
@media only screen and (max-width: 450px) {
  .row {
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    width: 100%;
    border-radius: 10px;
  }
  .col {
    display: flex;
    flex-flow: row;
    min-width: 100px;
    width: 100%;
    min-height: 50px;
    justify-content: space-around;
    padding: 3px;
    border: 1px solid rgba(112, 112, 112, 0.2);
  }
  .colPq {
    display: flex;
    flex-flow: column;
    width: 100%;
    min-height: 50px;
  }
  /*    .col {
          display: flex;
          flex-flow: row;
          justify-content:left;
          width: 100%;

  /*        display: flex;
          flex-flow: column;
          min-width: 100px;
          width: 25%;
          min-height: 50px;
          height: 100%;
      //    margin: auto;
      //    border-collapse: collapse;
      //    border: 1px solid rgba(255, 255, 255, 0.6);
      //    background-color: rgb(112, 112, 112,0.2);
          padding: 3px;
      //    margin-block-end: 5px;
          border: 1px solid rgb(112, 112, 112,0.2);*/
  /*
  .lin1 {
      min-width: 400px;
      width: 100%;
  }
  .lin2 {
      min-width: 400px;
      width: 100%;
  }
  .lin3 {
      min-width: 400px;
      width: 100%;
  }*/
}`, "",{"version":3,"sources":["webpack://./src/app/pages/itens-pedido/itens-pedido.page.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;AACF;;AACA;EAEI,uDAAA;AACJ;;AAEA;EAGI,0CAAA;EAEA,kBAAA;AAFJ;;AAMA;EAEI,qBAAA;AAJJ;;AAOA;EACI,4BAAA;AAJJ;;AAOA;EACI,cAAA;EACA,+BAAA;EACA,mBAAA;AAJJ;;AAOA;EACI,kBAAA;EACA,gBAAA;AAJJ;;AAOA;EACI,WAAA;EACA,YAAA;AAJJ;;AAMA;EACI,qBAAA;AAHJ;;AAMA;EACI,aAAA;EACA,eAAA;EACA,6BAAA;EACA,WAAA;EACA,mBAAA;EACA,mBAAA;AAHJ;;AAOA;;;;;;;;;;;;;;;;;;;;;;CAAA;AAwBA;EACI;IACI,aAAA;IACA,cAAA;IACA,qBAAA;EALN;EAQE;IACI,aAAA;IACA,iBAAA;IACA,gBAAA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;IAKA,YAAA;IAEA,0CAAA;EAXN;EAaE;IACI,gBAAA;IACA,UAAA;EAXN;EAcE;IACI,gBAAA;IACA,UAAA;EAZN;EAeE;IACI,gBAAA;IACA,UAAA;EAbN;EAeE;IACI,gBAAA;IACA,UAAA;EAbN;EAeE;IACI,gBAAA;IACA,WAAA;EAbN;EAeE;IACI,gBAAA;IACA,UAAA;EAbN;EAgBE;IACI,gBAAA;IACA,WAAA;EAdN;AACF;AAmBA;EACI;IACI,aAAA;IACA,cAAA;IACA,qBAAA;EAjBN;EAoBE;IACI,aAAA;IACA,iBAAA;IACA,gBAAA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;IAKA,YAAA;IAEA,0CAAA;EAvBN;EAyBE;IACI,gBAAA;IACA,UAAA;EAvBN;EA0BE;IACI,gBAAA;IACA,UAAA;EAxBN;EA2BE;IACI,gBAAA;IACA,WAAA;EAzBN;EA2BE;IACI,gBAAA;IACA,WAAA;EAzBN;EA2BE;IACI,gBAAA;IACA,WAAA;EAzBN;EA2BE;IACI,gBAAA;IACA,UAAA;EAzBN;EA4BE;IACI,gBAAA;IACA,WAAA;EA1BN;AACF;AA8BA;EACI;IACI,aAAA;IACA,eAAA;IACA,6BAAA;IACA,WAAA;IACA,mBAAA;EA5BN;EA+BE;IACI,aAAA;IACA,cAAA;IACA,gBAAA;IACA,WAAA;IACA,gBAAA;IACA,6BAAA;IAMA,YAAA;IAEA,0CAAA;EAnCN;EAsCE;IACI,aAAA;IACA,iBAAA;IACA,WAAA;IACA,gBAAA;EApCN;EAuCF;;;;;;;;;;;;;;;;;;oDAAA;EAqBI;;;;;;;;;;;;IAAA;AA3BJ","sourcesContent":[".msgEstoque{\n  color: red;\n}\nbody{\n\n    font-family: var(--ion-font-family, inherit)  !important;\n}\n\nion-col{\n//    border-right: solid black 1px;\n//    border-left: solid black 1px;\n    border: 1px solid var(--ion-color-primary);\n\n    border-radius: 5px;\n\n}\n\n.temEstoque{\n\n    background: lightblue;\n}\n\n.naoTemEstoque{\n    background-color: lightcoral;\n}\n\n.rotModal {\n    font-size: 70%;\n    color: var(--ion-color-primary);\n    vertical-align: top;\n}\n\n.cmpModal {\n    text-align: center;\n    font-weight: 500;\n}\n\ntable {\n    width: 100%;\n    height: 100%;\n}\ntd {\n    word-wrap:break-word;\n}\n\n.container {\n    display: flex;\n    flex-flow: wrap;\n    justify-content: space-around;\n    width: 100%;\n    border-radius: 10px;\n    margin-bottom: 15px;\n//    background-color: rgb(174, 183, 236);\n}\n\n/*\n.row {\n    display: flex;\n    flex-flow: row;\n    justify-content:left;\n}\n\n.col {\n    display: flex;\n    flex-flow: column;\n    min-width: 100px;\n    width: 25%;\n    min-height: 50px;\n    height: 100%;\n//    margin: auto;\n//    border-collapse: collapse;\n//    border: 1px solid rgba(255, 255, 255, 0.6);\n//    background-color: rgb(112, 112, 112,0.2);\n    padding: 3px;\n//    margin-block-end: 5px;\n    border: 1px solid rgb(112, 112, 112,0.2);\n}\n*/\n\n@media only screen and (min-width: 851px)  {\n    .row {\n        display: flex;\n        flex-flow: row;\n        justify-content:left;\n    }\n\n    .col {\n        display: flex;\n        flex-flow: column;\n        min-width: 100px;\n        width: 25%;\n        min-height: 50px;\n        height: 100%;\n    //    margin: auto;\n    //    border-collapse: collapse;\n    //    border: 1px solid rgba(255, 255, 255, 0.6);\n    //    background-color: rgb(112, 112, 112,0.2);\n        padding: 3px;\n    //    margin-block-end: 5px;\n        border: 1px solid rgb(112, 112, 112,0.2);\n    }\n    .dsc {\n        min-width: 300px;\n        width: 60%;\n    //    background-color: lightcoral;\n    }\n    .ref {\n        min-width: 100px;\n        width: 40%;\n    //    background-color: lightcoral;\n    }\n    .lin1 {\n        min-width: 400px;\n        width: 50%;\n    }\n    .lin2 {\n        min-width: 400px;\n        width: 50%;\n    }\n    .lin3 {\n        min-width: 400px;\n        width: 100%;\n    }\n    .vlr {\n        min-width: 100px;\n        width: 25%;\n    //    background-color: green;\n    }\n    .obs {\n        min-width: 400px;\n        width: 100%;\n    //    background-color: orange;\n    }\n}\n\n\n@media only screen and (min-width: 451px) and (max-width: 851px)  {\n    .row {\n        display: flex;\n        flex-flow: row;\n        justify-content:left;\n    }\n\n    .col {\n        display: flex;\n        flex-flow: column;\n        min-width: 100px;\n        width: 25%;\n        min-height: 50px;\n        height: 100%;\n    //    margin: auto;\n    //    border-collapse: collapse;\n    //    border: 1px solid rgba(255, 255, 255, 0.6);\n    //    background-color: rgb(112, 112, 112,0.2);\n        padding: 3px;\n    //    margin-block-end: 5px;\n        border: 1px solid rgb(112, 112, 112,0.2);\n    }\n    .dsc {\n        min-width: 300px;\n        width: 60%;\n    //    background-color: lightcoral;\n    }\n    .ref {\n        min-width: 100px;\n        width: 40%;\n    //    background-color: lightcoral;\n    }\n    .lin1 {\n        min-width: 400px;\n        width: 100%;\n    }\n    .lin2 {\n        min-width: 400px;\n        width: 100%;\n    }\n    .lin3 {\n        min-width: 400px;\n        width: 100%;\n    }\n    .vlr {\n        min-width: 100px;\n        width: 25%;\n    //    background-color: green;\n    }\n    .obs {\n        min-width: 400px;\n        width: 100%;\n    //    background-color: orange;\n    }\n}\n\n@media only screen and (max-width: 450px)  {\n    .row {\n        display: flex;\n        flex-flow: wrap;\n        justify-content: space-around;\n        width: 100%;\n        border-radius: 10px;\n    }\n\n    .col {\n        display: flex;\n        flex-flow: row;\n        min-width: 100px;\n        width: 100%;\n        min-height: 50px;\n        justify-content: space-around;\n//        height: 100%;\n    //    margin: auto;\n    //    border-collapse: collapse;\n    //    border: 1px solid rgba(255, 255, 255, 0.6);\n    //    background-color: rgb(112, 112, 112,0.2);\n        padding: 3px;\n    //    margin-block-end: 5px;\n        border: 1px solid rgb(112, 112, 112,0.2);\n    }\n\n    .colPq {\n        display: flex;\n        flex-flow: column;\n        width: 100%;\n        min-height: 50px;\n    }\n\n/*    .col {\n        display: flex;\n        flex-flow: row;\n        justify-content:left;\n        width: 100%;\n\n/*        display: flex;\n        flex-flow: column;\n        min-width: 100px;\n        width: 25%;\n        min-height: 50px;\n        height: 100%;\n    //    margin: auto;\n    //    border-collapse: collapse;\n    //    border: 1px solid rgba(255, 255, 255, 0.6);\n    //    background-color: rgb(112, 112, 112,0.2);\n        padding: 3px;\n    //    margin-block-end: 5px;\n        border: 1px solid rgb(112, 112, 112,0.2);*/\n   // }\n\n    /*\n    .lin1 {\n        min-width: 400px;\n        width: 100%;\n    }\n    .lin2 {\n        min-width: 400px;\n        width: 100%;\n    }\n    .lin3 {\n        min-width: 400px;\n        width: 100%;\n    }*/\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3683:
/*!**********************************************************************!*\
  !*** ./src/app/pages/itens-pedido/itens-pedido.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>itensPedido</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button *ngIf=\"selectedItens > 0\" (click)=\"excluiItens()\" color=\"danger\">\n      <ion-badge color=\"danger\">{{selectedItens}}</ion-badge>\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button (click)=\"adicionaItem()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n\n  </ion-fab>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of this.ped.itensPedido;  let i = index\">\n\n\n      <div class=\"container\">\n        <div class=\"row lin1\">\n          <div class=\"col ref\">\n            <div class=\"colPq\">\n              <ion-toolbar>\n                <ion-checkbox slot=\"start\" (click)=\"checkItem(i)\" name=\"checkBox1\" color=\"danger\"></ion-checkbox>\n                <ion-label>Referência</ion-label>\n                <ion-buttons slot=\"end\">\n\n                  <ion-button id=\"produto\" slot=\"end\" fill=\"clear\" slot=\"start\"\n                    (click)=\"buscaProduto(item.referencia, item.descricao, i)\" shape=\"round\">\n                    <ion-icon name=\"search\" class=\"iconeObrig\"></ion-icon>\n                  </ion-button>\n                </ion-buttons>\n              </ion-toolbar>\n              <ion-input id=\"referencia\" (keypress)=\"enterKeyProduto($event,  item.referencia, item.descricao, i)\" clearInput type=\"text\" [(ngModel)]=\"item.referencia\" name=\"referencia\"></ion-input>\n            </div>\n          </div>\n          <div class=\"col dsc\">\n            <div class=\"colPq\">\n              <ion-toolbar>\n                <ion-label>Descrição</ion-label>\n                <ion-buttons slot=\"end\">\n                  <ion-button   fill=\"clear\" slot=\"start\"\n                  (click)=\"clearContents(i)\" shape=\"round\">\n                  <ion-icon name=\"close\" class=\"iconeObrig\"></ion-icon>\n                </ion-button>\n                  <ion-button id=\"descricao\" slot=\"end\" fill=\"clear\" slot=\"start\"\n                    (click)=\"buscaProduto(item.referencia, item.descricao, i)\" shape=\"round\">\n                    <ion-icon name=\"search\" class=\"iconeObrig\"></ion-icon>\n                  </ion-button>\n                </ion-buttons>\n              </ion-toolbar>\n              <div class=\"cmpModal\" >\n                <ion-textarea (keypress)=\"enterKeyDescricao($event, item.referencia, item.descricao, i)\" id=\"descricao-texto\"\n                 clearOnEdit=\"true\" [(ngModel)]=\"item.descricao\" name=\"descricao\"></ion-textarea>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row lin2\">\n\n          <div class=\"col vlr\" (click)=\"quantidadeModal(i)\">\n            <div class=\"colPq\">\n              <ion-toolbar>\n                <ion-label>Quantidade</ion-label>\n              </ion-toolbar>\n              <div class=\"cmpModal\"  [class]=\"temEstoque(item)\">{{this.gen.formataCampoSaida(this.ped.itensPedido[i].quantidade,'number','0')}}</div>\n            </div>\n          </div>\n          <div class=\"col vlr\">\n            <div class=\"colPq\">\n              <ion-toolbar>\n                <ion-label>Unidade</ion-label>\n              </ion-toolbar>\n              <div>{{item.unidade}}</div>\n            </div>\n          </div>\n          <div class=\"col vlr\" (click)=\"valorUnitarioModal(i)\">\n            <div class=\"colPq\">\n              <ion-toolbar>\n                <ion-label>Valor Unitário</ion-label>\n              </ion-toolbar>\n              <div class=\"cmpModal\">\n                {{this.gen.formataCampoSaida(this.ped.itensPedido[i].valorUnitario,'number','2')}}\n              </div>\n            </div>\n          </div>\n          <div class=\"col vlr\" (click)=\"valorTotalModal(i)\">\n            <div class=\"colPq\">\n              <ion-toolbar>\n                <ion-label>Valor Total</ion-label>\n              </ion-toolbar>\n              <div class=\"cmpModal\">\n                {{this.gen.formataCampoSaida(this.ped.itensPedido[i].valorTotal,'number','2')}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row lin3\">\n          <div class=\"col obs\">\n            <div class=\"colPq\">\n              <span class=\"msgEstoque\" *ngIf=\"this.ped.itensPedido[i].quantidade > this.ped.itensPedido[i].estoqueDisponivel\">\n                A quantidade informada esta acima da quantidade disponivel em estoque:<b> {{item.estoqueDisponivel}} </b>\n                </span>\n              <ion-toolbar>\n                <ion-label>Observação</ion-label>\n              </ion-toolbar>\n              <div class=\"cmpModal\">\n                <ion-input clearInput [disabled]=\"!(item.codigo > 0)\" type=\"text\" [(ngModel)]=\"item.observacao\"\n                  name=\"observacao\"></ion-input>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!--<div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n          <table>\n            <tr>\n              <td class=\"rotModal\">\n                Referência\n              </td>\n            </tr>\n            <tr>\n              <td class=\"cmpModal\">\n                <ion-input clearInput type=\"text\" [(ngModel)]=\"item.referencia\" name=\"referencia\">\n                </ion-input>\n              </td>\n            </tr>\n          </table>\n          </div>\n          <div class=\"col-md\">\n            <table>\n              <tr>\n                <td class=\"rotModal\">\n                  Descrição\n                </td>\n              </tr>\n              <tr>\n                <td class=\"cmpModal\">\n                  <ion-input clearInput type=\"text\" [(ngModel)]=\"item.descricao\" name=\"descricao\">\n                  </ion-input>\n                </td>\n              </tr>\n            </table>\n        </div>\n        </div>\n      </div>-->\n\n      <!--\n      <ion-grid>\n        <form>\n          <ion-row [class]=\"temEstoque(item)\">\n            <ion-col size=3>\n              <table>\n                <tr>\n                  <td class=\"rotModal\">\n                    Referência\n                  </td>\n                  <td style=\"text-align: right\">\n                      <ion-button slot=\"end\" fill=\"clear\" slot=\"start\" (click)=\"buscaProduto(item.referencia, item.descricao, i)\"\n                      shape=\"round\">\n                      <ion-icon name=\"search\" class=\"iconeObrig\"></ion-icon>\n                      </ion-button>\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"cmpModal\" colspan=\"2\">\n                    <ion-input clearInput type=\"text\" [(ngModel)]=\"item.referencia\" name=\"referencia\">\n                    </ion-input>\n                  </td>\n                </tr>\n              </table>\n            </ion-col>\n            <ion-col size=9>\n              <table>\n                <tr>\n                  <td class=\"rotModal\">\n                    Descrição\n                  </td>\n                  <td style=\"text-align: right\">\n                    <ion-button slot=\"end\" fill=\"clear\" slot=\"start\" (click)=\"buscaProduto(item.referencia, item.descricao, i)\"\n                    shape=\"round\">\n                    <ion-icon name=\"search\" class=\"iconeObrig\"></ion-icon>\n                    </ion-button>\n                </td>\n              </tr>\n                <tr>\n                  <td class=\"cmpModal\" colspan=\"2\">\n                    <ion-input clearInput type=\"text\" [(ngModel)]=\"item.descricao\" name=\"descricao\">\n                    </ion-input>\n                  </td>\n                </tr>\n              </table>\n            </ion-col>\n          </ion-row>\n          <ion-row [class]=\"temEstoque(item)\">\n            <ion-col (click)=\"quantidadeModal(i)\">\n              <table>\n                <tr>\n                  <td class=\"rotModal\">\n                    Quantidade\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"cmpModal\">\n                    {{this.gen.formataCampoSaida(this.ped.itensPedido[i].quantidade,'number','0')}}\n                  </td>\n                </tr>\n              </table>\n            </ion-col>\n            <ion-col>\n              <table>\n                <tr>\n                  <td class=\"rotModal\">\n                    Unid.\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"cmpModal\">\n                    {{item.unidade}}\n                  </td>\n                </tr>\n              </table>\n\n            </ion-col>\n            <ion-col (click)=\"valorUnitarioModal(i)\">\n              <table>\n                <tr>\n                  <td class=\"rotModal\">\n                    Valor Unitário\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"cmpModal\" wdith=\"\">\n                    {{this.gen.formataCampoSaida(this.ped.itensPedido[i].valorUnitario,'number','2')}}\n                  </td>\n                </tr>\n              </table>\n\n            </ion-col>\n            <ion-col (click)=\"valorTotalModal(i)\">\n              <table>\n                <tr>\n                  <td class=\"rotModal\">\n                    Valor Total\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"cmpModal\">\n                    {{this.gen.formataCampoSaida(this.ped.itensPedido[i].valorTotal,'number','2')}}\n                  </td>\n                </tr>\n              </table>\n            </ion-col>\n          </ion-row>\n          <ion-row [class]=\"temEstoque(item)\">\n            <ion-col>\n              <table>\n                <tr>\n                  <td class=\"rotModal\">\n                    Observação\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"cmpModal\">\n                    <ion-input clearInput [disabled]=\"!(item.codigo > 0)\" type=\"text\" [(ngModel)]=\"item.observacao\"\n                      name=\"observacao\"></ion-input>\n                  </td>\n                </tr>\n              </table>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-grid>\n  -->\n    </ion-item>\n  </ion-list>\n\n\n\n\n\n\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_itens-pedido_itens-pedido_module_ts.js.map