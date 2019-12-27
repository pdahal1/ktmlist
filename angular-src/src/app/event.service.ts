import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventService {
  public _url = "register";
  public getAccountUrl = "register/account";
  readonly loginurl = "register/login";
  readonly entryUrl = "register/entries";

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<any>(this._url);
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

  
}
