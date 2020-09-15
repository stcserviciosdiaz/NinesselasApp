import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListFigurantePageModule } from './listFigurante/listFigurante.module';
import { HomePageModule } from './home/home.module';
import { LoginPageModule } from './login/login.module';
import { RegisterPageModule } from './register/register.module';
import { AdminPageModule } from './admin/admin.module';
import { AuthGuard } from './guard/auth.guard';
import { WelcomePageModule } from './welcome/welcome.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'listFigurante',
    loadChildren: () => import('./listFigurante/listFigurante.module').then(m => m.ListFigurantePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    WelcomePageModule,
    LoginPageModule,
    RegisterPageModule,
    AdminPageModule,
    HomePageModule,
    ListFigurantePageModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}