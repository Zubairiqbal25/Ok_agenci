import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainViewerComponent } from './main-viewer/main-viewer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SideMenuComponent,
    MainViewerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainPageModule { }
