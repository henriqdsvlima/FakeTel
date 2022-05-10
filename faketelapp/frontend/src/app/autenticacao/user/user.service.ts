import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { subscribeOn, tap } from 'rxjs/operators';
import { User } from '../../interface/usuario';
import { TokenService } from './../token/token.service';
const jwt_decode = require('jwt-decode')

const API_URL_ADD_USER = 'localhost://5000/500'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>({});
  nome?: string;
  email?: string;
  cpf?: string
  pis?: number
  senha?: string
  pais?: string
  estado?: string
  municipio?: string
  cep?: number
  rua?: string
  numero?: string
  complemento?: string
  perfil?:string


  constructor(private tokenService: TokenService, private httpClient: HttpClient) {

    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    let user = jwt_decode(token) as User;
    // console.log(user)
    this.userSubject.next(user);
    // console.log(user['email'])
    // console.log("oi", user['name'])
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next({});
    window.localStorage.clear()
    window.sessionStorage.clear();
  }

  isLogged() {
    return this.tokenService.hasToken();
  }
}
