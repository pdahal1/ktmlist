import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  email: String;
  detail: [];
  detail2: [];
  public fn: string; 
  public fna= 4;

  empty: String; 
  full="hi"; 

  constructor(
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
      console.log(res);
      this.detail= res; 
      console.log(this.detail); 

      localStorage.setItem("token", res.token);
      this.router.navigate(["/special"]);
      this.fn= this.loginForm.value._id;

     
      
    });
   
  }

  ngOnInit() {
   this.empty= this.full;
   this.authService.getAccount(this.loginForm.value._id).subscribe(data =>{
    this.detail2= data; 
    console.log("cant see anything"); 
    console.log(data); 
  });
   
  }
}
