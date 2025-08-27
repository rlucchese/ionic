export const SERVER_KEY = '_SERVER';
export var _SERVER = '';

import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UsuarioService } from '../api/usuario.service';
import { DbService } from '../storage/db.service';


@Injectable({
  providedIn: 'root'
})
export class LoadSetupGuard implements CanLoad {
  constructor(private router: Router, private svc: UsuarioService, private db: DbService) {

  }
  async canLoad(): Promise<boolean> {
    const server = await localStorage.getItem("_SERVER")
    console.log(server)
    if(server && server !== '') {
      this.setServer(server)

    this.svc.GetConfiguracao().subscribe(ret => {
        this.db._URL_WHATSAPP = ret.urlWhatsapp
        this.db._URL_APPLESTORE = ret.urlAppleStore
        this.db._URL_GOOGLEPLAY = ret.urlGooglePlay
        this.db._URL_LOGO = ret.urlLogo
        this.db._COR_PRIMARIA = ret.corPrimaria
        this.db._COR_SECUNDARIA = ret.corSecundaria
        this.db._APP_MENU = ret.itensMenu
        this.db._PAGINA_INI = ret.paginaInicial
        console.log(ret)
    })


      return true;
    } else {
      this.router.navigateByUrl('/setup');
      return false;
    }
  }

  setServer(server: string) {
    _SERVER = server
  }
}
