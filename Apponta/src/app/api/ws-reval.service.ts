import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filesystem } from '@capacitor/filesystem';
import { LoadingController } from '@ionic/angular';
import { _SERVER } from '../guards/load-setup.guard';
import { environment } from 'src/environments/environment';
//import { DbService } from '../storage/db.service';


export interface ApiResponse {
  status: string,
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
export class WsProccedService {
  

//  public _SERVER = 'http://localhost/apontamento'
//  public _SERVER: string = 'http://192.168.1.220';
//  public _SERVER: string = 'http://192.168.1.250/apontamento';   // Micromaq
  public _URLBASE: string = 'app/'+ environment.versaoWs;
//  protected _SERVER = 'http://200.248.44.2:17800'
//  protected _SERVER = 'http://192.168.1.220';
//  protected _URLPING = this._URLBASE + '/Ping'

  constructor(private http: HttpClient,
    public loadingCtrl: LoadingController,
//    public dbSvc: DbService
  ) {
//    this._SERVER = localStorage.getItem('_SERVER')
//    this.dbSvc.setMensagem('Server: ' + this._SERVER)
//    if(this._SERVER == '') {
//      this.dbSvc.Abre('setup')
//    }
  }

  consomeWS(modulo, servico, params): Observable<any> {
    let url = _SERVER + '/' + this._URLBASE + "/" + modulo + "/" + servico;
//    let url = '/api/' + this._URLBASE + "/" + modulo + "/" + servico;
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET')
    .append('Access-Control-Allow-Origin', '*');

//  return this.http.get<Account>(baseUrl + 'accounts',  {headers});
  
//    console.log(headers)

console.log(url);
    let $ret = this.http.post(url, params); //, {headers});
    return $ret;
  }
 consomeWSAntigo(modulo,servico,params): Observable<any> {
    let url = 'http://192.168.1.240:17989/app/v1/' + modulo + '/' + servico;
    let $ret = this.http.post(url, params);
    return $ret;
  }
}
