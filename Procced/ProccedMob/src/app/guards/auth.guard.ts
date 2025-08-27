import { DbService } from './../storage/db.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor (private db: DbService) {}
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.db.autenticado()
  }
}
