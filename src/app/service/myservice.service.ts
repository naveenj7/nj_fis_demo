import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class MyserviceService {


  constructor(){

  }

  logMyLines(){
    console.log("yes i'm from service/myservice");
  }

}

