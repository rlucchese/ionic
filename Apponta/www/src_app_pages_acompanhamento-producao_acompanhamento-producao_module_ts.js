(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_acompanhamento-producao_acompanhamento-producao_module_ts"],{

/***/ 5251:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento-producao/acompanhamento-producao-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcompanhamentoProducaoPageRoutingModule: () => (/* binding */ AcompanhamentoProducaoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _acompanhamento_producao_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acompanhamento-producao.page */ 4421);




const routes = [{
  path: '',
  component: _acompanhamento_producao_page__WEBPACK_IMPORTED_MODULE_0__.AcompanhamentoProducaoPage
}];
let AcompanhamentoProducaoPageRoutingModule = class AcompanhamentoProducaoPageRoutingModule {};
AcompanhamentoProducaoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AcompanhamentoProducaoPageRoutingModule);


/***/ }),

/***/ 3682:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/acompanhamento-producao/acompanhamento-producao.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcompanhamentoProducaoPageModule: () => (/* binding */ AcompanhamentoProducaoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _acompanhamento_producao_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acompanhamento-producao-routing.module */ 5251);
/* harmony import */ var _acompanhamento_producao_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acompanhamento-producao.page */ 4421);







let AcompanhamentoProducaoPageModule = class AcompanhamentoProducaoPageModule {};
AcompanhamentoProducaoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _acompanhamento_producao_routing_module__WEBPACK_IMPORTED_MODULE_0__.AcompanhamentoProducaoPageRoutingModule],
  declarations: [_acompanhamento_producao_page__WEBPACK_IMPORTED_MODULE_1__.AcompanhamentoProducaoPage]
})], AcompanhamentoProducaoPageModule);


/***/ }),

/***/ 4421:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/acompanhamento-producao/acompanhamento-producao.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcompanhamentoProducaoPage: () => (/* binding */ AcompanhamentoProducaoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _acompanhamento_producao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acompanhamento-producao.page.html?ngResource */ 6023);
/* harmony import */ var _acompanhamento_producao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acompanhamento-producao.page.scss?ngResource */ 3683);
/* harmony import */ var _acompanhamento_producao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_acompanhamento_producao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/producao.service */ 4561);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);






