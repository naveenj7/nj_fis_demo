import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  id:any = '10';
  name:any ='Ambarish';

  constructor(private route : ActivatedRoute) {
    // this.id = this.route.snapshot.params['id'];
    // this.name = this.route.snapshot.params['name'];
  //   this.route.params
  //   .subscribe(
  //     (params: Params)=>{
  //       this.id = params['id'];
  //       this.name = params['name'];
  // }
  // )
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
          this.id = params['id'];
      }
    )
  }
}
