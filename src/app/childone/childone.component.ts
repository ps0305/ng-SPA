import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {

  private var_four:string;

  constructor() { 
    this.var_four="I am from child one component !"
  }

  ngOnInit() {
  }

}
