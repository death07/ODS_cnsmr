import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmptyComponent } from './empty/empty.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


const layoutModules = [
  // Empty
  SidebarComponent,
  EmptyComponent,
  HeaderComponent
];

@NgModule({
  declarations: [
    SidebarComponent,
    EmptyComponent,
    HeaderComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    ...layoutModules
  ]
})

export class LayoutModule { }
