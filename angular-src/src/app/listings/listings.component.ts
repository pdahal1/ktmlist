import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  specialEvent: [];
  listings = [];
  constructor(private eventService: EventService, private authService: AuthService) {}

  ngOnInit() {
    this.eventService.getSpecial().subscribe(data => {
      this.specialEvent = data;

      this.eventService.getListing().subscribe(data => {
            this.listings = data;
           });
           
    });
    
  }

}

// ngOnInit() {
  //   this.authService.getListing().subscribe(data => {
  //     this.listings = data;
  //   });
  // }
