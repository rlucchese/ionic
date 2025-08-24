import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-relation1to1',
  templateUrl: './relation1to1.component.html',
  styleUrls: ['./relation1to1.component.scss'],
})
export class Relation1to1Component implements OnInit {
  @Input('otherGrape') og: any;
  @Input('codigo') codigo: number;
  @Input('grapeCadastro') grapeCadastro: any='';
  @Input('icon') icon: String='';



  constructor() { }

  ngOnInit() {console.log(this.og )}
 
 
  getConteudo1to1()  {
    if (this.grapeCadastro[this.og]){
    let result = ''
    for(var i in this.grapeCadastro[this.og][this.codigo])
     result  += this.grapeCadastro[this.og][this.codigo][i] + ' '
     return result
    }
  } 


}
