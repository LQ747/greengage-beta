import { Router,NavigationCancel,NavigationEnd } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatSidenav } from '@angular/material';
import { AuthService } from './services/auth.service';
import { SineinComponent } from './sinein/sinein.component';
import { ComponentComunicationService } from './services/component-comunication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public message:string
  public title = 'app';
  public show;
  public userID: number;
  public showMenu:boolean;
  public userMenu:boolean;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private ComunService: ComponentComunicationService, private router: Router, private dialog: MatDialog,
    private authService: AuthService) {
       
    ComunService.barChaned$.subscribe(item => this.onItemAdded(item));
    ComunService.userBar$.subscribe(item =>this.onItemAdded2(item));
       
    router.events.filter(type => type instanceof NavigationCancel)
      .subscribe(() => {
        this.message = 'Log in in order to continue'
      });
    router.events.filter(type => type instanceof NavigationEnd)
      .subscribe(() => {
        this.message = ''
      });
      this.show = this.authService.isLoggedIn();
     
  }
  private onItemAdded(item:boolean):void{
    this.showMenu = item;
  }
  private onItemAdded2(item:boolean):void{
    this.userMenu = item;
  }

  ngOnInit(){
    this.showMenu = this.authService.getUserRole();
     this.userMenu = this.authService.isAdmin();
    }
  openLoginForm() {

      if(!this.authService.isLoggedIn()){
        this.dialog.open(SineinComponent);
      }
      
    }
    logout(){
      this.authService.logout();
      location.reload(); 
       this.show = !this.show;     
    }

    onMenuRouting() {
      this.sidenav.close();
    }
}
