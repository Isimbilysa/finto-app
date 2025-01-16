import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, Observable, throwError } from 'rxjs';
import { UtilService } from '../../../../utils/util.service';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  constructor(private http: HttpClient, private cookieService: CookieService, private utilService: UtilService) {}
  private apiUrl = 'http://localhost:9000/api/v1/';
  getAssets(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'assets', {
      headers: {
        Authorization: 'Bearer ' + this.cookieService.get('accessToken'),
      },
    }).pipe(
      map((response) => response.data), // Extract the data property
      catchError(this.utilService.handleError) // Handle errors
    );
  }

}
