import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  backButtonSubscription;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Categories',
      url: '/categories',
      icon: 'albums'
    },
    {
      title: 'Offers',
      url: '/offers',
      icon: 'star'
    },
    {
      title: 'Packages',
      url: '',
      icon: 'logo-buffer'
    },
    {
      title: 'My Orders',
      url: '',
      icon: 'heart'
    },
    {
      title: 'My Cart',
      url: '',
      icon: 'cart'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    public authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }
  
  menuClose() {
    this.menu.close()
  }

  logout(){
    this.menuClose()
    this.authService.logout()
  }

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(1, () => {
      if(this.router.isActive('/home', true) && this.router.url === '/home') {
        navigator['app'].exitApp();
      }
    });
  }

  ngOnDestroy() { 
    this.backButtonSubscription.unsubscribe();
  }
}
