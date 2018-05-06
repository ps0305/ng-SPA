import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit {
  private var_one:string;

  constructor() { 
    this.var_one="I am from the page one component !"
  }

  ngOnInit() {
  }

}
