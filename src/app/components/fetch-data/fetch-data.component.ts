import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

/*
  This component is only a training aid to remind myself how to inject HTTP and use and interface. (NON-FUNCTIONAL)
*/

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {
  public forecasts: WeatherForecast[];

  constructor(http: Http) {
      http.get('/api/SampleData/WeatherForecasts').subscribe(result => {
          this.forecasts = result.json() as WeatherForecast[];
      });
  }

  ngOnInit() {
  }

}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
