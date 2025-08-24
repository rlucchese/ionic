(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_componentes_components_module_ts"],{

/***/ 3656:
/*!**************************************************!*\
  !*** ./src/app/componentes/components.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentModule: () => (/* binding */ ComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-bar/filter-bar.component */ 6382);
/* harmony import */ var _lista_objeto_grid_lista_objeto_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lista-objeto-grid/lista-objeto-grid.component */ 7732);
/* harmony import */ var _grape_item_grape_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grape-item/grape-item.component */ 3908);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 7988);
/* harmony import */ var _relation1to1_relation1to1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relation1to1/relation1to1.component */ 5316);
/* harmony import */ var _grape_header_grape_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grape-header/grape-header.component */ 9332);
/* harmony import */ var _grape_grid_grape_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grape-grid/grape-grid.component */ 2554);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9975);













let ComponentModule = class ComponentModule {};
ComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollingModule],
  declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _relation1to1_relation1to1_component__WEBPACK_IMPORTED_MODULE_4__.Relation1to1Component, _grape_header_grape_header_component__WEBPACK_IMPORTED_MODULE_5__.GrapeTreeComponent, _grape_item_grape_item_component__WEBPACK_IMPORTED_MODULE_2__.GrapeItemComponent, _grape_grid_grape_grid_component__WEBPACK_IMPORTED_MODULE_6__.GrapeGridComponent, _lista_objeto_grid_lista_objeto_grid_component__WEBPACK_IMPORTED_MODULE_1__.ListaObjetoGridComponent, _filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_0__.FilterBarComponent],
  exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _relation1to1_relation1to1_component__WEBPACK_IMPORTED_MODULE_4__.Relation1to1Component, _grape_header_grape_header_component__WEBPACK_IMPORTED_MODULE_5__.GrapeTreeComponent, _grape_item_grape_item_component__WEBPACK_IMPORTED_MODULE_2__.GrapeItemComponent, _grape_grid_grape_grid_component__WEBPACK_IMPORTED_MODULE_6__.GrapeGridComponent, _lista_objeto_grid_lista_objeto_grid_component__WEBPACK_IMPORTED_MODULE_1__.ListaObjetoGridComponent, _filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_0__.FilterBarComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollingModule]
})], ComponentModule);


/***/ }),

/***/ 6382:
/*!****************************************************************!*\
  !*** ./src/app/componentes/filter-bar/filter-bar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Filter: () => (/* binding */ Filter),
/* harmony export */   FilterBarComponent: () => (/* binding */ FilterBarComponent)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _filter_bar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-bar.component.html?ngResource */ 9914);
/* harmony import */ var _filter_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-bar.component.scss?ngResource */ 1064);
/* harmony import */ var _filter_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_filter_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 5995);







class Filter {
  label;
  field;
  content;
}
let FilterBarComponent = class FilterBarComponent {
  alertController;
  formBuilder;
  filtrosDef;
  quantidade;
  callbackFunction;
  filterContent;
  gridFilters = [];
  filtro;
  label;
  filtroDefAtual;
  Form = {
    itemFiltro: ''
  };
  constructor(alertController, formBuilder) {
    this.alertController = alertController;
    this.formBuilder = formBuilder;
  }
  ngOnInit() {}
  ngOnChanges() {
    if (this.filtrosDef && !this.Form.itemFiltro || this.filtroDefAtual != this.filtrosDef) {
      this.removeFiltro(-1);
      this.Form.itemFiltro = this.filtrosDef.selectedFilter;
      this.filtroDefAtual = this.filtrosDef;
    }
  }
  addFilter() {
    console.log(this.Form);
    if (this.filterContent && this.filterContent != "") {
      console.log(this.Form.itemFiltro);
      let filters;
      filters = this.filtrosDef['filters'];
      console.log(filters);
      let lbl = [];
      lbl = filters.filter(f => {
        return f.id == this.Form.itemFiltro;
      });
      console.log(this.Form.itemFiltro);
      console.log(lbl[0].label);
      //    ['label'];
      this.gridFilters.push({
        label: lbl[0].label,
        content: this.filterContent,
        field: this.Form.itemFiltro
      });
      this.filterContent = '';
    }
  }
  removeFiltro(index) {
    if (index == -1) this.gridFilters = [];else this.gridFilters.splice(index, 1);
  }
  filtra(gridFilters) {
    if (this.filterContent) {
      this.addFilter();
    }
    console.log(gridFilters);
    if (gridFilters.length == 0) this.confirmSemFiltro(gridFilters);else this.callbackFunction(gridFilters);
  }
  confirmSemFiltro(gridFilters) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Busca Sem Filtro',
        message: 'Confirma Busca Sem Filtro!!!',
        buttons: [{
          text: 'Nao',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            _this.callbackFunction(gridFilters);
          }
        }]
      });
      yield alert.present();
    })();
  }
  static ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }];
  static propDecorators = {
    filtrosDef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
      args: ['filtros']
    }],
    quantidade: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
      args: ['quantidade']
    }],
    callbackFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  };
};
FilterBarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-filter-bar',
  template: _filter_bar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_filter_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], FilterBarComponent);


/***/ }),

/***/ 2554:
/*!****************************************************************!*\
  !*** ./src/app/componentes/grape-grid/grape-grid.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Filter: () => (/* binding */ Filter),
/* harmony export */   GrapeGridComponent: () => (/* binding */ GrapeGridComponent)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _grape_grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grape-grid.component.html?ngResource */ 9878);
/* harmony import */ var _grape_grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grape-grid.component.scss?ngResource */ 9508);
/* harmony import */ var _grape_grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grape_grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _funcoes_genericas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../funcoes/genericas.service */ 3070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_api_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/app.service */ 8467);
/* harmony import */ var src_app_pages_cadastro_cadastro_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/cadastro/cadastro.page */ 4329);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9975);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/browser */ 6515);
/* harmony import */ var src_app_pages_visualiza_pedido_visualiza_pedido_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/visualiza-pedido/visualiza-pedido.page */ 1811);
/* harmony import */ var src_app_modal_valida_itens_modal_valida_itens_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modal-valida-itens/modal-valida-itens.page */ 1999);















