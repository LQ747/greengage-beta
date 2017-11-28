import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IEventObjt } from '../shared/IEventObjt';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmgService } from './process-httpmg.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { IEventNum } from '../shared/IEventNum';
import { AuthService } from './auth.service';


@Injectable()
export class EventService {

  constructor(private http:Http, private processHttpmgService:ProcessHttpmgService,
    private authservice:AuthService) { }

    token = this.authservice.getToken();

  getEvents():Observable<IEventObjt>{
     
    return this.http.get(baseURL +'events?token='+this.token)
    .map( res => {
      return this.processHttpmgService.extractData(res)
    })
    .catch(error =>
    {
       return this.processHttpmgService.handleError(error)});
  }

  public getNumberOfEvents():Observable<IEventNum>{
      return this.http.get(baseURL +'numberOfEvents?token='+this.token)
      .map(res => {
         return this.processHttpmgService.extractData(res)
      })
      .catch(error => 
      {
         return this.processHttpmgService.handleError(error)});
  }
  public getFarmEvents(id:number):Observable<IEventObjt>{

    return this.http.get(baseURL + 'eventsFromFarm/'+id+'?token='+this.token)
    .map(res => {

       return this.processHttpmgService.extractData(res)
    })
    .catch(error => {

       return this.processHttpmgService.handleError(error)
    });
  }
  public getCompanyEvents(id:number):Observable<IEventObjt>{
     
    return this.http.get(baseURL +'companyEvents/'+id)
    .map(res => {
        return this.processHttpmgService.extractData(res)
    })
    .catch(error =>{
       return this.processHttpmgService.handleError(error)
    });
  }

  public getMyFarmEvents():Observable<IEventObjt>{
    
        return this.http.get(baseURL + 'myFarmEvents/?token='+this.token)
        .map(res => {
    
           return this.processHttpmgService.extractData(res)
        })
        .catch(error => {
    
           return this.processHttpmgService.handleError(error)
        });
      }

}



