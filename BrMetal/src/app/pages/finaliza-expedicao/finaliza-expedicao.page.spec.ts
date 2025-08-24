import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinalizaExpedicaoPage } from './finaliza-expedicao.page';

describe('FinalizaExpedicaoPage', () => {
  let component: FinalizaExpedicaoPage;
  let fixture: ComponentFixture<FinalizaExpedicaoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizaExpedicaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinalizaExpedicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
