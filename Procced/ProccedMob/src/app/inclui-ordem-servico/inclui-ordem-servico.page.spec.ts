import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncluiOrdemServicoPage } from './inclui-ordem-servico.page';

describe('IncluiOrdemServicoPage', () => {
  let component: IncluiOrdemServicoPage;
  let fixture: ComponentFixture<IncluiOrdemServicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluiOrdemServicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncluiOrdemServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
