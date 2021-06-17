import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'teamcard',
  templateUrl: './teamcard.component.html',
  styleUrls: ['./teamcard.component.scss']
})

export class TeamcardComponent implements OnInit {
  btnClicks: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
