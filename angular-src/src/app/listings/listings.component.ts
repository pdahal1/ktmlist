import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { AddListingComponent } from '../account/add-listing/add-listing.component';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  specialEvent: [];
  listings = [];
  listing = [];
  papa = "chandra";
  
  constructor(private eventService: EventService, private authService: AuthService, private addlisting: AddListingComponent) {}

  ngOnInit() {

    this.eventService.getListings().subscribe(data => {
      this.listings = data;
      console.log(this.papa)
    });
    // this.eventService.getListing(this.papa).subscribe(data => {
    //   this.listing = data;
    // });
    this.eventService.getRegister(this.papa).subscribe(data => {
      this.listing = data;
    });

    
         
  }

}


