import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { SubMainComponent } from './sub-main/sub-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BottomBarComponent,
    MainBodyComponent,
    SidebarComponent,
    MainComponent,
    SubMainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: '',
      component: MainBodyComponent
    },
    {
      path: ':id',
      component: MainComponent,
      children: [{
        path: '',
        component: MainComponent
      },
      {
        path: ':subid',
        component: SubMainComponent
      }]
    }
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
