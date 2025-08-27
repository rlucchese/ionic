import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoBaixasPage } from './info-baixas.page';

describe('InfoBaixasPage', () => {
  let component: InfoBaixasPage;
  let fixture: ComponentFixture<InfoBaixasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBaixasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoBaixasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
