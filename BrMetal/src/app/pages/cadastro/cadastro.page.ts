import { ActivatedRoute, Router } from '@angular/router';
import { listaCadastroPage } from './../listaCadastro/listaCadastro.page';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { AppService } from 'src/app/api/app.service';
import { DbService } from 'src/app/storage/db.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  @Input() grapeCadastro: any;
  @Input() pagina: any;
  @Input() idGrid: any;
  @Input() update: boolean;


  public grape2: any;


  public item: { codigo: number, name: string }
public state:{}
  public _PAGINA: string
  public array: any[] = []
  public obj: any
  public btnLabel: string


  constructor(
    private mc: ModalController,
    public svcApp: AppService,
public Router: Router,
    public db: DbService,
          public navParams: NavParams,
    public nav: NavController
  ) {
} 
ngOnInit(){


}
  ionViewWillEnter(){
   
  
console.log(history.state)
    let dados = history.state
this.grapeCadastro = dados.grapeCadastro
this.pagina = dados.pagina
this.idGrid = dados.idGrid
this.update = dados.update
    this._PAGINA = this.pagina
    this.svcApp.GetObjeto(
      this._PAGINA,
      {
        token: this.db.getToken()
      }
    ).subscribe(

      (ret) => {
        console.log(ret)
        this.obj = ret;
        console.log(this.obj)
        if (this.grapeCadastro) {
          this.btnLabel = "Alterar"
          console.log(this.obj.fields)

          this.grape2 = this.grapeCadastro[this._PAGINA];
          console.log(this.grapeCadastro)
        }
        else {
          this.btnLabel = "Incluir"
          this.grape2 = [{ ativo: "1" }]
          console.log(this.obj.fields)
          this.obj.fields.forEach(cmp => {
            this.grape2[0][cmp.campo] = ''

          });
          this.grape2[0]['ativo'] = "1"
          console.log(this.grape2)
        }

      },
      (err) => this.db.escondeProcessando(err.error)
    )


  }


  async cadastro(grape: any, pagina: string, idGrid?: any, update?: boolean) {
   ;

/*     console.log(grape)
    const modal = await this.mc.create({
      component: CadastroPage,
      componentProps: {
        grapeCadastro: grape,
        pagina: pagina,
        idGrid: idGrid,
        update: update
      },
    });


    await modal.present();
    return await modal.onWillDismiss(); */
  }


  async abreListaCadastro(pagina: string, otherField, value) {
    this.state = {
      filtroObrigatorio: otherField,
      valor: value,
      
    }
this.Router.navigate(['listaCadastro/'+pagina],{ state: this.state } )
/*     const modal = await this.mc.create({
      component: listaCadastroPage,
      componentProps: {
        pagina: pagina,
        filtroObrigatorio: otherField,
        valorFiltro: value

      },
    });


    await modal.present();
    return await modal.onWillDismiss(); */
  }


  getConteudo(json: any) {
    this.array = []
    json.forEach(el => {
      this.array.push({ codigo: el.codigo, name: el.label })



    });


    return this.array
    //JSON.stringify(json)
  }

  acao(grape: any, acao: string) {

    console.log(grape)

/*     this.svcApp.GetObjeto(
      this._PAGINA,
      {
        token: this.db.getToken(),
        action: acao,
        grape: this.grape2
      }
    ).subscribe(

      (ret) => {
        console.log(ret)

        if (ret.status){ */

       if (acao == '_update'){
        this.svcApp.GetObjeto(
          this._PAGINA,
          {
            token: this.db.getToken(),
            action: "_gridData",
            filters: {codigo: this.grape2[0].codigo},
            id: this.idGrid
          }
        ).subscribe(
          (ret) => { this.grape2 = ret.data
            this.mc.dismiss({
              status: true,
              grape: this.grape2
            })
          }
        )}
       else if (acao == '_insert'){
        this.mc.dismiss({
          status: true,
          grape: this.grape2
        })}
/*          this.svcApp.GetObjeto(
            this._PAGINA,
            {
              token: this.db.getToken(),
              action: "_gridData",
              id: this.idGrid
            }
          ).subscribe(
            (ret) => { 
              this.mc.dismiss({
                status: true,
                grape: ret.data
              })
            }
          )} */

        

/*  }
             },
      (err) => this.db.escondeProcessando(err.error)
    ) */
  }


  cancela() {

    this.nav.navigateBack('listaCadastro/'+this._PAGINA, {state: this.state})/* 
    console.log(this.mc)
    this.mc.dismiss({
      status: false,
    }); */
  }
  async listaObjeto(obj: string) {
    const modal = await this.mc.create({
      component: listaCadastroPage,
      componentProps: {
        pagina: obj,

      },
      cssClass: 'modal-css'
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  async selecionaObjeto(obj: string, id: number, campo: string) {
    console.log(obj, id, campo)
    const ret = await this.listaObjeto(
      obj
    );
    if (ret.data.status) {
      console.log(this.grape2)
      console.log(ret.data)
      console.log(this.grapeCadastro)
      this.grape2[0][campo] = (ret.data.evento["codigo"]);
      if (!this.grapeCadastro) { this.grapeCadastro = {} 
        this.grapeCadastro[obj] = {}}
      console.log( this.grapeCadastro)
      this.grapeCadastro[obj][ret.data.evento["codigo"]] = { descricao: ret.data.evento["descricao"], sigla: ret.data.evento["sigla"] }

      console.log(this.grape2)
      console.log(this.grapeCadastro)


      //this.grape2[0][]=(ret.data.evento["codi"]);
      console.log(ret.data.evento)
      //console.log(ret.data.evento["title"])
      // console.log(campo)

    }
  }
  conteudo(campo: string, event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('conteudo:', event.value);
    this.grape2[0][campo] = event.value.codigo
    console.log(this.grape2[0][campo])
    console.log(campo)
  }

  getConteudo1to1(og, codigo) {
    let result = ''
    for (var i in this.grapeCadastro[og][codigo])
      result += this.grapeCadastro[og][codigo][i] + ' '
    return result
  }
}
