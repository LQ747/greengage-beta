import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmgService } from './process-httpmg.service';
import { IListSensors } from '../shared/IListSensors';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { AuthService } from './auth.service';

@Injectable()
export class SensorsService {
  
  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmgService,
    private authservice:AuthService) { }
 
    token = this.authservice.getToken();

    getSensors(id):Observable<IListSensors>{
      return this.http.get(baseURL + "device/sensors/"+id+"?token="+this.token)
      .map(res =>{
          return this.processHTTPMsgService.extractData(res)
      })
      .catch(error => { return this.processHTTPMsgService.handleError(error)});
    }

    getSensorsFromFarm():Observable<IListSensors>{
      return this.http.get(baseURL + "farmDevices?token="+this.token)
      .map(res =>{
          return this.processHTTPMsgService.extractData(res)
      })
      .catch(error => { return this.processHTTPMsgService.handleError(error)});
    }

}
