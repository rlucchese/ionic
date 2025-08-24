import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('nomePagina') nomePagina: String='';

  constructor(
    public navCtr: NavController,
    public router: Router
  ) { }

  ngOnInit() {


  }

  voltar(){
    this.navCtr.back()

  }
  operacoes(){
this.router.navigate(['operacao'])

  }

}
