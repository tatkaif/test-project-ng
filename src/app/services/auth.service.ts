import { Injectable } from '@angular/core';
import { dtapiUrl } from '../app.constants';
import { HttpClient } from '@angular/common/http';
import { tap, first } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: any = null;

  constructor(private http: HttpClient) { }

  login(userData) {
    return this.http
      .post(`${dtapiUrl}/login`, userData)
      .pipe(
        tap((data) => {
          this.currentUser = data;
        })
      );
  }

  logout() {
    return this.http
      .get(`${dtapiUrl}/login/logout`)
      .pipe(
        tap(() => {
          this.currentUser = null;
        })
      )
  }

  // example() {
  //   const subscription = observableFromEvent.subscribe((event) => {
  //     console.log(event);
  //   })

  //   subscription.unsubscribe()
  // }

  getCurrentUser() {
    if(this.currentUser) {
      return of(this.currentUser)
        .pipe(
          first()
        );
    }
    return this.http
      .get(`${dtapiUrl}/login/isLogged`)
      .pipe(
        tap((data: any) => {
          if (data && data.response === "non logged") {
            this.currentUser = null;
            return;
          }
          this.currentUser = data;
        })
      );
  }
}
