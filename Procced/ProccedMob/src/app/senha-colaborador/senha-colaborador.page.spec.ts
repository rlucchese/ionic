import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SenhaColaboradorPage } from './senha-colaborador.page';

describe('SenhaColaboradorPage', () => {
  let component: SenhaColaboradorPage;
  let fixture: ComponentFixture<SenhaColaboradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenhaColaboradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SenhaColaboradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
