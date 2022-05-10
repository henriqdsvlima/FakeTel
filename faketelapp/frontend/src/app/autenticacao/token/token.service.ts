import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';
import { toBase64String } from '@angular/compiler/src/output/source_map';

const KEY= 'Authorization'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  iss: string = "";
  iat!: Date;
  exp!: Date;
  user!: string;
  payload!: string;
  header!: string;
  key!: string
  signature!: string
  pass!: string

  constructor() { }


  criptoPass2(senha: string){
    let key = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3'
    let senhaCriptografada = crypto.AES.encrypt(senha, key).toString()
    // console.log('senha criptografada:', senhaCriptografada)


    var bytes = crypto.AES.decrypt(senhaCriptografada, key)
    var senhaDecriptografada = bytes.toString(crypto.enc.Utf8)


    // console.log('senha descriptograda:', senhaDecriptografada)
    return senhaCriptografada
  }


  criptoPass(senha: string){

    console.log('entrei aqui')

    var criptoSenha = crypto.enc.Utf8.parse(senha)
    // console.log('criptoSenha: ',criptoSenha)
    var encodedSenha = this.base64url(criptoSenha)

    // console.log('encodedSenha:', encodedSenha)


    var secret = '123'


    var pass = crypto.HmacSHA256(encodedSenha, secret)
    // console.log('pass1', pass)
    // console.log(typeof(pass))
    this.pass = this.base64url(pass)
    // console.log(this.pass)

    return this.pass

  }

  generateToken(){
    var header = {
      "alg": "HS256",
      "typ": "JWT"
    };

    var stringifiedHeader = crypto.enc.Utf8.parse(JSON.stringify(header));
    var encodedHeader = this.base64url(stringifiedHeader);

    var data = {
      "aplication":"Portal Oi Comissionamentos",
      "id": 'xxx',
      "username": 'Diego'
    };

    var stringifiedData = crypto.enc.Utf8.parse(JSON.stringify(data));
    var encodedData = this.base64url(stringifiedData);

    var token = encodedHeader + "." + encodedData;
    // console.log(token)

    var secret = "teste";

    var signature = crypto.HmacSHA256(token, secret);
    this.signature = this.base64url(signature);

    var signedToken = token + "." + signature;
    // console.log(signedToken)

  }

  base64url(source: any) {
    // Encode in classical base64
    let encodedSource = crypto.enc.Base64.stringify(source);

    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '');

    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');

    return encodedSource;
 }

  hasToken(){
    // console.log("tokennnn: ",!!this.getToken())
    return !!this.getToken();
  }

  setToken(token: string){
    window.localStorage.setItem(KEY, "Bearer "+token);
  }

  getToken(){
    return window.localStorage.getItem(KEY)
  }

  removeToken(){
    window.localStorage.removeItem(KEY)
  }
}
