import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as $ from 'jquery';
import { ApiEMT } from '../../common/apiEMT';

@Component({
  selector: 'app-stop-name',
  templateUrl: './stop-name.component.html',
  styleUrls: ['./stop-name.component.css']
})
export class StopNameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async getStop() {

    ApiEMT.logInApiRest()
      .then(data => {
        this.printTable(data.data[0].accessToken);
        ApiEMT.logOutApirest(data.data[0].accessToken);
      })
      .catch(err => console.log(err));
  }


  printTable(accessToken): void {

    const namePlace = $('#namePlace').val();
    const numberStreet = Number($('#numberStreet').val());
    const radius = Number($('#radius').val());



    // if (eInputID == null || eInputID === '') {
    //   alert('Invalid ');
    // }

    axios({
      method: 'get',
      url: 'https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/arroundstreet/' + namePlace + '/' + numberStreet + '/' +
        radius + '/',

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

    })
      .catch((error) => {
        alert(error);
      });
  }

}