class Filter {
  label;
  field;
  content;
}
let GrapeGridComponent = class GrapeGridComponent extends _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.FixedSizeVirtualScrollStrategy {
  svcApp;
  db;
  cad;
  router;
  navCtrl;
  navParams;
  gen;
  visPed;
  modValida;
  obj;
  definition;
  filterDefault = null;
  listaDireto = true;
  indice;
  callbackFunction;
  viewport;
  keysHeaders;
  // public mostra: boolean = false
  filtro;
  grapeHeader;
  grapeItem;
  grape;
  gridDef;
  /*   public headerFilter: any
   */
  gridFilter;
  gridList;
  gridData;
  update;
  mail = [];
  inactivate = [];
  geraPedido = [];
  geraOrcamento = [];
  view = [];
  notUpdate;
  notMail = [];
  notGeraPedido = [];
  notView = [];
  gridFilters = [];
  colOrdId = '';
  colOrdAD = 'A';
  filterContent;
  Form = {
    idGrid: ''
  };
  grape2;
  mostraDetalhe;
  filters = {};
  tamanhoCampos;
  constructor(svcApp, db, cad, router, navCtrl, navParams, gen, visPed, modValida) {
    super(50, 250, 500);
    this.svcApp = svcApp;
    this.db = db;
    this.cad = cad;
    this.router = router;
    this.navCtrl = navCtrl;
    this.navParams = navParams;
    this.gen = gen;
    this.visPed = visPed;
    this.modValida = modValida;
  }
  ngOnInit() {
    console.log(this.obj);
    console.log(this.definition);
    /*     if (!this.keyHeader) this.keyHeader = []
     */
    this.objeto('_gridList');
  }
  ionViewDidEnter() {
    this.listaGrid();
  }
  ngOnChanges() {
    if (this.gridList && !this.Form.idGrid) {
      this.Form.idGrid = this.gridList.default.id;
      this.getGridDef();
      // const size = this.viewport.checkViewportSize();
    }
    if (this.definition) {
      this.update = false;
      this.definition.actions.forEach(element => {
        if (element.id == '_update') {
          this.update[0] = true;
        }
        if (element.id == '_email') {
          this.mail[0] = true;
          this.mail[1] = element.label;
        }
        if (element.id == '_geraPedido') {
          this.geraPedido[0] = true;
          this.geraPedido[1] = element.label;
        }
        if (element.id == '_geraOrcamento') {
          this.geraOrcamento[0] = true;
          this.geraOrcamento[1] = element.label;
        }
        if (element.id == '_view') {
          this.view[0] = true;
          this.view[1] = element.label;
        }
        if (element.id == '_inactivate') {
          this.inactivate[0] = true;
          this.inactivate[1] = element.label;
        }
      });
    }
    //console.log(  document.getElementById("content").clientHeight)
  }
  noAction(noAction, action) {
    //console.log(noAction);
    let result = false;
    if (noAction) {
      noAction.forEach(el => {
        if (el == action) {
          result = true;
        }
      });
    }
    return result;
  }
  objeto(actionobj, id) {
    this.db.mostraProcessando();
    this.svcApp.GetObjeto(this.obj, {
      token: this.db.getToken(),
      action: actionobj,
      id: id
    }).subscribe(ret => {
      console.log(ret);
      if (actionobj == '_gridList') {
        this.gridList = ret;
        //   console.log(this.gridList)
      } else {
        this.gridDef = ret;
        //   console.log(this.gridDef)
        this.tamanhoCampos = 0;
        this.gridDef.columns.forEach(col => {
          if (col.size) {
            this.tamanhoCampos = this.tamanhoCampos + +col.size;
            //      console.log(this.tamanhoCampos)
          }
        });
        if (this.listaDireto) {
          this.listaGrid();
        }
      }
      this.db.escondeProcessando(ret.msg);
    }, err => this.db.escondeProcessando(err.error));
  }
  objetoCadastro(_x, _x2) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (act, codigos, index = 0, update = true, evt) {
      console.log(act);
      if (evt) evt.stopPropagation();
      let result = true;
      let msg = '';
      if (act === '_email' || act === '_geraPedido' || act === '_inactivate' || act === '_geraOrcamento') {
        if (act === '_email') msg = 'Confirma envio de email?';
        if (act === '_inactivate') msg = 'Confirma a exclusao do ' + _this.definition.label + ' ' + codigos;
        if (act === '_geraPedido') msg = 'Confirma Geração de Pedido?';
        if (act === '_geraOrcamento') msg = 'Confirma copia para novo Orçamento?';
        let confirm = yield _this.db.presentAlertConfirm('', msg);
        if (confirm.role === 'confirm') {
          result = true;
        } else {
          result = false;
        }
      }
      if (result) {
        _this.db.mostraProcessando();
        _this.svcApp.GetObjeto(_this.obj, {
          token: _this.db.getToken(),
          action: act,
          id: codigos
        }).subscribe(ret => {
          if (ret.status == true) {
            //   console.log(ret)
            if (ret.msg) _this.db.setMensagem(ret.msg);
            _this.grape2 = ret;
            // console.log(this.grape2)
            if (act == '_getJSON' || act == '_getJSON') {
              _this.abreOrcamento(ret.cliente, ret.itens, ret.dadosAuxiliares, true);
            }
            if (act == '_get' || act == '_insert') {
              _this.abreCadastro(act, index, _this.update);
            }
            if (act == '_view') {
              //this.abrePedido()
              if (ret.url) {
                _capacitor_browser__WEBPACK_IMPORTED_MODULE_7__.Browser.open({
                  url: ret.url
                }); // +'/'+ ret.tokenArquivo})
              } else {
                _this.objetoCadastro('_get', codigos, index, update);
              }
            }
            if (act === '_geraPedido') {}
            /*  else {
             this.listaGrid()
            } */
            _this.listaGrid();
          } else if (ret.status == false) {
            if (act === '_geraPedido') {
              if (ret.itens) {
                const retorno = _this.modValida.modalValidaItens(ret.itens, codigos).then(ret => _this.listaGrid());
              }
            }
          }
          _this.db.escondeProcessando(ret.msg);
        }, err => _this.db.escondeProcessando(err.error));
      }
    }).apply(this, arguments);
  }
  abreCadastro(act, index, update) {
    var _this2 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.router.navigate(['cadastro'], {
        replaceUrl: true,
        state: {
          grapeCadastro: _this2.grape2,
          pagina: _this2.obj,
          idGrid: _this2.Form.idGrid,
          update: update
        }
      });
      console.log({
        grapeCadastro: _this2.grape2,
        pagina: _this2.obj,
        idGrid: _this2.Form.idGrid,
        update: update
      });
      /*
         let retCadastro: any
         if (act == '_get') {
           retCadastro = await this.cad.cadastro(this.grape2, this.obj, this.Form.idGrid, update);
           //  this.gridData[index] = retCadastro.data.grape[0]
                this.listaGrid()
           const x = this.viewport.scrollToIndex(index)
       
         }
         if (act == '_insert') {
           retCadastro = await this.cad.cadastro('', this.obj, this.Form.idGrid);
                console.log(retCadastro.data.grape)
           this.filters = retCadastro.data.grape[0]
           if (Object.keys(this.filters).length > 0) this.listaGrid()
         } */
    })();
  }
  abreOrcamento(cliente, itens, dadosAuxiliares, update) {
    var _this3 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.router.navigate(['vendas/orcamento/identificacaoPedido'], {
        replaceUrl: true,
        state: {
          cliente: cliente,
          itens: itens,
          dadosAuxiliares: dadosAuxiliares,
          update: update
        }
      });
    })();
  }
  listaGrid(gridFilters) {
    //const size = this.viewport.checkViewportSize();
    this.db.mostraProcessando();
    console.log(gridFilters);
    if (gridFilters) {
      console.log(this.filters);
      this.filters = {};
      gridFilters.forEach(el => {
        this.filters[el.field] = el.content;
      });
    }
    console.log(this.filterDefault);
    //    if (this.filterDefault == {}) {
    //    this.filters = this.filterDefault}
    console.log(this.filters);
    console.log(this.gridFilters);
    this.svcApp.GetObjeto(this.obj, {
      token: this.db.getToken(),
      action: '_gridData',
      filters: this.filters,
      id: this.Form.idGrid
    }).subscribe(ret => {
      console.log(ret);
      this.gridData = ret.data;
    }, err => this.db.escondeProcessando(err.error));
    this.db.escondeProcessando();
  }
  ordena(idCol) {
    if (idCol != this.colOrdId || this.colOrdAD == 'D') this.colOrdAD = 'A';else this.colOrdAD = 'D';
    this.colOrdId = idCol;
    let AD = this.colOrdAD;
    this.gridData.sort(function (a, b) {
      if (typeof a[idCol] == 'number') {
        if (AD == 'A') {
          if (a[idCol] > b[idCol]) return 1;
          if (a[idCol] < b[idCol]) return -1;
          return 0;
        } else {
          if (a[idCol] > b[idCol]) return -1;
          if (a[idCol] < b[idCol]) return 1;
          return 0;
        }
      } else {
        if (AD == 'A') return a[idCol].localeCompare(b[idCol]);else return b[idCol].localeCompare(a[idCol]);
      }
    });
    this.gridData = [...this.gridData];
  }
  filter(evt) {
    this.filtro = evt.detail.value;
  }
  addFilter() {
    this.gridFilters.push({
      label: this.filtro,
      content: this.filterContent,
      field: this.filtro
    });
  }
  removeFiltro(index) {
    if (index == -1) this.gridFilters = [];else this.gridFilters.splice(index, 1);
  }
  seleciona(item) {
    this.callbackFunction(item);
  }
  getGridDef() {
    console.log('entrou');
    this.gridData = [];
    this.objeto('_gridDefinition', this.Form.idGrid);
  }
  abrePedido() {
    var _this4 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const retAbrePedido = yield _this4.visPed.abrePedido();
    })();
  }
  static ctorParameters = () => [{
    type: src_app_api_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService
  }, {
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_6__.DbService
  }, {
    type: src_app_pages_cadastro_cadastro_page__WEBPACK_IMPORTED_MODULE_5__.CadastroPage
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavParams
  }, {
    type: _funcoes_genericas_service__WEBPACK_IMPORTED_MODULE_3__.GenericasService
  }, {
    type: src_app_pages_visualiza_pedido_visualiza_pedido_page__WEBPACK_IMPORTED_MODULE_8__.VisualizaPedidoPage
  }, {
    type: src_app_modal_valida_itens_modal_valida_itens_page__WEBPACK_IMPORTED_MODULE_9__.ModalValidaItensPage
  }];
  static propDecorators = {
    obj: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input,
      args: ['objeto']
    }],
    definition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input,
      args: ['definition']
    }],
    filterDefault: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input,
      args: ['filterDefault']
    }],
    listaDireto: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input,
      args: ['listaDireto']
    }],
    indice: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input,
      args: ['indice']
    }],
    callbackFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
    }],
    viewport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
      args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkVirtualScrollViewport, {
        static: false
      }]
    }]
  };
};
GrapeGridComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-grape-grid',
  template: _grape_grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_grape_grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], GrapeGridComponent);


