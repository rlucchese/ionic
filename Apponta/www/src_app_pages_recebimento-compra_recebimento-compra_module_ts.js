(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_recebimento-compra_recebimento-compra_module_ts"],{

/***/ 5523:
/*!*************************************************!*\
  !*** ./src/app/api/documento-fiscal.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentoFiscalService: () => (/* binding */ DocumentoFiscalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ws-reval.service */ 5727);



let DocumentoFiscalService = class DocumentoFiscalService {
  svc;
  _MODULO = 'DocumentoFiscal';
  constructor(svc) {
    this.svc = svc;
  }
  Lista(params) {
    return this.svc.consomeWS(this._MODULO, 'Lista', params);
  }
  AplicarPedido(params) {
    return this.svc.consomeWS(this._MODULO, 'AplicarPedido', params);
  }
  Get(params) {
    return this.svc.consomeWS(this._MODULO, 'Get', params);
  }
  Finaliza(params) {
    return this.svc.consomeWS(this._MODULO, 'Finaliza', params);
  }
  ValidaItem(params) {
    return this.svc.consomeWS(this._MODULO, 'ValidaItem', params);
  }
  static ctorParameters = () => [{
    type: _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__.WsProccedService
  }];
};
DocumentoFiscalService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], DocumentoFiscalService);


/***/ }),

/***/ 5538:
/*!**********************************************!*\
  !*** ./src/app/api/pedido-compra.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PedidoCompraService: () => (/* binding */ PedidoCompraService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ws-reval.service */ 5727);



let PedidoCompraService = class PedidoCompraService {
  svc;
  _MODULO = 'PedidoCompra';
  constructor(svc) {
    this.svc = svc;
  }
  ListaItens(params) {
    return this.svc.consomeWS(this._MODULO, 'ListaItens', params);
  }
  static ctorParameters = () => [{
    type: _ws_reval_service__WEBPACK_IMPORTED_MODULE_0__.WsProccedService
  }];
};
PedidoCompraService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], PedidoCompraService);


/***/ }),

/***/ 5325:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/recebimento-compra/recebimento-compra-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecebimentoCompraPageRoutingModule: () => (/* binding */ RecebimentoCompraPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _recebimento_compra_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recebimento-compra.page */ 5407);




const routes = [{
  path: '',
  component: _recebimento_compra_page__WEBPACK_IMPORTED_MODULE_0__.RecebimentoCompraPage
}];
let RecebimentoCompraPageRoutingModule = class RecebimentoCompraPageRoutingModule {};
RecebimentoCompraPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], RecebimentoCompraPageRoutingModule);


/***/ }),

/***/ 3588:
/*!***********************************************************************!*\
  !*** ./src/app/pages/recebimento-compra/recebimento-compra.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecebimentoCompraPageModule: () => (/* binding */ RecebimentoCompraPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _recebimento_compra_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recebimento-compra-routing.module */ 5325);
/* harmony import */ var _recebimento_compra_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recebimento-compra.page */ 5407);







let RecebimentoCompraPageModule = class RecebimentoCompraPageModule {};
RecebimentoCompraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _recebimento_compra_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecebimentoCompraPageRoutingModule],
  declarations: [_recebimento_compra_page__WEBPACK_IMPORTED_MODULE_1__.RecebimentoCompraPage]
})], RecebimentoCompraPageModule);


/***/ }),

/***/ 5407:
/*!*********************************************************************!*\
  !*** ./src/app/pages/recebimento-compra/recebimento-compra.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecebimentoCompraPage: () => (/* binding */ RecebimentoCompraPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _recebimento_compra_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recebimento-compra.page.html?ngResource */ 2633);
/* harmony import */ var _recebimento_compra_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recebimento-compra.page.scss?ngResource */ 4933);
/* harmony import */ var _recebimento_compra_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_recebimento_compra_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_api_documento_fiscal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/documento-fiscal.service */ 5523);
/* harmony import */ var src_app_api_pedido_compra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/pedido-compra.service */ 5538);
/* harmony import */ var src_app_componentes_selecao_nota_selecao_nota_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/componentes/selecao-nota/selecao-nota.component */ 7668);
/* harmony import */ var src_app_componentes_selecao_pedido_selecao_pedido_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/componentes/selecao-pedido/selecao-pedido.component */ 8382);
/* harmony import */ var src_app_componentes_selecao_produto_selecao_produto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/componentes/selecao-produto/selecao-produto.component */ 4016);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);
/* harmony import */ var _produtos_produtos_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../produtos/produtos.page */ 1611);












