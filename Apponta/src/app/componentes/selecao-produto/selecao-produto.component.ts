import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProdutoService } from 'src/app/api/produto.service';
import { DbService } from 'src/app/storage/db.service';

@Component({
  selector: 'app-selecao-produto',
  templateUrl: './selecao-produto.component.html',
  styleUrls: ['./selecao-produto.component.scss'],
})
export class SelecaoProdutoComponent implements OnInit {
  @Input() filtro: any

  public produtos: any; 
  constructor(public db: DbService,
    public mc:ModalController, public prdSvc: ProdutoService) { }



  ngOnInit() {
  //  this.produtosFiltro = this.filtro
    console.log(this.produtos)
   // this.carrega();
  }

  carrega(filtro?) {
    console.log(filtro)
    if (filtro ) {

      this.db.mostraProcessando();
      this.prdSvc
        .Lista({
          token: this.db.getToken(),
          filter: filtro
        })
        .subscribe(
          async (ret) => {
            this.db.escondeProcessando();
            if (ret.status ) {
              console.log("ret", ret);
          
this.produtos = ret.produtos
      

                   
            }

          },
          (err) => this.db.escondeProcessando(err.error)
        );
    }
    else { this.db.setMensagem('Escolha um filtro para buscar') }
  }

  busca(evt: any) {
    this.produtos = this.produtos.filter((ev) => {
      return this.db.compara([ev.numeroPedido,ev.codigoItem], evt.detail.value);
    });
  }

  async selecionaProduto(produtos: any) {
    const modal = await this.mc.create({
      component: SelecaoProdutoComponent,
      componentProps: { produtos: produtos
                      },
      cssClass: 'modal-css'
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  cancela() {
    this.mc.dismiss({
      status: false,
    });
  }

  seleciona(produto: any) {
    this.mc.dismiss({
      status: true,
      produto: produto,
    });
  }
}