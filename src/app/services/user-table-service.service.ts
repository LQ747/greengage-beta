import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmgService } from './process-httpmg.service';

import { IUsers } from '../shared/IUsers';
import { USERS } from '../shared/usersData';
import { IUser } from '../shared/IUser';



@Injectable()
export class UserTableServiceService {

  private korisnici: IUsers = USERS;
  private names: string[];
  constructor() { }

  getUsersName(): string[] {
    return this.names = this.korisnici.users.map( el => el.name);
  }

}