let RecebimentoCompraPage = class RecebimentoCompraPage {
  db;
  docSvc;
  pedSvc;
  selNota;
  selPedido;
  selProduto;
  produtoPage;
  filtro;
  filtroPedido;
  documentos;
  itens;
  documentoFiscal;
  isInputFocused = false;
  msg;
  corSelecionada = 'todas';
  coresSelecionadas = ['todas'];
  get itensFiltrados() {
    if (!this.documentoFiscal?.itens) return [];
    if (this.corSelecionada.includes('todas')) {
      return this.documentoFiscal.itens;
    }
    return this.documentoFiscal.itens.filter(item => this.corSelecionada == item.cor);
  }
  constructor(db, docSvc, pedSvc, selNota, selPedido, selProduto, produtoPage) {
    this.db = db;
    this.docSvc = docSvc;
    this.pedSvc = pedSvc;
    this.selNota = selNota;
    this.selPedido = selPedido;
    this.selProduto = selProduto;
    this.produtoPage = produtoPage;
  }
  ngOnInit() {}
  buscarNotas() {
    var _this = this;
    //let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMasdfasidasdfasdgadgsdfgyJpYXQiOnsiZGF0ZSI6IjIwMjItMDItMDggMTk6NDY6MzQuMDAwMDAwIiwidGltZXpvbmVfdHlwZSI6MywidGltZXpvbmUiOiJBbWVyaWNhXC9CdWVub3NfQWlyZXMifSwiaXNzIjoicmV2YWxzZXJyYXMuY29tLmJyIiwibmJmIjp7ImRhdGUiOiIyMDIyLTAyLTA4IDE5OjQ2OjM0LjAwMDAwMCIsInRpbWV6b25lX3R5cGUiOjMsInRpbWV6b25lIjoiQW1lcmljYVwvQnVlbm9zX0FpcmVzIn0sImV4cCI6MTY0Njk1MjM5NCwiZGF0YSI6eyJpZCI6IjEiLCJ1c3VhcmlvIjoiUk9EUklHTyIsInRpcG8iOiIyIiwibGFuZyI6InB0LWJyIn19.dkk7R2ZX3ewHCTxS5CyinaDPcfAP310wuF-I3kgKQCAz7gqJIujFtYIA8QWlJSAOMKQj"
    if (this.filtro) {
      this.db.mostraProcessando();
      this.docSvc.Lista({
        token: this.db.getToken(),
        filter: this.filtro
      }).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ret) {
          _this.db.escondeProcessando();
          if (ret.status && ret.documentos.length > 0) {
            console.log("ret", ret);
            _this.documentos = ret.documentos;
            if (_this.documentos.length > 1) {
              const ret = yield _this.selNota.selecionaDocumento(_this.documentos);
              console.log(ret);
              if (ret.data.status) {
                _this.documentoFiscal = ret.data.documento;
                _this.carregaItens(_this.documentoFiscal);
              }
            } else {
              _this.documentoFiscal = _this.documentos[0];
              _this.carregaItens(_this.documentoFiscal);
            }
          } else {
            _this.documentoFiscal = ret.documentos[0];
            _this.msg = "NENHUMA NOTA ENCONTRADA";
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), err => this.db.escondeProcessando(err.error));
    } else {
      this.db.setMensagem("Escolha um filtro para buscar");
    }
  }
  aplicarPedido() {
    var _this2 = this;
    console.log(this.documentoFiscal.itens);
    if (this.filtro) {
      this.db.mostraProcessando();
      this.docSvc.AplicarPedido({
        token: this.db.getToken(),
        pedidoCompra: this.filtroPedido,
        cnpj: this.documentoFiscal.cnpj,
        itens: this.documentoFiscal.itens
      }).subscribe(/*#__PURE__*/function () {
        var _ref2 = (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ret) {
          _this2.db.escondeProcessando();
          if (ret.status) {
            console.log("ret", ret);
            _this2.documentoFiscal.itens = ret.itens;
          } else {
            _this2.msg = ret.error;
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }(), err => this.db.escondeProcessando(err.error));
    } else {
      this.db.setMensagem("Escolha um filtro para buscar");
    }
  }
  carregaItens(documento) {
    var _this3 = this;
    this.db.mostraProcessando();
    this.docSvc.Get({
      token: this.db.getToken(),
      codigo: documento.codigo
    }).subscribe(/*#__PURE__*/function () {
      var _ref3 = (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ret) {
        _this3.db.escondeProcessando();
        if (ret.status) {
          console.log("ret", ret);
          _this3.documentoFiscal.itens = ret.itens;
          console.log("documentos", _this3.documentoFiscal);
        }
      });
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }(), err => this.db.escondeProcessando(err.error));
  }
  onInputFocus() {
    this.isInputFocused = true;
  }
  onInputBlur() {
    this.isInputFocused = false;
  }
  validaItem(item) {
    var _this4 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.db.mostraProcessando();
      return _this4.docSvc.ValidaItem({
        token: _this4.db.getToken(),
        item: item
      }).toPromise().then(ret => {
        _this4.db.escondeProcessando();
        if (ret.status) {
          console.log(ret.item);
          return ret.item;
        } else {
          throw new Error("Erro ao validar o item");
        }
      }).catch(error => {
        _this4.db.escondeProcessando();
        throw error;
      });
    })();
  }
  selecaoPedido(item, cnpj) {
    var _this5 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(item);
      if (_this5.filtro) {
        _this5.db.mostraProcessando();
        _this5.pedSvc.ListaItens({
          token: _this5.db.getToken(),
          numero: item.notaPedidoNumero,
          item: item.notaPedidoItem,
          cnpj: cnpj
        }).subscribe(/*#__PURE__*/function () {
          var _ref4 = (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ret) {
            _this5.db.escondeProcessando();
            if (ret.status) {
              console.log("ret", ret);
              if (ret.itens.length > 1) {
                const retorno = yield _this5.selPedido.selecionaPedido(ret.itens, item.notaProduto + " - " + item.notaQuantidade + item.notaUnidade);
                if (retorno.data.status) {
                  console.log(retorno.data);
                  item.notaPedidoNumero = retorno.data.item.numeroPedido;
                  item.notaPedidoItem = retorno.data.item.item;
                  item.entradaDescricao = retorno.data.item.descricao;
                  item.entradaReferencia = retorno.data.item.referencia;
                  item.pedidoQuantidade = retorno.data.item.quantidade;
                  item.pedidoUnidade = retorno.data.item.unidade;
                  let retItem = yield _this5.validaItem(item);
                  Object.assign(item, retItem);
                }
              } else {
                console.log(ret.itens.length);
                if (ret.itens.length == 1) {
                  console.log(ret.itens[0]);
                  item.notaPedidoNumero = ret.itens[0].numeroPedido;
                  item.notaPedidoItem = ret.itens[0].item;
                  item.entradaDescricao = ret.itens[0].descricao;
                  item.entradaReferencia = ret.itens[0].referencia;
                  item.pedidoQuantidade = ret.itens[0].quantidade;
                  item.pedidoUnidade = ret.itens[0].unidade;
                  let retItem = yield _this5.validaItem(item);
                  Object.assign(item, retItem);
                  console.log(retItem);
                } else {
                  _this5.db.setMensagem("Pedido não encontrado");
                }
              }
            }
          });
          return function (_x4) {
            return _ref4.apply(this, arguments);
          };
        }(), err => _this5.db.escondeProcessando(err.error));
      } else {
        _this5.db.setMensagem("Escolha um filtro para buscar");
      }
    })();
  }
  selecaoProduto(item, filtro) {
    var _this6 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!item.notaPedidoNumero) {
        const retorno = yield _this6.selProduto.selecionaProduto(filtro);
        if (retorno.data.status) {
          console.log(retorno.data);
          item.entradaReferencia = retorno.data.produto.referencia;
          item.entradaDescricao = retorno.data.produto.descricao;
          item.entradaUnidade = retorno.data.produto.unidade;
        }
        // this.carregaItens(this.documentoFiscal)
      } else {
        _this6.selecaoPedido(item, _this6.documentoFiscal.cnpj);
      }
    })();
  }
  onKeyDown(event, item) {
    console.log("entrou");
    console.log(event);
    this.selecaoPedido(item, this.documentoFiscal.cnpj);
  }
  abrirDesenho(referencia) {
    var _this7 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const retorno = yield _this7.produtoPage.SelecionaProduto(referencia);
    })();
  }
  finalizar() {
    var _this8 = this;
    this.db.mostraProcessando();
    this.docSvc.Finaliza({
      token: this.db.getToken(),
      documentoFiscal: this.documentoFiscal
    }).subscribe(/*#__PURE__*/function () {
      var _ref5 = (0,_Users_rodrigo_Desktop_Ionic_Apponta_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ret) {
        _this8.db.escondeProcessando();
        if (ret.status) {
          _this8.db.setMensagem("Documento Finalizado com Sucesso");
          let x;
          _this8.documentoFiscal = x;
        } else {
          _this8.db.setMensagem("Erro ao finalizar o documento");
        }
      });
      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }());
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_8__.DbService
  }, {
    type: src_app_api_documento_fiscal_service__WEBPACK_IMPORTED_MODULE_3__.DocumentoFiscalService
  }, {
    type: src_app_api_pedido_compra_service__WEBPACK_IMPORTED_MODULE_4__.PedidoCompraService
  }, {
    type: src_app_componentes_selecao_nota_selecao_nota_component__WEBPACK_IMPORTED_MODULE_5__.SelecaoNotaComponent
  }, {
    type: src_app_componentes_selecao_pedido_selecao_pedido_component__WEBPACK_IMPORTED_MODULE_6__.SelecaoPedidoComponent
  }, {
    type: src_app_componentes_selecao_produto_selecao_produto_component__WEBPACK_IMPORTED_MODULE_7__.SelecaoProdutoComponent
  }, {
    type: _produtos_produtos_page__WEBPACK_IMPORTED_MODULE_9__.ProdutosPage
  }];
};
RecebimentoCompraPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: "app-recebimento-compra",
  template: _recebimento_compra_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_recebimento_compra_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], RecebimentoCompraPage);


