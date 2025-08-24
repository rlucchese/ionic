import { NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { IdentificacaoPedidoPage } from './../identificacao-pedido/identificacao-pedido.page';
import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/storage/db.service';
import { AppService } from 'src/app/api/app.service';

@Component({
  selector: 'app-finaliza-expedicao',
  templateUrl: './finaliza-expedicao.page.html',
  styleUrls: ['./finaliza-expedicao.page.scss'],
})
export class FinalizaExpedicaoPage implements OnInit {

  public idPedido: number
  public volumes: number
  public itensPed: number
  public pesoLiq: number
  public pesoBruto: number
  public itensExped: number
  public obs: string
public fatura: boolean
public jsonExpedicao: any
public params: any
  constructor(public db:DbService, public router: Router, public route: ActivatedRoute, public svcApp: AppService ) {
    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
   //   console.log(getNav);
     // console.log('construiu')

      if (getNav.extras.state) {
         this.params = getNav.extras.state;
    //    console.log(this.params);

      }
    })
  }

  ngOnInit() {

  }

  ionViewDidEnter(){

   this.idPedido = this.params.pedido
   this.volumes = this.params.volumes
   this.pesoLiq = this.params.pesoLiq
   this.pesoBruto = this.params.pesoBruto
   this.itensExped = this.params.itensExpedidos
   this.itensPed = this.params.itensPedido
   this.jsonExpedicao = JSON.parse(this.params.json)
  }
finalizar(){
this.jsonExpedicao.extras = {volume: this.volumes,
                              pesoLiq:this.pesoLiq,
                            pesoBruto:this.pesoBruto,
                          itensExpedidos: this.itensExped,
                        obs: this.obs,
                      fatura: this.fatura}

  this.db.mostraProcessando()
this.svcApp.GetObjeto(
'PedidoVenda',
{
  action: "_setExpedicao",
 dados: this.jsonExpedicao,
 token: this.db.getToken()
}).subscribe((ret) => {
if (ret.status) {
  this.db.persiste('_delete', 'Expedicao', 'user').subscribe();
  this.db.persiste('_delete', 'Expedicao', 'global', this.idPedido+'').subscribe()
    this.router.navigate(['/expedicao'],{
    state:
    {
      limpaPedido: true
    }
  })
//  console.log(ret)
this.db.escondeProcessando()
} else {
  this.db.escondeProcessando()
 }
  },
  (err) => this.db.escondeProcessando(err.error)
 )

                      console.log(this.jsonExpedicao);


}
}
