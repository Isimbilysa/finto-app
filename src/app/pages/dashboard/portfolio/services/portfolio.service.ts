import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { UtilService } from '../../../../utils/util.service';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private baseUrl = 'http://localhost:9000/api/v1/portfolios'; // Replace with your backend URL

  constructor(private http: HttpClient, private cookieService: CookieService, private utilService: UtilService) {}

  registerPortfolio(asset: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, asset,  {
        headers: {
            'Authorization' : 'Bearer ' + this.cookieService.get('accessToken')
        }
    });
  }

    private apiUrl = 'http://localhost:9000/api/v1/';
    getPortfolios(): Observable<any> {
      return this.http.get<any>(this.apiUrl + 'portfolios', {
        headers: {
          Authorization: 'Bearer ' + this.cookieService.get('accessToken'),
        },
      }).pipe(
        map((response) => response.data), 
        catchError(this.utilService.handleError) 
      );
    }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }
}
