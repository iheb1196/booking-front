import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

import { AuthGuard } from './auth.guard';
import { AccountpageComponent } from './accountpage/accountpage.component';




import { AdminhomeComponent } from './adminhome/adminhome.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { NewRouteComponent } from './new-route/new-route.component';



const routes: Routes = [
  { path:"" , component : HomepageComponent },
  { path:"home" , component : HomepageComponent },
  
  {path:"adminHome",component:AdminhomeComponent},
  {path:"loginAdmin",component:LoginadminComponent},
  

  { path:"login" , component : LoginpageComponent },
  { path:"signup" , component : SignuppageComponent },
  { path:"newRoute" , component : NewRouteComponent },
  { path:"registerAdmin", component : RegisterAdminComponent},
  {path:"accountAdmin",component:AdminAccountComponent},

  
   
  { path:"account" , component : AccountpageComponent , canActivate:[AuthGuard] , children:[
    
    
    
  ]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
