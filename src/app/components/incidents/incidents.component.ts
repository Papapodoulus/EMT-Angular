import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { ApiEMT } from 'src/app/common/apiEMT';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {

  line;
  description;
  // tslint:disable-next-line: variable-name
  constructor(private _route: ActivatedRoute) {
    this.line = this._route.snapshot.paramMap.get('line');
    console.log(this.line);
    ApiEMT.logInApiRest()
      .then(data => {
        this.getIncidents(data.data[0].accessToken);
        ApiEMT.logOutApirest(data.data[0].accessToken);
      })
      .catch(err => console.log(err));
  }

  ngOnInit(): void {
  }

  getIncidents(accessToken): void {

    axios({
      method: 'get',
      url: 'https://openapi.emtmadrid.es/v2/transport/busemtmad/lines/incidents/' + this.line + '/ ',

      headers: {
        accessToken,
        'Content-Type': 'application/json',
        charset: 'utf-8'
      },
      data: {
        statistics: 'N',
        cultureInfo: 'EN',
        Text_StopRequired_YN: 'Y',
        Text_EstimationsRequired_YN: 'Y',
        Text_IncidencesRequired_YN: 'Y'
      }
    }).then((response) => {
      console.log(response.data.data[0].item[0]);
      this.description = JSON.stringify(response.data.data[0].item[0].description);
    })
      .catch((error) => {
        console.log(error);
      });
  }
}
