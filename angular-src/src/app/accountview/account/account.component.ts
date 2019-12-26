import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../auth.service";
import { EventService } from "../../event.service";
import { ViewaccountComponent } from "../viewaccount.component";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  public id = "5d83103dc5408118ecf4615b";
  public transferred = [];
  //public transferred; 
  public dp;
  constructor(
    public va: ViewaccountComponent,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  addListing() {
    this.router.navigate(['/addlistings'])
  }
  viewMyListing(){
    this.router.navigate(['/viewmylistings'])
  }


  ngOnInit() {
   this.authService.getAccount(this.va.id).subscribe(data =>{
     this.transferred = data;
   })
     
  }
}
