import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      const excludeRoutes = ["/login", "/signup", "/auth"];
      const token = this.cookieService.get('token')

      const shouldExclude = excludeRoutes.some(route => request.url.includes(route));
      if (shouldExclude) {
        return next.handle(request);
      }

      if (token) {
        const modifiedUrl = request.url.includes("?")
          ? `${request.url}&auth=${token}`
          : `${request.url}?auth=${token}`

        const modifiedRequest = request.clone({
          url: modifiedUrl
        });

        return next.handle(modifiedRequest);
      }

      return next.handle(request);
    } catch (e) {
      console.log('🔴🔴🔴 Ojito error', e)
      return next.handle(request);
    }
  }
}