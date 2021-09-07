import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { MapsAPILoader, GoogleMapsAPIWrapper, AgmMap } from '@agm/core';
import { ActivatedRoute } from '@angular/router';
declare var google;

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {

  bounds = null;
  markers;


  // tslint:disable-next-line: variable-name
  constructor(private mapsAPILoader: MapsAPILoader, private _route: ActivatedRoute) {

    const lat: number = Number(this._route.snapshot.paramMap.get('lat'));
    const lng: number = Number(this._route.snapshot.paramMap.get('lng'));

    this.markers = [
      { latitude: lat, longitude: lng }
    ];

    this.mapsAPILoader.load().then(() => {
      this.bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng({ lat, lng }),
      );
    });

  }



  ngOnInit(): void {
  }

  mapReady(map) {
    map.fitBounds(this.bounds);
  }
}
