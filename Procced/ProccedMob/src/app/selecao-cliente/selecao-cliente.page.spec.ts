import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelecaoClientePage } from './selecao-cliente.page';

describe('SelecaoClientePage', () => {
  let component: SelecaoClientePage;
  let fixture: ComponentFixture<SelecaoClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecaoClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelecaoClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
