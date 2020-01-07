import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  papa = "5e0d71050ea73e2c18b261ea";
  papa1 = "5e084f7b1a833e359cab7edd";
  papa2 = "5e0d727a0ea73e2c18b261eb";
  
  listing = [];
  listing1 = [];
  listing2 = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {

    this.eventService.getListing(this.papa).subscribe(data => {
      this.listing = data;
    });
    this.eventService.getListing(this.papa1).subscribe(data => {
      this.listing1 = data;
    });
    this.eventService.getListing(this.papa2).subscribe(data => {
      this.listing2 = data;
    });



  }
}