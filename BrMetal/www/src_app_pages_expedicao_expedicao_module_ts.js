(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_expedicao_expedicao_module_ts"],{

/***/ 7059:
/*!*************************************************************!*\
  !*** ./src/app/pages/expedicao/expedicao-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpedicaoPageRoutingModule: () => (/* binding */ ExpedicaoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _expedicao_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expedicao.page */ 581);




const routes = [{
  path: '',
  component: _expedicao_page__WEBPACK_IMPORTED_MODULE_0__.ExpedicaoPage
}];
let ExpedicaoPageRoutingModule = class ExpedicaoPageRoutingModule {};
ExpedicaoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ExpedicaoPageRoutingModule);


/***/ }),

/***/ 8098:
/*!*****************************************************!*\
  !*** ./src/app/pages/expedicao/expedicao.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpedicaoPageModule: () => (/* binding */ ExpedicaoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _expedicao_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expedicao-routing.module */ 7059);
/* harmony import */ var _expedicao_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expedicao.page */ 581);







let ExpedicaoPageModule = class ExpedicaoPageModule {};
ExpedicaoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _expedicao_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExpedicaoPageRoutingModule],
  declarations: [_expedicao_page__WEBPACK_IMPORTED_MODULE_1__.ExpedicaoPage]
})], ExpedicaoPageModule);


/***/ }),

/***/ 581:
/*!***************************************************!*\
  !*** ./src/app/pages/expedicao/expedicao.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpedicaoPage: () => (/* binding */ ExpedicaoPage)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _expedicao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expedicao.page.html?ngResource */ 9983);
/* harmony import */ var _expedicao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expedicao.page.scss?ngResource */ 9683);
/* harmony import */ var _expedicao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_expedicao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_api_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/app.service */ 8467);









