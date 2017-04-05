import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {LoginComponent } from './login/login.component';

import { appRoutes } from './app.routes';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { DashboardModule } from './dashboard/dashboard.module';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {FirebaseappService} from './services/firebaseapp.service';
import {AuthService} from './services/auth.service';


export const firebaseConfig = {

    apiKey: "AIzaSyARYTSD0712pQT2cNnn0iN4uoSEfNYgwbg",
    authDomain: "o2c01-6540e.firebaseapp.com",
    databaseURL: "https://o2c01-6540e.firebaseio.com",
    storageBucket: "o2c01-6540e.appspot.com",
    messagingSenderId: "790169156079"

};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
};

@NgModule({

  imports: [
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    LoginModule,
    SignupModule,
    DashboardModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [FirebaseappService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
