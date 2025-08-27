import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SolicitacoesPage } from './solicitacoes.page';

describe('SolicitacoesPage', () => {
  let component: SolicitacoesPage;
  let fixture: ComponentFixture<SolicitacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitacoesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
