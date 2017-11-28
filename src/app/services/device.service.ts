import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmgService } from './process-httpmg.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch'
import { IdeviceFar } from '../shared/IdeviceFar';
import { IDeviceSingleMessage } from '../shared/IDeviceSingleMessage';
import { IDevices } from '../shared/IDevices';
import { AuthService } from './auth.service';



@Injectable()
export class DeviceService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmgService,
    private authservice:AuthService) { }

    token = this.authservice.getToken();
   
    getDeviceFromSingleFarm(id):Observable<IdeviceFar>{
       return this.http.get(baseURL + "farm/devices/"+id+'?token='+this.token)
       .map(res => {
           return this.processHTTPMsgService.extractData(res)
       })
       .catch(error => {return this.processHTTPMsgService.handleError(error)});
    }
    getDeviceDetails(id):Observable<IDeviceSingleMessage>{
        return this.http.get(baseURL + "device/"+id+"?token="+this.token)
        .map(res => {
             return this.processHTTPMsgService.extractData(res)
        })
        .catch(error => {return this.processHTTPMsgService.handleError(error)});
    }
    getAllDevices():Observable<IDevices>{
      return this.http.get(baseURL + "devices?token="+this.token)
      .map(res => {
          return this.processHTTPMsgService.extractData(res);
      });
    }
    getMyDevices():Observable<IdeviceFar>{
        return this.http.get(baseURL + "MyDevices?token="+this.token)
        .map(res => {
            return this.processHTTPMsgService.extractData(res)
        })
        .catch(error => {return this.processHTTPMsgService.handleError(error)});
     }
     getDeviceDetailsUser(id):Observable<IDeviceSingleMessage>{
        return this.http.get(baseURL + "deviceDetails/"+id+"?token="+this.token)
        .map(res => {
             return this.processHTTPMsgService.extractData(res)
        })
        .catch(error => {return this.processHTTPMsgService.handleError(error)});
    }
}
