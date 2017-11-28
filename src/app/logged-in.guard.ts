import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';
import { SineinComponent } from './sinein/sinein.component';
import { MatDialog } from '@angular/material';
import decode from 'jwt-decode';

@Injectable()
export class LoggedInGuard implements CanActivate {
 

  constructor(private user: AuthService,  private router:Router,private dialog: MatDialog) {}

  canActivate(route: ActivatedRouteSnapshot) {
   const isLoggedIN = this.user.isLoggedIn();

   if(isLoggedIN){
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
    const expectedRole = route.data.expectedRole;
 
      if(tokenPayload.role == expectedRole){
       return true;
      }
      this.router.navigate(['/test']);
      return false;
   }

   
   this.router.navigate(['/signin']);
return false
   }
   
};