import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { ComponentsModule } from './components/components.module';
import { HeaderComponent } from './components/header/header.component';
import { GradeLevelsComponent } from './components/grade-levels/grade-levels.component';
import { LightHeaderComponent } from './components/light-header/light-header.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
    HeaderComponent,
    GradeLevelsComponent,
    LightHeaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
