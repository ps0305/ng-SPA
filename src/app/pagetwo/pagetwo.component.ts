import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
export class PagetwoComponent implements OnInit {

  private var_two:string;

  constructor(private _route:ActivatedRoute) { 
    this.var_two= this._route.snapshot.params['e_id']+"..."+this._route.snapshot.params['e_name']+"...."+this._route.snapshot.params['e_sal'];
  }

  ngOnInit() {
  }

}
