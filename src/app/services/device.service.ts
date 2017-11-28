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



@Injectable()
export class DeviceService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmgService) { }

   
    getDeviceFromSingleFarm(id):Observable<IdeviceFar>{
       return this.http.get(baseURL + "farm/devices/"+id)
       .map(res => {
           return this.processHTTPMsgService.extractData(res)
       })
       .catch(error => {return this.processHTTPMsgService.handleError(error)});
    }
    getDeviceDetails(id):Observable<IDeviceSingleMessage>{
        return this.http.get(baseURL + "device/"+id)
        .map(res => {
             return this.processHTTPMsgService.extractData(res)
        })
        .catch(error => {return this.processHTTPMsgService.handleError(error)});
    }
}
