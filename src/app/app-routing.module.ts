import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListFigurantePageModule } from './listFigurante/listFigurante.module';
import { HomePageModule } from './home/home.module';
import { LoginPageModule } from './login/login.module';
import { RegisterPageModule } from './register/register.module';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'listFigurante',
    loadChildren: () => import('./listFigurante/listFigurante.module').then(m => m.ListFigurantePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HomePageModule,
    LoginPageModule,
    RegisterPageModule,
    ListFigurantePageModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