let AcompanhamentoProducaoPage = class AcompanhamentoProducaoPage {
  db;
  prdSvc;
  carregando = false;
  processos;
  ordens;
  ordensOrg;
  pedidosEmAberto;
  geradoEm;
  selBaixar = [];
  selReverter = [];
  obsAlterada = [];
  idStatus = 'pedidosEmProducao';
  strBusca = '';
  idAcompanhamento = "1";
  constructor(db, prdSvc) {
    this.db = db;
    this.prdSvc = prdSvc;
  }
  ngOnInit() {
    this.carrega();
  }
  atualiza(gerar) {
    this.carrega(gerar);
  }
  busca() {
    if (this.idStatus == 'todas') this.ordens = this.ordensOrg;else if (this.idStatus == 'pedidosEmProducao') {
      this.ordens = this.ordensOrg.filter(ord => {
        return !ord.finalizada || this.pedidosEmAberto.includes(ord.pedido);
      });
    } else if (this.idStatus == 'pedidosFinalizados') {
      this.ordens = this.ordensOrg.filter(ord => {
        return ord.finalizada && !this.pedidosEmAberto.includes(ord.pedido);
      });
    } else this.ordens = this.ordensOrg.filter(ord => {
      return ord.finalizada && this.idStatus == 'finalizadas' || !ord.finalizada && this.idStatus == 'emProducao';
    });
    if (this.strBusca !== '') {
      this.ordens = this.ordens.filter(of => {
        return this.db.compara([of.numero, of.pedido, of.cliente], this.strBusca);
      });
    }
    console.log(this.pedidosEmAberto);
    console.log(this.ordens);
  }
  carrega(gerar = false) {
    this.carregando = true;
    if (this.db.autenticado()) {
      //      if (!this.db.clientes || forcaCarga) {
      this.selBaixar = [];
      this.selReverter = [];
      this.obsAlterada = [];
      if (gerar) this.db.mostraProcessando('Gerando acompanhamento');else this.db.mostraProcessando();
      this.prdSvc.AcompanhamentoOrdens({
        token: this.db.token,
        idAcompanhamento: +this.idAcompanhamento,
        gerar: gerar
      }).subscribe(ret => {
        if (ret.status) {
          this.geradoEm = ret.geradoEm;
          this.processos = ret.processos;
          this.pedidosEmAberto = ret.pedidosEmAberto;
          //            console.log(ret.pedidosEmAberto)
          this.ordens = ret.ordens;
          this.ordensOrg = ret.ordens;
          this.ordensOrg.forEach(of => {
            of.observacaoAnt = of.observacao;
            if (!of.revisarEstrutura) of.revisarEstrutura = false;
            of.revisarEstruturaAnt = of.revisarEstrutura;
            if (!of.ordemOrigem) of.ordemOrigem = "";
            of.ordemOrigemAnt = of.ordemOrigem;
            if (!of.cor) of.cor = "white";
          });
          console.log(this.ordens);
          //            this.obsAlterada = []
          //            console.log(this.selBaixar?.length,this.selReverter?.length,this.obsAlterada.length)
          //            console.log(this.selBaixar,this.selReverter,this.obsAlterada)
          this.busca();
          //            const select = document.querySelector('.custom-options');
          //            select.interfaceOptions = {
          //               cssClass: 'my-custom-interface'
          //            };
        }
        this.db.escondeProcessando();
        this.carregando = false;
      }, err => {
        this.db.escondeProcessando(err.error);
        this.carregando = false;
      });
    }
  }
  alteraCor(ev, ord) {
    this.prdSvc.AlteraCorOrdemFabricacao({
      token: this.db.token,
      idOrdem: ord.id,
      cor: ev.detail.value
    }).subscribe(ret => {
      if (ret.status) {
        ord.cor = ev.detail.value;
      }
    });
  }
  getQuantidade(of, proc) {
    //    let v = 'processo_' + proc.id;
    //    if (of.hasOwnProperty(v)) {
    //      console.log(of[v]);
    //      ret = of[v];
    //    }   
    //    console.log(of.$v);
    //    if(of[v] >= 0) return ''
    //    else return 'X';
    //    console.log(of.processos[proc.id])
    if (!of.processos[proc.id]) return "-";else if (of.processos[proc.id]?.quantidade > 0) return of.processos[proc.id].quantidade;else return "X";
  }
  alteraOF(ord, check) {
    console.log('entrou');
    if (!this.carregando) {
      //    let obs: OrdemAcompanhamento[];
      //    obs = this.ordens.filter((ordem) => {if(ordem.id == ord.id) return ordem});
      if (check) ord.revisarEstrutura = !ord.revisarEstrutura;
      //    console.log(ord.id);
      this.obsAlterada = this.obsAlterada.filter(of => {
        return of.idOrdem !== ord.id;
      });
      if (ord.observacaoAnt !== ord.observacao || ord.revisarEstruturaAnt != ord.revisarEstrutura || ord.ordemOrigemAnt !== ord.ordemOrigem) {
        this.obsAlterada.push({
          idOrdem: ord.id,
          observacaoAcompanhamento: ord.observacao,
          revisarEstrutura: ord.revisarEstrutura,
          ordemOrigem: ord.ordemOrigem
        });
      }
    }
  }
  toogleBaixar(ord, idProcesso) {
    if (!ord.processos[idProcesso].checked) {
      for (let i = 0; i <= idProcesso; i++) {
        if (ord.processos[i] && !ord.processos[i].checked) {
          ord.processos[i].checked = true;
          if (ord.processos[i].quantidade > 0) {
            let procAlt = {
              idOrdem: ord.id,
              idOperacao: ord.processos[i].idOperacao,
              checked: true
            };
            this.selBaixar.push(procAlt);
          } else this.selReverter = this.selReverter.filter(pa => {
            return pa.idOrdem != ord.id || pa.idOperacao != ord.processos[i].idOperacao;
          });
        }
      }
    } else {
      for (let i = idProcesso; i < 30; i++) {
        if (ord.processos[i] && ord.processos[i].checked) {
          ord.processos[i].checked = false;
          if (ord.processos[i].quantidade > 0) {
            this.selBaixar = this.selBaixar.filter(pa => {
              return pa.idOrdem != ord.id || pa.idOperacao != ord.processos[i].idOperacao;
            });
          } else {
            let procAlt = {
              idOrdem: ord.id,
              idOperacao: ord.processos[i].idOperacao,
              checked: false
            };
            this.selReverter.push(procAlt);
          }
        }
      }
    }
    if (ord.processos[ord.processos.length - 1]?.checked && (!ord.pedido || ord.nota)) ord.finalizada = true;else ord.finalizada = false;
  }
  salvarObservacoes(esconde = false) {
    if (this.obsAlterada.length > 0) {
      let paramAlt;
      paramAlt = {
        token: this.db.token,
        ordens: this.obsAlterada
      };
      this.db.mostraProcessando();
      this.prdSvc.AlteraOrdemFabricacao(paramAlt).subscribe(ret => {
        console.log(ret);
        this.db.escondeProcessando();
        if (ret.status) {
          this.carrega(false);
        }
      }, err => {
        console.log(err);
        this.db.escondeProcessando(err.error);
      });
    } else {
      if (esconde) {
        this.db.escondeProcessando();
        this.carrega(false);
      }
    }
  }
  salvar() {
    this.db.mostraProcessando();
    if (this.selBaixar.length + this.selReverter.length == 0) this.salvarObservacoes(true);else {
      let ops = [];
      for (let i = 0; i < this.selBaixar.length; i++) {
        ops.push(this.selBaixar[i]);
      }
      for (let i = 0; i < this.selReverter.length; i++) {
        ops.push(this.selReverter[i]);
      }
      let param = {
        token: this.db.token,
        idAcompanhamento: 1,
        operacoes: ops
      };
      console.log(param);
      this.prdSvc.AlteraBaixaOperacoes(param).subscribe(ret => {
        console.log(ret);
        //        this.db.escondeProcessando();
        //        if (ret.status) {
        this.salvarObservacoes(true);
        //        }
      }, err => {
        console.log(err);
        this.db.escondeProcessando(err.error);
      });
    }
  }
  atrasado(ord) {
    return !ord?.finalizada && ord?.entregaPedido < this.geradoEm;
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService
  }, {
    type: src_app_api_producao_service__WEBPACK_IMPORTED_MODULE_2__.ProducaoService
  }];
};
AcompanhamentoProducaoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-acompanhamento-producao',
  template: _acompanhamento_producao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_acompanhamento_producao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AcompanhamentoProducaoPage);


