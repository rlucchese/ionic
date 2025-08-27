import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelecaoAgendaPage } from './selecao-agenda.page';

describe('SelecaoAgendaPage', () => {
  let component: SelecaoAgendaPage;
  let fixture: ComponentFixture<SelecaoAgendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecaoAgendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelecaoAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
