import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { User } from '../../shared/types/user';
import { LoginPayload } from '../../shared/types/login-payload';
import { MessageService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, private messageService : MessageService, private cookieService : CookieService ) {}


  private usernameSource = new BehaviorSubject<string>('');
  username$ = this.usernameSource.asObservable();

  setUsername(name: string) {
    this.usernameSource.next(name);
  }

  private apiUrl = `http://localhost:9000/api/v1/`;

  setUserContext(key: string, value: string): void {
    this.cookieService.set(key, value, 7); // Expires in 7 days
  }

  getUserContext(key: string): string {
    return this.cookieService.get(key);
  }

  clearUserContext(key: string): void {
    this.cookieService.delete(key);
  }

  clearAllContexts(): void {
    this.cookieService.deleteAll();
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl + 'client/register', user)
  }

  login(user: LoginPayload): Observable<any> {
   return this.http.post(this.apiUrl + 'auth/login', user)
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user).pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';

    alert(error.error.message + ' Please try again.');

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }}
