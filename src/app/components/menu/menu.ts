import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { inject } from '@angular/core';
import { RouterModule } from '@angular/router';
export interface MenuItem {
  label: string;
  link?: string;
  action?: () => void;
}
@Component({
  selector: 'app-menu',
imports: [
    RouterModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu
{
 private router = inject(Router);

  isVisible = true;
  isFadingOut = false;

  onLinkClick(_: MouseEvent) {
    // Start fade, but DO NOT preventDefault
    this.isFadingOut = true;

    // As soon as navigation starts, hide the splash
    const sub = this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) {
        this.isVisible = false;
        sub.unsubscribe();
      }
    });
  }
}
