import { Component, OnInit } from '@angular/core';
import { ProducaoService } from 'src/app/api/producao.service';
import { OrdemFabricacao } from 'src/app/interface/reval';
import { DbService } from 'src/app/storage/db.service';

@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.page.html',
  styleUrls: ['./etiqueta.page.scss'],
})
export class EtiquetaPage implements OnInit {

  public ordemFabricacao: OrdemFabricacao
  public pesoBruto: number = 0
  public pesoLiquido: number = 0
  public quantidade: number = 0
  public cliente: string = ''
  public descricao: string = ''
  public referencia: string = ''
  public unidade: string = ''
  public pedido: string = ''
  public qtdEtiquetas: number = 1
  public codigoItem: string = ''
  public operador: string = ''
  public setup: string = ''
  public rastreabilidade: string = ''
  public data: string = new Date().toISOString().slice(0, 10);

  public of: string

  constructor(
    public db: DbService,
    public svcProd: ProducaoService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (this.db.autenticado()) {

    }
  }

  calculaPeso() {
    this.pesoLiquido = parseFloat((this.quantidade * this.ordemFabricacao.pesoLiquido).toFixed(3));
    this.pesoBruto = this.pesoLiquido + 6

  }

  carregaOrdem() {

    this.db.mostraProcessando();
    this.svcProd.GetOrdemFabricacao({
      token: this.db.token,
      numero: this.of
    }).subscribe((ret) => {
      if (ret.status) {
        this.db.escondeProcessando();
        this.ordemFabricacao = ret.ordem
        this.cliente = this.ordemFabricacao.cliente
        this.codigoItem = this.ordemFabricacao.referencia
        this.descricao = this.ordemFabricacao.descricao
        this.unidade = this.ordemFabricacao.unidade
        this.pedido = this.ordemFabricacao.numeroPedido
        this.quantidade = 0
        this.calculaPeso();
      } else this.db.escondeProcessando(ret.error)
    },
      (err) => {
        this.db.escondeProcessando(err)
      });
  }

  imprime() {
    /*
        joAux.AddPair(TJSONPair.Create('token',FLogin.FToken));
        joAux.AddPair(TJSONPair.Create('numeroOrdem',eOF.Text));
        joAux.AddPair(TJSONPair.Create('pedido',ePedido.Text));
        joAux.AddPair(TJSONPair.Create('quantidadeEtiquetas',eQtdEtiquetas.Text));
        joAux.AddPair(TJSONPair.Create('cliente',eCliente.Text));
        joAux.AddPair(TJSONPair.Create('codigoItem',eCodigoItem.Text));
        joAux.AddPair(TJSONPair.Create('descricaoItem',eDescricaoItem.Text));
        joAux.AddPair(TJSONPair.Create('unidade',eUnidade.Text));
        joAux.AddPair(TJSONPair.Create('operador',eOperador.Text));
        joAux.AddPair(TJSONPair.Create('setup',eSetup.Text));
        joAux.AddPair(TJSONPair.Create('rastreabilidade',eRastreabilidade.Text));
        joAux.AddPair(TJSONPair.Create('pesoLiquido',ePesoLiquido.Text));
        joAux.AddPair(TJSONPair.Create('pesoBruto',ePesoBruto.Text));
        joAux.AddPair(TJSONPair.Create('quantidadePecas',eQtdPecas.Text));
        joAux.AddPair(TJSONPair.Create('data',DateTimeToYMDString(deData.Date)));
      
        joAux := FLogin.ConsomePost('EtiquetaOrdemFabricacao',joAux);
    */
    if (this.qtdEtiquetas <= 0) this.db.setMensagem('Quantidade inválida')
    else {
      let etiqueta = {
        numeroOrdem: this.of,
        pedido: this.pedido,
        quantidadeEtiquetas: this.qtdEtiquetas,
        cliente: this.cliente,
        codigoItem: this.codigoItem,
        descricaoItem: this.descricao,
        unidade: this.unidade,
        operador: this.operador,
        setup: this.setup,
        rastreabilidade: this.rastreabilidade,
        pesoLiquido: this.pesoLiquido,
        pesoBruto: this.pesoBruto,
        quantidadePecas: this.quantidade,
        data: this.data
      }

      console.log(etiqueta)
      this.svcProd.ImprimeEtiqueta(etiqueta).subscribe((ret => {
        console.log(ret);
      }))
    }
  }

}
