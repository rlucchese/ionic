import { SelecaoNotificacaoComponent } from './../selecao-notificacao/selecao-notificacao.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacoesService } from '../api/notificacoes.service';
import { EnviaConsutaRequest, Noticias } from '../interfaces/notificacoes';
import { DbService } from '../storage/db.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  constructor(
    public db: DbService,
    public selNot: SelecaoNotificacaoComponent, 
  ) {}

  ngOnInit() {}

  abreNotificacao() {
    this.selNot.selecionaNotificacao().finally(()=>{
    });
  }

  }
