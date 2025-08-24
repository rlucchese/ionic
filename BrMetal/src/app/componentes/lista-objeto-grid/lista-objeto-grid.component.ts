import { Component, Input, OnInit } from '@angular/core';

interface GrapeHeader {
  content: string
  qty: number
  headers?: GrapeHeader[]
  items?: String[]
}

@Component({
  selector: 'app-lista-objeto-grid',
  templateUrl: './lista-objeto-grid.component.html',
  styleUrls: ['./lista-objeto-grid.component.scss'],
})

export class ListaObjetoGridComponent implements OnInit {
     @Input('objeto') obj: any;
    public grape : any
    public atributosObj: string[]

    public qty: number = 2
    public headers: GrapeHeader[] = []
    public item: String[] = []


    public tamanho: number
     constructor(
       ) { 


     }

     _listHeader() {
        for(let i=0;i<10;i++) {
             let hdr: GrapeHeader;
//             hdr.content = "xxyy"
//             hdr.content = ' - Item ' + i;
//             hdr.qty = 10;
             this.headers.push(hdr);
        }
     }

  ngOnInit() {
    console.log(this.obj)
  } 

  ngAfterViewChecked(){
    if (this.obj){
   this.atributosObj=Object.keys(this.obj[0])
   this.tamanho = this.atributosObj.length
    console.log(this.atributosObj.length)}
  }
  getAtributos(grape: any){
    let atributos = Object.keys(grape[0])
 return atributos

}
  getListaArray(grape: any)
  { //   console.log(Object.keys(grape))

    let result = []
    for(var i in grape){
    result.push (grape[i])
  }
return result 

}

}
