import { Injectable } from '@angular/core';
import { IFarms } from '../shared/IFarms';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmgService } from './process-httpmg.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch'

import { interfaceFarm } from '../shared/interfaceFarm';


@Injectable()
export class FarmService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmgService) { }


  getFarms():Observable<IFarms>{
    return this.http.get(baseURL + "farms")
    .map(res => 
      { 
        return this.processHTTPMsgService.extractData(res)
      })
      .catch(error => {return this.processHTTPMsgService.handleError(error)});
    }
  getFarm(id):Observable<interfaceFarm>{
    return this.http.get(baseURL + 'farm/'+id)
    .map(res =>{
        return this.processHTTPMsgService.extractData(res)
    })
    .catch(error => {return this.processHTTPMsgService.handleError(error)});
  }

}
