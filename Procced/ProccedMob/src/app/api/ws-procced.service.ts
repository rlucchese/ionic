//import { FileSharer } from '@byteowls/capacitor-filesharer';
import { DbService } from './../storage/db.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Request } from '@angular/http';
import { Filesystem, FilesystemDirectory } from '@capacitor/filesystem';
import { FileOpener } from '@ionic-native/file-opener/ngx';
//import { map } from 'jquery';
import { LoadingController } from '@ionic/angular';
import { _SERVER } from '../guards/load-setup.guard';


export interface ApiResponse {
  status: string,
  errorId?: number,
  error?: string,
  compl?: string,
  novoToken?: string
}

export interface ApiRequest {
  token: string,
  //  limit?: ILimit,
}


@Injectable({
  providedIn: 'root'
})
export class WsProccedService {
 
// Procced
// Revisar
//protected _SERVER_AUT = _SERVER; // 'http://consultor.myftp.org:17890'
//protected _SERVER_WS  = _SERVER; // 'http://consultor.myftp.org:17890'

// AWS - LogiDados
//  protected _SERVER_AUT = 'http://app.procced.com.br:17880'
//  protected _SERVER_WS  = 'http://app.procced.com.br:17870' 

//////////////////////////////////////////////////////////
///
/// _SERVER_WS tem que ser db.app.tokenApp[0].endereco
///
//////////////////////////////////////////////////////////

// localhost
//  protected _SERVER = 'http://localhost:17890'
//protected _SERVER_AUT = 'http://localhost:17890'
//protected _SERVER_WS  = 'http://localhost:17890'

  protected _URLBASE = '/app/v1' 
//  protected _URLPING = this._URLBASE + '/Ping'

  constructor(private http: HttpClient,
    private fileOpener: FileOpener,
    public loadingCtrl: LoadingController,
//    public db: DbService
    
    //    private db: DbService,
    // private file: File,
  ) {
  }

  /*consomeWSRequest(modulo, servico, params) {
    let url = this._URLBASE + "/" + modulo + "/" + servico;
    let head = new HttpHeaders();
    head.append('Content-Type', 'application/x-www-form-urlencoded');
    head.append('Access-Control-Allow-Origin', '*');
    head.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    let req = new HttpRequest('POST', url, params, {
      headers: head
    });

    return this.http.request(req)
  }*/

  consomeWS(modulo, servico, params): Observable<any> {
    let url: string

    if(servico=='GetToken' || servico=='ResetaSenha' || servico=='AlteraSenha' || servico=='IncluiUsuario' || servico=='VinculaUsuarioApp' || servico=='DesvinculaUsuarioApp')
      url = _SERVER
    else
      url = _SERVER
    
    url += this._URLBASE + "/" + modulo + "/" + servico;

//    console.log(url);
let head = new HttpHeaders();
head.append("Content-Type", "application/json");
//head.append('Access-Control-Allow-Origin', '*');
//head.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
 
//let req = new HttpRequest('POST', url, params, {
//  headers: head
//}); 

    let ret = this.http.post(url, params, {headers: head});
   console.log(ret)

    return ret;
  }

  getMimeType(nomeArq: string) {
    const extensao = nomeArq.split('.')   
    switch(extensao[1]) { 
      case 'pdf': { 
      return 'application/pdf' 
      } 
      case 'txt': { 
        return 'text/plain' 
      } 
      case 'doc': { 
        return 'application/msword' 
      } 
      case 'doc': { 
        return 'application/msword' 
      } 
      case 'ppt': { 
        return 'application/vnd.ms-powerpoint' 
      }       
      case 'rtf': { 
        return 'application/rtf' 
      }       
      case 'xls': { 
        return 'application/vnd.ms-excel' 
      }       
      case 'png': { 
        return 'image/png' 
      }       
      case 'jpg': { 
        return 'image/jpeg' 
      }       
      case 'jpeg': { 
        return 'image/jpeg' 
      }      
      default: { 
        return 'application/octet-stream'; 
      } 
   } 
  }

  async salvaArquivo(nome,conteudo) {
    const savedFile = await Filesystem.writeFile({
      path: nome,
      data: conteudo,
      directory: FilesystemDirectory.Documents
    });
    return savedFile;
  }

  async fileWrite(nome, conteudo) {
    try {
/*
      const result = await Filesystem.writeFile({
        path: nome,
        data: conteudo,
        directory: FilesystemDirectory.Documents,
      })*/

      /*
      await Filesystem.deleteFile({
        path: nome,
        directory: FilesystemDirectory.Documents
      });
      */

      const savedFile = await Filesystem.writeFile({
        path: nome,
        data: conteudo,
        directory: FilesystemDirectory.Documents
      });
      const path = savedFile.uri;

      const mimeType = this.getMimeType(nome);


      this.fileOpener.open(path, mimeType)
        .then(() => console.log('file is opened'))
        .catch(error => console.log('error opening file', error));
    } catch (e) {
      console.log('erro: ' + e)
    }
  }

	postAsFormData(
    token: string,
		url: string,
		body: Object,
		files?: Array<{ name: string, fileList: FileList, multiple?: boolean }>) {
      console.log(files)
		const formData = new FormData();
		formData.append('token', token);
		// Coloca todo body no form data.., aproveita e da trim nas strings
		// provavelmente da pra fazer uma função recursiva só pra tratar os dados que são passadas para FormData
		Object.keys(body).forEach(k => {
			if (typeof body[k] === 'string') {
				body[k] = body[k].trim();
			}
			if (Array.isArray(body[k])) {
				body[k].forEach(val => {
					formData.append(k + '[]', val);
				});
			} else if (typeof body[k] === 'object' && body[k] !== null) {
				Object.keys(body[k]).forEach(l => {
					formData.append(k + '[' + l + ']', body[k][l]);
				});
			} else if (body[k] === null) {
				formData.append(k, '');
			} else {
				formData.append(k, body[k]);
			}
		});

		// Coloca todos files no FormData
		if (files) {
			files.forEach(obj => {
				obj.multiple = obj.multiple ? obj.multiple : false;
				if (!obj.fileList) {
					return;
				}
				formData.delete(obj.name);
				Array.from(obj.fileList).forEach((file, i) => {
					let name = obj.name;
					if (obj.multiple) {
						name = obj.name + '[' + i + ']';
					} 
          console.log(file)
          console.log(obj)
					formData.append(name, file, file.name.toLowerCase())
				});
			});
		}
//        console.log(formData)
//		return this.httpClient.post(url, formData);

//url = 'http://192.168.18.25:17891';

		let head = new HttpHeaders();
       head.append('Access-Control-Allow-Origin' , '*');
       head.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
//       headers.append('Accept','application/json');
       head.append('content-type','text/html; charset=ISO-8859-1');
//   let options = new RequestOptions({ headers:headers});

formData.forEach((val)=>{
  console.log(val);
})

  let $ret = this.http.post(url, formData);
  return $ret;
 
   let req = new HttpRequest('POST', url, formData, { 
//      responseType: 'arraybuffer',
      headers: head,
      reportProgress: true
	});

//	const loading = this.loadingCtrl.create({a});
	//loading.present();
  
    return this.http.request(req)
/*
    .pipe(
      map(event => this.getStatusMessage(event,loading)),
	    tap(message => {
		  loading.setContent(message); 
		  console.log(message);
		  },
		  error=>console.log(error),
		  ()=>loading.dismiss()
		),
      last()

	);	*/
  }




}