/***/ }),

/***/ 9332:
/*!********************************************************************!*\
  !*** ./src/app/componentes/grape-header/grape-header.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrapeTreeComponent: () => (/* binding */ GrapeTreeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _grape_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grape-header.component.html?ngResource */ 6880);
/* harmony import */ var _grape_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grape-header.component.scss?ngResource */ 1438);
/* harmony import */ var _grape_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grape_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_api_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/app.service */ 8467);
/* harmony import */ var src_app_pages_cadastro_cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/cadastro/cadastro.page */ 4329);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);







let GrapeTreeComponent = class GrapeTreeComponent {
  svcApp;
  db;
  cad;
  obj;
  header;
  keyHeader;
  indice;
  headerFilter;
  keysHeaders;
  // public mostra: boolean = false
  filtro;
  grapeHeader;
  grapeItem;
  grape;
  grid = false;
  constructor(svcApp, db, cad) {
    this.svcApp = svcApp;
    this.db = db;
    this.cad = cad;
  }
  ngOnInit() {}
  ngAfterViewChecked() {
    if (!this.keyHeader) this.keyHeader = [];
    if (this.filtro != this.header) {
      /*      if (!(typeof this.indice === 'undefined') && !(typeof this.db.grapeDb[this.indice]['headers'] === 'undefined'))
              {this.grape = this.db.grapeDb[this.indice]['headers']  }
              else{ */
      this.objeto('_listHeader');
      /*     } */
    }
    this.filtro = this.header;
  }
  objeto(actionobj) {
    console.log(this.keyHeader);
    console.log(this.indice >= 0);
    console.log(this.grape);
    this.svcApp.GetObjeto(this.obj, {
      token: this.db.getToken(),
      action: actionobj,
      idHeader: this.header,
      keysHeader: this.keyHeader,
      keyFilter: this.headerFilter
    }).subscribe(ret => {
      console.log('ret - ', ret);
      /*         if (ret[this.obj].keysHeaders) this.keysHeaders = ret[this.obj].keysHeaders
              console.log('nivel', this.keysHeaders) */
      if (ret[this.obj].headers) {
        this.grapeHeader = ret[this.obj].headers;
        /*          if (this.indice >= 0) {
                   this.db.grapeDb[this.indice]['headers'] = this.grapeHeader
                   
                  
                 } else {
                   this.db.grapeDb = this.grapeHeader
                 } */
        this.grape = this.grapeHeader;
        console.log('grapeDb - ', this.db.grapeDb);
      }
      /*  if (ret[this.obj].items) {
         this.grapeItem = ret[this.obj].items;
         if (this.indice >= 0) {
           this.db.grapeDb[this.indice]['items'] = this.grapeItem
           console.log(this.db.grapeDb)
         }
       } */
    }, err => this.db.escondeProcessando(err.error));
  }
  /*   carregaObjeto(id: string, indice: any) {
      //this.mostra = true
      this.keyHeader = []
  
      if (this.keysHeaders) {
        console.log('entrou aqui')
        this.keyHeader.push(this.keysHeaders[0])
      }
      this.keyHeader.push(id)
      console.log(this.header, this.keyHeader)
      this.objeto('_listHeader')
  
    } */
  mostra(h) {
    //    this.indice = id
    //    console.log(this.indice)
    if (!h['mostrandoFilhos']) {
      h['mostrandoFilhos'] = true;
      h['mostra'] = true;
    } else {
      h['mostra'] = !h['mostra'];
    }
    //   if(h['mostra']) h['mostra'] = !h['mostra']
    //   else h['mostra'] = true;
    /*
     h['mostra']
     if (this.grape[id]['mostra']) {
       this.grape[id]['mostra'] = !this.grape[id]['mostra']
     }
     else {
       this.grape[id]['mostra'] = true
     }*/
    console.log(this.grape);
    console.log(this.db.grapeDb);
    /*     if (this.db.grapeDb[id]['mostra']) {
          this.db.grapeDb[id]['mostra'] = !this.db.grapeDb[id]['mostra']
        }
        else {
          this.db.grapeDb[id]['mostra'] = true
        } */
  }
  static ctorParameters = () => [{
    type: src_app_api_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService
  }, {
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_4__.DbService
  }, {
    type: src_app_pages_cadastro_cadastro_page__WEBPACK_IMPORTED_MODULE_3__.CadastroPage
  }];
  static propDecorators = {
    obj: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
      args: ['objeto']
    }],
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
      args: ['header']
    }],
    keyHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
      args: ['keyHeader']
    }],
    indice: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
      args: ['indice']
    }],
    headerFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
      args: ['headerFilter']
    }]
  };
};
GrapeTreeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-grape-header',
  template: _grape_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_grape_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], GrapeTreeComponent);


/***/ }),

/***/ 3908:
/*!****************************************************************!*\
  !*** ./src/app/componentes/grape-item/grape-item.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrapeItemComponent: () => (/* binding */ GrapeItemComponent)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _grape_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grape-item.component.html?ngResource */ 1680);
/* harmony import */ var _grape_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grape-item.component.scss?ngResource */ 7802);
/* harmony import */ var _grape_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grape_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_api_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/app.service */ 8467);
/* harmony import */ var src_app_pages_cadastro_cadastro_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/cadastro/cadastro.page */ 4329);
/* harmony import */ var src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/storage/db.service */ 5193);









let GrapeItemComponent = class GrapeItemComponent {
  svcApp;
  db;
  cad;
  mc;
  obj;
  header;
  keyHeader;
  indice;
  keysHeaders;
  // public mostra: boolean = false
  filtro;
  grapeHeader;
  grapeItem;
  grape;
  headerFilter;
  grape2;
  mostraDetalhe;
  constructor(svcApp, db, cad, mc) {
    this.svcApp = svcApp;
    this.db = db;
    this.cad = cad;
    this.mc = mc;
  }
  ngOnInit() {
    console.log(this.obj);
    this.objeto('_listHeader');
  }
  objeto(actionobj) {
    console.log(this.grapeItem);
    console.log(this.db.grapeDb);
    this.svcApp.GetObjeto(this.obj, {
      token: this.db.getToken(),
      action: actionobj,
      idHeader: this.header,
      keysHeader: this.keyHeader
    }).subscribe(ret => {
      console.log(ret);
      if (ret[this.obj].items) {
        this.grapeItem = ret[this.obj].items;
      }
    }, err => this.db.escondeProcessando(err.error));
  }
  objetoCadastro(act, codigos) {
    var _this = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(act);
      _this.svcApp.GetObjeto(_this.obj, {
        token: _this.db.getToken(),
        action: act,
        id: codigos
      }).subscribe(ret => {
        //   console.log(ret)
        _this.grape2 = ret;
        console.log(_this.grape2);
        // console.log(this.grape2)
        const retCadastro = _this.cad.cadastro(_this.grape2, _this.obj);
      }, err => _this.db.escondeProcessando(err.error));
    })();
  }
  seleciona(obj) {
    this.mc.dismiss({
      status: true,
      evento: obj
    });
  }
  static ctorParameters = () => [{
    type: src_app_api_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService
  }, {
    type: src_app_storage_db_service__WEBPACK_IMPORTED_MODULE_5__.DbService
  }, {
    type: src_app_pages_cadastro_cadastro_page__WEBPACK_IMPORTED_MODULE_4__.CadastroPage
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }];
  static propDecorators = {
    obj: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['objeto']
    }],
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['header']
    }],
    keyHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['keyHeader']
    }],
    indice: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
      args: ['indice']
    }]
  };
};
GrapeItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-grape-item',
  template: _grape_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_grape_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], GrapeItemComponent);


