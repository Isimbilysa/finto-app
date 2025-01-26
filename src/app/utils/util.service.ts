import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private http: HttpClient) {}
  public handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }

  public getGeolocation(ip: string): Observable<any> {
    return this.http.get<any>(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${environment.abstractProviderApiKey}&ip_address=${ip}`
    );
  }

  public getIpAddress(): Observable<any> {
    return this.http.get<any>('https://api.ipify.org?format=json');
  }
}
