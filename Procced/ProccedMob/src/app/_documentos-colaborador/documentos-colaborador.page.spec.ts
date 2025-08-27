import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocumentosColaboradorPage } from './documentos-colaborador.page';

describe('DocumentosColaboradorPage', () => {
  let component: DocumentosColaboradorPage;
  let fixture: ComponentFixture<DocumentosColaboradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentosColaboradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentosColaboradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