/***/ }),

/***/ 7988:
/*!********************************************************!*\
  !*** ./src/app/componentes/header/header.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 1328);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 7942);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 5995);






let HeaderComponent = class HeaderComponent {
  navCtr;
  router;
  nomePagina = '';
  constructor(navCtr, router) {
    this.navCtr = navCtr;
    this.router = router;
  }
  ngOnInit() {}
  voltar() {
    this.navCtr.back();
  }
  operacoes() {
    this.router.navigate(['operacao']);
  }
  static ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }];
  static propDecorators = {
    nomePagina: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: ['nomePagina']
    }]
  };
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-header',
  template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HeaderComponent);


/***/ }),

/***/ 7732:
/*!******************************************************************************!*\
  !*** ./src/app/componentes/lista-objeto-grid/lista-objeto-grid.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListaObjetoGridComponent: () => (/* binding */ ListaObjetoGridComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _lista_objeto_grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lista-objeto-grid.component.html?ngResource */ 1464);
/* harmony import */ var _lista_objeto_grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lista-objeto-grid.component.scss?ngResource */ 1246);
/* harmony import */ var _lista_objeto_grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lista_objeto_grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




let ListaObjetoGridComponent = class ListaObjetoGridComponent {
  obj;
  grape;
  atributosObj;
  qty = 2;
  headers = [];
  item = [];
  tamanho;
  constructor() {}
  _listHeader() {
    for (let i = 0; i < 10; i++) {
      let hdr;
      //             hdr.content = "xxyy"
      //             hdr.content = ' - Item ' + i;
      //             hdr.qty = 10;
      this.headers.push(hdr);
    }
  }
  ngOnInit() {
    console.log(this.obj);
  }
  ngAfterViewChecked() {
    if (this.obj) {
      this.atributosObj = Object.keys(this.obj[0]);
      this.tamanho = this.atributosObj.length;
      console.log(this.atributosObj.length);
    }
  }
  getAtributos(grape) {
    let atributos = Object.keys(grape[0]);
    return atributos;
  }
  getListaArray(grape) {
    let result = [];
    for (var i in grape) {
      result.push(grape[i]);
    }
    return result;
  }
  static ctorParameters = () => [];
  static propDecorators = {
    obj: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['objeto']
    }]
  };
};
ListaObjetoGridComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-lista-objeto-grid',
  template: _lista_objeto_grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_lista_objeto_grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ListaObjetoGridComponent);


/***/ }),

/***/ 5316:
/*!********************************************************************!*\
  !*** ./src/app/componentes/relation1to1/relation1to1.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Relation1to1Component: () => (/* binding */ Relation1to1Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _relation1to1_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relation1to1.component.html?ngResource */ 9872);
/* harmony import */ var _relation1to1_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relation1to1.component.scss?ngResource */ 8066);
/* harmony import */ var _relation1to1_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_relation1to1_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




let Relation1to1Component = class Relation1to1Component {
  og;
  codigo;
  grapeCadastro = '';
  icon = '';
  constructor() {}
  ngOnInit() {
    console.log(this.og);
  }
  getConteudo1to1() {
    if (this.grapeCadastro[this.og]) {
      let result = '';
      for (var i in this.grapeCadastro[this.og][this.codigo]) result += this.grapeCadastro[this.og][this.codigo][i] + ' ';
      return result;
    }
  }
  static ctorParameters = () => [];
  static propDecorators = {
    og: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['otherGrape']
    }],
    codigo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['codigo']
    }],
    grapeCadastro: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['grapeCadastro']
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['icon']
    }]
  };
};
Relation1to1Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-relation1to1',
  template: _relation1to1_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_relation1to1_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], Relation1to1Component);


/***/ }),

/***/ 7713:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 6515:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Browser: () => (/* binding */ Browser)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 7713);

const Browser = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Browser', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_browser_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 2281)).then(m => new m.BrowserWeb())
});



/***/ }),

/***/ 4070:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Capacitor: () => (/* binding */ Capacitor),
/* harmony export */   CapacitorCookies: () => (/* binding */ CapacitorCookies),
/* harmony export */   CapacitorException: () => (/* binding */ CapacitorException),
/* harmony export */   CapacitorHttp: () => (/* binding */ CapacitorHttp),
/* harmony export */   ExceptionCode: () => (/* binding */ ExceptionCode),
/* harmony export */   WebPlugin: () => (/* binding */ WebPlugin),
/* harmony export */   WebView: () => (/* binding */ WebView),
/* harmony export */   buildRequestInit: () => (/* binding */ buildRequestInit),
/* harmony export */   registerPlugin: () => (/* binding */ registerPlugin)
/* harmony export */ });
/* harmony import */ var _Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);

/*! Capacitor: https://capacitorjs.com/ - MIT License */
var ExceptionCode;
(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */
  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
class CapacitorException extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }
}
const getPlatformId = win => {
  var _a, _b;
  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};
const createCapacitor = win => {
  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  const getPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };
  const isNativePlatform = () => getPlatform() !== 'web';
  const isPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);
    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }
    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }
    return false;
  };
  const getPluginHeader = pluginName => {
    var _a;
    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };
  const handleError = err => win.console.error(err);
  const registeredPlugins = new Map();
  const registerPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);
    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }
    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;
    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }
        return jsImplementation;
      });
      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();
    const createPluginMethod = (impl, prop) => {
      var _a, _b;
      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };
    const createPluginMethodWrapper = prop => {
      let remove;
      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);
          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });
        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }
        return p;
      };
      // Some flair ✨
      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };
    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');
    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);
      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });
        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();
      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };
    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;
          case 'toJSON':
            return () => ({});
          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;
          case 'removeListener':
            return removeListener;
          default:
            return createPluginMethodWrapper(prop);
        }
      }
    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };
  // Add in convertFileSrc for web, it will already be available in native context
  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }
  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled;
  return cap;
};
const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);
const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
  constructor() {
    this.listeners = {};
    this.retainedEventArguments = {};
    this.windowListeners = {};
  }
  addListener(eventName, listenerFunc) {
    var _this = this;
    let firstListener = false;
    const listeners = this.listeners[eventName];
    if (!listeners) {
      this.listeners[eventName] = [];
      firstListener = true;
    }
    this.listeners[eventName].push(listenerFunc);
    // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it
    const windowListener = this.windowListeners[eventName];
    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }
    if (firstListener) {
      this.sendRetainedArgumentsForEvent(eventName);
    }
    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });
      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();
    const p = Promise.resolve({
      remove
    });
    return p;
  }
  removeAllListeners() {
    var _this2 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};
      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }
      _this2.windowListeners = {};
    })();
  }
  notifyListeners(eventName, data, retainUntilConsumed) {
    const listeners = this.listeners[eventName];
    if (!listeners) {
      if (retainUntilConsumed) {
        let args = this.retainedEventArguments[eventName];
        if (!args) {
          args = [];
        }
        args.push(data);
        this.retainedEventArguments[eventName] = args;
      }
      return;
    }
    listeners.forEach(listener => listener(data));
  }
  hasListeners(eventName) {
    var _a;
    return !!((_a = this.listeners[eventName]) === null || _a === void 0 ? void 0 : _a.length);
  }
  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }
  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }
  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }
  removeListener(eventName, listenerFunc) {
    var _this3 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listenerFunc);
      _this3.listeners[eventName].splice(index, 1);
      // If there are no more listeners for this type of event,
      // remove the window listener
      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }
  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }
  removeWindowListener(handle) {
    if (!handle) {
      return;
    }
    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }
  sendRetainedArgumentsForEvent(eventName) {
    const args = this.retainedEventArguments[eventName];
    if (!args) {
      return;
    }
    delete this.retainedEventArguments[eventName];
    args.forEach(arg => {
      this.notifyListeners(eventName, arg);
    });
  }
}
const WebView = /*#__PURE__*/registerPlugin('WebView');
/******** END WEB VIEW PLUGIN ********/
/******** COOKIES PLUGIN ********/
/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */
const encode = str => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
/**
 * Safely web decode a string value (inspired by js-cookie)
 * @param str The string value to decode
 */
