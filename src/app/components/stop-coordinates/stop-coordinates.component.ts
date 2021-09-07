import { Component, OnInit } from '@angular/core';
import { ApiEMT } from '../../common/apiEMT';
import axios from 'axios';
import * as $ from 'jquery';

@Component({
  selector: 'app-stop-coordinates',
  templateUrl: './stop-coordinates.component.html',
  styleUrls: ['./stop-coordinates.component.css']
})
export class StopCoordinatesComponent implements OnInit {



  constructor() {
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        ApiEMT.logInApiRest()
          .then(data => {
            this.getStop(data.data[0].accessToken);
          })
          .catch(err => console.log(err));
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  // I use data by default, because it does not work if you use coordinates that are not from Madrid
  getStop(accessToken, lat = 40.354411, lng = -3.69691) {

    const radius: number = Number($('#radius').val());

    axios({
      method: 'get',
      url: 'https://openapi.emtmadrid.es/v2/transport/busemtmad/stops/arroundxy/' + lng + '/' + lat + '/' + radius + '/',
      headers: {
        accessToken,
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response.data.data);

      $('#tbodyArrivals').html('');

      $.each(response.data.data, (index, item) => {
        let valor;
        valor = '<tr>' +
          '<td><a href="/search-bus/' + item.geometry.coordinates[1] + '/' + item.geometry.coordinates[0] + '">' + item.stopId + '</td>' +
          '<td>' + item.stopName + '</td>' +
          '<td>' + item.address + '</td> <td>';
        $.each(item.lines, (indexItem, subItem) => {
          valor = valor.concat(subItem.label + ' ');
        });
        valor = valor.concat('<td>' + item.metersToPoint + ' m' + '</td>' + '</tr>');

        $(valor).appendTo('#tbodyArrivals');
      });

      $('#tableArrivals').show();

    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

}
