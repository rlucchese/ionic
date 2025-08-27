import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelecaoDocumentoComponent } from './selecao-documento.component';

describe('SelecaoDocumentoComponent', () => {
  let component: SelecaoDocumentoComponent;
  let fixture: ComponentFixture<SelecaoDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecaoDocumentoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelecaoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
