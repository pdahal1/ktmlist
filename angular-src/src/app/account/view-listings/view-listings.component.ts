import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-listings',
  templateUrl: './view-listings.component.html',
  styleUrls: ['./view-listings.component.css']
})
export class ViewListingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(["/account"])
  }; 

}
