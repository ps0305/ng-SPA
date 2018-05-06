import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent implements OnInit {

  private var_five:string;

  constructor() { 
    this.var_five="I am from Child two component !"
  }

  ngOnInit() {
  }

}
