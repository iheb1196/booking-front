import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { AccountsidebareComponent } from './accountsidebare/accountsidebare.component';




import { AdminhomeComponent } from './adminhome/adminhome.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { AccountadmineSidebareComponent } from './accountadmine-sidebare/accountadmine-sidebare.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { NewRouteComponent } from './new-route/new-route.component';

import { DestinationComponent } from './destination/destination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    LoginpageComponent,
    SignuppageComponent,
  
    AccountpageComponent,
    AccountsidebareComponent,
    
    
    
    
    AdminhomeComponent,
    LoginadminComponent,
    AdminAccountComponent,
    AccountadmineSidebareComponent,
    RegisterAdminComponent,
    NewRouteComponent,
    
    DestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
