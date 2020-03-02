import { Component, OnInit, Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Users } from 'model/login';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
   userName : String;
   
  constructor( private loginComponent: LoginComponent) { }

  ngOnInit() {
this.userName = this.loginComponent.userName
    
  }

}
