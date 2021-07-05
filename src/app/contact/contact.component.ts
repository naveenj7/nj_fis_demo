import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { UrlConstants } from '../common/constants';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, CanComponentDeactivate {

  makeNavigateion = false;
  ambarish:any;

  constructor(
    private route: Router,
    private http: HttpClient
    ) { }

  ngOnInit(): void {

  }

  goToSomeURL():any {
    this.makeNavigateion=true;

  }

  canDeactivate () :boolean | Observable<boolean> | Promise<boolean> {
    if(this.makeNavigateion == true){
      return true;
    }

    else if(this.makeNavigateion == false){
      return confirm('do you want to leave this page')
    }else{
      return false;
    }

}


getAllRecords(){
  this.http
  .get(UrlConstants.DUMMY_EMPLOYEE_URL + 'employees')
  .subscribe((responseData) => {
    this.ambarish = JSON.stringify(responseData);
    console.log(responseData)
  })
}

}


