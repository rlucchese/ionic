import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { LoadSetupGuard } from '../guards/load-setup.guard';


@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {

  public _SERVER: string='';

  constructor(
    private loadSetup: LoadSetupGuard,
    private router: Router
  ) { 
    this._SERVER = localStorage.getItem('_SERVER');
  }

  ngOnInit() {
  }

  salva() {
    console.log(this._SERVER);
    localStorage.setItem("_SERVER",this._SERVER)

    this.loadSetup.setServer(this._SERVER)

    this.goLogin()
        
    return false;
  }

  goLogin() {
    this.router.navigateByUrl('/login')
  }

}
