import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  display = false; 
  notDisplay = false; 

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.display = true; 
  }
  hide() {
    this.display= false; 
  }

}
