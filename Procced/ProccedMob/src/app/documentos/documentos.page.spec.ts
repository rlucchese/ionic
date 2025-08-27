import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DocumentosPage } from './documentos.page';

describe('DocumentosPage', () => {
  let component: DocumentosPage;
  let fixture: ComponentFixture<DocumentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentosPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
