export const SERVER_KEY = '_SERVER';
export var _SERVER = '';

import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadSetupGuard implements CanLoad {
  constructor(private router: Router) {

  }
  async canLoad(): Promise<boolean> {
    const server = await localStorage.getItem("_SERVER")
    console.log(server)
    if(server && server !== '') {
      this.setServer(server)
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
