import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio1',
  imports: [],
  templateUrl: './portfolio1.html',
  styleUrl: './portfolio1.css'
})
export class Portfolio1
{
  isMobileMenuOpen = false;

  // Toggles the mobile menu's visibility.
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Closes the menu after navigation.
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

}
