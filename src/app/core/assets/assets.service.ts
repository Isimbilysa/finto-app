import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private baseUrl = 'http://localhost:9000/api/v1/portfolios'; // Replace with your backend URL

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  registerAsset(asset: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, asset,  {
        headers: {
            'Authorization' : 'Bearer ' + this.cookieService.get('accessToken')
        }
    });
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }
}