let ExpedicaoPage = class ExpedicaoPage {
  route;
  alert;
  svcApp;
  db;
  router;
  nav;
  inputCodigo;
  inputPedido;
  inputQtEmbalagem;
  codigo;
  idPedido;
  numeroPedido;
  _PAGINA;
  obj;
  obj2;
  keyboard = false;
  inputDireto = true;
  qt = 1;
  qtEmbalagem;
  validacao = false;
  qtItens;
  qtItensExpedidos;
  constructor(route, alert, svcApp, db, router, nav) {
    //    this.numeroPedido = '';
    this.route = route;
    this.alert = alert;
    this.svcApp = svcApp;
    this.db = db;
    this.router = router;
    this.nav = nav;
    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
      console.log(getNav);
      console.log('construiu expedicao');
      if (getNav.extras.state) {
        if (getNav.extras.state.limpaPedido) {
          this.idPedido = '';
          this.numeroPedido = '';
          this.obj = null;
          this.confirmaPedido();
        }
      }
    });
  }
  ngOnInit() {}
  ionViewDidEnter() {
    this.db.persiste('_get', 'Expedicao', 'user').subscribe(ret => {
      if (ret.status) {
        let obj = JSON.parse(ret.object);
        if (obj.id) {
          this.idPedido = obj.id;
          // console.log(this.objetoPersistido);
          this.numeroPedido = obj.numero;
          this.getItens();
        } else {
          this.idPedido = '';
          this.numeroPedido = '';
          this.obj = null;
        }
      }
    }, err => {
      console.log(err.error);
      this.db.escondeProcessando(err.error);
    });
    //console.log(this.db.objetoPersistido);
  }
  getItens() {
    this.db.persiste('_get', 'Expedicao', 'global', this.idPedido).subscribe(ret => {
      if (ret.status) {
        this.obj = JSON.parse(ret.object);
        console.log(this.obj);
      }
    }, err => {
      console.log(err.error);
      this.db.escondeProcessando(err.error);
    });
  }
  confirmaPedido() {
    console.log(this.numeroPedido);
    this.gravaLog('ConfirmaPedido', 'Pedido: ' + this.numeroPedido);
    if (!this.db.isLoading) {
      this._PAGINA = 'PedidoVenda';
      this.svcApp.GetObjeto(this._PAGINA, {
        action: '_getJSON',
        numero: this.numeroPedido,
        token: this.db.getToken()
      }).subscribe(ret => {
        if (ret.status) {
          this.gravaLog('ConfirmaPedido GetObjeto', 'ID Pedido: ' + ret.dadosAuxiliares.id);
          //  console.log(ret.itens.length)
          ret.itens.length;
          this.obj = ret;
          this.idPedido = ret.dadosAuxiliares.id;
          //   console.log(this.obj)
          //  console.log(this.myInput);
          if (+this.idPedido > 0) {
            this.inputCodigo.setFocus();
            this.codigo = '';
          } else this.inputPedido.setFocus();
          if (!this.idPedido) this.idPedido = '';
          let $obj = {
            "id": this.idPedido,
            "numero": this.numeroPedido
          };
          this.gravaLog('ConfirmaPedido GetObjeto 2', 'Antes pesiste');
          console.log($obj);
          this.db.persiste('_set', 'Expedicao', 'user', '', $obj).subscribe(ret => {
            this.gravaLog('ConfirmaPedido GetObjeto 3', 'Depois pesiste');
            if (ret.status) {
              console.log('ok');
              console.log(this.obj);
            }
          }, err => {
            console.log(err.error);
            this.db.escondeProcessando(err.error);
          });
          if (this.idPedido !== '') this.getItens();
        } else {
          this.db.escondeProcessando(ret.error);
        }
      }, err => this.db.escondeProcessando(err.error));
    }
  }
  ValidaItem() {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.db.isLoading && _this.idPedido && _this.idPedido !== '' && _this.codigo && _this.codigo !== '') {
        _this._PAGINA = `PedidoVenda`;
        _this.db.mostraProcessando();
        _this.svcApp.GetObjeto(_this._PAGINA, {
          action: '_validaItem',
          id: _this.idPedido,
          referencia: _this.codigo,
          token: _this.db.getToken()
        }).subscribe(ret => {
          if (ret.status) {
            //  console.log(ret)
            _this.obj2 = ret;
            //  console.log(this.obj2)
            _this.qtEmbalagem = +_this.obj2.embalagemCom;
            _this.qt = 1;
            _this.db.escondeProcessando();
            if (_this.inputDireto) {
              _this.insereItem();
            } else _this.inputQtEmbalagem.setFocus();
          } else {
            _this.alert.create({
              header: 'Atenção',
              message: ret.error,
              buttons: [{
                text: 'Ok',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                  console.log('false');
                  return false;
                }
              }]
            }).then(alertEl => {
              alertEl.present();
              _this.codigo = '';
              _this.inputCodigo.setFocus();
              return alertEl.onDidDismiss();
            });
            _this.db.escondeProcessando();
          }
        }, err => _this.db.escondeProcessando(err.error));
      }
    })();
  }
  gravaLog(modulo, conteudo) {
    /*
    this.svcApp.GravaLog(
      {
        modulo: modulo,
        conteudo: conteudo,
        token: this.db.getToken()
      }
    ).subscribe()
    */
    console.log(modulo, conteudo);
  }
  enterKeyPedido(event) {
    if (!event || !event.key || !(event.key >= 0 && event.key <= 9)) {
      this.gravaLog('enterKeyPedido', 'key: ' + event.key + ' - keycode: ' + event.keyCode + '.');
      //      this.confirmaPedido()
      //      this.gravaLog('enterKeyPedido', 'depois do confirma - key: ' + event.key + ' - keycode: ' + event.keyCode + '.')
    }
  }
  upKey(ele) {
    //    this.inputCodigo.setFocus()
    console.log(ele.value);
    //    let event: = Event;
    //    console.log(ele.value)
    //    if(this.numeroPedido && (event.keyCode==13 || +event.keyCode == 13 || event.keyCode=="13")) {
    //      this.gravaLog('upKeyPedido', 'antes do confirma pedido - key: ' + event.key + ' - keycode: ' + event.keyCode + '.')
    //      this.confirmaPedido()
    //      this.gravaLog('upKeyPedido', 'depois do confirma - key: ' + event.key + ' - keycode: ' + event.keyCode + '.')
    //    }
    //    this.gravaLog('upKey', 'key:' + event.key + '- keycode:' + event.keyCode)
  }
  enterKeyProduto(event) {
    if (!(event.key >= 0 && event.key <= 9)) {
      this.gravaLog('keyProduto', 'key:' + event.key + '- keycode:' + event);
      this.ValidaItem();
      // this.insereItem()
    }
  }
  enterKeyQt(event) {
    if (!(event.key >= 0 && event.key <= 9)) {
      this.inputQtEmbalagem.setFocus(); // this.insereItem()
    }
  }
  enterKeyQtEmabalagem(event) {
    if (!(event.key >= 0 && event.key <= 9)) {
      this.insereItem();
    }
  }
  achaItem() {
    return this.obj.itens.findIndex(item => item.referencia == this.codigo || item.codigoBarras == this.codigo || item.codigoBarrasCaixa == this.codigo);
  }
  insereItem() {
    if (this.codigo && this.codigo != '' && this.qtEmbalagem > 0 && this.qt > 0) {
      console.log('xxxx');
      if (!this.obj.itens[this.achaItem()]['itensLidos']) this.obj.itens[this.achaItem()]['itensLidos'] = [];
      this.obj.itens[this.achaItem()]['itensLidos'].push([this.qt, this.qtEmbalagem]);
      console.log(this.obj.itens);
      this.codigo = '';
      this.qt = 1;
      this.qtEmbalagem = 0;
      this.inputCodigo.setFocus();
      this.persiteItens();
    }
  }
  persiteItens() {
    this.db.persiste('_set', 'Expedicao', 'global', this.idPedido, this.obj).subscribe(ret => {
      if (ret.status) {
        console.log('ok');
        {
          console.log(this.obj);
        }
      }
    }, err => {
      console.log(err.error);
      this.db.escondeProcessando(err.error);
    });
  }
  calculaTotalArray(array) {
    let total = 0;
    if (!array) return 0;
    // console.log(array);
    array.forEach(element => {
      total += element[0] * element[1];
    });
    return total;
  }
  calculaVolumeArray(array) {
    let total = 0;
    if (!array) return 0;
    // console.log(array);
    array.forEach(element => {
      total += +element[0];
    });
    return total;
  }
  setaCor(qt, qtlido) {
    if (qtlido == 0) return 'naoSeparado';
    if (qt == qtlido) return 'completa';
    if (qt > qtlido) return 'parcial';
    if (qt < qtlido) return 'superou';
  }
  validaSeparacao() {
    this.validacao = true;
    this.qtItens = 0;
    this.obj.itens.forEach(item => {
      if (item.quantidade > (item.itensLidos ? this.calculaTotalArray(item.itensLidos) : 0)) {
        this.validacao = false;
      }
    });
  }
  finalizar() {
    var _this2 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.validaSeparacao();
      let confirm;
      if (!_this2.validacao) {
        confirm = yield _this2.db.presentAlertConfirm('Atenção!! ', 'Voce deseja mesmo finalizar com a separacao incompleta');
      }
      if (confirm?.role === 'confirm' || _this2.validacao) {
        let qtItens = 0;
        let qtItensExpedidos = 0;
        let pesoLiquidoTotal = 0;
        let pesoBrutoTotal = 0;
        let volume = 0;
        _this2.obj.itens.forEach(item => {
          qtItens += +item.quantidade;
          qtItensExpedidos += _this2.calculaTotalArray(item.itensLidos);
          pesoLiquidoTotal += +item.pesoLiquido;
          pesoBrutoTotal += +item.pesoBruto;
          volume += _this2.calculaVolumeArray(item.itensLidos);
        });
        _this2.router.navigate(['/finaliza-expedicao'], {
          state: {
            pesoLiq: pesoLiquidoTotal.toFixed(3),
            pesoBruto: pesoBrutoTotal.toFixed(3),
            pedido: _this2.numeroPedido,
            itensPedido: qtItens,
            itensExpedidos: qtItensExpedidos,
            volumes: volume,
            json: JSON.stringify(_this2.obj)
          }
        });
        console.log(_this2.obj);
      } else {
        console.log('nao');
      }
    })();
  }
  remove(codigo, indice) {
    this.obj.itens[codigo].itensLidos.splice(indice, 1);
    this.persiteItens();
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
  }, {
    type: src_app_api_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService
  }, {
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
  }];
  static propDecorators = {
    inputCodigo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: ['inputcodigo']
    }],
    inputPedido: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: ['inputPedido']
    }],
    inputQtEmbalagem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: ['inputQtEmbalagem']
    }]
  };
};
ExpedicaoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-expedicao',
  template: _expedicao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_expedicao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ExpedicaoPage);


