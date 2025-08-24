import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcompanhamentoProducaoPage } from './acompanhamento-producao.page';

describe('AcompanhamentoProducaoPage', () => {
  let component: AcompanhamentoProducaoPage;
  let fixture: ComponentFixture<AcompanhamentoProducaoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanhamentoProducaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcompanhamentoProducaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
