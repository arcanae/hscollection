import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { User } from '../../class/user';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  urlApi = 'http://localhost:8000/user/';
  token:string;
  user:BehaviorSubject<User> = new BehaviorSubject(null);
  
  constructor(private http: HttpClient) { this.init() }

  login(name: string, password: string) {
    return this.http.post<User>(this.urlApi+'login',{ name: name, password: password }).map((response: User) => {
      if (response.token) {
        localStorage.setItem('currentUser', response.token);
      }
      this.user.next(response);
      console.log('User pousser dans observable');
      console.log(this.user)
      return response;
    });
  }
  
  logout() {
    localStorage.removeItem('currentUser');
    this.user.next(null);
    console.log('User deconnecter');
  }

  init() {
    this.token = localStorage.getItem('currentUser');
    if(this.token) {
      let expiration = parseInt(this.token.split('|')[1]);
      if(expiration > new Date().getTime()){
        localStorage.removeItem('currentUser');
        console.log('Item remove (expiration)');
      }else{
        this.getByToken(this.token).subscribe( user => this.user.next(user) );
      }
    }
  }
  getByToken(token:string):Observable<User> {
    if(token)
    return this.http.get<User[]>(this.urlApi+'token/'+token)
    .map((users) => {
      if(users.length === 1) {
        this.user.next(users[0]);
        return users[0];
      }
      console.log('pas de response server');
      return null
    });
  }
}