const decode = str => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class CapacitorCookiesPluginWeb extends WebPlugin {
  getCookies() {
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const cookies = document.cookie;
      const cookieMap = {};
      cookies.split(';').forEach(cookie => {
        if (cookie.length <= 0) return;
        // Replace first "=" with CAP_COOKIE to prevent splitting on additional "="
        let [key, value] = cookie.replace(/=/, 'CAP_COOKIE').split('CAP_COOKIE');
        key = decode(key).trim();
        value = decode(value).trim();
        cookieMap[key] = value;
      });
      return cookieMap;
    })();
  }
  setCookie(options) {
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Safely Encoded Key/Value
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value);
        // Clean & sanitize options
        const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is "; expires="
        const path = (options.path || '/').replace('path=', ''); // Default is "path=/"
        const domain = options.url != null && options.url.length > 0 ? `domain=${options.url}` : '';
        document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}; ${domain};`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  deleteCookie(options) {
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  clearCookies() {
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cookies = document.cookie.split(';') || [];
        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  clearAllCookies() {
    var _this4 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
}
const CapacitorCookies = registerPlugin('CapacitorCookies', {
  web: () => new CapacitorCookiesPluginWeb()
});
// UTILITY FUNCTIONS
/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */
const readBlobAsBase64 = /*#__PURE__*/function () {
  var _ref6 = (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        // remove prefix "data:application/pdf;base64,"
        resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(blob);
    });
  });
  return function readBlobAsBase64(_x) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * Normalize an HttpHeaders map by lowercasing all of the values
 * @param headers The HttpHeaders object to normalize
 */
const normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
/**
 * Builds a string of url parameters that
 * @param params A map of url parameters
 * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
 */
const buildUrlParams = (params, shouldEncode = true) => {
  if (!params) return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;
    if (Array.isArray(value)) {
      item = '';
      value.forEach(str => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      });
      // last character will always be "&" so slice it off
      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }
    return `${accumulator}&${item}`;
  }, '');
  // Remove initial "&" from the reduce
  return output.substr(1);
};
/**
 * Build the RequestInit object based on the options passed into the initial request
 * @param options The Http plugin options
 * @param extra Any extra RequestInit values
 */
const buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({
    method: options.method || 'GET',
    headers: options.headers
  }, extra);
  // Get the content-type
  const headers = normalizeHttpHeaders(options.headers);
  const type = headers['content-type'] || '';
  // If body is already a string, then pass it through as-is.
  if (typeof options.data === 'string') {
    output.body = options.data;
  }
  // Build request initializers based off of content-type
  else if (type.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }
    output.body = params.toString();
  } else if (type.includes('multipart/form-data') || options.data instanceof FormData) {
    const form = new FormData();
    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }
    output.body = form;
    const headers = new Headers(output.headers);
    headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary
    output.headers = headers;
  } else if (type.includes('application/json') || typeof options.data === 'object') {
    output.body = JSON.stringify(options.data);
  }
  return output;
};
// WEB IMPLEMENTATION
class CapacitorHttpPluginWeb extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get('content-type') || '';
      // Default to 'text' responseType so no parsing happens
      let {
        responseType = 'text'
      } = response.ok ? options : {};
      // If the response content-type is json, force the response to be json
      if (contentType.includes('application/json')) {
        responseType = 'json';
      }
      let data;
      let blob;
      switch (responseType) {
        case 'arraybuffer':
        case 'blob':
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;
        case 'json':
          data = yield response.json();
          break;
        case 'document':
        case 'text':
        default:
          data = yield response.text();
      }
      // Convert fetch headers to Capacitor HttpHeaders
      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    })();
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */
  get(options) {
    var _this5 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.request(Object.assign(Object.assign({}, options), {
        method: 'GET'
      }));
    })();
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */
  post(options) {
    var _this6 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.request(Object.assign(Object.assign({}, options), {
        method: 'POST'
      }));
    })();
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */
  put(options) {
    var _this7 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.request(Object.assign(Object.assign({}, options), {
        method: 'PUT'
      }));
    })();
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */
  patch(options) {
    var _this8 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.request(Object.assign(Object.assign({}, options), {
        method: 'PATCH'
      }));
    })();
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */
  delete(options) {
    var _this9 = this;
    return (0,_Users_rodrigo_Desktop_Ionic_BrMetal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.request(Object.assign(Object.assign({}, options), {
        method: 'DELETE'
      }));
    })();
  }
}
const CapacitorHttp = registerPlugin('CapacitorHttp', {
  web: () => new CapacitorHttpPluginWeb()
});
/******** END HTTP PLUGIN ********/



/***/ }),

/***/ 1064:
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/filter-bar/filter-bar.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-item ion-chip {
  --background: var(--ion-color-primary);
  font-size: smaller;
  color: white;
}
ion-item ion-chip ion-icon {
  color: white;
}
ion-item ion-button {
  --background: var(--ion-color-primary);
  color: white;
}`, "",{"version":3,"sources":["webpack://./src/app/componentes/filter-bar/filter-bar.component.scss"],"names":[],"mappings":"AACI;EACE,sCAAA;EACA,kBAAA;EACA,YAAA;AAAN;AACM;EACE,YAAA;AACR;AAEI;EACE,sCAAA;EACA,YAAA;AAAN","sourcesContent":["ion-item{\n    ion-chip{\n      --background: var(--ion-color-primary);\n      font-size: smaller;\n      color: white;\n      ion-icon {\n        color: white;\n      }\n    }\n    ion-button {\n      --background: var(--ion-color-primary);\n      color: white;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9508:
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/grape-grid/grape-grid.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `table {
  font-family: var(--ion-font-family, inherit);
  border: solid 1px gray;
  display: block;
  overflow-x: auto;
  font-size: small;
}
table td {
  padding: 0px 0px 0px 5px;
}
table th {
  padding: 0px 0px 0px 5px;
}

tr:hover {
  background-color: lightblue;
}

/* 
thead, tbody{
    display: block;
    tr{
        overflow: scroll;
        border: solid 1px  gray;
    }
    overflow-x: auto;
}
 */
.row {
  background: white;
  height: 30px !important;
  vertical-align: middle;
}

.rowdif {
  background: #8597ff;
  color: black !important;
  height: 30px !important;
  vertical-align: middle;
}

.naoMostra {
  display: none;
}

.mostra {
  display: table-cell;
}

.example-viewport {
  min-width: 100%;
  min-height: calc(100vh - 82.5px);
}

.inativo {
  color: red;
  text-decoration: line-through;
}

.ativo {
  color: blue;
}

.trheader {
  font-size: medium;
  border: 1px solid black;
}

.col_right {
  text-align: right;
}

.col_left {
  text-align: left;
}

.col_center {
  text-align: center;
}

tbody, thead {
  display: block;
}

ion-content {
  height: 100% !important;
}`, "",{"version":3,"sources":["webpack://./src/app/componentes/grape-grid/grape-grid.component.scss"],"names":[],"mappings":"AAAA;EACI,4CAAA;EACA,sBAAA;EAWG,cAAA;EACA,gBAAA;EAGH,gBAAA;AAXJ;AAHI;EAGI,wBAAA;AAGR;AADI;EAGO,wBAAA;AACX;;AAOA;EAAU,2BAAA;AAHV;;AAKA;;;;;;;;;EAAA;AAUA;EAEC,iBAAA;EACA,uBAAA;EACA,sBAAA;AAHD;;AAKA;EAEI,mBAAA;EACA,uBAAA;EACA,uBAAA;EACA,sBAAA;AAHJ;;AAMA;EACI,aAAA;AAHJ;;AAMA;EACI,mBAAA;AAHJ;;AAMC;EAEI,eAAA;EAEH,gCAAA;AALF;;AAQA;EACI,UAAA;EACA,6BAAA;AALJ;;AASA;EACI,WAAA;AANJ;;AASA;EACI,iBAAA;EACJ,uBAAA;AANA;;AAYA;EACA,iBAAA;AATA;;AAYA;EACI,gBAAA;AATJ;;AAWA;EACI,kBAAA;AARJ;;AAWE;EAEE,cAAA;AATJ;;AAWA;EACI,uBAAA;AARJ","sourcesContent":["table{\n    font-family: var(--ion-font-family, inherit);\n    border: solid 1px gray;\n    td {\n     //  border-left: solid 1px gray;\n      // border-right: solid 1px gray;\n        padding: 0px 0px 0px 5px;;\n    }\n    th {\n        //  border-left: solid 1px gray;\n         // border-right: solid 1px gray;\n           padding: 0px 0px 0px 5px;;\n       }\n       display: block;\n       overflow-x: auto;\n\n\n    font-size: small;\n}\ntr:hover {background-color: lightblue\n}\n/* \nthead, tbody{\n    display: block;\n    tr{\n        overflow: scroll;\n        border: solid 1px  gray;\n    }\n    overflow-x: auto;\n}\n */\n.row{\n  //  border: solid 1px  black;\n background: white;\n height: 30px  !important;\n vertical-align: middle;\n}\n.rowdif{\n   //  border: solid 1px  black;\n    background:#8597ff;\n    color: black !important;\n    height: 30px !important;\n    vertical-align: middle\n}\n\n.naoMostra {\n    display: none;\n}\n\n.mostra {\n    display:table-cell;\n}\n\n .example-viewport {\n\n     min-width: 100%;\n  //  min-height: calc(100vh - 132px)\n  min-height: calc(100vh - 82.5px)\n    } \n\n.inativo{\n    color: red;\n    text-decoration: line-through;\n\n}\n\n.ativo{\n    color: blue,\n}\n\n.trheader{\n    font-size: medium;\nborder: 1px solid black;\n\n\n}\n\n\n.col_right{\ntext-align: right;\n}\n\n.col_left{\n    text-align: left;\n}\n.col_center{\n    text-align: center;\n}\n\n  tbody, thead{\n    \n    display: block;\n} \nion-content {\n    height: 100% !important;\n  \n  }\n\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1438:
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/grape-header/grape-header.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.filhos {
  padding-left: 30px;
}

ion-title {
  font-size: 15px;
}

.visivel {
  display: block;
}

.naoVisivel {
  display: none;
}`, "",{"version":3,"sources":["webpack://./src/app/componentes/grape-header/grape-header.component.scss"],"names":[],"mappings":"AAAA;EACG,kBAAA;AACH;;AACA;EACG,eAAA;AAEH;;AACA;EACG,cAAA;AAEH;;AACA;EACG,aAAA;AAEH","sourcesContent":[".filhos {\n   padding-left: 30px;\n}\nion-title{\n   font-size: 15px;\n}\n\n.visivel {\n   display: block;\n}\n\n.naoVisivel {\n   display: none;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7802:
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/grape-item/grape-item.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-card {
  border-color: white;
  font-size: 20px;
  color: gray;
  background-color: white;
}

.visivel {
  display: block;
}

.naoVisivel {
  display: none;
}`, "",{"version":3,"sources":["webpack://./src/app/componentes/grape-item/grape-item.component.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,eAAA;EACA,WAAA;EACA,uBAAA;AACJ;;AAEA;EACI,cAAA;AACJ;;AAEC;EACG,aAAA;AACJ","sourcesContent":["ion-card{\n    border-color: white;\n    font-size: 20px;\n    color: gray;\n    background-color: white;\n}\n\n.visivel {\n    display: block;\n }\n \n .naoVisivel {\n    display: none;\n }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7942:
/*!*********************************************************************!*\
  !*** ./src/app/componentes/header/header.component.scss?ngResource ***!
  \*********************************************************************/
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

/***/ 1246:
/*!*******************************************************************************************!*\
  !*** ./src/app/componentes/lista-objeto-grid/lista-objeto-grid.component.scss?ngResource ***!
  \*******************************************************************************************/
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

/***/ 8066:
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/relation1to1/relation1to1.component.scss?ngResource ***!
  \*********************************************************************************/
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

/***/ 9914:
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/filter-bar/filter-bar.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<form #form=\"ngForm\">\n  <ion-item>\n    <ion-select [(ngModel)]=\"Form.itemFiltro\" name=\"itemFiltro\" interface=\"popover\">\n      <ion-select-option *ngFor=\"let h of filtrosDef?.filters\" [value]=\"h.id\">{{h.label}}</ion-select-option>\n    </ion-select>\n\n    <ion-input width=\"50px\" type=\"text\" placeholder=\"Digite aqui seu filtro\" [(ngModel)]=\"filterContent\"\n      name=\"filterContent\"></ion-input>\n\n    <ion-buttons slot=\"end\">\n<!--      <ion-button (click)=\"addFilter()\" shape=\"round\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>-->\n      <ion-chip *ngFor=\"let f of gridFilters\">{{ f.label }}: {{ f.content }} <ion-icon name=\"close\"\n          (click)=\"removeFiltro(gridFilters.indexOf(f))\"> </ion-icon>\n      </ion-chip>\n      <ion-chip *ngIf=\"gridFilters.length > 1\">\n        <ion-label>Limpar filtros</ion-label>\n        <ion-icon name=\"close\" (click)=\"removeFiltro(-1)\"></ion-icon>\n      </ion-chip>\n      <ion-button (click)=\"filtra(gridFilters)\" shape=\"round\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-button>\n      <ion-badge *ngIf=\"this.quantidade > 0\" slot=\"end\" color=\"primary\" mode=\"ios\">{{this.quantidade}}</ion-badge>\n    </ion-buttons>\n\n  </ion-item>\n</form>";

/***/ }),

/***/ 9878:
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/grape-grid/grape-grid.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--   <ion-item>\n    <ion-label>Filtros</ion-label>\n    <ion-select (ionChange)=\"filter($event)\" interface=\"popover\" >\n      <ion-select-option  *ngFor=\"let h of gridDef?.filters\"  [value]=\"h.id\">{{h.label}}</ion-select-option>\n    </ion-select>\n    <ion-input (ionBlur)=\"addFilter()\"  type=\"text\" placeholder=\"Digite aqui seu filtro\" [(ngModel)]=\"filterContent\" name=\"filterContent\"></ion-input>\n    <ion-icon (click)=\"addFilter()\"  name=\"add\"></ion-icon>\n    <ion-chip *ngFor=\"let f of gridFilters\">{{ f.label }}: {{ f.content }} <ion-icon name=\"close\" (click)=\"removeFiltro(gridFilters.indexOf(f))\"> </ion-icon></ion-chip>\n    <ion-chip *ngIf=\"gridFilters.length > 1\">Limpar filtros <ion-icon name=\"close\" (click)=\"removeFiltro(-1)\" > </ion-icon></ion-chip>\n    <ion-icon (click)=\"listaGrid()\" slot=\"end\" name=\"search-outline\"></ion-icon>\n\n  </ion-item>\n -->\n\n<ion-header>\n\n  <form #form=\"ngForm\">\n    <ion-item *ngIf=\"gridList?.grids.length > 1\">\n      <ion-select [(ngModel)]=\"Form.idGrid\" name=\"idGrid\" interface=\"popover\" (ionChange)=\"this.getGridDef()\">\n        <ion-select-option *ngFor=\"let h of gridList?.grids\" [value]=\"h.id\">{{h.label}}</ion-select-option>\n      </ion-select>\n      <ion-buttons slot=\"end\">\n        <ion-button *ngIf=\"this.update\" (click)=\"abreCadastro('_insert',0,true)\">\n          <ion-icon color=\"primary\" slot=\"icon-only\" name=\"add\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n\n\n  </form>\n  <app-filter-bar [filtros]=\"this.gridDef\" [callbackFunction]=\"listaGrid.bind(this)\"\n    [quantidade]=\"this.gridData?.length\"></app-filter-bar>\n</ion-header>\n\n<ion-content>\n\n  <!--   <table width=\"100%\">\n    <cdk-virtual-scroll-viewport itemSize=\"30\" class=\"example-viewport\">\n    <thead>\n    <tr >\n      <th [class]=\"(h.type=='number'&&h.decimals=='2')?h.hidden?'naoMostra col_right':'mostra col_right':h.hidden?'naoMostra col_center':'mostra col_center'\" [width]=\"(h.size*100/this.tamanhoCampos) + '%'\" (click)=\"ordena(h.id)\"\n        *ngFor=\"let h of gridDef?.columns\">{{h.label}}\n        <ion-icon *ngIf=\"colOrdId == h.id && colOrdAD == 'D'\" name=\"caret-down-outline\"></ion-icon>\n        <ion-icon *ngIf=\"colOrdId == h.id && colOrdAD == 'A'\" name=\"caret-up-outline\"></ion-icon>\n      </th>\n      <th  >\n        <ion-buttons >\n          <ion-button  size=\"small\"\n            fill=\"clear\">\n            <ion-icon ></ion-icon>\n\n          </ion-button>\n        </ion-buttons>\n\n      \n      </th> \n    </tr>\n  </thead>\n\n\n<tbody >\n\n    <tr (click)=\"objetoCadastro('_get',item.codigo,i)\" [class]=\"i % 2 == 0?'rowdif':'row'\"\n        [style]=\"item.Ativo==2?'color: red; text-decoration: line-through':'color: blue'\"\n        *cdkVirtualFor=\"let item of gridData; let i = index\">\n    \n\n          <td *ngFor=\"let cmp of this.gridDef?.columns\"    [width]=\"(cmp.size*100/this.tamanhoCampos) + '%'\"\n          [class]=\"(cmp.type=='number'&&cmp.decimals=='2')?cmp.hidden?'naoMostra col_right':'mostra col_right':cmp.hidden?'naoMostra col_left':'mostra col_left'\" >{{this.gen.formataCampoSaida(item[cmp.id], cmp.type, cmp.decimals)}} </td>\n       \n \n        <td >\n          <ion-buttons *ngIf=\"this.update\">\n            <ion-button (click)=\"objetoCadastro('_get',item.codigo,i)\" size=\"small\" fill=\"clear\">\n              <ion-icon name=\"create-outline\"></ion-icon>\n\n            </ion-button>\n            <ion-button (click)=\"objetoCadastro(item.Ativo==1?'_inactivate':'_activate',item.codigo)\" size=\"small\"\n              fill=\"clear\">\n              <ion-icon [name]=\"item.Ativo==1?'close':'refresh-outline'\"></ion-icon>\n\n            </ion-button>\n          </ion-buttons>\n\n        </td>\n      </tr>\n\n    </tbody>\n  </cdk-virtual-scroll-viewport>\n\n    </table> -->\n\n  <table width=\"100%\">\n    <tr>\n      <th\n        [class]=\"(h.type=='number'&&h.decimals=='2')?h.hidden?'naoMostra col_right':'mostra col_right':h.hidden?'naoMostra col_center':'mostra col_center'\"\n        [width]=\"(h.size*100/this.tamanhoCampos) + '%'\" (click)=\"ordena(h.id)\" *ngFor=\"let h of gridDef?.columns\">\n        {{h.label}}\n        <ion-icon *ngIf=\"colOrdId == h.id && colOrdAD == 'D'\" name=\"caret-down-outline\"></ion-icon>\n        <ion-icon *ngIf=\"colOrdId == h.id && colOrdAD == 'A'\" name=\"caret-up-outline\"></ion-icon>\n      </th>\n      <th>\n        <ion-buttons>\n          <ion-button size=\"small\" fill=\"clear\">\n            <ion-icon></ion-icon>\n\n          </ion-button>\n        </ion-buttons>\n\n\n      </th>\n    </tr>\n\n    <tr (click)=\"(!noAction(item._noAction,'_update'))?objetoCadastro('_getJSON',item.codigo,i):''\"\n      [class]=\"i % 2 == 0?'rowdif':'row'\"\n      [style]=\"item.Ativo==2?'color: red; text-decoration: line-through':'color: blue'\"\n      *ngFor=\"let item of gridData; let i = index\">\n\n\n      <td *ngFor=\"let cmp of this.gridDef?.columns\" [width]=\"(cmp.size*100/this.tamanhoCampos) + '%'\"\n        [class]=\"(cmp.type=='number'&&cmp.decimals=='2')?cmp.hidden?'naoMostra col_right':'mostra col_right':cmp.hidden?'naoMostra col_left':'mostra col_left'\">\n        {{this.gen.formataCampoSaida(item[cmp.id], cmp.type, cmp.decimals)}} </td>\n\n\n      <td>\n        <ion-buttons *ngIf=\"this.update\" slot=\"end\">\n          <ion-button (click)=\"objetoCadastro('_get',item.codigo,i)\" size=\"small\" fill=\"clear\">\n            <ion-icon name=\"create-outline\"></ion-icon>\n\n          </ion-button>\n          <ion-button (click)=\"objetoCadastro(item.Ativo==1?'_inactivate':'_activate',item.codigo)\" size=\"small\"\n            fill=\"clear\">\n            <ion-icon [name]=\"item.Ativo==1?'close':'refresh-outline'\"></ion-icon>\n\n          </ion-button>\n        </ion-buttons>\n        <ion-buttons>\n          <ion-button *ngIf=\"this.geraPedido[0] && (!noAction(item._noAction,'_geraPedido'))\"\n            (click)=\"objetoCadastro('_geraPedido',item.codigo,i,false, $event)\" size=\"small\" fill=\"clear\">\n            <ion-icon name=\"checkmark\"></ion-icon>\n\n          </ion-button>\n          <ion-button *ngIf=\"this.geraPedido[0] && (noAction(item._noAction,'_geraPedido'))\" size=\"small\" fill=\"clear\">\n            <ion-icon></ion-icon>\n\n          </ion-button>\n          <ion-button *ngIf=\"this.geraOrcamento[0] && (!noAction(item._noAction,'_geraOrcamento'))\"\n          (click)=\"objetoCadastro('_geraOrcamento',item.codigo,i,false, $event)\" size=\"small\" fill=\"clear\">\n          <ion-icon name=\"copy-outline\"></ion-icon>\n\n        </ion-button>\n        <ion-button *ngIf=\"this.geraOrcamento[0] && (noAction(item._noAction,'_geraOrcamento'))\" size=\"small\" fill=\"clear\">\n          <ion-icon></ion-icon>\n\n        </ion-button>\n          <ion-button *ngIf=\"this.mail[0] && (!noAction(item._noAction,'_email'))\"\n            (click)=\"objetoCadastro('_email',item.codigo,i,false, $event)\" size=\"small\" fill=\"clear\">\n            <ion-icon name=\"mail\">\n            </ion-icon>\n          </ion-button>\n          <ion-button *ngIf=\"this.mail[0] && (noAction(item._noAction,'_email'))\"\n            (click)=\"objetoCadastro('_email',item.codigo,i,false, $event)\" size=\"small\" fill=\"clear\">\n            <ion-icon>\n            </ion-icon>\n          </ion-button>\n          <ion-button *ngIf=\"this.view[0] && (!noAction(item._noAction,'_view'))\"\n            (click)=\"objetoCadastro('_view',item.codigo,i,false, $event)\" size=\"small\" fill=\"clear\">\n            <ion-icon name=\"eye\"></ion-icon>\n            <ion-label></ion-label>\n          </ion-button>\n          <ion-button *ngIf=\"this.view[0] && (noAction(item._noAction,'_view'))\"\n            (click)=\"objetoCadastro('_view',item.codigo,i,false, $event)\" size=\"small\" fill=\"clear\">\n            <ion-icon></ion-icon>\n            <ion-label></ion-label>\n          </ion-button>\n          <ion-button *ngIf=\"this.inactivate[0] && (!noAction(item._noAction,'_inactivate'))\"\n            (click)=\"objetoCadastro('_inactivate',item.codigo,i,false, $event)\" size=\"small\" fill=\"clear\">\n            <ion-icon name=\"close\"></ion-icon>\n            <ion-label></ion-label>\n          </ion-button>\n          <ion-button *ngIf=\"this.inactivate[0] && (noAction(item._noAction,'_inactivate'))\"\n            (click)=\"objetoCadastro('_inactivate',item.codigo,i,false, $event)\" size=\"small\" fill=\"clear\">\n            <ion-icon></ion-icon>\n            <ion-label></ion-label>\n          </ion-button>\n        </ion-buttons>\n\n      </td>\n    </tr>\n\n\n  </table>\n\n\n\n\n\n\n\n  <!-- \n      <ion-grid class=\"titulo\">\n        <ion-row >\n           <ion-col [class]=\"(h.type=='number'&&h.decimals=='2')?h.hidden?'naoMostra col_right':'mostra col_right':h.hidden?'naoMostra col_center':'mostra col_center'\" [size]=\"(h.size*100/this.tamanhoCampos) + '%'\" (click)=\"ordena(h.id)\"\n             *ngFor=\"let h of gridDef?.columns\">{{h.label}}\n             <ion-icon *ngIf=\"colOrdId == h.id && colOrdAD == 'D'\" name=\"caret-down-outline\"></ion-icon>\n             <ion-icon *ngIf=\"colOrdId == h.id && colOrdAD == 'A'\" name=\"caret-up-outline\"></ion-icon>\n           </ion-col>\n           <ion-col  >\n             <ion-buttons >\n               <ion-button  size=\"small\"\n                 fill=\"clear\">\n                 <ion-icon ></ion-icon>\n     \n               </ion-button>\n             </ion-buttons>\n     \n           \n           </ion-col> \n         </ion-row>\n     \n         <ion-row (click)=\"objetoCadastro('_get',item.codigo,i)\" [class]=\"i % 2 == 0?'rowdif':'row'\"\n             [style]=\"item.Ativo==2?'color: red; text-decoration: line-through':'color: blue'\"\n             *ngFor=\"let item of gridData; let i = index\">\n         \n     \n               <ion-col *ngFor=\"let cmp of this.gridDef?.columns\"    [size]=\"(cmp.size*100/this.tamanhoCampos) + '%'\"\n               [class]=\"(cmp.type=='number'&&cmp.decimals=='2')?cmp.hidden?'naoMostra col_right':'mostra col_right':cmp.hidden?'naoMostra col_left':'mostra col_left'\" >{{this.gen.formataCampoSaida(item[cmp.id], cmp.type, cmp.decimals)}} </ion-col>\n            \n      \n             <ion-col >\n               <ion-buttons *ngIf=\"this.update\">\n                 <ion-button (click)=\"objetoCadastro('_get',item.codigo,i)\" size=\"small\" fill=\"clear\">\n                   <ion-icon name=\"create-outline\"></ion-icon>\n     \n                 </ion-button>\n                 <ion-button (click)=\"objetoCadastro(item.Ativo==1?'_inactivate':'_activate',item.codigo)\" size=\"small\"\n                   fill=\"clear\">\n                   <ion-icon [name]=\"item.Ativo==1?'close':'refresh-outline'\"></ion-icon>\n     \n                 </ion-button>\n               </ion-buttons>\n     \n             </ion-col>\n           </ion-row>\n     \n     \n         </ion-grid> -->\n</ion-content>";

/***/ }),

/***/ 6880:
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/grape-header/grape-header.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "  <div *ngFor=\"let h of grape\">\n    <ion-item>\n      <ion-buttons>\n        <ion-button slot=\"start\" size=\"small\" fill=\"clear\" (click)=\"mostra(h)\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-label >{{h.content}} - {{h.qty}}{{h.title}}</ion-label>\n<!--       (click)=\"carregaObjeto(h.id, grape.indexOf(h))\n -->    </ion-item>\n    <div class=\"filhos\">\n      <div *ngIf=\"h.mostrandoFilhos\">\n        <app-grape-header [class]=\"h.mostra?'visivel':'naoVisivel'\"  [objeto]=\"this.obj\" [header]=\"this.header\" [keyHeader]=\"h.keysHeaders\" [headerFilter]=\"filtro\"></app-grape-header> \n      </div>\n    </div>\n    <div>\n      <div *ngIf=\"h.mostrandoFilhos \">\n        <app-grape-item  [class]=\"h.mostra?'visivel':'naoVisivel'\" [objeto]=\"this.obj\" [header]=\"this.header\" [keyHeader]=\"h.keysHeaders\" [indice]=\"this.grape.indexOf(h)\"> </app-grape-item>\n      </div>\n    </div>\n ";

/***/ }),

/***/ 1680:
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/grape-item/grape-item.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div (click)=\"seleciona(h)\" *ngFor=\"let h of grapeItem\">\n  <ion-card >\n    <ion-item >\n    \n      <ion-checkbox>\n        \n      </ion-checkbox>\n    <ion-title >{{h.title}} - {{h.subTitle}}</ion-title>\n<ion-buttons slot=\"end\">\n  <ion-button (click)=\"objetoCadastro('_get',h.id)\" size=\"small\" fill=\"clear\">\n    <ion-icon name=\"create-outline\"></ion-icon>\n    \n  </ion-button>\n</ion-buttons>\n  </ion-item>\n  <div *ngIf=\"mostraDetalhe\">\n  <ion-label > Dados da Cidade</ion-label>\n\n  <ion-label > textos diversos</ion-label>\n  </div>\n  </ion-card>\n\n</div>\n";

/***/ }),

