(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 1122:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageRoutingModule: () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 9444);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
let LoginPageRoutingModule = class LoginPageRoutingModule {};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LoginPageRoutingModule);


/***/ }),

/***/ 1307:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageModule: () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 1122);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 9444);







let LoginPageModule = class LoginPageModule {};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule],
  declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
})], LoginPageModule);


/***/ }),

/***/ 9444:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 856);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 2372);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _storage_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../storage/db.service */ 5193);
/* harmony import */ var _api_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../api/usuario.service */ 1520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _api_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/app.service */ 8467);
/* harmony import */ var _guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guards/load-setup.guard */ 118);








//import { ErrorsMessage } from '../../environments/messages'


let LoginPage = class LoginPage {
  svc;
  db;
  platform;
  routerOutlet;
  router;
  menuCtrl;
  svcApp;
  email;
  resetSenha;
  backButtonListenerHandle;
  constructor(svc, db, platform, routerOutlet, router, menuCtrl, svcApp) {
    this.svc = svc;
    this.db = db;
    this.platform = platform;
    this.routerOutlet = routerOutlet;
    this.router = router;
    this.menuCtrl = menuCtrl;
    this.svcApp = svcApp;
  }
  ngOnInit() {
    console.log('ngOnInit1');
    this.svcApp.GetConfiguracoes().subscribe(ret => {
      console.log('ret', ret);
      if (ret.status) {
        if (ret.urlLogo.substring(0, 4) == "http") this.db.urlLogo = ret.urlLogo;else this.db.urlLogo = _guards_load_setup_guard__WEBPACK_IMPORTED_MODULE_5__._SERVER + '/app/v1/' + ret.urlLogo;
      }
    });
    //  this.menuCtrl.enable(false);
    //    console.log(this.db.app.logo)
  }
  ionViewDidEnter() {
    this.db.limpaSessao();
    //    this.logo = this.db.urlLogo;
    this.email = this.db.getUsuario();
  }
  ionViewDidLeave() {
    if (this.backButtonListenerHandle) {
      this.backButtonListenerHandle.remove();
      this.backButtonListenerHandle = null;
    }
  }
  login(form) {
    this.db.mostraProcessando();
    this.svc.GetToken({
      usuario: form.value.email,
      senha: form.value.password
    }).subscribe(ret => {
      if (ret.status) {
        this.db.escondeProcessando();
        console.log(ret);
        if (this.db.getUsuario() !== form.value.email) this.db.limpaSessao();
        this.db.setUsuario(form.value.email);
        this.db.getMenu(ret.token);
        this.db.setToken(ret.token);
      } else {
        this.db.escondeProcessando(ret.error);
      }
    }, err => {
      this.db.escondeProcessando('Erro de conexão ' + err.message);
    });
  }
  esqueciSenha(form) {
    console.log('form:', form);
    if (form.value.email == '') this.db.setMensagem('Informe o usuário');else {
      this.svc.ResetaSenha({
        usuario: form.value.email,
        metodo: 'email'
      }).subscribe(ret => {
        if (ret.error) this.db.setMensagem(ret.error);else {
          this.db.setMensagem('Enviado email com nova senha');
          this.resetSenha = false;
        }
      });
    }
  }
  setup() {
    this.db.Abre('setup');
  }
  static ctorParameters = () => [{
    type: _api_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService
  }, {
    type: _storage_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRouterOutlet
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController
  }, {
    type: _api_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService
  }];
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LoginPage);


/***/ }),

/***/ 2372:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.itemSemBorda {
  display: flex;
}
.itemSemBorda ion-input {
  margin: auto;
}

div {
  width: 50%;
  margin: auto;
  min-width: 250px;
}

ion-button {
  min-width: 250px;
}

#setup {
  min-width: 30px;
}

.esqueciSenha {
  color: var(--ion-color-primary);
  cursor: pointer;
  font-size: smaller;
}`, "",{"version":3,"sources":["webpack://./src/app/login/login.page.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;AACI;EACI,YAAA;AACR;;AAGA;EACG,UAAA;EACA,YAAA;EACA,gBAAA;AAAH;;AAGA;EACI,gBAAA;AAAJ;;AAGA;EACI,eAAA;AAAJ;;AAGA;EACI,+BAAA;EACA,eAAA;EACA,kBAAA;AAAJ","sourcesContent":[".itemSemBorda {\r\n    display: flex;\r\n\r\n    ion-input { \r\n        margin: auto;\r\n    }\r\n}\r\n\r\ndiv {\r\n   width: 50%; \r\n   margin: auto;\r\n   min-width: 250px;\r\n}\r\n\r\nion-button {\r\n    min-width: 250px;\r\n}\r\n\r\n#setup {\r\n    min-width: 30px;\r\n}\r\n\r\n.esqueciSenha {\r\n    color: var(--ion-color-primary);\r\n    cursor: pointer; \r\n    font-size: smaller;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 856:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <ion-img\n      [src]=\"db.urlLogo\"\n      style=\"margin: auto; max-width: 250px\"></ion-img>\n      </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button id=\"setup\" (click)=\"setup()\">\n        <ion-icon name=\"settings\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<!--  <ion-grid>\n    <ion-row>   \n      <ion-col style='margin-top: 50px'>\n        <ion-img\n          [src]=\"db.urlLogo\"\n          style=\"margin: auto; max-width: 250px\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>-->\n  <form *ngIf=\"!resetSenha\" #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center>\n          <ion-item class=\"itemSemBorda\" style=\"margin-top: 30px\">\n            <div>\n              <ion-input [(ngModel)]='email'\n                style=\"margin: auto\"\n                name=\"email\"\n                type=\"email\"\n                placeholder=\"E-mail ou Usuário\"\n                ngModel\n                required></ion-input>\n            </div>\n          </ion-item>\n          <ion-item class=\"itemSemBorda\" style=\"margin-bottom: 30px\">\n            <div style=\"width: 50%; margin: auto\">\n              <ion-input\n                name=\"password\"\n                type=\"password\"\n                placeholder=\"Senha\"\n                ngModel\n                required></ion-input>\n            </div>\n          </ion-item>\n          <ion-button class=\"btnEntrar\"\n            size=\"large\"\n            color=\"primary\"\n            type=\"submit\"\n            [disabled]=\"form.invalid\"\n            expand=\"block\">Entrar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col style='font-size: x-small'>\n          v 2.5.36\n        </ion-col>\n        <ion-col style='text-align: right'>\n          <ion-label class='esqueciSenha' (click)=\"resetSenha = true\">Esqueci minha senha</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <form *ngIf=\"resetSenha\" #form=\"ngForm\" (ngSubmit)=\"esqueciSenha(form)\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center>\n          <ion-item class=\"itemSemBorda\" style=\"margin-top: 30px\">\n            <div>\n              <ion-input [(ngModel)]='email'\n                style=\"margin: auto\"\n                name=\"email\"\n                type=\"email\"\n                placeholder=\"E-mail ou Usuário\"\n                ngModel\n                required></ion-input>\n            </div>\n          </ion-item>\n          <ion-button class=\"btnResetaSenha\"\n            size=\"large\"\n            color=\"primary\"\n            type=\"submit\"\n            [disabled]=\"form.invalid\"\n            expand=\"block\">Recuperar senha\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col style='text-align: right'>\n          <ion-label class='esqueciSenha' (click)=\"resetSenha = false\">Voltar</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map