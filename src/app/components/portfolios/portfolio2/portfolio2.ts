import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { PortfolioDataService } from '../../../services/portfolio-data.service';

@Component({
  selector: 'app-portfolio2',
  imports: [AsyncPipe],
  templateUrl: './portfolio2.html',
  styleUrl: './portfolio2.css'
})
export class Portfolio2 {
  private readonly portfolioDataService = inject(PortfolioDataService);

  readonly portfolio$ = this.portfolioDataService.getPortfolioData();
  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
