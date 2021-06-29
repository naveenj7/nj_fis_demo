import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'teamcard',
  templateUrl: './teamcard.component.html',
  styleUrls: ['./teamcard.component.scss'],
  // providers: [LoggingService]
})

export class TeamcardComponent implements OnInit {
  btnClicks: boolean = true;

  dogs: any;


  private observable1 : any;

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.dogs = this.loggingService.getDog();

    console.log("Start");

    setTimeout(()=>{
        console.log("i'm non blocking code")
    },2000);

    console.log("End");


    // this.observable1=interval(1000).subscribe(count => {
    //   console.log(count);
    // })
  }


  btnclicked(msg: string){
    // console.log(msg)
    this.loggingService.logButtonClicked(msg)
    //####### NOTE: Do not do this, do not create instances manually, angular provides a musch better way to use services.
    // const logservice = new LoggingService();
    // logservice.logButtonClicked(msg)
    this.loggingService.name ='ambarish';


    console.log(this.dogs)
  }
}
