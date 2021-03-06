import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../flight';
import { HardCodedFlightDataService } from '../hard-coded-flight-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private hardCodedFlightData: HardCodedFlightDataService,private router: Router) { }

  flightData = this.hardCodedFlightData.flightData;

  departure :boolean = false;
  arrival : boolean = false;
  price : boolean = false;
  duration : boolean = false;
  ngOnInit(): void {
  }

  departureFilterActive(){
    this.departure = true;
    this.arrival = false;
    this.price = false;
    this.duration = false;
    this.hardCodedFlightData.sortByDeparture();
  }

  arrivalFilterActive(){
    this.departure = false;
    this.arrival = true;
    this.price = false;
    this.duration = false;
    this.hardCodedFlightData.sortByArrival();
  }

  pricreFilterActive(){
    this.departure = false;
    this.arrival = false;
    this.price = true;
    this.duration = false;
    this.hardCodedFlightData.sortByPrice();
  }

  durationFilterActive(){
    this.departure = false;
    this.arrival = false;
    this.price = false;
    this.duration = true;
    this.hardCodedFlightData.sortByDuration();
  }

  bookFlight(id:Number){
    this.router.navigate(['flightDetail',id])
  }

}
