import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogColaboradorPage } from './log-colaborador.page';

describe('LogColaboradorPage', () => {
  let component: LogColaboradorPage;
  let fixture: ComponentFixture<LogColaboradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogColaboradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogColaboradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
