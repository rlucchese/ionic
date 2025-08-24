import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadSetupGuard } from './guards/load-setup.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'alterarSenha',
    loadChildren: () => import('./altera-senha/altera-senha.module').then( m => m.AlteraSenhaPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'planta',
    loadChildren: () => import('./pages/planta/planta.module').then( m => m.PlantaPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'equipamento',
    loadChildren: () => import('./pages/equipamento/equipamento.module').then( m => m.EquipamentoPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'operacao',
    loadChildren: () => import('./pages/operacao/operacao.module').then( m => m.OperacaoPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'apontamento',
    loadChildren: () => import('./pages/apontamento/apontamento.module').then( m => m.ApontamentoPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'parada',
    loadChildren: () => import('./pages/parada/parada.module').then( m => m.ParadaPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'finalizar',
    loadChildren: () => import('./pages/finalizar/finalizar.module').then( m => m.FinalizarPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'selecao-evento',
    loadChildren: () => import('./selecao-evento/selecao-evento.module').then( m => m.SelecaoEventoPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'agrupamento',
    loadChildren: () => import('./agrupamento/agrupamento.module').then( m => m.AgrupamentoPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'acompanhamento-producao',
    loadChildren: () => import('./pages/acompanhamento-producao/acompanhamento-producao.module').then( m => m.AcompanhamentoProducaoPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'mensagem',
    loadChildren: () => import('./pages/mensagem/mensagem.module').then( m => m.MensagemPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'etiqueta',
    loadChildren: () => import('./pages/etiqueta/etiqueta.module').then( m => m.EtiquetaPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'nova-mensagem',
    loadChildren: () => import('./nova-mensagem/nova-mensagem.module').then( m => m.NovaMensagemPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'etiqueta',
    loadChildren: () => import('./pages/etiqueta/etiqueta.module').then( m => m.EtiquetaPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'mensagem-contato',
    loadChildren: () => import('./pages/mensagem-contato/mensagem-contato.module').then( m => m.MensagemContatoPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'setup',
    loadChildren: () => import('./setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: 'operador',
    loadChildren: () => import('./operador/operador.module').then( m => m.OperadorPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./pages/produtos/produtos.module').then( m => m.ProdutosPageModule),
    canLoad: [LoadSetupGuard]

  },
  {
    path: 'recebimentoCompra',
    loadChildren: () => import('./pages/recebimento-compra/recebimento-compra.module').then( m => m.RecebimentoCompraPageModule),
    canLoad: [LoadSetupGuard]
  },
  {
    path: 'cotas',
    loadChildren: () => import('./pages/cotas/cotas.module').then( m => m.CotasPageModule),
   // canLoad: [LoadSetupGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
