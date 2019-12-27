import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventService {
  public _url = "http://localhost:8080/register";
  public getAccountUrl = "http://mongodb+srv://param:param@cluster0-spkms.mongodb.net/registrations?retryWrites=true&w=majority/register/account";
  readonly loginurl = "http://localhost:8080/register/login";
  readonly entryUrl = "http://mongodb+srv://param:param@cluster0-spkms.mongodb.net/registrations?retryWrites=true&w=majority/register/entries";

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
