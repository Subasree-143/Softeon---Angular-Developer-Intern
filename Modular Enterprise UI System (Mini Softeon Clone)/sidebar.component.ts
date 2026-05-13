// layout/sidebar/sidebar.component.ts
import { Component } from '@angular/core';
import { MENU_CONFIG } from '../../core/config/menu.config';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  template: `
    <ul>
      <li *ngFor="let item of filteredMenu">
        <a [routerLink]="item.route">{{ item.label }}</a>
      </li>
    </ul>
  `
})
export class SidebarComponent {

  filteredMenu: any[] = [];

  constructor(private auth: AuthService) {
    const role = this.auth.getUserRole();

    this.filteredMenu = MENU_CONFIG.filter(m => m.role === role);
  }
}