/***/ 1328:
/*!*********************************************************************!*\
  !*** ./src/app/componentes/header/header.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-header>\n  <ion-toolbar class=\"alturamenor\">\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"voltar()\">\n        <ion-icon\n          slot=\"icon-only\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons  class=\"alturamenor\" slot=\"start\">\n      <ion-menu-button class=\"alturamenor\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons class=\"alturamenor\" slot=\"end\">\n      <ion-button class=\"alturamenor\" >\n        <ion-icon slot=\"icon-only\" name=\"chatbubble-ellipses-outline\">\n        </ion-icon>\n        <ion-badge  top color=\"danger\">0</ion-badge>\n\n        <!-- <ion-badge *ngIf=\"this.db.qtdNotificacoes > 0\" top color=\"danger\">{{ this.db.qtdNotificacoes }}</ion-badge> -->\n      </ion-button>\n      <ion-button class=\"alturamenor\" >\n        <ion-icon slot=\"icon-only\" name=\"construct-outline\"></ion-icon>   \n\n        <!-- <ion-badge *ngIf=\"this.db.qtdNotificacoes > 0\" top color=\"danger\">{{ this.db.qtdNotificacoes }}</ion-badge> -->\n      </ion-button>\n    </ion-buttons>\n    <!--    <ion-buttons slot='start'>\n        <img [src]=\"logo\" class=\"logo\" />\n    </ion-buttons>-->\n    <ion-title>{{nomePagina}}</ion-title>\n<!--    <ion-title size=\"small\">Logidados Informática Ltda</ion-title>  -->\n  </ion-toolbar>\n \n</ion-header>\n";

/***/ }),

