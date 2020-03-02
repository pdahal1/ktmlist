import { Component, OnInit, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppComponent } from '../app.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from 'model/login';
import { EventService } from '../event.service';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public loginForm : FormGroup
  email: String;
  //userName: String; 
  public userName = "";
  public currentUser = "";
  cs: String;
  
  constructor(
    private appcomponent: AppComponent,
    private eventService:EventService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      _id: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

 

  login() {
    this.authService.login(this.loginForm.value).subscribe(res => {
      console.log("what res" + res);
      localStorage.setItem("token", res.token);
      this.userName = this.loginForm.value._id;
    console.log("this is is the id " + this.userName);
    this.router.navigate(["/account"]);
    
    });
   
  }

  displyUser() {
    this.eventService.getListings().pipe(
      map(Listings => Listings.filter(Listings => Listings.category === this.loginForm.value._id))
    ).subscribe(data => {
      this.cs = data;
      console.log(this.cs);
    });
    
  }

  ngOnInit() {
  this.authService.getAccount(this.loginForm.value._id).subscribe(data =>{
      console.log("cant see anything"); 
    
  });
    
  }
}




