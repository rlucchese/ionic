import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'documentos',
        loadChildren: () => import('../documentos/documentos.module').then(m => m.DocumentosPageModule)
      },
      {
        path: 'solicitacoes',
        loadChildren: () => import('../solicitacoes/solicitacoes.module').then(m => m.SolicitacoesPageModule)
      },
      {
        path: 'protocolos',
        loadChildren: () => import('../protocolos/protocolos.module').then(m => m.ProtocolosPageModule)
      },
      {
        path: 'colaboradores',
        loadChildren: () => import('../liberacao-colaborador/liberacao-colaborador.module').then(m => m.LiberacaoColaboradorPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/documentos',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
