import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/api/app.service';
import { CadastroPage } from 'src/app/pages/cadastro/cadastro.page';
import { DbService } from 'src/app/storage/db.service';

@Component({
  selector: 'app-grape-item',
  templateUrl: './grape-item.component.html',
  styleUrls: ['./grape-item.component.scss'],
})
export class GrapeItemComponent implements OnInit {
  @Input('objeto') obj: any;
  @Input('header') header: any;
  @Input('keyHeader') keyHeader: any;
  @Input('indice') indice: any;

  public keysHeaders: any[]
  // public mostra: boolean = false
  public filtro: string
  public grapeHeader: any
  public grapeItem: any
  public grape: any[]
  public headerFilter: any
public grape2: any
  public mostraDetalhe: boolean

  constructor(
    public svcApp: AppService,
    public db: DbService,
    public cad: CadastroPage,
    public mc: ModalController) { }

  ngOnInit() {
    console.log(this.obj)
    this.objeto('_listHeader')
    
  }
  objeto(actionobj: string) {
    console.log(this.grapeItem)
    console.log(this.db.grapeDb)

        this.svcApp.GetObjeto(
          this.obj,
          {
            token: this.db.getToken(),
            action: actionobj,
            idHeader: this.header,
            keysHeader: this.keyHeader
          }
        ).subscribe(

          (ret) => {
            console.log(ret)


            if (ret[this.obj].items) {
              this.grapeItem = ret[this.obj].items;
            }
          }
          ,
          (err) => this.db.escondeProcessando(err.error)
        )
      }
  

  async objetoCadastro(act: string, codigos?: number) {
    console.log(act)

    this.svcApp.GetObjeto(
      this.obj,
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
        const retCadastro = this.cad.cadastro(this.grape2, this.obj);
        

      },
      (err) => this.db.escondeProcessando(err.error)
    )


  }
  seleciona(obj: any) {
    this.mc.dismiss({
      status: true,
      evento: obj,
    });
  }
}
