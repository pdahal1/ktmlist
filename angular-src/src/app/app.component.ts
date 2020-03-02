import { Component, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() userName: String = '';
  constructor(public authService: AuthService){}

  ngOnInit() {
    
  
   
  }
  
}


