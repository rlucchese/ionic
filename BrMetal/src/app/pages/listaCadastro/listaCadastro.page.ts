import { CadastroPage } from 'src/app/pages/cadastro/cadastro.page';
import { ModalController, NavController, NavParams } from '@ionic/angular';

import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/api/app.service';
import { DbService } from 'src/app/storage/db.service';

@Component({
  selector: 'app-listaCadastro',
  templateUrl: './listaCadastro.page.html',
  styleUrls: ['./listaCadastro.page.scss'],

})
export class listaCadastroPage implements OnInit {
  @Input() pagina: string
  @Input() id: number
  @Input() valorFiltro: any 
  @Input() filtroObrigatorio: string 
  public idHeaderDefault: string
  public actions: any
  public header: any
  public grape: any;
  public grape2: any;
  public grapeHeader: any;
  public grapeHeader2: any;
  public grapes: any[] = []
  public filtro: string
  public headers: any[]
  public obj: any;
  public objStr: string
  public acao: string = "_list"
  public _PAGINA: string
  public grid: boolean = true
  public definition: any
  public mail: boolean 
public filtroPadrao: any = {}


  constructor(
    public svcApp: AppService,
    public db: DbService,
    private activatedRoute: ActivatedRoute,
    public mc: ModalController,
    public cad: CadastroPage,
    public nav: NavController,
    public navParams: NavParams,
  ) {
  } ngAfterViewInit() {

  }

  ngOnInit() {
    console.log(history.state)

    let dados = history.state
    if (dados.filtroObrigatorio){

    this.filtroObrigatorio = dados.filtroObrigatorio
    this.valorFiltro = dados.valor
    console.log(this.filtroObrigatorio)
  
    this.filtroPadrao[this.filtroObrigatorio]= this.valorFiltro
    console.log(this.filtroPadrao)
    console.log(this._PAGINA)}
    if (!this.pagina ){
      console.log(!this._PAGINA)
      this._PAGINA = this.activatedRoute.snapshot.paramMap.get('id')}
    else this._PAGINA = this.pagina
    console.log(this._PAGINA)
    if (!this.obj)
      this.svcApp.GetObjeto(
        this._PAGINA,
        {
          token: this.db.getToken()
        }
      ).subscribe(

        (ret) => {
          console.log(ret)
          this.actions = ret.actions
          this.obj = ret
          this.definition = ret
          this.headers = ret.headers;
          this.idHeaderDefault =  this.headers[0]?.id
          this.header = this.idHeaderDefault
  
        },
        (err) => this.db.escondeProcessando(err.error)
      )
    //  this.objeto("_listHeader",  "PaisEstado")
  }

  _headerFilter(evt) {

    //this.header =  evt.detail.value
   // console.log(this.header)

  }


  objeto(actionobj: string, header?: string, indice?: number) {
    this.svcApp.GetObjeto(
      this._PAGINA,
      {
        token: this.db.getToken(),
        action: actionobj,
        idHeader: header,

      }
    ).subscribe(

      (ret) => {


        console.log(ret)
        if (ret[this._PAGINA].headers) {
          this.grapeHeader = ret[this._PAGINA].headers;
          this.grapeHeader2 = ret[this._PAGINA].headers
          for (let index = 0; index < this.grapeHeader.length; index++) {
            const element = this.grapeHeader[index];
            this.grapes.push(element)

          }
          //console.log(element)


        }
        if (ret[this._PAGINA].data) {
          this.grape = ret[this._PAGINA].data;
          this.grape2 = ret[this._PAGINA].data
        }
        this.grapes[indice] = this.grape

          ;
        console.log(this.grapeHeader.headerFilter)
        console.log(this.grapes)
      },
      (err) => this.db.escondeProcessando(err.error)
    )

  }

  getConteudo(json: any) {
    //console.log(json)

    // let title = 'usuario';
    // let subTitle = 'tipoApontamento';
    //  return json[title] + '|' + json[subTitle]

    return JSON.stringify(json)
  }

 /*  async objetoCadastro(act: string, codigos?: number) {
    console.log(act)

    this.svcApp.GetObjeto(
      this._PAGINA,
      {
        token: this.db.getToken(),
        action: act,
        id: codigos
      }
    ).subscribe(
      (ret) => {
        //   console.log(ret)
        this.grape2 = ret;
        console.log(this.grape2)
        // console.log(this.grape2)
        const retCadastro = this.cad.cadastro(this.grape2, this._PAGINA);

      },
      (err) => this.db.escondeProcessando(err.error)
    )


  }
 */

seleciona(obj: any) {
  this.mc.dismiss({
    status: true,
    evento: obj,
  });
}
cancela() {
console.log(this.nav)
  this.nav.back()
}

 

}
