import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  rcafLogo: string;
  safutureLogo: string;
  me : string;
  basketball: string;
  mom: string;
  quebec: string;
  flightdeck: string;
  defaultElevation = 2;
  raisedElevation = 8;
  constructor() { 
    this.rcafLogo = "/assets/company_logos/RCAF.jpg";
    this.safutureLogo = "/assets/company_logos/safuture.png";
    this.me = "/assets/company_logos/me.jpg";
    this.basketball = "/assets/company_logos/basketball.jpg";
    this.mom = "/assets/company_logos/mom.jpg";
    this.quebec = "/assets/company_logos/quebec.jpg";
    this.flightdeck = "/assets/company_logos/flightdeck.png";
  }

  ngOnInit(): void {
  }

}
