import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/api/app.service';
import { CadastroPage } from 'src/app/pages/cadastro/cadastro.page';
import { DbService } from 'src/app/storage/db.service';
interface header {
  action?: string
  id?: number
  ids?: number[]
  grape?: any
  idHeader?: string
  keysHeader?: string[]

}@Component({
  selector: 'app-grape-header',
  templateUrl: './grape-header.component.html',
  styleUrls: ['./grape-header.component.scss'],
})
export class GrapeTreeComponent implements OnInit {
  @Input('objeto') obj: any;
  @Input('header') header: any;
  @Input('keyHeader') keyHeader: any;
  @Input('indice') indice: number;
  @Input('headerFilter') headerFilter: string;


  public keysHeaders: any[]
  // public mostra: boolean = false
  public filtro: string
  public grapeHeader: any
  public grapeItem: any
  public grape: any[]
  public grid: boolean = false

  constructor(
    public svcApp: AppService,
    public db: DbService,
    public cad: CadastroPage,) { }

  ngOnInit() {


  }

  ngAfterViewChecked() {

    if (!this.keyHeader) this.keyHeader = []

    if ((this.filtro != this.header)) {
      /*      if (!(typeof this.indice === 'undefined') && !(typeof this.db.grapeDb[this.indice]['headers'] === 'undefined'))
              {this.grape = this.db.grapeDb[this.indice]['headers']  }
              else{ */

      this.objeto('_listHeader')
      /*     } */

    }
    this.filtro = this.header


  }


  objeto(actionobj: string) {

    console.log(this.keyHeader)
    console.log(this.indice >= 0)
    console.log(this.grape)





    this.svcApp.GetObjeto(
      this.obj,
      {
        token: this.db.getToken(),
        action: actionobj,
        idHeader: this.header,
        keysHeader: this.keyHeader,
        keyFilter: this.headerFilter
      }
    ).subscribe(

      (ret) => {
        console.log('ret - ', ret)
        /*         if (ret[this.obj].keysHeaders) this.keysHeaders = ret[this.obj].keysHeaders
                console.log('nivel', this.keysHeaders) */
        if (ret[this.obj].headers) {
          this.grapeHeader = ret[this.obj].headers;
 /*          if (this.indice >= 0) {
            this.db.grapeDb[this.indice]['headers'] = this.grapeHeader
            
           
          } else {
            this.db.grapeDb = this.grapeHeader
          } */
          this.grape = this.grapeHeader

          console.log('grapeDb - ', this.db.grapeDb)

        }

        /*  if (ret[this.obj].items) {
           this.grapeItem = ret[this.obj].items;
           if (this.indice >= 0) {
             this.db.grapeDb[this.indice]['items'] = this.grapeItem
             console.log(this.db.grapeDb)
           }
         } */
      }
      ,
      (err) => this.db.escondeProcessando(err.error)
    )


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
  mostra(h: any) {

//    this.indice = id
//    console.log(this.indice)

   if(!h['mostrandoFilhos']) {
    h['mostrandoFilhos'] = true
     h['mostra'] = true;
   } else {
     h['mostra'] = !h['mostra']
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



    console.log(this.grape)
    console.log(this.db.grapeDb)

/*     if (this.db.grapeDb[id]['mostra']) {
      this.db.grapeDb[id]['mostra'] = !this.db.grapeDb[id]['mostra']
    }
    else {
      this.db.grapeDb[id]['mostra'] = true
    } */
  }
}

