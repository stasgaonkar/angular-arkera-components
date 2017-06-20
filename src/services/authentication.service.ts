import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(): Observable<boolean> {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(' https://carbon-api-staging.arkera.co/users/24/login',
      JSON.stringify({ password: 'appsdk',
        deviceInfoJson : "{ \"device\": \"browser\", \"platform\": \"angular\", \"version\" : \"0.01 (test)\"  } " }),
      { headers: headers })
      .map((response: Response) => {
        console.log(response.json());
        let token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ username:24 , token: token }));
          return true;
        } else {
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}