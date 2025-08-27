import { Component } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { DbService } from '../storage/db.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public db: DbService

  ) {
  ;

  }

  achaTabs(tab: string){
    let achou = false
this.db._APP_MENU.forEach(menu => {
  if (menu.title == tab) achou = true 
});
return achou
  }
}