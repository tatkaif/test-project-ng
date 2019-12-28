import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // userInfo: Object;

  constructor(
    private appService: AppService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.getCurrentUser()
      .subscribe((userInfo) => {
        // this.userInfo = userInfo;
      });
  }

  get userInfo() {
    return this.authService.currentUser;
  }

  isUserLoggedIn() {
    return !!this.authService.currentUser;
  }
  logout() {
    this.authService.logout()
      .subscribe( () => {
        // this.userInfo = null;
        this.router.navigate(['login']);
      })
      
  }
  
}
