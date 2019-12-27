import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = "register"; 
  readonly loginurl = "register/login"; 
  readonly accountUrl= "register/account";
  readonly listingUrl= "registrations/listings"; 

  constructor(private http: HttpClient, private router: Router) { }
 
  

  register(user){
    return this.http.post<any>(this.url, user)
  }; 

  login(user){
   
    return this.http.post<any>( this.loginurl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  account(user){
    return this.http.post<any>(this.accountUrl, user)
  }

  getAccount(id:string) {
    const _url = `${this.url}/${id}`; 
    return this.http.get<any>(_url); 
  }

  // this method is for the tokeninterceptor
  getToken(){
    return localStorage.getItem('token'); 
  }
  // this will remove the token and log you out of it.
  logoutUser(){
    localStorage.removeItem('token'); 
    this.router.navigate(['/listings'])
  }

  getListing(){
    return this.http.get<any>(this.listingUrl); 
  }; 

}
