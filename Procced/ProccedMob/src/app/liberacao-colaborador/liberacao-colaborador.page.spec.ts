import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiberacaoColaboradorPage } from './liberacao-colaborador.page';

describe('LiberacaoColaboradorPage', () => {
  let component: LiberacaoColaboradorPage;
  let fixture: ComponentFixture<LiberacaoColaboradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiberacaoColaboradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiberacaoColaboradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
