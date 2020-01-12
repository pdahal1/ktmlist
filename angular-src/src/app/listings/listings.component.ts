import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AddListingComponent } from '../account/add-listing/add-listing.component';
import { Listings } from 'model/addListing';
import { group } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  public searchForm: FormGroup; 
  specialEvent: [];
  listings = [];
  listing = [];
  service = [];
  papa = "5e084f7b1a833e359cab7edd";
  cat = ""; 
  category: any = ['Food', 'Clothing', 'Entertainment', 'Service', 'Fixing', 'Rentals']; 

  
  
  constructor(private eventService: EventService, private fb: FormBuilder,private authService: AuthService, private addlisting: AddListingComponent) {
    this.searchForm = this.fb.group({
      category: ["", Validators.required]
    }); 
  };

  onSubmit() {
    this.eventService.getListings().pipe(
      map(Listings => Listings.filter(Listings => Listings.category === this.cat))
    ).subscribe(data => {
      this.service = data;
      console.log(this.service);
    });
    
  }
  
  
  ngOnInit() {
   
    this.eventService.getListings().subscribe(data => {
      this.listings = data;
      console.log("this is all the listings" + this.listings)
    });
    this.eventService.getListing(this.papa).subscribe(data => {
      this.listing = data;
      console.log("this is single display " + data)
    });
    this.eventService.getRegister(this.papa).subscribe(data => {
      this.listing = data;
    });

    //this will help to find the items with certain category. 
    // this.eventService.getListings().pipe(
    //   map(Listings => Listings.filter(Listings => Listings.category === this.cat))
    // ).subscribe(data => {
    //   this.service = data;
    //   console.log(this.service);
    // });
    
  }; 
 }




