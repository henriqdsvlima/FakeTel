import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { TokenService } from './token/token.service';
import { UserService } from './user/user.service';
import { environment as ENV } from 'src/environments/environment';

const LOGIN_URL = 'localhost:5000/login'
const REGISTER_URL = 'localhost:5000/register'
/*
  providedIn: 'root'
})

// -- Jogar API_URL dentro do ENV do angular
// -- ler sobre readonly

export class AutenticacaoService {


  constructor(private httpClient: HttpClient,
    private tokenService: TokenService,
    private userService: UserService,
  ) { }

  autenticar(usuario: any, senha: string): Observable<any> {
    this.tokenService.generateToken()
    const senhaAjustada = this.tokenService.criptoPass2(senha)
    let header: HttpHeaders;
    header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      // 'Authorization':'Token e1ab2dd448944c1db9d085ad1e175a0d'
    })

    return this.httpClient.
      post(this.API_URL_LOGIN, {
        userName: usuario,
        pass: senha,
      },
        {
          headers: header,
          observe: 'response'
        }
      )
      .pipe(
        tap(res => {
          // console.log(res)
          const resposta: any = res.body
          const perfil: any = resposta['perfil']
          this.userService.setPerfil(perfil)
          const userName: any = resposta['usuario']
          this.userService.setUserName(userName)
          const email: any = resposta['email']
          this.userService.setUserEmail(email)
          const id: any = resposta['usuario_id']
          this.userService.setUserId(id)
          // console.log('Perfil:', this.userService.getPerfil())
          // window.localStorage.setItem('user_email', resposta['email'])
          // console.log('email', resposta['email'])

          const teste: any = res.status
          console.log('teste', teste)
        }),

      )
  }

  getUserName() {
    const name = window.sessionStorage.getItem('nomeUsuario')
    return name
  }

  resetPass(dadosUsuario: object): Observable<any> {
    let header: HttpHeaders;
    header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    })

    return this.httpClient.
      post(this.API_REGISTER,
        dadosUsuario,
        {
          headers: header,
          observe: 'response'
        }
      )
      .pipe(
        tap(res => {
          // console.log(res)
          const resposta: any = res.body
          // console.log(resposta)
          const teste: any = res.status
          console.log('Status Troca Senha', teste)
        }),
      )
  }

  enviaToken(emailUsuario: any): Observable<any> {
    // console.log(emailUsuario)
    const id = this.userService.getUserId()
    // console.log('id:', id)
    let header: HttpHeaders;
    header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    })

    return this.httpClient.
      post(this.API_URL_ENVIA_TOKEN, {
        email: emailUsuario,
        usuario_id: id
      },
        {
          headers: header,
          observe: 'response'
        }
      )
      .pipe(
        tap(res => {
          // console.log(res)
          const resposta: any = res.body
          // console.log(resposta)
          const teste: any = res.status
          // console.log('teste', teste)
        }),
      )
  }

  validaToken(userName: any, token: any, perfil: any): Observable<any> {
    let header: HttpHeaders;
    const id = this.userService.getUserId()
    header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    })

    return this.httpClient.post(this.API_URL_VALIDA_TOKEN, {
      userName: userName,
      token: token,
      perfil: perfil,
      usuario_id: id
    },
      {
        headers: header,
        observe: 'response'
      })
      .pipe(
        tap(res => {
          // console.log(res)
          const resposta: any = res.body
          const pdvs : any = resposta['pdvs']
          const canais: any = resposta['canal']
          const regional: any = resposta['regional']
          const razaoSocial: any = resposta['razao_social_pai']
          const pdvPaiArray: any = resposta['pdv_pai_array']
          const pdvPai: any = resposta['pdv_pai']
          const ciclos: any = resposta['ciclos']
          const cicloAtual : any = resposta['ciclo_atual']
          const aceiteTermoJuridico : any = resposta['aceite_ativo']
          const protocolos: any = resposta['protocolos']


          // inserir get de canal e regional

          this.userService.setPdvs(pdvs)
          this.userService.setCanais(canais)
          this.userService.setRegionais(regional)
          this.userService.setRazaoSocial(razaoSocial)
          this.userService.setpdvPaiArray(pdvPaiArray)
          this.userService.setpdvPai(pdvPai)
          this.userService.setCiclos(ciclos)
          this.userService.setCicloAtual(cicloAtual)
          this.userService.setAceiteTermoJuridico(aceiteTermoJuridico)
          this.userService.setProtocolos(protocolos)

          const token = resposta.Authorization
          this.userService.setToken(token)
          // console.log(resposta)
          const teste: any = res.status
          // console.log('valida token:', teste)
        }),
      )
  }
}

// console.log(this.tokenService.getToken())
// console.log(authToken)
// }),
// map((resposta)=>({
// resposta : resposta.body
// })))
// }