/***/ }),

/***/ 3683:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento-producao/acompanhamento-producao.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --pcp-color-finalizada: #C8E6C9;
}

.divTable {
  height: 98%;
  width: 98%;
}

table {
  height: 100%;
}

/*
table thead tr {
    display: block;
    background-color: navy;
    color: white;
    height: 9em;
//    vertical-align: middle;
    text-align: center;


}
table th, table td {
//    width: 80px;
}

table tbody {
    display: block;
    height: 100%;
    width: 100%;
    overflow: auto;
}

th {
    text-align: center;
}
td {
    text-align: center;
    white-space: pre;
}
*/
table tbody {
  display: block;
  height: 100%;
  width: 100%;
  overflow: auto;
}

td {
  border: 1px solid lightgray;
}

.colClienteTit {
  width: 300px;
  display: table-cell;
}

.colCliente {
  display: block;
  width: 300px;
  height: 40px;
  overflow-y: hidden;
  word-wrap: break-word;
  align-items: center;
  line-height: 40px;
}

.colGen {
  width: 80px;
  padding: 2px;
  display: table-cell;
}

.colGen2 {
  width: 80px;
  padding: 2px;
  display: block;
}

.colObs {
  display: block;
  padding: 2px;
  width: 300px;
}

.titulo {
  display: block;
  background-color: var(--ion-color-primary);
  color: white;
  height: 9em;
  text-align: center;
}
.titulo th {
  border: 1px solid white;
  text-align: center;
  height: 9em;
}

