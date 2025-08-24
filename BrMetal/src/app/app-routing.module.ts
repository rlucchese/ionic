import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },


  {
    path: 'listaCadastro/:id',
    loadChildren: () => import('./pages/listaCadastro/listaCadastro.module').then( m => m.ListaCadastroPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'altera-senha/:id',
    loadChildren: () => import('./altera-senha/altera-senha.module').then( m => m.AlteraSenhaPageModule)
  },
  {
    path: 'vendas/:id',
    loadChildren: () => import('./pages/pedido/pedido.module').then( m => m.PedidoPageModule)
  },
  {
    path: 'identificacao-pedido',
    loadChildren: () => import('./pages/identificacao-pedido/identificacao-pedido.module').then( m => m.IdentificacaoPedidoPageModule)
  },
  {
    path: 'itens-pedido',
    loadChildren: () => import('./pages/itens-pedido/itens-pedido.module').then( m => m.ItensPedidoPageModule)
  },
  {
    path: 'confirmacao-pedido',
    loadChildren: () => import('./pages/confirmacao-pedido/confirmacao-pedido.module').then( m => m.ConfirmacaoPedidoPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'modal-valor',
    loadChildren: () => import('./modal-valor/modal-valor.module').then( m => m.ModalValorPageModule)
  },
  {
    path: 'expedicao',
    loadChildren: () => import('./pages/expedicao/expedicao.module').then( m => m.ExpedicaoPageModule)
  },
  {
    path: 'finaliza-expedicao',
    loadChildren: () => import('./pages/finaliza-expedicao/finaliza-expedicao.module').then( m => m.FinalizaExpedicaoPageModule)
  },
  {
    path: 'modal-valida-itens',
    loadChildren: () => import('./modal-valida-itens/modal-valida-itens.module').then( m => m.ModalValidaItensPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
