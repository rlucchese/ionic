import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaOrdemServicoComponent } from './lista-ordem-servico.component';

describe('ListaOrdemServicoComponent', () => {
  let component: ListaOrdemServicoComponent;
  let fixture: ComponentFixture<ListaOrdemServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOrdemServicoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
