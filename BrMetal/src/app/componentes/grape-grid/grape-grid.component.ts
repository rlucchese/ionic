import { NavigationExtras, Router } from '@angular/router';
import { GenericasService } from './../../funcoes/genericas.service';
import { Action } from './../../interface/brMetal';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AppService } from 'src/app/api/app.service';
import { CadastroPage } from 'src/app/pages/cadastro/cadastro.page';
import { DbService } from 'src/app/storage/db.service';
import {
  CdkVirtualScrollViewport,
  FixedSizeVirtualScrollStrategy,
} from '@angular/cdk/scrolling';
import { NavController, NavParams } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { VisualizaPedidoPage } from 'src/app/pages/visualiza-pedido/visualiza-pedido.page';
import { ModalValidaItensPage } from 'src/app/modal-valida-itens/modal-valida-itens.page';
export class Filter {
  label: string;
  field: string;
  content: string;
}

@Component({
  selector: 'app-grape-grid',
  templateUrl: './grape-grid.component.html',
  styleUrls: ['./grape-grid.component.scss'],
})
export class GrapeGridComponent
  extends FixedSizeVirtualScrollStrategy
  implements OnInit
{
  @Input('objeto') obj: any;
  @Input('definition') definition: any;
  @Input('filterDefault') filterDefault: any = null;
  @Input('listaDireto') listaDireto: any = true;

  @Input('indice') indice: any;
  @Input() callbackFunction: (args: any) => void;
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  viewport: CdkVirtualScrollViewport;

  public keysHeaders: any[];
  // public mostra: boolean = false
  public filtro: string;
  public grapeHeader: any;
  public grapeItem: any;
  public grape: any;
  public gridDef: any;
  /*   public headerFilter: any
   */ public gridFilter: any;
  public gridList: any;
  public gridData: any;
  public update: boolean;
  public mail: any[] = [];
  public inactivate: any[] = [];
  public geraPedido: any[] = [];
  public geraOrcamento: any[] = [];

  public view: any[] = [];
  public notUpdate: boolean;
  public notMail: any[] = [];
  public notGeraPedido: any[] = [];
  public notView: any[] = [];

  public gridFilters: Filter[] = [];

  public colOrdId = '';
  public colOrdAD = 'A';
  public filterContent: string;
  public Form = {
    idGrid: '',
  };
  public grape2: any;
  public mostraDetalhe: boolean;
  public filters: any = {};
  public tamanhoCampos: number;
  constructor(
    public svcApp: AppService,
    public db: DbService,
    public cad: CadastroPage,
    public router: Router,
    public navCtrl: NavController,
    public navParams: NavParams,
    public gen: GenericasService,
    public visPed: VisualizaPedidoPage,
    public modValida: ModalValidaItensPage
  ) {
    super(50, 250, 500);
  }

  ngOnInit() {
    console.log(this.obj);
    console.log(this.definition);
    /*     if (!this.keyHeader) this.keyHeader = []
     */ this.objeto('_gridList');
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
      this.definition.actions.forEach((element) => {
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
  noAction(noAction, action: string) {
    //console.log(noAction);

    let result = false;
    if (noAction) {
      noAction.forEach((el) => {
        if (el == action) {
          result = true;
        }
      });
    }
    return result;
  }

  objeto(actionobj: string, id?: any) {
    this.db.mostraProcessando();
    this.svcApp
      .GetObjeto(this.obj, {
        token: this.db.getToken(),
        action: actionobj,
        id: id,
      })
      .subscribe(
        (ret) => {
          console.log(ret);
          if (actionobj == '_gridList') {
            this.gridList = ret;
            //   console.log(this.gridList)
          } else {
            this.gridDef = ret;
            //   console.log(this.gridDef)
            this.tamanhoCampos = 0;

            this.gridDef.columns.forEach((col) => {
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
        },
        (err) => this.db.escondeProcessando(err.error)
      );
  }

  async objetoCadastro(
    act: string,
    codigos?: number,
    index: any = 0,
    update: boolean = true,
    evt?: Event
  ) {
    console.log(act);

    if (evt) evt.stopPropagation();

    let result = true;
    let msg = '';
    if (
      act === '_email' ||
      act === '_geraPedido' ||
      act === '_inactivate' ||
      act === '_geraOrcamento'
    ) {
      if (act === '_email') msg = 'Confirma envio de email?';
      if (act === '_inactivate')
        msg = 'Confirma a exclusao do ' + this.definition.label + ' ' + codigos;
      if (act === '_geraPedido') msg = 'Confirma Geração de Pedido?';
      if (act === '_geraOrcamento') msg = 'Confirma copia para novo Orçamento?';

      let confirm = await this.db.presentAlertConfirm('', msg);
      if (confirm.role === 'confirm') {
        result = true;
      } else {
        result = false;
      }
    }
    if (result) {
      this.db.mostraProcessando();

      this.svcApp
        .GetObjeto(this.obj, {
          token: this.db.getToken(),
          action: act,
          id: codigos,
        })
        .subscribe(
          (ret) => {
            if (ret.status == true) {
              //   console.log(ret)
              if (ret.msg) this.db.setMensagem(ret.msg);

              this.grape2 = ret;
              // console.log(this.grape2)
              if (act == '_getJSON' || act == '_getJSON') {
                this.abreOrcamento(
                  ret.cliente,
                  ret.itens,
                  ret.dadosAuxiliares,
                  true
                );
              }
              if (act == '_get' || act == '_insert') {
                this.abreCadastro(act, index, this.update);
              }
              if (act == '_view') {
                //this.abrePedido()
                if (ret.url) {
                  Browser.open({ url: ret.url }); // +'/'+ ret.tokenArquivo})
                } else {
                  this.objetoCadastro('_get', codigos, index, update);
                }
              }
              if (act === '_geraPedido') {
              }
              /*  else {
               this.listaGrid()
             } */
              this.listaGrid();
            } else if (ret.status == false) {
              if (act === '_geraPedido') {
                if (ret.itens) {
                const retorno = this.modValida.modalValidaItens(ret.itens, codigos).then((ret) => this.listaGrid());



                }
              }
            }

            this.db.escondeProcessando(ret.msg);
          },
          (err) => this.db.escondeProcessando(err.error)
        );
    }
  }

  async abreCadastro(act, index, update) {
    this.router.navigate(['cadastro'], {
      replaceUrl: true,
      state: {
        grapeCadastro: this.grape2,
        pagina: this.obj,
        idGrid: this.Form.idGrid,
        update: update,
      },
    });
    console.log({
      grapeCadastro: this.grape2,
      pagina: this.obj,
      idGrid: this.Form.idGrid,
      update: update,
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
  }

  async abreOrcamento(cliente, itens, dadosAuxiliares, update) {
    this.router.navigate(['vendas/orcamento/identificacaoPedido'], {
      replaceUrl: true,
      state: {
        cliente: cliente,
        itens: itens,
        dadosAuxiliares: dadosAuxiliares,
        update: update,
      },
    });
  }

  listaGrid(gridFilters?: any) {
    //const size = this.viewport.checkViewportSize();
    this.db.mostraProcessando();

    console.log(gridFilters);
    if (gridFilters) {
      console.log(this.filters);
      this.filters = {};
      gridFilters.forEach((el) => {
        this.filters[el.field] = el.content;
      });
    }
    console.log(this.filterDefault);

    //    if (this.filterDefault == {}) {
    //    this.filters = this.filterDefault}
    console.log(this.filters);
    console.log(this.gridFilters);
    this.svcApp
      .GetObjeto(this.obj, {
        token: this.db.getToken(),
        action: '_gridData',
        filters: this.filters,
        id: this.Form.idGrid,
      })
      .subscribe(
        (ret) => {
          console.log(ret);
          this.gridData = ret.data;
        },
        (err) => this.db.escondeProcessando(err.error)
      );
    this.db.escondeProcessando();
  }

  ordena(idCol) {
    if (idCol != this.colOrdId || this.colOrdAD == 'D') this.colOrdAD = 'A';
    else this.colOrdAD = 'D';

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
        if (AD == 'A') return a[idCol].localeCompare(b[idCol]);
        else return b[idCol].localeCompare(a[idCol]);
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
      field: this.filtro,
    });
  }
  removeFiltro(index) {
    if (index == -1) this.gridFilters = [];
    else this.gridFilters.splice(index, 1);
  }

  seleciona(item) {
    this.callbackFunction(item);
  }

  getGridDef() {
    console.log('entrou');
    this.gridData = [];

    this.objeto('_gridDefinition', this.Form.idGrid);
  }
  async abrePedido() {
    const retAbrePedido = await this.visPed.abrePedido();
  }
}
