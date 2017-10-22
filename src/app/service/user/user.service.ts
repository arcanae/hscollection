import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../../class/user';

@Injectable()
export class UserService {

  urlApi =  'http://localhost:8000/user';
  
  constructor(private http: Http) { }
    
  getAll() {
    return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  }

getById(id: number) {
    return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
}

create(user: User) {
    return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
}

update(user: User) {
    return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
}

delete(id: number) {
    return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
}

}
