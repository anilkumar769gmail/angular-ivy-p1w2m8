import { Component, OnInit } from '@angular/core';
import { Flight } from './flight.model';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  flights: Flight[]= [
    {origin:"Denver", destination: "miami", flightNumber: 500,
     depart: new Date(), arrive: new Date(), nonstop: true, snacks: "crackers"}
   
    ];
  constructor() { }

  ngOnInit(): void {
  }

}