import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase/app';





import { environment } from '../environments/environment';

const firebaseConfig = {
  apiKey: "AIzaSyCBJv0cCD8bvwroMQgFFgOUFuNOp94VlKs",
  authDomain: "shoppinlist-2597c.firebaseapp.com",
  databaseURL: "https://shoppinlist-2597c.firebaseio.com",
  projectId: "shoppinlist-2597c",
  storageBucket: "shoppinlist-2597c.appspot.com",
  messagingSenderId: "865052924411",
  appId: "1:865052924411:web:8a0b31a52903e26f70d35e",
  measurementId: "G-241WK2D3X7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
