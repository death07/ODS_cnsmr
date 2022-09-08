import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ods' },

  {
    path: 'xlog',
    data: {
      layout: 'empty'
    },
    children: [
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    ]
  },

  {
    path: 'ods',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'myprofile', loadChildren: () => import('./pages/my-profile/my-profile.module').then(m => m.MyProfileModule) },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerConfig),
    LayoutModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
