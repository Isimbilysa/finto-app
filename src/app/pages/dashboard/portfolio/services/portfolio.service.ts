import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { UtilService } from '../../../../utils/util.service';
import { Portfolio } from '../../../../shared/types/portfolio';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private baseUrl = 'http://localhost:9000/api/v1/portfolios';

  portfolioBody = {
    name: '',
    category: '',
    description: '',
  }

  constructor(private http: HttpClient, private cookieService: CookieService, private utilService: UtilService) {}

  public registerPortfolio(asset: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, asset,  {
        headers: {
            'Authorization' : 'Bearer ' + this.cookieService.get('accessToken'),
            'ipAddress' : this.cookieService.get('ipAddress')
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
    
    deleteAsset(id: string): Observable<any> {
      return this.http
        .delete<any>(`${this.apiUrl}portfolios/${id}`, {
          headers: {
            Authorization: 'Bearer ' + this.cookieService.get('accessToken'),
            ipAddress : this.cookieService.get('ipAddress'),
          },
        })
        .pipe(
          map((response) => response.data),
          catchError(this.utilService.handleError)
        );
    }
  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }
  getPortfoliosPaginated(page: number, limit: number, searchTerm: string = ''): Observable<any> {
    const params = {
      page: page.toString(),
      limit: limit.toString(),
      search: searchTerm,
    };
  
    return this.http
      .get<any>(`${this.apiUrl}portfolios/search`, {
        headers: {
          Authorization: 'Bearer ' + this.cookieService.get('accessToken'),
          ipAddress : this.cookieService.get('ipAddress'),
        },
        params: params,
      })
      .pipe(
        map((response) => response.data), 
        catchError(this.utilService.handleError)
      );
  }
  
    editPortfolio(portfolio : Portfolio, id:string){
      this.portfolioBody = {
        name: portfolio.name,
        category: portfolio.category,
        description: portfolio.description,
      }
      return this.http.put(`${this.apiUrl}portfolios/${id}`,this.portfolioBody, {
        headers: {
          'Authorization' : 'Bearer '+ this.cookieService.get('accessToken'),
          'ipAddress' : this.cookieService.get('ipAddresss')
        }
      });
    }
}
