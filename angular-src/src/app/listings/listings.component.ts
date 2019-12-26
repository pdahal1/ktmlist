import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  listings = [];
  constructor(private eventService: EventService, private authService: AuthService) {}

  ngOnInit() {
    this.authService.getListing().subscribe(data => {
      this.listings = data;
    });
  }

}
