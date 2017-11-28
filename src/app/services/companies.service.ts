import { Injectable } from '@angular/core';
import { ICompanyObj } from '../shared/ICompanyObj';
import { Http, Response, Headers } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmgService } from './process-httpmg.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ICompanisNumb } from '../shared/ICompanisNumb';
import { AuthService } from './auth.service';

@Injectable()
export class CompaniesService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmgService,
    private authservice:AuthService) { }

    token = this.authservice.getToken();
    
    public getCompanies():Observable<ICompanyObj>{

      return this.http.get(baseURL + "companies?token="+this.token)
      .map(res => {

         return this.processHTTPMsgService.extractData(res);
      })
      .catch(error => { return this.processHTTPMsgService.handleError(error)});
    }
    public getCompany(id):Observable<ICompanyObj>
    {
       return this.http.get(baseURL +"company?token="+this.token)
       .map(res => 
      {
         return this.processHTTPMsgService.extractData(res);
      })
      .catch(error => { return this.processHTTPMsgService.handleError(error)});
    }

    public getNumberOfCompanis():Observable<ICompanisNumb>
    {
       return this.http.get(baseURL + 'numberOfCompanies?token='+this.token)
       .map( res => {
          return this.processHTTPMsgService.extractData(res)
       })
       .catch( error => {
          return this.processHTTPMsgService.handleError(error)
       });
    }

    public createCompany(name:string,location:string,zip:string,email:string,phone:string){

      return this.http.post(baseURL +'createCompany?token='+this.token,
      
    {
      name:name,
      location:location,
      zip:zip,
      email:email,
      phone:phone
    },
  {
    headers:new Headers({'X-Requested-With':'XMLHttpRequrest'})
  });
    }


}
