import { Component, OnInit } from '@angular/core';
import { Flight } from './flight.model';
import { FlightService } from '../flight.service';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  flights: Flight[] = [];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {

    this.flightService.getFlights().subscribe(payload => {
      this.flights = payload;
    });

  }

}