import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient, private cookie: CookieService) { }

  sendCredentials(email: string, password: string): Observable<any> {
    return this.http.post(`${this.URL}/auth/login`, { email, password })
  }

  signup(email: string, password: string): Observable<any> {
    return this.http.post(`${this.URL}/auth/signup`, { email, password })
  }

  logout(): void {
    this.cookie.delete("token", "/")
  }

  isAuthenticated(): boolean {
    return this.cookie.check("token")
  }
}
