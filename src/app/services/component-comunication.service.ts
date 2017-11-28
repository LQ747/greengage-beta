import { Injectable,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ComponentComunicationService {
    public barChaned$:EventEmitter<boolean>;
    public userBar$:EventEmitter<boolean>
    private showBar:boolean = false;
    private showUserBar:boolean = false;
 
  constructor() {
    this.barChaned$ = new EventEmitter();
    this.userBar$ = new EventEmitter();
   }
  getUserBar():boolean{
    return this.showUserBar;
  }
  changeUserBar(status:boolean):void{
    this.showUserBar = status;
    this.userBar$.emit(status);
  }

  getShowBar():boolean{
    return this.showBar;
  }
  cangeShowBar(status:boolean):void{
    this.showBar = status;
    this.barChaned$.emit(status);
  }

}
