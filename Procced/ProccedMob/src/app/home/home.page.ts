import { NotificacoesService } from "./../api/notificacoes.service";
import { EnviaConsutaRequest } from "./../interfaces/notificacoes";
import { DbService } from "./../storage/db.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  public consulta: boolean = false;
  public email: string = "";
  public mensagem: string = "";
  public noticiasEmail: boolean = false;
  public formConsulta: any;

  constructor(
    public db: DbService,
    public notSvc: NotificacoesService,
    public router: Router
  ) {}

  ionViewWillEnter() {
    console.log("token:", this.db.app);
    if (this.db.app && this.db.app.token)
      this.router.navigateByUrl("tabs/documentos", { replaceUrl: true });
  }

  ngOnInit() {}

  entrar() {
    this.router.navigateByUrl("login", { replaceUrl: true });
  }
  toogleConsulta() {
    this.consulta = !this.consulta;
  }

  emailValido(email: string) {
    const re = /^[a-z0-9_][a-z0-9._-]+@[a-z0-9]+\.[a-z]{3}(?:\.([a-z]{2}))?$/;

    return re.test(email);
  }

  enviaConsulta(form) {
    if (!this.emailValido(this.email))
      this.db.setMensagem("Formato do E-mail inválido");
    else if (!this.mensagem && !this.noticiasEmail)
      this.db.setMensagem("Mensagem ou Receber E-mail obrigatórios");
    else {
      let dados: EnviaConsutaRequest = {
        email: this.email,
      };
      if (this.mensagem) dados.mensagem = this.mensagem;
      if (this.noticiasEmail) dados.receberEmail = true;
      this.db.mostraProcessando();
      this.notSvc.EnviaConsulta(dados).subscribe(
        (ret) => {
          if (ret.status) {
            this.db.escondeProcessando("Consulta enviada com sucesso!");
            this.toogleConsulta();
          } else this.db.escondeProcessando(ret.error);
        },
        (err) => {
          this.db.escondeProcessando(err.error);
        }
      );
    }
  }

  setup() {
    this.db.Abre('setup')
  }
}
