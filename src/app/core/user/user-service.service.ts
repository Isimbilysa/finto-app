import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, switchMap } from 'rxjs';
import { User } from '../../shared/types/user';
import { LoginPayload } from '../../shared/types/login-payload';
import { CookieService } from 'ngx-cookie-service';
import { UtilService } from '../../utils/util.service';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private utilService: UtilService
  ) {}

  private usernameSource = new BehaviorSubject<string>('');
  username$ = this.usernameSource.asObservable();

  setUsername(name: string) {
    this.usernameSource.next(name);
  }

  private apiUrl = `http://localhost:9000/api/v1/`;
  ipAddress  = '';
  setUserContext(key: string, value: string): void {
    this.cookieService.set(key, value, 7); // Expires in 7 days
  }
  getUserContext(key: string): string {
    return this.cookieService.get(key);
  }

  isAuthenticated() {
    return !!this.getUserContext('accessToken');
  }
  clearUserContext(key: string): void {
    this.cookieService.delete(key);
  }

  clearAllContexts(): void {
    this.cookieService.deleteAll();
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.apiUrl)
      .pipe(catchError(this.utilService.handleError));
  }

  getUserById(id: number): Observable<User> {
    return this.http
      .get<User>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.utilService.handleError));
  }

  createUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl + 'client/register', user);
  }
 
  
  login(user: LoginPayload): Observable<any> {
    return this.utilService.getIpAddress().pipe(
      switchMap((data: any) => {
        this.ipAddress = data.ip; 
        this.setUserContext("ipAddress", this.ipAddress);
        return this.http.post(this.apiUrl + 'auth/login', user);
      }),
      catchError((error: any) => {
        console.error('Error fetching IP address or logging in:', error);
        throw error;
      })
    );
  }


  logout() {
    this.clearUserContext('accessToken');
    this.clearUserContext('refreshToken');
    this.clearUserContext('userId');
    this.setUsername('');
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http
      .put<User>(`${this.apiUrl}/${id}`, user)
      .pipe(catchError(this.utilService.handleError));
  }

  deleteUser(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.utilService.handleError));
  }
}
