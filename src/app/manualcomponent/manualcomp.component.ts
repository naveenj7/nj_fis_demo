import { Component } from '@angular/core';

@Component({
    selector: 'fisdemo-manulacomp',
    templateUrl: './manualcomp.component.html'
  })

export class ManualcompComponent {

  userName1:string = "ambarish";
  age:number = 25;
  twoWayBinding:string = "test of two way binding"
  btnClick: boolean = false;
  vals = ['aa','bb','cc','dd','ee'];

  somevariable:boolean = true;

  twoway:string = "sometext";
  anyMethod(){
    return "microservices";
  }

  clickEventMethod(e: any){

    console.log(e);
    alert("hello alert");
  }


}


