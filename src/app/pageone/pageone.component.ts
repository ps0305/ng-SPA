import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit {
  private var_one:string;

  constructor(private _route:ActivatedRoute) { 
    this.var_one = this._route.snapshot.params['e_id']+"..."+this._route.snapshot.params['e_name']+"...."+this._route.snapshot.params['e_sal'];
  }

  ngOnInit() {
  }

}
