import { Component, OnInit } from "@angular/core";
import { EventService } from "../event.service";
import { LoginComponent } from "../login/login.component";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-special",
  templateUrl: "./special.component.html",
  styleUrls: ["./special.component.css"]
})
export class SpecialComponent implements OnInit {
  specialEvent: [];
  detail: [];
  proxy: [];

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private loginservice: LoginComponent
  ) {}

  ngOnInit() {
    this.eventService.getSpecial().subscribe(data => {
      this.specialEvent = data;
      this.proxy = this.specialEvent;
      //thist.detail= this.loginservice.detail;

      
    });
    
  }
}
