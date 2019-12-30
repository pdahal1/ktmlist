import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventService {
  // public _url = "register";
  // public getAccountUrl = "register/account";
  // readonly loginurl = "register/login";
  // readonly entryUrl = "register/entries";
  // public listingUrl = "listing";

  public _url = "http://localhost:8080/register";
  public getAccountUrl = "http://localhost:8080/register/account";
  readonly loginurl = "http://localhost:8080/register/login";
  readonly entryUrl = "http://localhost:8080/register/entries";
  readonly listingUrl= "http://localhost:8080/listing"; 

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<any>(this._url);
  }
  getListing() {
    return this.http.get<any>(this.listingUrl);
  }

  getSpecial() {
    return this.http.get<any>(this._url);
  }

  getAccount(user) {
    return this.http.get<any>(this.getAccountUrl, user);
  }

  accountLogin(user) {
    return this.http.post<any>(this.loginurl, user);
  }

  makeEntries(user){
    return this.http.post<any>(this.entryUrl, user);
  }

  addListing(user){
    return this.http.post<any>(this.listingUrl, user)
  }; 

  
}
