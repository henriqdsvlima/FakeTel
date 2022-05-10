import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpUserEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { TokenService } from './../token/token.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';


@Injectable()
export class RequestInterceptor implements HttpInterceptor{

  constructor(private tokenService: TokenService, private router:Router){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(this.tokenService.hasToken()){
      // console.log("entrei aqui")
      const token = this.tokenService.getToken();
      // console.log('token:', token)
      req = req.clone({
          headers: req.headers.set('Authorization',token as string) // se não tiver o token, não navega
        }
      );
    }
    // else{
    //   console.log("Não Autorizado")
    //   this.router.navigate(['/'])

    // }
    return next.handle(req)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.log("Ocorreu um erro:", error.error.message);
    }
    return throwError(error.error)
  }
}
