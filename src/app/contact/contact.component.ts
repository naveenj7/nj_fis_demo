import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, CanComponentDeactivate {

  makeNavigateion= false;

  constructor(private route: Router) { }


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

}


