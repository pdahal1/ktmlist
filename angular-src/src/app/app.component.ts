import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public name: "Param";
public xx:[]; 
  constructor(public authService: AuthService, public loginservice: LoginComponent){}

  ngOnInit() {
    this.xx= this.loginservice.detail2; 
  
   
  }
  
}


