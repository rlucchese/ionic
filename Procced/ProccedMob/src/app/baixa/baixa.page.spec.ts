import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaixaPage } from './baixa.page';

describe('BaixaPage', () => {
  let component: BaixaPage;
  let fixture: ComponentFixture<BaixaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaixaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaixaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