.linhaOrdem {
  height: 40px;
}

.linhaOrdemFinalizada {
  background-color: #C8E6C9;
}

.colProcesso {
  padding: 0px;
  vertical-align: center;
  width: 80px;
  height: 100%;
}

.op {
  height: 100%;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 80px;
  border-radius: 24px;
}

.opEmAberto {
  cursor: pointer;
}

.opBaixada {
  cursor: pointer;
  background-color: #C8E6C9;
}
.opBaixada ion-checkbox {
  --background-checked: white;
  --checkmark-color: black;
  --border-color-checked: var(--ion-color-success);
}

.atrasado {
  background-color: var(--ion-color-danger);
}

.tituloProcesso div {
  position: absolute;
}

.tituloProcesso {
  transform: rotate(-90deg);
  font-size: 80%;
  width: 80px;
  word-wrap: normal;
}

.tituloObservacao {
  transform: rotate(-90deg);
  font-size: 80%;
  width: 300px;
  word-wrap: normal;
}

.tblAcompOF {
  height: 100%;
  border: 1px solid black;
  text-align: center;
  width: 100%;
}

.custom-options .brown-option {
  --color: #5e3e2c;
  --color-hover: #362419;
}

.custom-options .black-option {
  --color: black;
  --color-hover: grey;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/acompanhamento-producao/acompanhamento-producao.page.scss"],"names":[],"mappings":"AAAA;EACI,+BAAA;AACJ;;AAEA;EACI,WAAA;EACA,UAAA;AACJ;;AACA;EACI,YAAA;AAEJ;;AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CAAA;AAqCA;EACI,cAAA;EACA,YAAA;EACA,WAAA;EACA,cAAA;AAJJ;;AAOA;EACI,2BAAA;AAJJ;;AAOA;EACI,YAAA;EACA,mBAAA;AAJJ;;AAMA;EACI,cAAA;EACA,YAAA;EAEA,YAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;EACA,iBAAA;AAJJ;;AAQA;EACI,WAAA;EACA,YAAA;EACA,mBAAA;AALJ;;AAQA;EACI,WAAA;EACA,YAAA;EACA,cAAA;AALJ;;AAQA;EACI,cAAA;EACA,YAAA;EACA,YAAA;AALJ;;AASA;EACI,cAAA;EACA,0CAAA;EACA,YAAA;EACA,WAAA;EAEA,kBAAA;AAPJ;AAWI;EACI,uBAAA;EACA,kBAAA;EACA,WAAA;AATR;;AAeA;EACI,YAAA;AAZJ;;AAeA;EACI,yBAAA;AAZJ;;AAkBA;EACI,YAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;AAfJ;;AAmBA;EACI,YAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;AAhBJ;;AAmBA;EACI,eAAA;AAhBJ;;AAoBA;EACI,eAAA;EACA,yBAAA;AAjBJ;AAmBI;EACI,2BAAA;EACA,wBAAA;EACA,gDAAA;AAjBR;;AAqBA;EACI,yCAAA;AAlBJ;;AAsBA;EACI,kBAAA;AAnBJ;;AAqBA;EACI,yBAAA;EACA,cAAA;EAGA,WAAA;EACA,iBAAA;AApBJ;;AAuBA;EACI,yBAAA;EACA,cAAA;EAGA,YAAA;EACA,iBAAA;AAtBJ;;AA4BA;EACI,YAAA;EACA,uBAAA;EACA,kBAAA;EAEA,WAAA;AA1BJ;;AA6BA;EACQ,gBAAA;EACA,sBAAA;AA1BR;;AA4BA;EACQ,cAAA;EACA,mBAAA;AAzBR","sourcesContent":[":root {\r\n    --pcp-color-finalizada: #C8E6C9;\r\n}\r\n\r\n.divTable {\r\n    height: 98%;\r\n    width: 98%;\r\n}\r\ntable {\r\n    height: 100%;\r\n}\r\n/*\r\ntable thead tr {\r\n    display: block;\r\n    background-color: navy;\r\n    color: white;\r\n    height: 9em;\r\n//    vertical-align: middle;\r\n    text-align: center;\r\n\r\n\r\n}\r\ntable th, table td {\r\n//    width: 80px;\r\n}\r\n\r\ntable tbody {\r\n    display: block;\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\nth {\r\n    text-align: center;\r\n}\r\ntd {\r\n    text-align: center;\r\n    white-space: pre;\r\n}\r\n*/\r\n//td {\r\n//    border: 1px solid lightgray;\r\n//    width: 100%;\r\n//    padding: 2px;\r\n//    width: 80px;\r\n//}\r\n\r\ntable tbody {\r\n    display: block;\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\ntd {\r\n    border: 1px solid lightgray;\r\n};\r\n\r\n.colClienteTit {\r\n    width: 300px;\r\n    display: table-cell;\r\n}\r\n.colCliente {\r\n    display: block;\r\n    width: 300px;\r\n    //background-color: yellow;\r\n    height: 40px;\r\n    overflow-y: hidden;\r\n    word-wrap: break-word;\r\n    align-items: center;\r\n    line-height: 40px;\r\n}\r\n\r\n\r\n.colGen {\r\n    width: 80px;\r\n    padding: 2px;\r\n    display: table-cell;\r\n}\r\n\r\n.colGen2 {\r\n    width: 80px;\r\n    padding: 2px;\r\n    display: block;\r\n}\r\n\r\n.colObs {\r\n    display: block;\r\n    padding: 2px;\r\n    width: 300px;\r\n//    height: 40px;\r\n}\r\n\r\n.titulo {\r\n    display: block;\r\n    background-color: var(--ion-color-primary);\r\n    color: white;\r\n    height: 9em;\r\n//    vertical-align: middle;\r\n    text-align: center;\r\n//    div {\r\n//        height: 100%;\r\n//    }\r\n    th {\r\n        border: 1px solid white;\r\n        text-align: center;\r\n        height: 9em;\r\n    }\r\n}\r\n\r\n\r\n\r\n.linhaOrdem {\r\n    height: 40px;\r\n}\r\n\r\n.linhaOrdemFinalizada {\r\n    background-color:#C8E6C9;\r\n//    td {\r\n//        border: 1px solid black;\r\n//    }\r\n}\r\n\r\n.colProcesso {\r\n    padding: 0px;\r\n    vertical-align: center;\r\n    width: 80px;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.op {\r\n    height: 100%;\r\n    padding: 0px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 42px;\r\n    width: 80px;\r\n    border-radius: 24px;\r\n}\r\n\r\n.opEmAberto {\r\n    cursor: pointer;\r\n    //background-color: white;\r\n}\r\n\r\n.opBaixada {\r\n    cursor: pointer;\r\n    background-color: #C8E6C9;\r\n//    background-color: var(--ion-color-success);\r\n    ion-checkbox {\r\n        --background-checked: white;\r\n        --checkmark-color: black;\r\n        --border-color-checked: var(--ion-color-success);\r\n    }\r\n}\r\n\r\n.atrasado {\r\n    background-color: var(--ion-color-danger);\r\n}\r\n\r\n\r\n.tituloProcesso div {\r\n    position: absolute;\r\n}\r\n.tituloProcesso {\r\n    transform: rotate(-90deg);\r\n    font-size: 80%;\r\n//    width: 500px;\r\n//    padding-bottom: 20px;\r\n    width: 80px;\r\n    word-wrap: normal;\r\n}\r\n\r\n.tituloObservacao {\r\n    transform: rotate(-90deg);\r\n    font-size: 80%;\r\n//    width: 500px;\r\n//    padding-bottom: 20px;\r\n    width: 300px;\r\n    word-wrap: normal;\r\n}\r\n\r\n\r\n\r\n\r\n.tblAcompOF {\r\n    height: 100%; \r\n    border: 1px solid black;\r\n    text-align: center;\r\n//    margin-top: 10px;\r\n    width: 100%;\r\n}\r\n\r\n.custom-options .brown-option {\r\n        --color: #5e3e2c;\r\n        --color-hover: #362419;\r\n}\r\n.custom-options .black-option {\r\n        --color: black;\r\n        --color-hover: grey;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6023:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento-producao/acompanhamento-producao.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"secondary\">\n      <ion-chip>\n        <ion-select class=\"selStatus\" [(ngModel)]=\"idAcompanhamento\" okText=\"Ok\" cancelText=\"Cancelar\"\n          (ionChange)=\"carrega()\">\n          <ion-select-option value=\"1\">Serra Circular</ion-select-option>\n          <ion-select-option value=\"3\">Serras Mercado Externo</ion-select-option>\n          <ion-select-option value=\"4\">Repastilhamento</ion-select-option>\n          <ion-select-option value=\"2\">Corte Laser</ion-select-option>\n        </ion-select>\n      </ion-chip>\n      <ion-chip>\n        <ion-select class=\"selStatus\" [(ngModel)]=\"idStatus\" okText=\"Ok\" cancelText=\"Cancelar\" (ionChange)=\"busca()\">\n          <ion-select-option value=\"pedidosEmProducao\">Pedidos em produção</ion-select-option>\n          <ion-select-option value=\"pedidosFinalizados\">Pedidos finalizados</ion-select-option>\n          <ion-select-option value=\"emProducao\">OFs em produção</ion-select-option>\n          <ion-select-option value=\"finalizadas\">OFs finalizadas</ion-select-option>\n          <ion-select-option value=\"todas\">Todas</ion-select-option>\n        </ion-select>\n      </ion-chip>\n      <ion-button (click)=\"atualiza(true)\">\n        <ion-icon slot=\"icon-only\" name=\"time-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"atualiza(false)\">\n        <ion-icon slot=\"icon-only\" name=\"refresh-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Acompanhamento de Produção ({{geradoEm | date: 'H:mm dd/MM'}})</ion-title>\n  </ion-toolbar>\n  <ion-item class=\"itemSemBorda\">\n    <ion-searchbar style=\"border-top: 5px\" placeholder=\"Buscar ordem\" [(ngModel)]=\"strBusca\" (ionChange)=\"busca()\">\n    </ion-searchbar>\n    <ion-badge *ngIf=\"this.ordens\" slot=\"end\">\n      {{this.ordens.length}}\n    </ion-badge>\n  </ion-item>\n  <!--  <ion-label>\n    selBaixar: {{ selBaixar.length }} <br>\n    selReverter: {{ selReverter.length }} <br>\n    obsAlterada: {{ obsAlterada.length }}\n  </ion-label>\n-->\n</ion-header>\n\n<ion-content scroll-x>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\"\n      *ngIf=\"this.selBaixar?.length > 0 || this.selReverter?.length || this.obsAlterada.length > 0\" (click)=\"salvar()\">\n      <ion-icon name=\"checkmark-outline\"\n        *ngIf=\"this.selBaixar?.length + this.selReverter?.length + this.obsAlterada.length == 1\"></ion-icon>\n      <ion-icon name=\"checkmark-done-outline\"\n        *ngIf=\"this.selBaixar?.length + this.selReverter?.length + this.obsAlterada.length > 1\"></ion-icon>\n      <ion-badge class=\"badgeFab\" color=\"success\">{{this.selBaixar?.length + this.selReverter?.length +\n        this.obsAlterada.length}}</ion-badge>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-item *ngIf=\"!this.ordens || this.ordens.length == 0\">\n    <ion-label>Nenhum item encontrado</ion-label>\n  </ion-item>\n  <div class=\"divTable\" *ngIf=\"this.ordens && this.ordens.length > 0\">\n    <table class=\"tblAcompOF\">\n      <thead>\n        <tr class='titulo'>\n          <th class=\"colClienteTit\">Cliente</th>\n          <th>\n            <div class=\"colGen2\">Nota</div>\n          </th>\n          <th>\n            <div class=\"colGen2\">Pedido</div>\n          </th>\n          <th>\n            <div class=\"colGen2\">OF</div>\n          </th>\n          <th>\n            <div class=\"colGen2\">Tipo</div>\n          </th>\n          <th>\n            <div class=\"colGen2\">OF Org</div>\n          </th>\n          <th>\n            <div class=\"colGen2\">Data</div>\n          </th>\n          <th>\n            <div class=\"colGen2\">Dias Emiss</div>\n          </th>\n          <th>\n            <div class=\"colGen2\">Dias Entrega</div>\n          </th>\n          <th>\n            <div class=\"colGen2\">Entrega</div>\n          </th>\n          <th>\n            <div class=\"colGen2\">Quant.</div>\n          </th>\n          <th *ngFor=\"let proc of processos; let i = index\">\n            <div [class]=\"'tituloProcesso tituloProcesso_' + (i % 2)\">{{ proc.descricao }}</div>\n          </th>\n          <th class=\"tituloProcesso\">Cor</th>\n          <th>\n            <div class=\"tituloProcesso\">Revisar<br>Estrutura</div>\n          </th>\n          <th class=\"tituloObservacao\">\n            Observação\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let ord of ordens\" class='linhaOrdem' [ngClass]=\"{'linhaOrdemFinalizada': ord.finalizada}\"\n          [style.background-color]=\"ord.cor\">\n          <td style='vertical-align: middle;'>\n            <div class=\"colCliente\">{{ord.cliente}}</div>\n          </td>\n          <td>\n            <div class=\"colGen2\">{{ord.nota}}</div>\n          </td>\n          <td>\n            <div class=\"colGen2\">{{ord.pedido}}</div>\n          </td>\n          <td>\n            <div class=\"colGen2\">{{ord.numero}}</div>\n          </td>\n          <td>\n            <div class=\"colGen2\">{{ord.descricaoTipoOF}}</div>\n          </td>\n          <td>\n            <!--            <div class=\"colGen2\">{{ ord?.ordemOrigem }}</div>  -->\n            <ion-input class=\"colGen2\" *ngIf=\"ord.tipo==3\" [(ngModel)]=\"ord.ordemOrigem\"\n              (ionChange)=\"alteraOF(ord,false)\"></ion-input>\n            <div class=\"colGen2\" *ngIf=\"ord.tipo!==3\"></div>\n          </td>\n          <td>\n            <div class=\"colGen2\">{{ord.data | date: 'dd/MM'}}</div>\n          </td>\n          <td>\n            <div class=\"colGen2\">{{ord.duData}}\n            </div>\n          </td>\n          <td>\n            <div class=\"colGen2\">{{ord.duEntregaPedido}}\n            </div>\n          </td>\n          <td [ngClass]=\"{'atrasado':atrasado(ord)}\">\n            <div class=\"colGen2\">{{ord.entregaPedido | date: 'EEE':'':'pt'}}<br />{{ord.entregaPedido | date: 'dd/MM'}}\n            </div>\n          </td>\n          <td>\n            <div class=\"colGen2\">{{ord.quantidade}}</div>\n          </td>\n          <td *ngFor=\"let proc of processos\" class=\"colProcesso\">\n            <div *ngIf=\"ord.processos[proc.id] && ord.processos[proc.id]?.quantidade > 0\"\n              (click)=\"toogleBaixar(ord,proc.id)\" class=\"op opEmAberto\">\n              <ion-checkbox [checked]=\"ord.processos[proc.id]?.checked\"></ion-checkbox>\n            </div>\n            <div *ngIf=\"ord.processos[proc.id] && ord.processos[proc.id]?.quantidade <= 0\"\n              (click)=\"toogleBaixar(ord,proc.id)\" class=\"op opBaixada\">\n              <ion-checkbox [checked]=\"ord.processos[proc.id]?.checked\"></ion-checkbox>\n            </div>\n            <div class=\"op opInexistente\" *ngIf=\"!ord.processos[proc.id]\">&nbsp;</div>\n          </td>\n          <td class=\"colProcesso\">\n            <div class=\"op\">\n              <ion-select class=\"custom-options\" interface=\"popover\" [value]=\"ord.color\"\n                (ionChange)=\"alteraCor($event,ord)\">\n                <ion-select-option value=\"\">Sem cor</ion-select-option>\n                <ion-select-option value=\"#d50000\">Tomate</ion-select-option>\n                <ion-select-option value=\"#e67c73\">Flamingo</ion-select-option>\n                <ion-select-option value=\"#f4511e\">Tangerina</ion-select-option>\n                <ion-select-option value=\"#f6bf26\">Banana</ion-select-option>\n                <ion-select-option value=\"#33b679\">Sálvia</ion-select-option>\n                <ion-select-option value=\"#0b8043\">Manjericão</ion-select-option>\n                <ion-select-option value=\"#039be5\">Pavão</ion-select-option>\n                <ion-select-option value=\"#3f51b5\">Mirtilo</ion-select-option>\n                <ion-select-option value=\"#7986cb\">Lavanda</ion-select-option>\n                <ion-select-option value=\"#8e24aa\">Uva</ion-select-option>\n                <ion-select-option value=\"#616161\">Grafite</ion-select-option>\n              </ion-select>\n            </div>\n          </td>\n          <td class=\"colProcesso\">\n            <div class=\"op\" (click)=\"alteraOF(ord,true)\">\n              <ion-checkbox [checked]=\"ord.revisarEstrutura\"></ion-checkbox>\n              <!--(ionChange)=\"alteraOF(ord)\"-->\n            </div>\n          </td>\n          <td class=\"colObs\">\n            <ion-textarea class=\"inputObs\" [(ngModel)]=\"ord.observacao\" (ionChange)=\"alteraOF(ord,false)\">\n            </ion-textarea>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <!-- <div>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Tanggal</th>\n        <th>Judul Pekerjaan</th>\n        <th>Deskripsi</th>\n      </tr>\n    </thead>\n  \n    <tbody>\n      <tr>\n        <td>1</td>\n        <td>1 May 2017</td>\n        <td>Satu</td>\n        <td>Satu</td>\n      </tr>\n      <tr>\n        <td>2</td>\n        <td>2 May 2017</td>\n        <td>Dua</td>\n        <td>Dua</td>\n      </tr>\n      <tr>\n        <td>3</td>\n        <td>3 May 2017</td>\n        <td>Tiga</td>\n        <td>Tiga</td>\n      </tr>\n      <tr>\n        <td>3</td>\n        <td>3 May 2017</td>\n        <td>Tiga</td>\n        <td>Tiga</td>\n      </tr>\n      <tr>\n        <td>2</td>\n        <td>2 May 2017</td>\n        <td>Dua</td>\n        <td>Dua</td>\n      </tr>\n      <tr>\n        <td>3</td>\n        <td>3 May 2017</td>\n        <td>Tiga</td>\n        <td>Tiga</td>\n      </tr>\n      <tr>\n        <td>3</td>\n        <td>3 May 2017</td>\n        <td>Tiga</td>\n        <td>Tiga</td>\n      </tr>\n    </tbody>\n  </table>\n </div> -->\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_acompanhamento-producao_acompanhamento-producao_module_ts.js.map