/***/ 1464:
/*!*******************************************************************************************!*\
  !*** ./src/app/componentes/lista-objeto-grid/lista-objeto-grid.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid></ion-grid>\n\n<ion-grid fixed *ngIf=\"obj\">\n  <ion-row>\n    <ion-col class=\"ion-align-items-center\" size=3 *ngFor=\"let item of this.atributosObj\">\n      {{item}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngFor=\"let item of obj\">\n\n    <ion-col size=3 *ngFor=\"let cmp of getListaArray(item)\">\n      {{cmp}} {{item.name}}\n    </ion-col>\n  </ion-row>\n\n  <ion-header (click)=\"_listHeader()\"></ion-header>\n  <ion-list>\n\n  </ion-list>\n\n  <ion-row class=\"ion-align-items-center\" *ngFor=\"let item of obj\">\n    <ion-col *ngFor=\"let cmp of this.atributosObj\">{{item[cmp]}}</ion-col>\n    <app-lista-objeto-grid [objeto]=\"item.header\"></app-lista-objeto-grid>\n\n  </ion-row>\n</ion-grid>";

/***/ }),

/***/ 9872:
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/relation1to1/relation1to1.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-button fill=\"clear\"  slot=\"start\">\n  <ion-label>{{ getConteudo1to1() }}</ion-label>\n  <ion-icon slot=\"icon-only\" [name]=\"icon\"></ion-icon>\n</ion-button>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_componentes_components_module_ts.js.map