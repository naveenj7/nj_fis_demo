import { Injectable, EventEmitter } from '@angular/core';
import { MyserviceService } from './service/myservice.service'

@Injectable({
  providedIn: 'root'
})

export class LoggingService {

  somedata = [
    {
      id: '1',
      name:"lambrador"
    },
    {
      id: '2',
      name:"roadisian-Ridgeback"
    },
    {
      id: '3',
      name:"rottwiller"
    },
    {
      id: '3',
      name:"siba inu"
    },
    {
      id: '4',
      name:"dalmation"
    }
  ]

  private _name: any;
  private _age: any;

  constructor(private myserviceService: MyserviceService) { }

  logButtonClicked(message: string){
    console.log("hey message passed is" + message);
  }

  getDog(){
    this.myserviceService.logMyLines();
    return this.somedata;
  }


  //creating setters and getters

  public get name() {
    return this._name;
}
  public set name(Uname : string) {
    this._name = Uname;
  }


  public get age() {
    return this._age;
}
  public set age(age : number) {
    this._age = age;
  }


}
