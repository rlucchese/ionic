import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { _LOCAL } from '../storage/db.service';


export interface ApiResponse {
  status: boolean,
  errorId?: number,
  error?: string,
  compl?: string,
}

export interface ApiRequest {
  token: string,
}


@Injectable({
  providedIn: 'root'
})
export class WsGrapeService {

//  protected _SERVER = 'http://app.procced.com.br/brmetal'

//  protected _SERVER = environment._SERVER

  protected _URLBASE = environment._SERVER + '/app/v1'
  protected _URLPING = this._URLBASE + '/Ping'

  constructor(private http: HttpClient,
    public loadingCtrl: LoadingController,
//    private db: DbService
  ) {
  }

  consomeWS(modulo, servico, params): Observable<any> {
    if(_LOCAL == 'local') this._URLBASE = environment._SERVER_LOCAL + '/app/v1'
    else this._URLBASE = environment._SERVER + '/app/v1'

    let url = this._URLBASE + "/" + modulo + "/" + servico;

    let $ret = this.http.post(url, params);
    console.log(url)
    return $ret;
  }
}
