import { AlertController, NavController, Platform } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DbService } from 'src/app/storage/db.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/api/app.service';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-expedicao',
  templateUrl: './expedicao.page.html',
  styleUrls: ['./expedicao.page.scss'],
})
export class ExpedicaoPage implements OnInit {
  @ViewChild('inputcodigo') inputCodigo
  @ViewChild('inputPedido') inputPedido
  @ViewChild('inputQtEmbalagem') inputQtEmbalagem;

  public codigo: string
  public idPedido: string
  public numeroPedido: string
  public _PAGINA: string
  public obj: any
  public obj2: any
  public keyboard: boolean = false
  public inputDireto: boolean = true
  public qt: number = 1
  public qtEmbalagem: number
  public validacao: boolean = false
  public qtItens: number
  public qtItensExpedidos: number

  constructor(

    public route: ActivatedRoute, public alert: AlertController, public svcApp: AppService, public db: DbService, public router: Router, public nav: NavController



  ) {
//    this.numeroPedido = '';



    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
      console.log(getNav);
      console.log('construiu expedicao')

      if (getNav.extras.state) {
        if (getNav.extras.state.limpaPedido) {
          this.idPedido = '';
          this.numeroPedido = '';
          this.obj = null
          this.confirmaPedido()
        }
      }
    })
  }

  ngOnInit() {


  }
  ionViewDidEnter() {
    this.db.persiste('_get', 'Expedicao', 'user').subscribe(ret => {
      if (ret.status) {
        let obj = JSON.parse(ret.object)
        if(obj.id) {
        this.idPedido = obj.id
        // console.log(this.objetoPersistido);
        this.numeroPedido = obj.numero
        this.getItens()
        } else {
          this.idPedido = ''
          this.numeroPedido = ''
          this.obj = null
        }
      }
    },
      err => {

        console.log(err.error)
        this.db.escondeProcessando(err.error)
      })


    //console.log(this.db.objetoPersistido);
  }
  getItens() {
    this.db.persiste('_get', 'Expedicao', 'global', this.idPedido).subscribe(ret => {
      if (ret.status) {

        this.obj = JSON.parse(ret.object)
        console.log(this.obj);
      }
    },
      err => {

        console.log(err.error)
        this.db.escondeProcessando(err.error)
      })

  }
  confirmaPedido() {
    console.log(this.numeroPedido)
    this.gravaLog('ConfirmaPedido','Pedido: ' + this.numeroPedido)
    if (!this.db.isLoading) {
      this._PAGINA = 'PedidoVenda'
      this.svcApp.GetObjeto(
        this._PAGINA,
        {
          action: '_getJSON',
          numero: this.numeroPedido,
          token: this.db.getToken()
        }
      ).subscribe(

        (ret) => {
          if (ret.status){
          this.gravaLog('ConfirmaPedido GetObjeto','ID Pedido: ' + ret.dadosAuxiliares.id)
          //  console.log(ret.itens.length)
          ret.itens.length
          this.obj = ret;
          this.idPedido = ret.dadosAuxiliares.id
          //   console.log(this.obj)
          //  console.log(this.myInput);

          if(+this.idPedido > 0){
            this.inputCodigo.setFocus()
            this.codigo = ''}
          else this.inputPedido.setFocus()

          if(!this.idPedido) this.idPedido = ''

          let $obj = { "id": this.idPedido, "numero": this.numeroPedido }
          this.gravaLog('ConfirmaPedido GetObjeto 2','Antes pesiste')
          console.log($obj)
          this.db.persiste('_set', 'Expedicao', 'user', '', $obj).subscribe(ret => {
            this.gravaLog('ConfirmaPedido GetObjeto 3','Depois pesiste')
            if (ret.status) {
              console.log('ok');
              console.log(this.obj);
            }

          }
        ,
            err => {

              console.log(err.error)
              this.db.escondeProcessando(err.error)
            })

          if(this.idPedido !== '') this.getItens()
          }else {this.db.escondeProcessando(ret.error)}
        },
        (err) => this.db.escondeProcessando(err.error)
      )
    }

  }

  async ValidaItem() {
    if (!this.db.isLoading && this.idPedido && this.idPedido !== '' && this.codigo && this.codigo !== '') {
      this._PAGINA = `PedidoVenda`
      this.db.mostraProcessando()
      this.svcApp.GetObjeto(
        this._PAGINA,
        {
          action: '_validaItem',
          id: this.idPedido,
          referencia: this.codigo,
          token: this.db.getToken()
        }
      ).subscribe(

        (ret) => {
          if (ret.status) {
            //  console.log(ret)
            this.obj2 = ret;
            //  console.log(this.obj2)
            this.qtEmbalagem = +this.obj2.embalagemCom
            this.qt = 1


            this.db.escondeProcessando()
            if (this.inputDireto) { this.insereItem() }
            else this.inputQtEmbalagem.setFocus()
          } else {

            this.alert.create({
              header: 'Atenção',
              message: ret.error,
              buttons: [
                {
                  text: 'Ok',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: () => {
                    console.log('false');

                    return false;

                  }
                }
              ]
            }).then((alertEl) => {
              alertEl.present();
              this.codigo = ''
              this.inputCodigo.setFocus()
              return alertEl.onDidDismiss();
            })
            this.db.escondeProcessando()
          }
        },
        (err) => this.db.escondeProcessando(err.error)
      )
    }
  }

  gravaLog(modulo: string, conteudo: string) {
    /*
    this.svcApp.GravaLog(
      {
        modulo: modulo,
        conteudo: conteudo,
        token: this.db.getToken()
      }
    ).subscribe()
    */
    console.log(modulo,conteudo)


  }

  enterKeyPedido(event) {
    if (!event || !event.key || !((event.key >= 0) && (event.key <= 9))) {
      this.gravaLog('enterKeyPedido', 'key: ' + event.key + ' - keycode: ' + event.keyCode + '.')

//      this.confirmaPedido()
//      this.gravaLog('enterKeyPedido', 'depois do confirma - key: ' + event.key + ' - keycode: ' + event.keyCode + '.')
    }
  }

  upKey(ele) {
//    this.inputCodigo.setFocus()
    console.log(ele.value)

//    let event: = Event;
//    console.log(ele.value)
//    if(this.numeroPedido && (event.keyCode==13 || +event.keyCode == 13 || event.keyCode=="13")) {
//      this.gravaLog('upKeyPedido', 'antes do confirma pedido - key: ' + event.key + ' - keycode: ' + event.keyCode + '.')
//      this.confirmaPedido()
//      this.gravaLog('upKeyPedido', 'depois do confirma - key: ' + event.key + ' - keycode: ' + event.keyCode + '.')
//    }
//    this.gravaLog('upKey', 'key:' + event.key + '- keycode:' + event.keyCode)
  }

  enterKeyProduto(event) {

    if (!((event.key >= 0) && (event.key <= 9))) {
      this.gravaLog('keyProduto', 'key:' + event.key + '- keycode:' + event)

      this.ValidaItem()
      // this.insereItem()
    }
  }

  enterKeyQt(event) {
    if (!((event.key >= 0) && (event.key <= 9))) {

      this.inputQtEmbalagem.setFocus()   // this.insereItem()
    }

  }
  enterKeyQtEmabalagem(event) {

    if (!((event.key >= 0) && (event.key <= 9))) {

      this.insereItem()
    }
  }
  achaItem() {
    return this.obj.itens.findIndex((item) => item.referencia == this.codigo || item.codigoBarras == this.codigo || item.codigoBarrasCaixa == this.codigo)
  }
  insereItem() {
    if (this.codigo && this.codigo != '' && this.qtEmbalagem > 0 && this.qt > 0) {
      console.log('xxxx')
      if (!this.obj.itens[this.achaItem()]['itensLidos']) this.obj.itens[this.achaItem()]['itensLidos'] = []
      this.obj.itens[this.achaItem()]['itensLidos'].push([this.qt, this.qtEmbalagem])
      console.log(this.obj.itens);

      this.codigo = ''
      this.qt = 1
      this.qtEmbalagem = 0
      this.inputCodigo.setFocus()
      this.persiteItens()

    }



  }
  persiteItens() {

    this.db.persiste('_set', 'Expedicao', 'global', this.idPedido, this.obj).subscribe(ret => {
      if (ret.status) {
        console.log('ok');
        {
          console.log(this.obj);
        }
      }
    },
      err => {

        console.log(err.error)
        this.db.escondeProcessando(err.error)
      })
  }
  calculaTotalArray(array: []) {
    let total = 0
    if (!array) return 0
    // console.log(array);
    array.forEach(element => {
      total += element[0] * element[1]
    });
    return total
  }
  calculaVolumeArray(array: []) {
    let total = 0
    if (!array) return 0
    // console.log(array);
    array.forEach(element => {
      total += +element[0]
    });
    return total
  }
  setaCor(qt, qtlido) {
    if (qtlido == 0) return 'naoSeparado'
    if (qt == qtlido) return 'completa'
    if (qt > qtlido) return 'parcial'
    if (qt < qtlido) return 'superou'


  }
  validaSeparacao() {
    this.validacao = true
    this.qtItens = 0
    this.obj.itens.forEach(item => {


      if (item.quantidade > (item.itensLidos ? this.calculaTotalArray(item.itensLidos) : 0)) { this.validacao = false }
    });

  }
  async finalizar() {
    this.validaSeparacao()
    let confirm: OverlayEventDetail<any>

    if (!this.validacao) {
      confirm = await this.db.presentAlertConfirm('Atenção!! ', 'Voce deseja mesmo finalizar com a separacao incompleta')
    }
    if (confirm?.role === 'confirm' || this.validacao) {
      let qtItens = 0
      let qtItensExpedidos = 0
      let pesoLiquidoTotal = 0
      let pesoBrutoTotal = 0
      let volume = 0
      this.obj.itens.forEach(item => {
        qtItens += +item.quantidade
        qtItensExpedidos += this.calculaTotalArray(item.itensLidos)
        pesoLiquidoTotal += +item.pesoLiquido
        pesoBrutoTotal += +item.pesoBruto
        volume += this.calculaVolumeArray(item.itensLidos)

      })
      this.router.navigate(['/finaliza-expedicao'],
        {
          state:
          {
            pesoLiq: pesoLiquidoTotal.toFixed(3),
            pesoBruto: pesoBrutoTotal.toFixed(3),
            pedido: this.numeroPedido,
            itensPedido: qtItens,
            itensExpedidos: qtItensExpedidos,
            volumes: volume,
            json: JSON.stringify(this.obj)
          }
        })
      console.log(this.obj);
    }
    else {
      console.log('nao');
    }

  }

  remove(codigo, indice) {

    this.obj.itens[codigo].itensLidos.splice(indice, 1)
    this.persiteItens()

  }
}
