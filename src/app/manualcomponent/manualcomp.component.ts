import { Component } from '@angular/core';


@Component({
    selector: 'fisdemo-manulacomp',
    templateUrl: './manualcomp.component.html',
    styleUrls: ['./manualcomp.component.scss'],

  })

export class ManualcompComponent {

  userName1:string = "ambarish";
  age:number = 25;
  twoWayBinding:string = "test of two way binding"
  btnClick: boolean = true;
  vals = ['aa','bb','cc','dd','ee','ff','gg','hhhhhhh'];

  ngClassCondition: boolean = false;

  showIt:boolean = false;

  somevariable:boolean = true;

  twoway:string = "initial text";
  anyMethod(){
    return "microservices";
  }

  clickEventMethod(e: any){

    console.log(e);
    alert("hello alert");
  }


}


