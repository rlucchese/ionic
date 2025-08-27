import { Noticias, EnviaConsutaRequest } from "./../../interfaces/notificacoes";
import { Router } from "@angular/router";
import { NotificacoesService } from "./../../api/notificacoes.service";
import { DbService } from "./../../storage/db.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-noticias-cmp",
  templateUrl: "./noticias.component.html",
  styleUrls: ["./noticias.component.scss"],
})
export class NoticiasComponent implements OnInit {
  public noticias: Noticias;
  public mostra: boolean = false


  constructor(
    public db: DbService,
    public notSvc: NotificacoesService,
    public router: Router
  ) {}

  ngOnInit() {
    this.carregaNoticias();
  }

  carregaNoticias() {
    this.db.mostraProcessando();
    this.notSvc.GetNoticias().subscribe(
      (ret) => {
        if (ret.status) {
          console.log(ret);
          this.noticias = ret.noticias;
          this.db.escondeProcessando();
        }
      },
      (err) => {
        this.db.escondeProcessando(err.error);
      }
    );
  }
  abreFechaNoticia(not){
    console.log(not.mostra)
    not.mostra = !not.mostra
  }
}
