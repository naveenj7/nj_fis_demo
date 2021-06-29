import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit,OnDestroy {

  customObservable:any;
  constructor() { }

  ngOnInit(): void {
  this.customObservable = Observable.create((observer:any) => {
    observer.next('I am number 1')
    observer.next('I am number 2')
    observer.error(new Error('i am error'))
    observer.complete('I am number 4')
    observer.next('I am number 5')
    });

    this.customObservable.subscribe((data:any) =>{
        console.log(data);
    }),
    (error: any) => {
        alert("something");
    }, () =>{
      console.log("its completed")
    }
  }


  ngOnDestroy(): void{
    //  this.customObservable.unsubscribe();
  }


  unsubscribe(){
    this.customObservable.unsubscribe();
  }

}
