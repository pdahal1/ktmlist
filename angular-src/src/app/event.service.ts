import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Listings } from 'model/addListing';
import { Registration } from 'model/registration';

@Injectable({
  providedIn: "root"
})
export class EventService {
  public _url = "register";
  public getAccountUrl = "register/account";
  readonly loginurl = "register/login";
  readonly entryUrl = "register/entries";
  public listingUrl = "listing";

  // public _url = "http://localhost:8080/register";
  // public getAccountUrl = "http://localhost:8080/register/account";
  // readonly loginurl = "http://localhost:8080/register/login";
  // readonly entryUrl = "http://localhost:8080/register/entries";
  // readonly listingUrl= "http://localhost:8080/listing"; 

  constructor(private http: HttpClient) { }
  
  getListing(id: String) {
    const url = `${this.listingUrl}/${id}`
    return this.http.get<any>(url)
  }; 

  // getRegister(id : String): Observable<Registration> {
  //   const url = `${this._url}/${id}`;
  //   return this.http.get<Registration>(url)
  // }

  getRegister(id : String) {
    const url = `${this._url}/${id}`
    return this.http.get<any>(url)
  }
 
  getListings() {
    return this.http.get<any>(this.listingUrl);
  }; 
    
  getAccount(user) {
    return this.http.get<any>(this.getAccountUrl, user);
  }; 

  accountLogin(user) {
    return this.http.post<any>(this.loginurl, user);
  }; 

  addListing(user){
    return this.http.post<any>(this.listingUrl, user)
  }; 

  
}
