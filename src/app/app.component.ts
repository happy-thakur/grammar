import { Component } from '@angular/core';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MainBodyComponent } from './main-body/main-body.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
