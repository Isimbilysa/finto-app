import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, Observable, throwError } from 'rxjs';
import { UtilService } from '../../../../utils/util.service';
import { Asset } from '../../../../shared/types/asset';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private utilService: UtilService
  ) {}
  private apiUrl = 'http://localhost:9000/api/v1/';
  getAssets(): Observable<any> {
    return this.http
      .get<any>(this.apiUrl + 'assets', {
        headers: {
          Authorization: 'Bearer ' + this.cookieService.get('accessToken'),
        },
      })
      .pipe(
        map((response) => response.data),
        catchError(this.utilService.handleError)
      );
  }

  assetBody = {
    name: '',
    description: '',
    marketValue: 0,
    asset_type: ''
  }

  getAsset(id:string): Observable<any> {
    return this.http
      .get<any>(this.apiUrl + 'assets/' + id, {
        headers: {
          Authorization: 'Bearer ' + this.cookieService.get('accessToken'),
        },
      })
      .pipe(
        map((response) => response.data),
        catchError(this.utilService.handleError)
      );
  }

  deleteAsset(id: string): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}assets/${id}`, {
        headers: {
          Authorization: 'Bearer ' + this.cookieService.get('accessToken'),
        },
      })
      .pipe(
        map((response) => response.data),
        catchError(this.utilService.handleError)
      );
  }

  editAsset(asset : Asset, id:string){
    this.assetBody = {
      name: asset.name,
      description: asset.description,
      marketValue: asset.marketValue,
      asset_type: asset.assetType
    }
    return this.http.put(`${this.apiUrl}assets/${id}`,this.assetBody, {
      headers: {
        'Authorization' : 'Bearer '+ this.cookieService.get('accessToken')
      }
    });
  }
  getAssetsPaginated(page: number, limit: number, searchTerm: string = ''): Observable<any> {
    const params = {
      page: page.toString(),
      limit: limit.toString(),
      search: searchTerm,
    };
  
    return this.http
      .get<any>(`${this.apiUrl}assets/paginated`, {
        headers: {
          Authorization: 'Bearer ' + this.cookieService.get('accessToken'),
        },
        params: params,
      })
      .pipe(
        map((response) => response.data), 
        catchError(this.utilService.handleError)
      );
  }
}
