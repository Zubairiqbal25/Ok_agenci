import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { SideMenuComponent } from '../Components/side-menu/side-menu.component';
import { MainViewerComponent } from '../Components/main-viewer/main-viewer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {  MatButtonModule } from  '@angular/material/button';
import { AppRoutingModule } from './../app-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select'

@NgModule({
  declarations: [
    NavbarComponent,
    SideMenuComponent,
    MainViewerComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule,
    MatGridListModule,
    MatSelectModule
  ]
})
export class MainPageModule { }
