import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DiaryServices } from "src/shared/shared/services/diary.services";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HTTP } from "@ionic-native/http/ngx";
import {Firebase} from "@ionic-native/firebase/ngx";

import firebase from "firebase";
//firebase.initializeApp()

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
   // AngularFireModule.initializeApp(firebase),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
     Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DiaryServices,
    HTTP
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