/***/ }),

/***/ 4933:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/recebimento-compra/recebimento-compra.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/* styles.scss */
.custom-input ion-label.disabled,
.custom-input ion-label {
  transform: translateY(15px) translateX(5px) translateZ(0) scale(0.85);
  color: black; /* ou a cor desejada para o rótulo flutuante ativo */
  z-index: 2;
}

.custom-input ion-input {
  font-size: 12px;
  color: black; /* ou a cor desejada para o rótulo flutuante ativo */
  text-align: center;
  padding-right: 0px !important;
  border-radius: 8px;
  transition: border-color 0.3s ease;
  --background: #f0f0f0; /* Cor de fundo do input */
  border-radius: 5px;
  padding: 10px;
  margin-top: -20px; /* Ajuste para alinhar o texto com o topo do input */
}

.read {
  background-color: lightgrey;
}

.custom-input ion-input.ng-valid + ion-label,
.custom-input ion-input.ng-touched + ion-label {
  transform: translateY(-24px) scale(0.85);
  font-size: 12px;
}

.custom-input ion-item.item-native {
  padding: 2px 2px;
}

.completo {
  background-color: green;
  border: 1px solid black;
}

.atencao {
  background-color: yellow;
  border: 1px solid black;
}

.cuidado {
  background-color: red;
  border: 1px solid black;
}

