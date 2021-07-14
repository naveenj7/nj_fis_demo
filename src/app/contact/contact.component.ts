import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { UrlConstants } from '../common/constants';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, CanComponentDeactivate {

  makeNavigateion = false;
  ambarish:any;
  isDisabled:boolean=false;

  constructor(
    private route: Router,
    private http: HttpClient,
    public loadingController: LoadingController
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
  //this.isDisabled=true;
  this.presentLoading();
  this.http
  .get(UrlConstants.DUMMY_EMPLOYEE_URL + 'photos')
  //.get('/students/all')
  //.get(students/all'http://localhost:8081/')
  .subscribe((responseData) => {
    this.ambarish = JSON.stringify(responseData);
    console.log(responseData)
    //this.isDisabled=false
    //this.dismissLoader();
    
  },
    (error) => {
     // this.isDisabled = false;
    // this.dismissLoader();
  });
}

async presentLoading() {
  console.log('Loading Component');
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class ion-loading',
    message: 'Please wait...',
    duration: 5000
  });
  await loading.present();
}

// dismissLoader() {
//   this.loadingController.dismiss().then((response:any) => {
//     console.log('Loader closed!', response);
//   }).catch((err:any) => {
//     console.log('Error occured : ', err);
//   });
// }

}

