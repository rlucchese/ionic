import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import {Atividade, OrdemServico } from '../interfaces/ordem-servico';
import { DbService } from '../storage/db.service';
import { InfoBaixasPage } from '../info-baixas/info-baixas.page';
import {OrdemServicoService} from "../api/ordem-servico.service";

@Component({
  selector: 'app-baixa',
  templateUrl: './baixa.page.html',
  styleUrls: ['./baixa.page.scss'],
})
export class BaixaPage implements OnInit {
  public atividadesBaixa: any[]
  public atividades: any[]
  public atividadeFiltro: any[]
  public os: OrdemServico;
  public dataBaixa: Date
  public strAtividades: string = ' '
  public observacao: string
  public rotuloSingular: String = "Baixa"
  public rotuloPlural: String = "Baixas"
  public mostraDetalhes: boolean = false
private scrollY: number
public agendaSelecionada: string[] = ['TODOS']
public recursos: string[] = []
public baixado: string = 'AMBOS'

  constructor(public osSvc: OrdemServicoService, public router: ActivatedRoute, public nav:NavController, public db: DbService, public route: Router, public info: InfoBaixasPage

  ) {
    if (this.route.getCurrentNavigation().extras.state){
    this.os = this.route.getCurrentNavigation().extras.state.ag.os
this.scrollY = this.route.getCurrentNavigation().extras.state.pos
console.log(this.scrollY);

    this.setPai(this.os.atividades,null)
console.log(this.os.atividades);

    this.os.observacaoBaixa = ' '
    this.os.dataBaixa = ' '
    this.os.horaIni= ''
    this.os.horaFim = ''
    this.os.intervalo = ''
    this.os.totalHoras = ''
    }

  }

  ngOnInit() {

  }
  ionViewDidEnter() {
    let data = new Date
    this.strAtividades = ' '
    if (!this.os) {this.nav.navigateBack('/agenda') }else{
    this.os.observacaoBaixa = ' '
     this.os.dataBaixa = data.getFullYear().toString() + '-' +  (data.getMonth()>8?(data.getMonth()+1).toString():'0'+(data.getMonth()+1).toString()) + '-' + (data.getUTCDate()>9?data.getUTCDate().toString():'0'+data.getUTCDate().toString())
     this.os.horaIni= ''
    this.os.horaFim = ''
    this.os.intervalo = ''
    this.os.totalHoras = ''
    console.log(this.os);
    this.atividades = this.os.atividades
    this.atividadeFiltro = this.os.atividades
    this.montaComboRecurso()
    }

   

  }

  async mostraInfoBaixa(os: OrdemServico) {
    const ret = await this.info.mostraInfoBaixa(
      os 
    );
    console.log(ret.data);

  }
montaComboRecurso(){

  this.atividades.forEach(ativ => {
    this.recursos.push(ativ.recurso)
    
  });
  const set = new Set( this.recursos );
  this.recursos = Array.from(set)
}



  setPai(itens: any[], pai: any) {
    itens.forEach(ele => {
      ele.pai = pai
      if(ele.atividades) this.setPai(ele.atividades,ele)
    })

  }




  getArvoreAtividades(at: Atividade[]) {

    for (let i = 0; i < at.length; i++) {
      this.strAtividades += at[i].descricao + '</br>'
      if (at[i].atividades) {
        this.getArvoreAtividades(at[i].atividades)
      }
    }

    console.log(this.strAtividades)
    return this.strAtividades

  }


  getAtividade(Atividades:any[]) {

    Atividades.forEach(ele => {
      
      let atv = {
        id: ele.id,
        classificacao: ele.classificacao,
        percConcl: ele.checked?100:0
      }
      if (ele.checked != ele.checkedAnt){
      this.atividadesBaixa.push(atv)}

      if(ele.atividades) {
        this.getAtividade(ele.atividades)
      }
    })
  }

  baixa() {

console.log('baixa')


   let osBxa = this.os;
   let atvBxa = osBxa.atividades;


   let atv1N = [];
   this.atividadesBaixa = []
   
   this.getAtividade(atvBxa);

   console.log(this.atividadesBaixa)

   osBxa.atividades = this.atividadesBaixa;

   this.db.mostraProcessando();
    this.osSvc.Baixa({
        token: this.db.app.token,
        os: osBxa,
       // atividades: this.atividades
        
      }).subscribe(
        (ret) => {
      console.log('baixa11')

          if (ret && ret.status) {
            console.log(ret);
            this.volta()
          }
          this.db.escondeProcessando(ret.msg);
        },
        (err) => { console.log(err)
          this.db.escondeProcessando(err);
        }
      );
      console.log('baixa2')
console.log({token: this.db.app.token ,os: this.os, atividades: this.atividades})
//this.arvore()
  //  console.log(this.atividades);

  }

  calculaTotalHoras(){
    if (this.os.horaIni && this.os.horaFim){
      this.os.totalHoras = '00:00'
    let start = this.os.horaIni.split(":");
    let end = this.os.horaFim.split(":");
    if (start[0] && start[1] && end[0] && end[1]){
    let intervalo = this.os.intervalo.split(":")
    let startDate = new Date(0, 0, 0, +start[0], +start[1], 0);
    let endDate = new Date(0, 0, 0, +end[0], +end[1], 0);
   //let intervaloDate = new Date(0, 0, 0, +intervalo[0], +intervalo[1], 0);
  /*   console.log(endDate.getTime());
    console.log(startDate.getTime()); */

    let diff = endDate.getTime() - startDate.getTime() 
/*     console.log(diff);
 */  
    let diff3 = diff - ((+intervalo[0]>0?+intervalo[0]:0) *60 *60 *1000) - ((+intervalo[1]?+intervalo[1]:0)*60*1000);
/* console.log( (+intervalo[1]?+intervalo[1]:0));
 */
    let hours = Math.floor(diff3 / 1000 / 60 / 60) 

    let diff2 = diff3 - (hours * 1000 * 60 * 60);
    let minutes = Math.floor(diff2 / 1000 / 60) 
    
  /*   console.log(minutes);
    console.log(diff2);
    console.log(Math.floor(diff2 / 1000 / 60));

     */

    // If using time pickers with 24 hours format, add the below line get exact hours
  
if (hours >= 0 && minutes >= 0)
    this.os.totalHoras =  (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
    }
  }
  }

arvore(){
this.os.atividades



}
volta(){

  this.route.navigate(['/agenda'],{state:{pos:this.scrollY}})
}

filtra(){
  console.log(this.agendaSelecionada)
  console.log(this.atividadeFiltro)
if (this.agendaSelecionada.includes('TODOS')){this.atividades = this.atividadeFiltro}
else{
this.atividades = this.atividadeFiltro.filter((ativ) => this.agendaSelecionada.includes(ativ.recurso) )
}
if (this.baixado !== 'AMBOS')
{
  console.log(this.baixado=='BAIXADO')
  this.atividades = this.atividades.filter((ativ) => this.baixado=='BAIXADO'?ativ.checked==true:!ativ.checked || ativ.checked==false )


}
}
}
