import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(name: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({ name: name, password: password })).map((response: Response) => {
      let user = response.json();
      if (user /*&& userToken*/) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    });
  }
  logout() {
    localStorage.removeItem('currentUser');
}
}
