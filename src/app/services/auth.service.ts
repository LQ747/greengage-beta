import { Injectable } from '@angular/core';
import { Http ,Headers, Response} from '@angular/http';
import { baseURL } from '../shared/baseurl';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import decode from 'jwt-decode';
import { retry } from 'rxjs/operator/retry';
import { ComponentComunicationService } from './component-comunication.service';

@Injectable()
export class AuthService {
  private loggedIn = false;
  private role = false;

  constructor(private ComunSerice:ComponentComunicationService,private http:Http) {
    this.loggedIn = !!localStorage.getItem('token');


   }
   signup(firstName:string,lastName:string,password:string,phone:number,email:string,message:string
  ,exportType:string){
     
     return this.http.post(baseURL+"user",{firstName:firstName,lastName:lastName,password:password,
        phone:phone,email:email,message:message,exportType:exportType},
      {headers: new Headers({'X-Requested-With':'XMLHttpRequrest'})});
   }
   sinein(email:string,password:string){
     return this.http.post(baseURL + 'user/signin',
     {email:email,password:password},
     {headers: new Headers({'X-Requested-With':'XMLHttpRequrest'})})
     .map(
      (response: Response) => {
        const token = response.json().token;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return {token: token, decoded: decode(token)};
      }
    ).do(
      tokenData => {
        localStorage.setItem('token',tokenData.token);
        this.loggedIn = true;
      }
    );
   }

   logout(): void {
    // clear token remove user from local storage to log user out
    this.loggedIn = false;
    localStorage.removeItem('token');
    localStorage.removeItem('role');
}

   getToken(){
      return localStorage.getItem('token');
   }
   isLoggedIn() {
    return this.loggedIn;
  }
  public getUserId() {
    const token = localStorage.getItem('token');  
    const decodedToken = decode(token);
    return decodedToken.sub;
  
  }

  public getUserRole(){
    const token = localStorage.getItem('token');
    if(token){  
      const decodedToken = decode(token);
      
      if(decodedToken.role == 3){
         return true;
      }
      else{
         return false;
      }
    }
  }

  public isAdmin(){
    const token = localStorage.getItem('token');
    if(token){
      const decodedToken = decode(token);
      if(decodedToken.role == 3){
        return false;
     }
     else{
        return true;
     }
    }
  }

  public setRole(role){
    this.role = role;
  }
  public giveMeRole(){
    return this.role;
  }
}
