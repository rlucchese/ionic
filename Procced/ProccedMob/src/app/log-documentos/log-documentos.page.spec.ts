import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogDocumentosPage } from './log-documentos.page';

describe('LogDocumentosPage', () => {
  let component: LogDocumentosPage;
  let fixture: ComponentFixture<LogDocumentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogDocumentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogDocumentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
