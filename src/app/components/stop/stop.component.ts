import { Component } from '@angular/core';
import * as $ from 'jquery';
import axios from 'axios';
import { ApiEMT } from '../../common/apiEMT';


@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent {

  constructor() { }

  getBuses() {

    ApiEMT.logInApiRest()
      .then(data => {
        this.printTable(data.data[0].accessToken);
        ApiEMT.logOutApirest(data.data[0].accessToken);
      })
      .catch(err => console.log('1 ' + err));
  }

  printTable(accessToken) {
    const eInputID = $('#eInputID').val();

    if (eInputID == null || eInputID === '') {
      alert('Invalid ');
    }

    axios({
      method: 'post',
      url: 'https://openapi.emtmadrid.es/v2/transport/busemtmad/stops/' + eInputID + '/arrives/',

      headers: {
        accessToken,
        'Content-Type': 'application/json'
      },
      data: {
        statistics: 'N',
        cultureInfo: 'EN',
        Text_StopRequired_YN: 'Y',
        Text_EstimationsRequired_YN: 'Y',
        Text_IncidencesRequired_YN: 'Y'
      }
    }).then((response) => {
      console.log(response.data.data[0].Arrive);
      $('#tbodyArrivals').html('');

      $.each(response.data.data[0].Arrive, (index, item) => {
        let valor;
        if (item.geometry.coordinates[0] === 0 && item.geometry.coordinates[1] === 0) {
          valor = '<tr>' +
            '<td><a href="/incidents/' + item.line + '">' + item.line + '</a></td>' +
            '<td>' + item.bus + '</td>' +
            '<td>' + item.destination + '</td>' +
            '<td>' + item.DistanceBus + ' m' + '</td>' +
            '<td>' + Math.round(item.estimateArrive / 60) + ' min.' + '</td>' +
            '</tr>';
        } else {
          valor = '<tr>' +
            '<td><a href="/incidents/' + item.line + '">' + item.line + '</a></td>' +
            '<td><a href="/search-bus/' + item.geometry.coordinates[1] + '/' + item.geometry.coordinates[0] + '">' +
            item.bus + '</a></td>' +
            '<td>' + item.destination + '</td>' +
            '<td>' + item.DistanceBus + ' m' + '</td>' +
            '<td>' + Math.round(item.estimateArrive / 60) + ' min.' + '</td>' +
            '</tr>';
        }
        $(valor).appendTo('#tbodyArrivals');
      });

      $('#tableArrivals').show();

    })
      .catch((error) => {
        console.log(error);
      });
  }

}
