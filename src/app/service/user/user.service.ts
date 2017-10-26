import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../../class/user';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  urlApi =  'http://localhost:8000/';
  
  constructor(private http: HttpClient) { }

    getAll() {
    return this.http.get<User[]>(this.urlApi+'/');
    }

    getById(id: number) {
        return this.http.get('' + id);
    }

    ifConnected(token: string) {
        return this.http.post<string>(this.urlApi+'/token/', token);
    }

    create(user: User) {
        return this.http.post<User>(this.urlApi+'/new', user);
    }

    update(user: User) {
        return this.http.put<User>('' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete<User>('' + id);
    }

}
