import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { User } from '../../class/user';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  urlApi = 'http://localhost:8000/';
  token:string;
  user:BehaviorSubject<User> = new BehaviorSubject(null);
  
  constructor(private http: HttpClient) { this.init() }

  login(name: string, password: string) {
    return this.http.post<User>(this.urlApi+'user/login',{ name: name, password: password }).map((response: User) => {
      if (response.token) {
        localStorage.setItem('currentUser', JSON.stringify(response.token));
      }
      return response;
    });
  }
  
  logout() {
    localStorage.removeItem('currentUser');
  }

  init() {
    this.token = localStorage.getItem('token');
    if(this.token) {
      let expiration = parseInt(this.token.split('|')[1]);
      if(expiration > new Date().getTime()){
        this.getByToken(this.token).subscribe((user) =>{
          this.user.next(user);
        }
        );
      }
    }
  }
  getByToken(token:string):Observable<User> {
    return this.http.get<User[]>(this.urlApi+'?token='+token)
    .map((users) => {
      if(users.length === 1) {
        return users[0];
      }
      return null
    });
  }
}
