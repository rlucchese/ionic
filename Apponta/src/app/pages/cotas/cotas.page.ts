
import { Component, OnInit } from '@angular/core';
import { CotasService } from 'src/app/api/cotas.service';
import { ICota, IInstrumento, IOrdemFabricacao, IPeca } from 'src/app/interface/cotas';
import { DbService } from 'src/app/storage/db.service';

@Component({
  selector: 'app-cotas',
  templateUrl: './cotas.page.html',
  styleUrls: ['./cotas.page.scss']
})
export class CotasPage implements OnInit {
  public filtro: string;
  public cotas: any[];
  public msg: string;
public ordem: IOrdemFabricacao = null;






  public pecaSelecionada: IPeca = null;
  public cotaSelecionada: ICota = null;
  public instrumentos: IInstrumento[] = [];  
  constructor(public cotsvc: CotasService, public db: DbService) { }

  navegarCota(direcao: number) {
    if (!this.pecaSelecionada || !this.pecaSelecionada.cotas || this.pecaSelecionada.cotas.length < 2) return;
    const idx = this.pecaSelecionada.cotas.indexOf(this.cotaSelecionada);
    if (idx === -1) return;
    let novoIdx = idx + direcao;
    if (novoIdx < 0) novoIdx = this.pecaSelecionada.cotas.length - 1;
    if (novoIdx >= this.pecaSelecionada.cotas.length) novoIdx = 0;
    this.cotaSelecionada = this.pecaSelecionada.cotas[novoIdx];
  }


  adicionarMedida() {
    if (!this.instrumentos || this.instrumentos.length === 0) {
      this.db.setMensagem("Nenhum instrumento disponível para adicionar medida.");}
else {
    if (this.cotaSelecionada) {
if (!this.cotaSelecionada.resultados) {
      this.cotaSelecionada.resultados = []; }

      this.cotaSelecionada.resultados.push({ medida: null });
    }
    console.log("Medida adicionada", this.ordem);
}
  }

  removerMedida(index: number) {
    if (this.cotaSelecionada && this.cotaSelecionada.resultados.length > index) {
      this.cotaSelecionada.resultados[index].medida = 0
    }
        this.setOrdem()
  }



  aoMudarPeca(): void {
    this.cotaSelecionada = null;
  }

  aoMudarCota(): void {
    // Ao selecionar uma cota, inicializa o instrumento do select com o instrumento da cota
    if (this.cotaSelecionada && this.cotaSelecionada.instrumento) {
      this.cotaSelecionada.instrumento = this.cotaSelecionada.instrumento;
    } else if (this.cotaSelecionada && this.instrumentos && this.instrumentos.length) {
      // Se não houver instrumento, pode inicializar com o primeiro da lista (opcional)
      // this.cotaSelecionada.instrumento = this.instrumentos[0];
    }
  }

  ngOnInit() {
    this.buscarInstrumentos()

  }

  ngDoCheck() {
    if (this.ordem && this.ordem.pecas && this.ordem.pecas.length === 1 && !this.pecaSelecionada) {
      this.pecaSelecionada = this.ordem.pecas[0];
    }
     if (this.pecaSelecionada && this.pecaSelecionada.cotas.length === 1 && !this.pecaSelecionada) {
      this.cotaSelecionada = this.pecaSelecionada.cotas[0];
    }
  }

  buscarOrdem() {
    console.log(this.ordem)
    if (this.filtro) {
         this.cotsvc.GetCotas({token: this.db.getToken(), numeroOrdem: this.filtro}).subscribe(
          async (ret) => {
            this.db.escondeProcessando();
            if (ret.status) {
              console.log("ret", ret);
              this.msg = null;
              this.ordem = ret;

              
            } else {
              this.ordem = null
              this.pecaSelecionada = null;
              this.cotaSelecionada = null;
              this.msg = ret.error
            }
          },
          (err) => this.db.escondeProcessando(err.error)
        ); 
   
    } else {
      this.db.setMensagem("Escolha um filtro para buscar");
        }
      // Exemplo: chamada de serviço para buscar cotas
     } // this.cotasService.buscar({ filtro: this.filtro }).subscribe(...)
    // this.msg = 'Busca de cotas realizada para: ' + this.filtro;
      // this.cotas = resultado;
  setOrdem() {
    console.log(this.ordem)
    if (this.filtro) {
         this.cotsvc.SetCotas({token: this.db.getToken(), ordem: this.ordem}).subscribe(
          async (ret) => {
            this.db.escondeProcessando();
            if (ret.status) {
              console.log("ret", ret);

              
            } else {
              this.msg = ret.error
            }
          },
          (err) => this.db.escondeProcessando(err.error)
        ); 
   
    } else {
      this.db.setMensagem("Escolha um filtro para buscar");
        }
      // Exemplo: chamada de serviço para buscar cotas
     }
  buscarInstrumentos() {
    this.cotsvc.GetInstrumentos({ token: this.db.getToken() }).subscribe(
      async (ret) => {
        this.db.escondeProcessando();
        if (ret && ret.instrumentos) {
          this.instrumentos = ret.instrumentos;
          console.log("Instrumentos encontrados:", this.instrumentos);
            this.instrumentos = ret.instrumentos.map(inst => ({
  ...inst,
  codigo: Number(inst.codigo)
})); // Garantir que o código seja numérico
console.log("isntrumentos ", this.instrumentos);
        } else {
          this.msg = "NENHUM INSTRUMENTO ENCONTRADO";
        }
      },
      (err) => this.db.escondeProcessando(err.error)
    );
  }
  comparaInstrumentos(inst1: IInstrumento, inst2: IInstrumento): boolean {
    return inst1 && inst2 && inst1.codigo === inst2.codigo;
  } 
}