/* CSS para estilizar o ion-input e incluir o texto do ion-label */
/* CSS para estilizar o ion-input e incluir o texto do ion-label */
.custom-input2 {
  position: relative;
}

.custom-input2 ion-label.floating-label {
  position: absolute;
  top: 0px;
  left: 0;
  background-color: transparent; /* Cor de fundo do input */
  border-radius: 5px;
  z-index: 5;
  transform: scale(0.8);
  font-size: 12px;
  color: green;
}

.custom-input2 ion-icon.floating-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent; /* Cor de fundo do input */
  border-radius: 5px;
  z-index: 5;
  font-size: 24px;
  cursor: pointer;
}

.custom-input2 ion-icon.floating-icon2 {
  position: absolute;
  top: 15px;
  left: 10px;
  background-color: transparent; /* Cor de fundo do input */
  border-radius: 5px;
  z-index: 5;
  font-size: 24px;
  cursor: pointer;
}

.borda {
  border: solid black 1px;
  margin-top: 5px;
  padding-top: 2px;
}

.custom-input2 p {
  --background: white; /* Torna o fundo do input transparente para que a cor de fundo do ion-label seja visível */
  border-radius: 5px;
  padding: 10px;
  text-align: center; /* Centraliza o conteúdo do input */
  margin-top: 0px; /* Adiciona margem superior para evitar sobreposição com o label */
  margin-bottom: 0px; /* Adiciona margem superior para evitar sobreposição com o label */
  --padding-bottom: 5px !important;
  border: solid black 1px;
}

.cabecalho ion-input {
  background-color: var(--ion-color-secondary);
}

.corpo ion-input {
  background-color: lightgrey;
}

ion-content {
  font-size: small;
  font-weight: 300;
}

ion-col {
  padding-top: 2px;
  padding-bottom: 2px;
}

.fundo {
  background-color: white;
}

.texto {
  padding-left: 30px !important;
}

ion-input {
  position: relative;
  z-index: 0;
}
ion-input ion-button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 2;
  margin: 0;
  --padding-start: 8px;
  --padding-end: 8px;
}

.custom-search {
  --background: #f0f0f0;
  --border-radius: 8px;
  --box-shadow: none;
  --icon-color: var(--ion-color-primary);
  --placeholder-color: var(--ion-color-medium);
  --clear-button-color: var(--ion-color-medium);
  padding: 0;
  margin: 0;
}

.custom-search .searchbar-input-container {
  height: 100%;
}

.custom-search .searchbar-search-icon {
  display: none;
}

.custom-search .searchbar-input {
  padding-right: 40px;
  font-size: 12px;
  text-align: center;
}

