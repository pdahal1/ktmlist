import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  public addListingForm: FormGroup; 
  //category: any = ['Food', 'clothing', 'Entertainment', 'Service', 'Fixing']; 

  category: any = [
    {value:'Food', display:'Food'},
    {value:'Entertainment', display:'Entertainment'},
    {value:'Service', display:'Service'},
    {value:'Clothing', display:'Clothing'},
    {value:'Fixing', display:'Fixing'},
    {value:'Rentals', display:'Rentals'},
  ]; 


  constructor(private router: Router, private fb: FormBuilder, private eventService: EventService) { 
    this.addListingForm = this.fb.group({
      _id: ["", Validators.required],
      category: ["", Validators.required],
      heading: ["", Validators.required],
      description: ["", Validators.required],
      cost: ["", Validators.required],
      location: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
    })
  }
  onSubmit() {
    this.eventService.addListing(this.addListingForm.value).subscribe(res => {
      console.log(res); 
      this.router.navigate(["/listings"])
    })
  }

  ngOnInit() {
  }

}
