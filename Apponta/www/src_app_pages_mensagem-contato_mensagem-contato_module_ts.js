(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mensagem-contato_mensagem-contato_module_ts"],{

/***/ 8945:
/*!***************************************************************************!*\
  !*** ./src/app/pages/mensagem-contato/mensagem-contato-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MensagemContatoPageRoutingModule: () => (/* binding */ MensagemContatoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _mensagem_contato_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mensagem-contato.page */ 1955);




const routes = [{
  path: '',
  component: _mensagem_contato_page__WEBPACK_IMPORTED_MODULE_0__.MensagemContatoPage
}];
let MensagemContatoPageRoutingModule = class MensagemContatoPageRoutingModule {};
MensagemContatoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], MensagemContatoPageRoutingModule);


/***/ }),

/***/ 4472:
/*!*******************************************************************!*\
  !*** ./src/app/pages/mensagem-contato/mensagem-contato.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MensagemContatoPageModule: () => (/* binding */ MensagemContatoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _mensagem_contato_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mensagem-contato-routing.module */ 8945);
/* harmony import */ var _mensagem_contato_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mensagem-contato.page */ 1955);







let MensagemContatoPageModule = class MensagemContatoPageModule {};
MensagemContatoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _mensagem_contato_routing_module__WEBPACK_IMPORTED_MODULE_0__.MensagemContatoPageRoutingModule],
  declarations: [_mensagem_contato_page__WEBPACK_IMPORTED_MODULE_1__.MensagemContatoPage]
})], MensagemContatoPageModule);


/***/ }),

/***/ 1955:
/*!*****************************************************************!*\
  !*** ./src/app/pages/mensagem-contato/mensagem-contato.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MensagemContatoPage: () => (/* binding */ MensagemContatoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _mensagem_contato_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mensagem-contato.page.html?ngResource */ 1645);
/* harmony import */ var _mensagem_contato_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mensagem-contato.page.scss?ngResource */ 8629);
/* harmony import */ var _mensagem_contato_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mensagem_contato_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_api_mensagem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/mensagem.service */ 2300);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);






let MensagemContatoPage = class MensagemContatoPage {
  db;
  msgSvc;
  msg2;
  msg;
  usuarios;
  ultimaMensagem;
  primeiraMensagem;
  mensagem;
  intervalMsg;
  carregandoMais = false;
  constructor(db, msgSvc) {
    this.db = db;
    this.msgSvc = msgSvc;
    //console.log(this.db.getTipoUsuario())
  }
  ngOnInit() {}
  ionViewDidLeave() {
    clearInterval(this.intervalMsg);
  }
  ionViewDidEnter() {
    this.db.getContatoMsg();
    this.carregaMsg();
    this.intervalMsg = setInterval(() => {
      if (!this.carregandoMais) this.carregaMsg(this.ultimaMensagem, null);
    }, 1000);
  }
  carregaMsg(idUltimaMensagem, idPrimeiraMensagem, evt) {
    //let mostraCarregando = evt !== null
    //console.log(evt)
    this.msgSvc.GetMensagem({
      token: this.db.getToken(),
      idContato: parseInt(this.db.idContato),
      idUltimaMensagem: parseInt(idUltimaMensagem),
      idPrimeiraMensagem: parseInt(idPrimeiraMensagem)
    }).subscribe(ret => {
      //        console.log(ret)
      console.log(this.msg);
      console.log('primeira - ' + idPrimeiraMensagem);
      console.log('ultima - ' + idUltimaMensagem);
      if (!this.msg) {
        console.log(ret.mensagens);
        this.msg = ret.mensagens;
      } else if (parseInt(idPrimeiraMensagem) > 0) {
        for (let i = 0; i < ret.mensagens.length; i++) {
          console.log('primeiraMsg');
          this.msg.push(ret.mensagens[i]);
        }
      } else if (parseInt(idUltimaMensagem) > 0) {
        console.log('primeira');
        for (let i = ret.mensagens.length - 1; i >= 0; i--) {
          //           console.log('ultima')
          //            console.log(ret.mensagens)
          this.msg.unshift(ret.mensagens[i]);
          //            console.log(ret.mensagens)
        }
        //          this.msg = ret.mensagens
      }
      this.usuarios = [];
      let iCor = 0;
      let cores = [];
      cores[0] = '#EC407A';
      cores[1] = '#5C6BC0';
      cores[2] = '#26C6DA';
      cores[3] = '#9CCC65';
      cores[4] = '#FFCA28';
      cores[5] = '#8D6E63';
      cores[6] = '#AB47BC';
      cores[7] = '#42A5F5';
      cores[8] = '#26A69A';
      cores[9] = '#D4E157';
      cores[10] = '#FFA726';
      cores[11] = '#BDBDBD';
      cores[12] = '#7E57C2';
      cores[13] = '#29B6F6';
      cores[14] = '#66BB6A';
      cores[15] = '#FFEE58';
      cores[16] = '#FF7043';
      cores[17] = '#78909C';
      if (ret.usuarios) {
        for (let i = 0; i < ret.usuarios.length; i++) {
          if (!ret.usuarios[i].id) ret.usuarios[i].id = 0;
          if (!ret.usuarios[i].cor) {
            if (ret.usuarios[i].id == 0) ret.usuarios[i].cor = '#EF5350';else {
              ret.usuarios[i].cor = cores[iCor++ % 18];
            }
          }
          this.usuarios[ret.usuarios[i].id] = ret.usuarios[i];
        }
      }
      if (ret.mensagens[0]) {
        console.log(this.msg[this.msg.length - 1].id);
        this.ultimaMensagem = this.msg[0]?.id;
        this.primeiraMensagem = this.msg[this.msg.length - 1].id;
        //          console.log(this.usuarios)
      }
      if (ret.mensagens[0]) {
        this.MensagemSetLida(ret.mensagens[0]?.id);
      }
      if (evt) evt?.target.complete();
      if (this.primeiraMensagem) this.carregandoMais = false;
    }, err => {
      this.db.escondeProcessando(err.error);
      this.carregandoMais = false;
    });
  }
  carregaMais(evt) {
    this.carregandoMais = true;
    this.carregaMsg(null, this.primeiraMensagem, evt);
  }
  busca(evt) {
    this.msg = this.msg2.filter(cc => {
      return this.db.compara([cc.mensagem], evt.detail.value);
    });
  }
  EnviaMsg() {
    if (this.mensagem && this.mensagem.trim() != '') this.msgSvc.EnviaMensagem({
      token: this.db.getToken(),
      idContato: parseInt(this.db.idContato),
      mensagem: this.mensagem
    }).subscribe(ret => {
      console.log(ret);
      this.mensagem = '';
      //msg.mensagem = this.mensagem
      //msg.equipamento = this.db.idContato;
      //this.msg.unshift(ret.mensagens[0]);
      //        this.carregaMsg()
    });
  }
  MensagemSetLida(idMensagem) {
    //    this.db.mostraProcessando()
    this.msgSvc.SetLida({
      token: this.db.getToken(),
      idMensagem: idMensagem
    }).subscribe(ret => {
      //        this.db.escondeProcessando()
      //        console.log(ret)
    }, err => this.db.escondeProcessando(err.error));
  }
  static ctorParameters = () => [{
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService
  }, {
    type: src_app_api_mensagem_service__WEBPACK_IMPORTED_MODULE_2__.MensagemService
  }];
};
MensagemContatoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-mensagem-contato',
  template: _mensagem_contato_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_mensagem_contato_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MensagemContatoPage);


