import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Atividade } from '../../interfaces/ordem-servico';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss'],
})
export class AtividadeComponent implements OnInit {
  
  public mostraDetalhes: boolean = false
  @Input() atividade: Atividade
  @Output() onChange= new  EventEmitter();

  constructor(

  ) {


   }

  ngOnInit() {}


  checkAtividade(atividade){
    atividade.checked = !atividade.checked


    console.log(atividade)
  }

  getNivel(cl: string) {
    let nivel = cl.match(/\./g)
    if(nivel) return nivel.length
    else return 0
  }






  processaArvore(item) {
    console.log('arvore');
    console.log(item, item.pai)
    if(item.pai) {
       console.log('tem pai')
        if(!item.checked) {
          console.log('não ticado')
          if(item.pai.checked) {
                item.pai.checked = false;
                this.processaArvore(item.pai);
            }
        } else {
          console.log('ticado')
            let todos = true;
            item.pai.atividades.forEach(element => {
                if(!element.checked) {
                    todos = false;
                    return;
                }
            });
            if(todos) {
                item.pai.checked = true;
                this.processaArvore(item.pai);
            }
        }
    }
}
check(atividade){
atividade.checked = !atividade.checked
  this.processaArvore(atividade)
}

}
