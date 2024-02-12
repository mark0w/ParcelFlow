import { Component } from '@angular/core';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'uiui';
  isLoggedIn = true;

  menuItems: NbMenuItem[] = [
    {title: 'Overview', icon: 'activity', url: 'overview'},
    {title: 'Manage packages', icon: 'plus', url: 'administration/manage-packages'},
    {title: 'Settings', icon: 'settings'}
  ]

  userMenuItems: NbMenuItem[] = [
      { title: 'Profile', icon: 'person' },
      { title: 'Logout', icon: 'power' },
  ];
}
