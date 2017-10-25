import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../../class/user';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  urlApi =  'http://localhost:8000/user';
  
  constructor(private http: HttpClient) { }
    
  getAll() {
    return this.http.get<User[]>(this.urlApi+'/');
  }

getById(id: number) {
    return this.http.get('' + id).map((response: Response) => response.json());
}

create(user: User) {
    console.log(user);
    return this.http.post<User>(this.urlApi+'/new', user);
}

update(user: User) {
    return this.http.put('' + user.id, user).map((response: Response) => response.json());
}

delete(id: number) {
    return this.http.delete('' + id).map((response: Response) => response.json());
}

}
