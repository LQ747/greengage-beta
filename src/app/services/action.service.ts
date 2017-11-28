import { Injectable } from '@angular/core';
import { Http, Response,Headers} from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmgService } from './process-httpmg.service';
import { AuthService } from './auth.service';


@Injectable()
export class ActionService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmgService,
    private authservice:AuthService) { }
 
    token = this.authservice.getToken();
    
    setMaxTemp(temperature:number,action:number){
      return this.http.put(baseURL + 'setNewTemp',{measurment:temperature,
        actionId:action},{headers:new Headers({'X-Requested-With':'XMLHttpRequrest'})})
    };

   public createAction(actionName:string,temperature:number,farmId:number,message:string){
     return this.http.post(baseURL +'makeAction',{name:actionName,
      measurment:temperature,farm:farmId,message:message},{headers:new Headers({'X-Requested-With':'XMLHttpRequrest'})})
   }

}
