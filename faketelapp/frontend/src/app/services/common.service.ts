import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { environment as ENV } from 'src/environments/environment';
import { TokenService } from './../autenticacao/token/token.service';
import Swal from 'sweetalert2';
import { UserService } from './../autenticacao/user/user.service';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

constructor() { }

}
