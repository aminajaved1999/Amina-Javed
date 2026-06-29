import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

import { PortfolioData } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  private readonly http = inject(HttpClient);
  private cache$?: Observable<PortfolioData>;

  getPortfolioData(): Observable<PortfolioData> {
    if (!this.cache$) {
      this.cache$ = this.http.get<PortfolioData>('/data/portfolio.json').pipe(shareReplay(1));
    }

    return this.cache$;
  }
}
