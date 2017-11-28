import { Injectable } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmgService } from './process-httpmg.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { IUsers } from '../shared/IUsers';
import { ISingleUser } from '../shared/ISingleUser';
import { AuthService } from './auth.service';
import { IUserNum } from '../shared/IUserNum';



@Injectable()
export class UserService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmgService,
    private authservice:AuthService) { }

     token = this.authservice.getToken();

    getUsers(): Observable<IUsers>{
     
       return this.http.get(baseURL + 'users?token='+this.token)
       .map( res =>
         { return this.processHTTPMsgService.extractData(res)
        })
        .catch(error => this.processHTTPMsgService.handleError(error));
    }

    getUser(id): Observable<ISingleUser>{
      return this.http.get(baseURL + 'user/'+id+'?token='+this.token)
      .map(res => {
       return this.processHTTPMsgService.extractData(res)
      })
      .catch(error => { return this.processHTTPMsgService.handleError(error)});
    }

    getCompanyUsers(id):Observable<IUsers>{
      return this.http.get(baseURL + 'users/company/'+id+'?token='+this.token)
      .map(res => { 
         return this.processHTTPMsgService.extractData(res)
      })
      .catch(error => { return this.processHTTPMsgService.handleError(error)})
    }
    getMaxTemp(){
       return this.http.get(baseURL + 'getTempMax')
       .map(res => {
         return this.processHTTPMsgService.extractData(res)
       })
       .catch(error => { return this.processHTTPMsgService.handleError(error)})
    }
    setMaxTemp(temperature:number){
      return this.http.put(baseURL + 'alertTemp',
      {alertTemperature:temperature},
      {headers: new Headers({'X-Requested-With':'XMLHttpRequrest'})})
    }
    editUser(id:number,firstName:string,LastName:string,phone:number,email:string,message:string,exportType:string)
    {
      return this.http.put(baseURL + 'user/'+id,
      {firstName:firstName,lastName:LastName,phone:phone,email:email,message:message,exportType:exportType},
    {headers: new Headers({'X-Requested-With':'XMLHttpRequrest'})})
    }
    getNumOfAllUsers():Observable<IUserNum>{
      return this.http.get(baseURL+ 'numberOfUsers?token='+this.token)
      .map(res => 
      {
         return this.processHTTPMsgService.extractData(res)
      })
      .catch(error => this.processHTTPMsgService.handleError(error));
    }

    deleteUser(id:number){
      return this.http.delete(baseURL + 'deleteUser/'+id+'?token='+this.token);
    }
    getMyDetails(id): Observable<ISingleUser>{
      return this.http.get(baseURL + 'myDetails/'+id)
      .map(res => {
       return this.processHTTPMsgService.extractData(res)
      })
      .catch(error => { return this.processHTTPMsgService.handleError(error)});
    }

}


