import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  constructor(private _router:Router) { }

  ngOnInit() {
  }
public clickMe(){
  this._router.navigate(["/page_three",333,'e_three',30000]);
}
}