.input-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon-btn {
  position: absolute;
  left: 8px;
  z-index: 2;
  background: transparent;
  border: none;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.input-icon-btn ion-icon {
  font-size: 20px;
  color: var(--ion-color-medium);
}

.input-icon-wrapper ion-input {
  flex: 1;
  --padding-start: 36px;
}

.cor-bar {
  display: inline-block;
  width: 24px;
  height: 12px;
  border-radius: 4px;
  margin-right: 8px;
  vertical-align: middle;
  border: 1px solid #ccc;
}

.cor-bar.todas {
  background: repeating-linear-gradient(90deg, #EF9A9A 0 8px, #FFCC80 8px 16px, #C5E1A5 16px 24px);
}

.cor-checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-top: 8px;
}

.cor-checkbox {
  display: flex;
  align-items: center;
  gap: 4px;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/recebimento-compra/recebimento-compra.page.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB,gBAAA;AAEE;;EAEE,qEAAA;EACA,YAAA,EAAA,oDAAA;EACA,UAAA;AACJ;;AAGE;EACE,eAAA;EACA,YAAA,EAAA,oDAAA;EACA,kBAAA;EACA,6BAAA;EACJ,kBAAA;EACA,kCAAA;EACI,qBAAA,EAAA,0BAAA;EACA,kBAAA;EACA,aAAA;EACA,iBAAA,EAAA,oDAAA;AAAJ;;AAEE;EACE,2BAAA;AACJ;;AAEE;;EAEE,wCAAA;EACA,eAAA;AACJ;;AACE;EAEE,gBAAA;AACJ;;AAEA;EACE,uBAAA;EACA,uBAAA;AACF;;AAEE;EACE,wBAAA;EACA,uBAAA;AACJ;;AAEA;EACQ,qBAAA;EACA,uBAAA;AACR;;AAEC,kEAAA;AACD,kEAAA;AACA;EACI,kBAAA;AACJ;;AAEE;EACE,kBAAA;EACA,QAAA;EACA,OAAA;EAEA,6BAAA,EAAA,0BAAA;EACA,kBAAA;EACA,UAAA;EACA,qBAAA;EACA,eAAA;EACJ,YAAA;AAAA;;AAIE;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EAEA,6BAAA,EAAA,0BAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;EACC,eAAA;AAFL;;AAKE;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EAEA,6BAAA,EAAA,0BAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;EACC,eAAA;AAHL;;AAME;EACE,uBAAA;EACA,eAAA;EACA,gBAAA;AAHJ;;AAME;EACE,mBAAA,EAAA,0FAAA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA,EAAA,mCAAA;EACA,eAAA,EAAA,kEAAA;EACA,kBAAA,EAAA,kEAAA;EACA,gCAAA;EACA,uBAAA;AAHJ;;AAME;EACE,4CAAA;AAHJ;;AAOE;EACE,2BAAA;AAJJ;;AASE;EAEI,gBAAA;EACA,gBAAA;AAPN;;AAWE;EACE,gBAAA;EACA,mBAAA;AARJ;;AAUA;EAEE,uBAAA;AARF;;AAUA;EAEA,6BAAA;AARA;;AAWA;EACE,kBAAA;EACA,UAAA;AARF;AASE;EACE,kBAAA;EACA,QAAA;EACA,MAAA;EACA,YAAA;EACA,UAAA;EACA,SAAA;EACA,oBAAA;EACA,kBAAA;AAPJ;;AAWA;EACE,qBAAA;EACA,oBAAA;EACA,kBAAA;EACA,sCAAA;EACA,4CAAA;EACA,6CAAA;EACA,UAAA;EACA,SAAA;AARF;;AAWA;EACE,YAAA;AARF;;AAWA;EACE,aAAA;AARF;;AAWA;EACE,mBAAA;EACA,eAAA;EACA,kBAAA;AARF;;AAWA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;AARF;;AAWA;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,uBAAA;EACA,YAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;AARF;;AAWA;EACE,eAAA;EACA,8BAAA;AARF;;AAWA;EACE,OAAA;EACA,qBAAA;AARF;;AAWA;EACE,qBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,sBAAA;EACA,sBAAA;AARF;;AAUA;EACE,gGAAA;AAPF;;AAeA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,mBAAA;EACA,eAAA;AAZF;;AAeA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AAZF","sourcesContent":["/* styles.scss */\n\n  .custom-input ion-label.disabled,\n  .custom-input ion-label {\n    transform: translateY(15px) translateX(5px) translateZ(0) scale(0.85);\n    color: black; /* ou a cor desejada para o rótulo flutuante ativo */\n    z-index: 2;\n  }\n\n    \n  .custom-input ion-input {\n    font-size: 12px;\n    color: black; /* ou a cor desejada para o rótulo flutuante ativo */\n    text-align: center;\n    padding-right: 0px !important;\nborder-radius: 8px;\ntransition: border-color 0.3s ease;\n    --background: #f0f0f0; /* Cor de fundo do input */\n    border-radius: 5px;\n    padding: 10px;\n    margin-top: -20px; /* Ajuste para alinhar o texto com o topo do input */\n  }\n  .read{\n    background-color: lightgrey;\n  }\n  \n  .custom-input ion-input.ng-valid+ion-label,\n  .custom-input ion-input.ng-touched+ion-label {\n    transform: translateY(-24px) scale(0.85);\n    font-size: 12px;\n  }\n  .custom-input ion-item.item-native {\n\n    padding: 2px 2px;\n\n  }\n.completo{\n  background-color: green;\n  border: 1px solid black\n  }\n\n  .atencao{\n    background-color: yellow;\n    border: 1px solid black\n    }\n\n.cuidado{\n        background-color: red;\n        border: 1px solid black   \n     }\n\n /* CSS para estilizar o ion-input e incluir o texto do ion-label */\n/* CSS para estilizar o ion-input e incluir o texto do ion-label */\n.custom-input2  {\n    position: relative;\n  }\n  \n  .custom-input2 ion-label.floating-label {\n    position: absolute;\n    top: 0px;\n    left: 0;\n   //padding: 5px;\n    background-color: transparent; /* Cor de fundo do input */\n    border-radius: 5px;\n    z-index: 5;\n    transform:  scale(0.8);\n    font-size: 12px;\ncolor: green;\n\n  }\n\n  .custom-input2 ion-icon.floating-icon {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n   //padding: 5px;\n    background-color: transparent; /* Cor de fundo do input */\n    border-radius: 5px;\n    z-index: 5;\n    font-size: 24px;\n     cursor: pointer;\n\n  }\n  .custom-input2 ion-icon.floating-icon2 {\n    position: absolute;\n    top: 15px;\n    left:10px;\n   //padding: 5px;\n    background-color: transparent; /* Cor de fundo do input */\n    border-radius: 5px;\n    z-index: 5;\n    font-size: 24px;\n     cursor: pointer;\n\n  }\n  .borda{\n    border: solid black 1px;\n    margin-top: 5px;\n    padding-top: 2px;\n  }\n  \n  .custom-input2 p {\n    --background: white; /* Torna o fundo do input transparente para que a cor de fundo do ion-label seja visível */\n    border-radius: 5px;\n    padding: 10px;\n    text-align: center; /* Centraliza o conteúdo do input */\n    margin-top: 0px; /* Adiciona margem superior para evitar sobreposição com o label */\n    margin-bottom: 0px; /* Adiciona margem superior para evitar sobreposição com o label */\n    --padding-bottom: 5px !important;\n    border: solid black 1px;\n\n  }\n  .cabecalho ion-input{\n    background-color: var(--ion-color-secondary);\n\n\n  }\n  .corpo ion-input{\n    background-color: lightgrey;\n\n\n  }\n\n  ion-content{\n  \n      font-size: small;\n      font-weight: 300;\n    \n  }\n\n  ion-col{\n    padding-top: 2px;\n    padding-bottom: 2px;\n  }\n.fundo{\n\n  background-color: white;\n}\n.texto {\n\npadding-left: 30px !important\n}\n\nion-input {\n  position: relative;\n  z-index: 0 ;\n  ion-button {\n    position: absolute;\n    right: 0;\n    top: 0;\n    height: 100%;\n    z-index: 2;\n    margin: 0;\n    --padding-start: 8px;\n    --padding-end: 8px;\n  }\n}\n\n.custom-search {\n  --background: #f0f0f0;\n  --border-radius: 8px;\n  --box-shadow: none;\n  --icon-color: var(--ion-color-primary);\n  --placeholder-color: var(--ion-color-medium);\n  --clear-button-color: var(--ion-color-medium);\n  padding: 0;\n  margin: 0;\n}\n\n.custom-search .searchbar-input-container {\n  height: 100%;\n}\n\n.custom-search .searchbar-search-icon {\n  display: none;\n}\n\n.custom-search .searchbar-input {\n  padding-right: 40px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.input-icon-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.input-icon-btn {\n  position: absolute;\n  left: 8px;\n  z-index: 2;\n  background: transparent;\n  border: none;\n  padding: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.input-icon-btn ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-medium);\n}\n\n.input-icon-wrapper ion-input {\n  flex: 1;\n  --padding-start: 36px;\n}\n\n.cor-bar {\n  display: inline-block;\n  width: 24px;\n  height: 12px;\n  border-radius: 4px;\n  margin-right: 8px;\n  vertical-align: middle;\n  border: 1px solid #ccc;\n}\n.cor-bar.todas {\n  background: repeating-linear-gradient(\n    90deg,\n    #EF9A9A 0 8px,\n    #FFCC80 8px 16px,\n    #C5E1A5 16px 24px\n  );\n}\n\n.cor-checkbox-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n  margin-top: 8px;\n}\n\n.cor-checkbox {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2633:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/recebimento-compra/recebimento-compra.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"primary\">Recebimento Compra</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"campos \" >\n    <ion-row>\n      <ion-col size-sm=\"8\" size=\"12\">\n        <div class=\"input-icon-wrapper\">\n          <button type=\"button\" class=\"input-icon-btn\" (click)=\"buscarNotas()\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n          </button>\n          <ion-input\n            (keyup.enter)=\"buscarNotas()\"\n            type=\"text\"\n            name=\"filtro\"\n            placeholder=\"Buscar Nota\"\n            [(ngModel)]=\"filtro\"\n          ></ion-input>\n        </div>\n      </ion-col>\n      <ion-col size-sm=\"4\" size=\"12\">\n        <div class=\"input-icon-wrapper\">\n          <button\n            type=\"button\"\n            class=\"input-icon-btn\"\n            (click)=\"aplicarPedido()\"\n            [disabled]=\"!documentoFiscal || !documentoFiscal.itens || documentoFiscal.itens.length <= 0\"\n          >\n            <ion-icon name=\"search-outline\"></ion-icon>\n          </button>\n          <ion-input\n            (keyup.enter)=\"aplicarPedido()\"\n            type=\"text\"\n            name=\"filtroPedido\"\n            placeholder=\"Pedido Compra\"\n            [(ngModel)]=\"filtroPedido\"\n            [disabled]=\"!documentoFiscal || !documentoFiscal.itens || documentoFiscal.itens.length <= 0\"\n          ></ion-input>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n<ion-item *ngIf=\"!this.documentoFiscal && this.msg\" class=\"ion-align-itens-center\">\n{{this.msg}}</ion-item>\n  <ion-grid class=\"cabecalho\" *ngIf=\"this.documentoFiscal\">\n    <ion-row>\n      <ion-col  sizeMd=\"3\" sizeXs=\"6\">\n        <div class=\"ion-no-padding custom-input2\">\n          <ion-label class=\"floating-label\">Nota Fiscal</ion-label>\n          <ion-input class=\"cabecalho\" readonly=\"true\" [value]=\"this.documentoFiscal.numero\" type=\"text\"></ion-input>\n        </div>\n\n\n      </ion-col>\n      <ion-col sizeMd=\"3\" sizeXs=\"6\">\n        <div class=\"ion-no-padding custom-input2\">\n          <ion-label class=\"floating-label\">Emissão</ion-label>\n          <ion-input class=\"cabecalho\" readonly=\"true\" [value]=\"this.documentoFiscal.emissao | date:'shortDate' \" type=\"text\"></ion-input>\n        </div>\n\n      </ion-col>\n\n      <ion-col sizeMd=\"6\" sizeXs=\"12\">\n        <div class=\"ion-no-padding custom-input2 \">\n          <ion-label class=\"floating-label\">Fornecedor</ion-label>\n          <ion-input   readonly=\"true\" [value]=\"this.documentoFiscal.fornecedor\" type=\"text\"></ion-input>\n        </div>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"this.documentoFiscal?.itens\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label>Situação do Item</ion-label>\n          <div class=\"cor-bar-label\">\n            <span\n              class=\"cor-bar\"\n              *ngIf=\"corSelecionada !== 'todas'\"\n              [ngStyle]=\"{'background': corSelecionada}\"\n            ></span>\n            <span\n              class=\"cor-bar todas\"\n              *ngIf=\"corSelecionada === 'todas'\"\n            ></span>\n          </div>\n          <ion-select [(ngModel)]=\"corSelecionada\">\n            <ion-select-option value=\"todas\">Todas</ion-select-option>\n            <ion-select-option value=\"#EF9A9A\">Sem Vinculo</ion-select-option>\n            <ion-select-option value=\"#FFCC80\" [ngStyle]=\"{'font-color': '#FFCC80'}\">Vinculo Diferente</ion-select-option>\n            <ion-select-option value=\"#C5E1A5\">Vinculada</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row [style]=\"'background-color:'+item.cor\" class=\"borda\" *ngFor=\"let item of itensFiltrados\">\n      <ion-col sizeMd=\"1\" sizeXs=\"2\">\n\n        <div class=\"ion-no-padding custom-input2 \">\n          <ion-label class=\"floating-label\">Item</ion-label>\n          <p [class.read]=\"true\" readonly=\"true\"  type=\"text\">{{item.notaItem}}</p>\n        </div>\n      </ion-col>\n      <ion-col  sizeMd=\"7\" sizeXs=\"6\">\n        <div  class=\"ion-no-padding custom-input2 \" >\n          <ion-label class=\"floating-label\">Produto</ion-label>\n          <p [class.read]=\"true\" readonly=\"true\" type=\"text\">{{item.notaProduto}}</p>\n        </div>\n      </ion-col>\n\n      <ion-col sizeMd=\"2\" sizeXs=\"2\">\n        <div lines=\"none\" class=\"ion-no-padding custom-input2\">\n          <ion-label class=\"floating-label\">Qt NF</ion-label>\n          <p [class.read]=\"true\" readonly=\"true\" type=\"text\">{{item.notaQuantidade + ' ' + item.notaUnidade}}</p>\n        </div>\n      </ion-col>\n      <ion-col   sizeMd=\"2\"sizeXs=\"2\">\n        <div class=\"ion-no-padding custom-input2\">\n          <ion-label class=\"floating-label\">Qt Pedido</ion-label>\n          <p *ngIf=\"item.pedidoQuantidade\" [class.read]=\"true\" readonly=\"true\" type=\"text\">{{item.pedidoQuantidade + ' ' + item.pedidoUnidade}}</p>\n          <p *ngIf=\"!item.pedidoQuantidade\" [class.read]=\"true\" readonly=\"true\" type=\"text\">   </p>\n\n        </div>\n      </ion-col>\n      <ion-col   sizeMd=\"1\"sizeXs=\"6\">\n        <div class=\"ion-no-padding custom-input2\">\n          <ion-label class=\"floating-label\">Pedido </ion-label>\n          <ion-input class=\"fundo\" (ionBlur)=\"onKeyDown($event, item)\" (keyup.enter)=\"selecaoPedido(item, this.documentoFiscal.cnpj )\"  [(ngModel)]=\"item.notaPedidoNumero\" type=\"number\"></ion-input>\n          <ion-icon class=\"floating-icon\"  slot=\"start\" name=\"search\" (click)=\"selecaoPedido(item, this.documentoFiscal.cnpj)\"></ion-icon>\n\n        </div>\n      </ion-col>\n      <ion-col   sizeMd=\"1\"sizeXs=\"6\">\n        <div class=\"ion-no-padding custom-input2\">\n          <ion-label class=\"floating-label\">Item </ion-label>\n          <ion-input class=\"fundo\" (ionBlur)=\"onKeyDown($event, item)\" (keyup.enter)=\"selecaoPedido(item, this.documentoFiscal.cnpj)\" [(ngModel)]=\"item.notaPedidoItem\" type=\"number\"></ion-input>\n          <ion-icon class=\"floating-icon\"  slot=\"start\" name=\"search\" (click)=\"selecaoPedido(item, this.documentoFiscal.cnpj)\"></ion-icon>\n\n        </div>\n      </ion-col>\n     \n      <ion-col   sizeMd=\"6\"sizeXs=\"11\">\n\n    <div class=\"ion-no-padding custom-input2\">\n      <ion-label class=\"floating-label\">Descrição</ion-label>\n\n      <p class=\"fundo texto \" (click)=\"selecaoProduto(item)\"> {{item.entradaReferencia + ' -  ' + item.entradaDescricao}}    \n\n      </p>\n      \n      <ion-icon class=\"floating-icon\"  slot=\"start\" name=\"search\" ></ion-icon>\n      <ion-icon *ngIf=\"item.notaPedidoItem\" class=\"floating-icon2\" (click)=\"abrirDesenho(item.entradaReferencia)\"  slot=\"start\" name=\"link\" ></ion-icon>\n\n    </div>\n\n\n      </ion-col>\n\n\n      <ion-col   sizeMd=\"2\"sizeXs=\"6\">\n        <div class=\"ion-no-padding custom-input2\">\n          <ion-label class=\"floating-label\">Qt Entrada</ion-label>\n          <ion-input class=\"fundo\" [(ngModel)]=\"item.entradaQuantidade\" type=\"number\" ></ion-input>\n        </div>\n      </ion-col>\n      <ion-col   sizeMd=\"1\"sizeXs=\"6\">\n        <div class=\"ion-no-padding custom-input2\">\n          <ion-label class=\"floating-label\">Unidade</ion-label>\n          <p class=\"fundo\"  type=\"text\">{{item.entradaUnidade}}</p>\n        </div>\n      </ion-col>\n      <ion-col   sizeMd=\"12\"sizeXs=\"12\">\n        <div class=\"ion-no-padding custom-input2\">\n          <ion-label class=\"floating-label\">Observação\n          </ion-label>\n          <ion-input class=\"fundo\" clearInput=\"true\" [(ngModel)]=\"item.observacao\" type=\"text\"></ion-input>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n<ion-button  *ngIf=\"this.documentoFiscal?.itens\" (click)=\"finalizar()\" expand=\"block\" color=\"secondary\"  shape=\"round\">\nFinalizar\n</ion-button>\n  \n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recebimento-compra_recebimento-compra_module_ts.js.map