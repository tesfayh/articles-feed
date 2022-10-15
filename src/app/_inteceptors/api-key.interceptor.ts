import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({headers: req.headers.set('X-Api-Key', 'a6f0643366f7462cbae55c7ba5dc7d01')});

    return next.handle(authReq);
  }
}