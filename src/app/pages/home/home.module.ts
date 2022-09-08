import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

const exampleRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
];


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(exampleRoutes),
    MatIconModule
  ]
})
export class HomeModule { }