/***/ }),

/***/ 8629:
/*!******************************************************************************!*\
  !*** ./src/app/pages/mensagem-contato/mensagem-contato.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-chip {
  height: auto;
  max-width: 70%;
}
ion-chip ion-textarea {
  height: auto;
  width: auto;
}
ion-chip .dataHora {
  color: gray;
  font-size: 90%;
}
ion-chip .usuario {
  color: green;
}

ion-item {
  --inner-border-width: 0px;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/mensagem-contato/mensagem-contato.page.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,cAAA;AACJ;AAAI;EACI,YAAA;EACA,WAAA;AAER;AAAI;EACI,WAAA;EACA,cAAA;AAER;AAAI;EACI,YAAA;AAER;;AAEA;EACI,yBAAA;AACJ","sourcesContent":["ion-chip {\r\n    height: auto;\r\n    max-width: 70%;\r\n    ion-textarea {\r\n        height: auto;\r\n        width: auto;\r\n    }\r\n    .dataHora {\r\n        color: gray;\r\n        font-size: 90%;\r\n    }\r\n    .usuario {\r\n        color: green;\r\n    }\r\n}\r\n\r\nion-item {\r\n    --inner-border-width: 0px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1645:
/*!******************************************************************************!*\
  !*** ./src/app/pages/mensagem-contato/mensagem-contato.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{this.db.contato}}</ion-title>\n    <ion-buttons class=\"alturamenor\" slot=\"end\">\n      <ion-button class=\"alturamenor\" (click)=\"this.db.Abre('apontamento')\">\n        <ion-icon slot=\"icon-only\" name=\"play\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <!--   <ion-item class=\"itemSemBorda\">\n    <ion-searchbar style=\"border-top: 5px\" placeholder=\"Buscar \" (ionChange)=\"busca($event)\"></ion-searchbar>\n    <ion-badge slot=\"end\">\n      {{333}}\n    </ion-badge>\n  </ion-item> -->\n  <ion-item>\n    <ion-label slot=\"start\">Mensagem</ion-label>\n    <ion-textarea rows=5 [(ngModel)]=\"mensagem\" name=\"mensagem\" type=\"text\"></ion-textarea>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"EnviaMsg()\" color=\"primary\">\n        <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n  <ion-item no-lines *ngFor=\"let m of msg\">\n    <ion-chip [color]=\"m.usuarioPostagem !== '1'?'':'primary'\" [slot]=\"m.usuarioPostagem !== '1'?'start':'end'\">\n      <ion-grid>\n        <ion-row class=\"usuario\">\n          <ion-label *ngIf=\"m.idUsuario\" [ngStyle]=\"{'color':usuarios[m.idUsuario].cor}\">\n            {{usuarios[m.idUsuario].usuario}}\n          </ion-label>\n          <ion-label *ngIf=\"!m.idUsuario\" [ngStyle]=\"{'color':usuarios[0].cor}\">\n            {{usuarios[0].usuario}}\n          </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"mensagem\" [innerHTML]='m.mensagem'> \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-text-right dataHora\">\n            {{m.dataHoraStr}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-chip>\n  </ion-item>\n\n  <ion-infinite-scroll threshold=\"10%\" (ionInfinite)=\"carregaMais($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Buscando mais mensagens...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mensagem-contato_mensagem-contato_module_ts.js.map