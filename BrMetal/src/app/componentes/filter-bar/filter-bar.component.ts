import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

export class Filter {
  label: string
  field: string
  content: string
}

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})

export class FilterBarComponent implements OnInit {
  @Input('filtros') filtrosDef: any;
  @Input('quantidade') quantidade: any;

  @Input() callbackFunction: (args: any) => void;

  public filterContent: string
  public gridFilters: Filter[] = []
  public filtro: string
  public label: string
  public filtroDefAtual: any
  public Form = {
    itemFiltro: ''
  }


  constructor(public alertController: AlertController,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  ngOnChanges() {
   
    if ((this.filtrosDef && !this.Form.itemFiltro) || this.filtroDefAtual != this.filtrosDef) {
      this.removeFiltro(-1)
      this.Form.itemFiltro = this.filtrosDef.selectedFilter
      this.filtroDefAtual = this.filtrosDef

    }
  }


  addFilter() {
    console.log(this.Form)
    if (this.filterContent && this.filterContent != "") {
      console.log(this.Form.itemFiltro)
      let filters: [];
      filters = this.filtrosDef['filters'];
      console.log(filters)
      let lbl = []
      lbl = filters.filter((f: any) => { return f.id == this.Form.itemFiltro })
      console.log(this.Form.itemFiltro);

      console.log(lbl[0].label)
      //    ['label'];
      this.gridFilters.push({
        label: lbl[0].label,
        content: this.filterContent,
        field: this.Form.itemFiltro

      })
      this.filterContent = ''
    }
  }
  removeFiltro(index) {
    if (index == -1) this.gridFilters = []
    else this.gridFilters.splice(index, 1)

  }
  filtra(gridFilters) {

    if (this.filterContent) {
      this.addFilter()

    }
    console.log(gridFilters)
    if (gridFilters.length == 0) this.confirmSemFiltro(gridFilters)
    else this.callbackFunction(gridFilters)

  }
  async confirmSemFiltro(gridFilters) {
    const alert = await this.alertController.create({
      header: 'Busca Sem Filtro',
      message: 'Confirma Busca Sem Filtro!!!',
      buttons: [
        {
          text: 'Nao',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.callbackFunction(gridFilters)
          }
        }
      ]
    });

    await alert.present();
  }
}
