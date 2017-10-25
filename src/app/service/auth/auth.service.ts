import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { User } from '../../class/user';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(name: string, password: string) {
    return this.http.post<User>('/api/authenticate',{ name: name, password: password }).map((response: User) => {
      if (response.token) {
        localStorage.setItem('currentUser', JSON.stringify(response.token));
      }
      return response;
    });
  }
  logout() {
    localStorage.removeItem('currentUser');
}
}
