import { Component, OnInit } from '@angular/core';
import { IMeasurment } from '../shared/IMeasurment';
import { Location } from '@angular/common';
import { MeasurmentService } from '../services/measurment.service';
import { IMeasurmentData } from '../shared/IMeasurmentData';


@Component({
  selector: 'app-user-graphs',
  templateUrl: './user-graphs.component.html',
styleUrls: ['./user-graphs.component.scss']
})
export class UserGraphsComponent implements OnInit {

  public humiditiData: number[];
  public Co2Data: string[];
  public TempData: string[];
  public errMess: string[];
  public Nh3Data: string[];
  public showHide = true;
  public showCo2 = true;
  public showTemperature = true;
  public showNH3 = true;
  public checked = true;
  public checked1 = true;
  public checked2 = true;
  public checked3 = true;

  public margin_top = '5px';

  humidityOptions = {
    responsive: true,
    scales: {
      yAxes: [
          {
              ticks: {
                  callback: function(label, index, labels) {
                      return label + ' %';
                  }
              },
              scaleLabel: {
                  display: true,
                  labelString: ' [%]'
              }
          }
      ]
  }

  };

  tempOptions = {
    responsive: true,
    scales: {
      yAxes: [
          {
              ticks: {
                  callback: function(label, index, labels) {
                      return label + ' [°C]';
                  }
              },
              scaleLabel: {
                display: true,
                labelString: ' [°C]'
            }
          }
      ]
  }

  };

  co2Options = {
    responsive: true,
    scales: {
      yAxes: [
          {
              ticks: {
                  callback: function(label, index, labels) {
                      return label.toFixed(2) + ' ppm';
                  }
              },
              scaleLabel: {
                  display: true,
                  labelString: ' ppm = Parts per million'
              }
          }
      ]
  }

  };

  nh3Options = {
    responsive: true,
    scales: {
      yAxes: [
          {
              ticks: {
                  callback: function(label, index, labels) {
                      return label + ' ppm';
                  }
              },
              scaleLabel: {
                  display: true,
                  labelString: ' ppm = Parts per million'
              }
          }
      ]
  }

  };
  chartDataHumidity = [
    { data: [], label: 'Humidity' }
  ];

  HumidityColors = [ { // grey
    backgroundColor: 'rgba(151,187,205,0.2)',
    borderColor: 'rgba(151,187,205,1)',
    pointBackgroundColor: 'rgba(151,187,205,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(151,187,205,0.8)'
  },
];

chartDataCo2 = [
  { data: [], label: 'Co2' }
];

Co2Colors = [ { // grey
  backgroundColor: 'rgba(253,180,92,0.2)',
  borderColor: 'rgba(253,180,92,1)',
  pointBackgroundColor: 'rgba(253,180,92,1)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgba(253,180,92,0.8)'
},
];
chartDataTemp = [
{ data: [], label: 'Temperature' }
];

TempColors = [ { // grey
backgroundColor: 'rgba(247,70,74,0.2)',
borderColor: 'rgba(247,70,74,1)',
pointBackgroundColor: 'rgba(247,70,74,1)',
pointBorderColor: '#fff',
pointHoverBackgroundColor: '#fff',
pointHoverBorderColor: 'rgba(247,70,74,0.8)'
},
];

chartDataNH3 = [
  { data: [], label: 'NH3' }
  ];

  NH3Colors = [ { // grey
    backgroundColor: 'rgba(77,83,96,0.2)',
    borderColor: 'rgba(77,83,96,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  },
    ];

    chartLabels = ['January', 'February', 'March', 'April'];

    constructor(private measurmentService: MeasurmentService,
      private location: Location)
       { 
        this.measurmentService.getAllMeasurmentUser()
        .subscribe(
          data => this.getData(data),
          errormes => this.errMess = errormes
        );
      }

  ngOnInit() {
  }

  public goBack(): void{
    this.location.back();
  }
  public getData(data): void{
    
    this.fillChartHumidity(data.measurments.humidityData);
    this.fillChartCo2(data.measurments.Co2Data);
    this.fillChartTemp(data.measurments.TempData);
    this.fillChartNH3(data.measurments.Nh3Data);
  }
  public fillChartHumidity(niz: number[]): void{
     niz.forEach(element => {
       this.chartDataHumidity[0]['data'].push(element)
       this.chartDataHumidity = this.chartDataHumidity.slice();
       
     });
  
  }

  public fillChartCo2(niz: number[]): void{
    niz.forEach(element => {
      this.chartDataCo2[0]['data'].push(element)
      this.chartDataCo2 = this.chartDataCo2.slice();
      
    });
    
 }

 public fillChartTemp(niz: number[]): void{
  niz.forEach(element => {
    this.chartDataTemp[0]['data'].push(element)
    this.chartDataTemp = this.chartDataTemp.slice();
    
  });
}

public fillChartNH3(niz: number[]): void{
  niz.forEach(element => {
    this.chartDataNH3[0]['data'].push(element)
    this.chartDataNH3 = this.chartDataNH3.slice();
    
  });
  
}

changeShowStatus(){
  this.showHide = !this.showHide;
}

// Show/Hide button
// changeShowStatus(event){
//   if(event.srcElement.innerHTML === 'Hide' ){
//     //// perform add action
//     event.srcElement.innerHTML = 'Show';
//   } else if (event.srcElement.innerHTML === 'Show'){
//     //// perform remove action
//     event.srcElement.innerHTML = 'Hide';
//   }

//   this.showHide = !this.showHide;
// }

changeShowCo2(){
  this.showCo2 = !this.showCo2;
}

changeShowTemperature(){
  this.showTemperature = !this.showTemperature;
}
changeShowNH3(){
  this.showNH3 = !this.showNH3;
  

}

}
