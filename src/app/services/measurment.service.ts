import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmgService } from './process-httpmg.service';
import { IMeasurment } from '../shared/IMeasurment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { AuthService } from './auth.service';

@Injectable()
export class MeasurmentService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmgService,
    private authservice:AuthService) { }
 
    token = this.authservice.getToken();

  getMeasurement(id:number):Observable<IMeasurment>{
    return this.http.get(baseURL + "measurement/"+id+"?token="+this.token)
    .map(res => {
        return this.processHTTPMsgService.extractData(res)
    })
    .catch(error => { return this.processHTTPMsgService.handleError(error)});
  }

  getAllMeasurment(id:number):Observable<IMeasurment>{
    return this.http.get(baseURL + "getFarmMeasurment/"+id+"?token="+this.token)
    .map(res => {
        return this.processHTTPMsgService.extractData(res)
    })
    .catch(error =>{ return this.processHTTPMsgService.handleError(error)});
  }
 
  getAllMeasurmentUser():Observable<IMeasurment>{
    return this.http.get(baseURL + "FarmMasurment?token="+this.token)
    .map(res => {
        return this.processHTTPMsgService.extractData(res)
    })
    .catch(error =>{ return this.processHTTPMsgService.handleError(error)});
  }

  getMeasurementDevice(id:number):Observable<IMeasurment>{
    return this.http.get(baseURL + "deviceMeasurment/"+id+"?token="+this.token)
    .map(res => {
        return this.processHTTPMsgService.extractData(res)
    })
    .catch(error => { return this.processHTTPMsgService.handleError(error)});
  }
}