/***/ }),

/***/ 9683:
/*!****************************************************************!*\
  !*** ./src/app/pages/expedicao/expedicao.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.superou {
  background-color: #EF9A9A;
  color: white !important;
  border-style: solid;
  border: 1px solid white;
  border-collapse: collapse;
}

.completa {
  background-color: #A5D6A7;
  color: white !important;
  border-style: solid;
  border: 1px solid white;
}

.parcial {
  background-color: #FFF59D;
  color: black !important;
  border-style: solid;
  border: 1px solid white;
}

.naoSeparado {
  background-color: #EEEEEE;
  color: black !important;
  border-style: solid;
  border: 1px solid white;
}

ion-col {
  font-size: small;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/expedicao/expedicao.page.scss"],"names":[],"mappings":"AAEA;EACI,yBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;AADJ;;AAIA;EACI,yBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;AADJ;;AAIA;EACI,yBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;AADJ;;AAIA;EACI,yBAAA;EACA,uBAAA;EAEF,mBAAA;EACA,uBAAA;AAFF;;AAMA;EACI,gBAAA;AAHJ","sourcesContent":["\n\n.superou {\n    background-color: #EF9A9A;\n    color: white !important;\n    border-style: solid;\n    border: 1px solid white;\n    border-collapse: collapse;\n}\n\n.completa {\n    background-color:#A5D6A7;\n    color: white !important;\n    border-style: solid;\n    border: 1px solid white\n}\n\n.parcial {\n    background-color: #FFF59D;\n    color: black !important;\n    border-style: solid;\n    border: 1px solid white\n}\n\n.naoSeparado {\n    background-color:#EEEEEE;\n    color: black !important;\n  //  border: 1px solid black;\n  border-style: solid;\n  border: 1px solid white\n\n }\n\nion-col{\n    font-size: small;\n   \n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9983:
/*!****************************************************************!*\
  !*** ./src/app/pages/expedicao/expedicao.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Expedicao</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item *ngIf=\"this.obj?.dadosAuxiliares.numero\" >\n    <ion-label>\n      Pedido: {{this.obj?.dadosAuxiliares.numero}} \n    </ion-label>\n    <ion-label>\n     Cliente: {{this.obj?.cliente.nomeCadastro}}\n    </ion-label>\n    <ion-label>\n     Itens: {{this.obj?.itens.length}}\n\n    </ion-label>\n\n  </ion-item>\n  <form>\n\n    \n      <ion-item no-lines class=\"form-group\">\n        <ion-button slot=\"end\" *ngIf=\"this.keyboard\" color=\"success\" (click)=\"this.keyboard = !this.keyboard\"><ion-icon name=\"keypad\"></ion-icon>\n        </ion-button> \n        <ion-button slot=\"end\"  *ngIf=\"!this.keyboard\" color=\"warning\" (click)=\"this.keyboard = !this.keyboard\"><ion-icon name=\"keypad\"></ion-icon>\n        </ion-button> \n\n     \n        <ion-label position=\"floating\" class=\"ion-text-wrap\">\n          Pedido\n        </ion-label>\n        <ion-input #inputPedido *ngIf=\"!this.keyboard\" debounce=\"100\" (ionChange)=\"this.confirmaPedido()\" class=\"form-control\" name=\"numeroPedido\" [(ngModel)]=\"numeroPedido\"\n          type=\"none\" [inputmode]=\"this.keyboard?'decimal':'none'\"  clearInput=\"true\">\n        </ion-input>\n        <ion-input #inputPedido *ngIf=\"this.keyboard\"  (ionBlur)=\"this.confirmaPedido()\" class=\"form-control\" name=\"numeroPedido\" [(ngModel)]=\"numeroPedido\"\n        type=\"none\" [inputmode]=\"this.keyboard?'decimal':'none'\" clearInput=\"true\">\n      </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-button slot=\"end\" *ngIf=\"this.inputDireto\" color=\"success\" (click)=\"this.inputDireto = !this.inputDireto\"><ion-icon name=\"play\"></ion-icon>\n        </ion-button> \n        <ion-button slot=\"end\"  *ngIf=\"!this.inputDireto\" color=\"warning\" (click)=\"this.inputDireto = !this.inputDireto\"><ion-icon name=\"pause\"></ion-icon>\n        </ion-button> \n        <ion-label position=\"floating\" class=\"ion-text-wrap\">\n          Item\n        </ion-label>\n        <ion-input #inputcodigo *ngIf=\"!this.keyboard\" debounce=\"100\" (ionChange)=\"this.ValidaItem();this.qtEmbalagem = 0\"   class=\"form-control\" name=\"codigo\"\n        [(ngModel)]=\"codigo\" type=\"none\" [inputmode]=\"this.keyboard?'decimal':'none'\" clearInput=\"true\">\n      </ion-input>\n        <ion-input #inputcodigo *ngIf=\"this.keyboard\" (ionChange)=\"this.qtEmbalagem = 0\" (keypress)=\"this.enterKeyProduto($event)\" (ionBlur)=\"this.ValidaItem()\"  class=\"form-control\" name=\"codigo\"\n          [(ngModel)]=\"codigo\" type=\"none\" [inputmode]=\"this.keyboard?'decimal':'none'\" clearInput=\"true\">\n        </ion-input>\n     \n        </ion-item>\n      <ion-item>\n        <ion-label>\n          Qtd\n        </ion-label>\n        <ion-input #inputqt class=\"form-control\" name=\"qt\"  inputmode=\"decimal\" (keypress)=\"this.enterKeyQt($event)\" [(ngModel)]=\"qt\" type=\"nome\">\n        </ion-input>\n        <ion-label>\n          Qtd Emb\n        </ion-label>\n        <ion-button *ngIf=\"this.qtEmbalagem > 0\" slot=\"end\" (click)=\"this.insereItem()\"><ion-icon name=\"checkmark\"></ion-icon></ion-button>\n        <ion-input #inputQtEmbalagem  inputmode=\"decimal\" class=\"form-control\"\n          name=\"qtEmbalagem\" [(ngModel)]=\"qtEmbalagem\" type=\"none\">\n        </ion-input>\n      </ion-item>\n  </form>\n  <ion-grid *ngIf=\"this.obj\"   class=\"naoSeparado\">\n  <ion-row style=\"font-weight: bold;\">\n    <ion-col>\n      Item\n    </ion-col>\n    <ion-col>\n      Qtd\n    </ion-col>\n    <ion-col>\n     Unidade\n    </ion-col>\n    <ion-col>\n      Referencia\n    </ion-col>\n    <ion-col>\nQtd Lida    </ion-col>\n  </ion-row>\n\n\n  <ion-row>\n    <ion-col  >\n    Descriçao\n  </ion-col>\n  </ion-row>\n</ion-grid>\n\n  <ion-grid [class]=\"this.setaCor(item.quantidade,item.itensLidos?this.calculaTotalArray(item.itensLidos):0)\"\n    *ngFor=\"let item of this.obj?.itens; let i = index \">\n    <ion-row   >\n      <ion-col >\n        {{i + 1}}\n      </ion-col>\n      <ion-col>\n        {{+item.quantidade}}\n      </ion-col>\n      <ion-col>\n        {{item.unidade}}\n      </ion-col>\n      <ion-col>\n        {{item.referencia}}\n      </ion-col>\n      <ion-col>\n        {{item.itensLidos?this.calculaTotalArray(item.itensLidos):0}}\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row >\n      <ion-col style=\"font-weight: bold;\">\n      {{item.descricao}}\n    </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-chip (click)=\"remove(i,f)\" *ngFor=\"let item of item.itensLidos; let f = index\" >{{item[0] + \" x \" + item[1]}}</ion-chip>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-item>\n    <ion-buttons>\n\n\n    </ion-buttons>\n  </ion-item>\n</ion-content>\n<ion-footer class=\"ion-text-center\">\n\n\n<ion-button (click)=\"this.finalizar()\">\n  <ion-icon slot=\"icon-only\" name=\"checkmark-done\"></ion-icon>\n</ion-button>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_expedicao_expedicao_module_ts.js.map