import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { routing } from './app.routing';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserService } from './user.service';
import { PrimaryTransactionComponent } from './primary-transaction/primary-transaction.component';
import { SavingsTransactionComponent } from './savings-transaction/savings-transaction.component';
import { RequestComponent } from './request/request.component';
import { RequestService } from './request.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserAccountComponent,
    PrimaryTransactionComponent,
    SavingsTransactionComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LoginService,
    UserService,
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
