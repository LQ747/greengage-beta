import { Injectable } from '@angular/core';
import { IFarms } from '../shared/IFarms';
import { Http, Response,Headers } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmgService } from './process-httpmg.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { interfaceFarm } from '../shared/interfaceFarm';
import { ICompanyFarms } from '../shared/ICompanyFarms';
import { IFarmUsers } from '../shared/IFarmUsers';
import { IFarmNum } from '../shared/IFarmNum';
import { AuthService } from './auth.service';


@Injectable()
export class FarmService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmgService,
    private authservice:AuthService) { }

    token = this.authservice.getToken();

  getFarms():Observable<IFarms>{
    return this.http.get(baseURL + "farms?token="+this.token)
    .map(res => 
      { 
        return this.processHTTPMsgService.extractData(res)
      })
      .catch(error => {return this.processHTTPMsgService.handleError(error)});
    }
  getFarm(id):Observable<interfaceFarm>{
    return this.http.get(baseURL + 'farm/'+id+'?token='+this.token)
    .map(res =>{
        return this.processHTTPMsgService.extractData(res)
    })
    .catch(error => {return this.processHTTPMsgService.handleError(error)});
  }

  getCompanyFarms(id):Observable<ICompanyFarms>{
     
    return this.http.get(baseURL + 'farms/company/'+id+'?token='+this.token)
    .map( res =>{

       return this.processHTTPMsgService.extractData(res);
    })
    .catch(error => {return this.processHTTPMsgService.handleError(error)});
  }


  getFarmUsers(id):Observable<IFarmUsers>{

    return this.http.get(baseURL + 'farm/users/'+id+'?token='+this.token)
    .map(res => {
       return this.processHTTPMsgService.extractData(res)
    })
    .catch(error => {return this.processHTTPMsgService.handleError(error)});
  }

  getNumberOfFarms():Observable<IFarmNum>{
     return this.http.get(baseURL + 'numberOfFarms?token='+this.token)
     .map( res => 
    {
      return this.processHTTPMsgService.extractData(res)
    })
    .catch(error =>{
        return this.processHTTPMsgService.handleError(error)
    });
  }

  public createFarm(name:string,location:string,latitude:number,
    longitude:number,length:number,width:number,key_dates:string,companyid:number){
   
      return  this.http.post(baseURL + 'farm?token='+this.token,
    {
      houseName:name,
      location:location,
      latitude:latitude,
      longitude:longitude,
      length:length,
      width:width,
      key_dates:key_dates,
      companyId:companyid
    },
  {
    headers:new Headers({'X-Requested-With':'XMLHttpRequrest'})
  });
  }
  getMyFarm(){
    return this.http.get(baseURL+'MyFarm?token='+this.token)
    .map(res =>
    {
      return this.processHTTPMsgService.extractData(res)
    })
    .catch(error =>{
      return this.processHTTPMsgService.handleError(error)
    });
 }  

 getMyFarmUsers():Observable<IFarmUsers>{
  
      return this.http.get(baseURL + 'usersFromMyFarm?token='+this.token)
      .map(res => {
         return this.processHTTPMsgService.extractData(res)
      })
      .catch(error => {return this.processHTTPMsgService.handleError(error)});
    }
}
