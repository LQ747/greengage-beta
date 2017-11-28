import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import decode from 'jwt-decode';
import { AuthService } from './services/auth.service';

@Injectable()
export class RoleGuardGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router,public state: RouterStateSnapshot){}
  canActivate(route: ActivatedRouteSnapshot): boolean {
  

    
   const expectedRole = route.data.expectedRole;
   const token = localStorage.getItem('token');
  
   const isLoggedIN = this.auth.isLoggedIn();
    
   const tokenPayload = decode(token);
 
    if(!isLoggedIN || tokenPayload.role !== expectedRole){
      this.router.navigate(['/test']);
      return false;
    }
     return true;

  }

}
