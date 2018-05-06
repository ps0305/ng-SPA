import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrls: ['./pagethree.component.css']
})
export class PagethreeComponent implements OnInit {

  private var_three:string;

  constructor(private _route:ActivatedRoute) { 
    this.var_three = this._route.snapshot.params['e_id']+"..."+this._route.snapshot.params['e_name']+"..."+this._route.snapshot.params['e_sal'];
  }

  ngOnInit() {
  }

}
