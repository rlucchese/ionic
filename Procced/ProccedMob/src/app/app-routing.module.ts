//import { HomePage } from './home/home.page';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanLoad } from '@angular/router';
import { LoadSetupGuard } from './guards/load-setup.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'login/:param',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [LoadSetupGuard,AuthGuard]
  },
  {
    path: 'os',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [LoadSetupGuard,AuthGuard]
  },
  {
    path: 'altera-senha/:id',
    loadChildren: () => import('./altera-senha/altera-senha.module').then( m => m.AlteraSenhaPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: '',
    redirectTo: 'tabs/documentos',
    pathMatch: 'full'
  }, 
/* 
  {
    path: 'home',
    redirectTo: 'noticias',
    pathMatch: 'full'
  }, */
  {
    path: 'inclui-ordem-servico',
    loadChildren: () => import('./inclui-ordem-servico/inclui-ordem-servico.module').then( m => m.IncluiOrdemServicoPageModule),
//    canLoad: [LoadSetupGuard]
//    canLoad: [AuthGuard]
  },
  {
    path: 'selecao-servico',
    loadChildren: () => import('./selecao-servico/selecao-servico.module').then( m => m.SelecaoServicoPageModule),
    canLoad: [LoadSetupGuard,AuthGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule),
    canLoad: [LoadSetupGuard,AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'liberacao-colaborador',
    loadChildren: () => import('./liberacao-colaborador/liberacao-colaborador.module').then( m => m.LiberacaoColaboradorPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'senha-colaborador',
    loadChildren: () => import('./senha-colaborador/senha-colaborador.module').then( m => m.SenhaColaboradorPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'documentos-colaborador',
    loadChildren: () => import('./documentos-colaborador/documentos-colaborador.module').then( m => m.DocumentosColaboradorPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'log-documentos',
    loadChildren: () => import('./log-documentos/log-documentos.module').then( m => m.LogDocumentosPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule),
    canLoad: [LoadSetupGuard,AuthGuard]
  },  
  {
    path: 'baixa',
    loadChildren: () => import('./baixa/baixa.module').then( m => m.BaixaPageModule),
    canLoad: [LoadSetupGuard,AuthGuard]
  },  
  {
    path: 'setup',
    loadChildren: () => import('./setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: 'selecao-agenda',
    loadChildren: () => import('./selecao-agenda/selecao-agenda.module').then( m => m.SelecaoAgendaPageModule)
  },
  {
    path: 'info-baixas',
    loadChildren: () => import('./info-baixas/info-baixas.module').then( m => m.InfoBaixasPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
