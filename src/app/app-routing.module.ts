import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetComponent } from './Components/reset/reset.component';
import { RegisterComponent } from './Components/register/register.component';
import { MainViewerComponent } from './Components/main-viewer/main-viewer.component';
import { MainPageModule } from './main-page/main-page.module';

const routes: Routes = [
  {
    path : '',
    component: AppComponent,
    children:[
      {
        path : '',
        component: LoginComponent
      }
    ]
  },
  {
    path : 'reset',
    component: AppComponent,
    children:[
      {
        path : '',
        component: ResetComponent
      }
    ]
  },
  {
    path : 'Register',
    component: AppComponent,
    children:[
      {
        path : '',
        component: RegisterComponent
      }
    ]
  },
  {
    path : 'MainViewerComponent',
    component: AppComponent,
    children:[
      {
        path : '',
        component: MainViewerComponent
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
