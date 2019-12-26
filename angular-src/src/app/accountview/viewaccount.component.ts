import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { EventService } from "../event.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
//import { ActiverouteComponent } from '../activeroute/activeroute.component';

@Component({
  selector: "app-viewaccount",
  templateUrl: "./viewaccount.component.html",
  styleUrls: ["./viewaccount.component.css"]
})
export class ViewaccountComponent implements OnInit {
  public AccountDetail = [];
  public cc = [];
  show = false;
  public viewAccountform: FormGroup;
  email: string; 
  sir= "param"; 
  public id:string; 

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.viewAccountform = this.fb.group({
      _id: ["", Validators.required],
      password: ["", Validators.required]
    });
    
  }

  onSubmit() {
    this.authService.account(this.viewAccountform.value).subscribe(data => {
      this.AccountDetail = data;
      console.log(this.AccountDetail);
      //console.log(this.AccountDetail._id);
      
     //this.id= this.AccountDetail._id; 
      
      
     // this.id = this.route.snapshot.paramMap.get('_id');
     // console.log(this.id + "id here!!"); 
      console.log(this.id); 

      // this.authService.getAccount(this.AccountDetail._id).subscribe(data =>{
      //   this.cc = data; });

      this.router.navigate(["/account"]);
       

    });

    
    
  }

  check() {
    console.log("thorough checking");
  }
  go(){
    this.router.navigate(["/account"]);
  }
  shows() {
    this.show = !this.show;
  }

  ngOnInit() {
    // this.viewAccountform = this.fb.group({
    //   email: ["", Validators.required],
    //   password: ["", Validators.required]
    // });
    
  }
}
