import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetComponent } from './auth/reset/reset.component';
import { RegisterComponent } from './auth/register/register.component';
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
    path : 'Main',
    component: AppComponent,
    children:[
      {
        path : '',
        component: MainPageModule
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
