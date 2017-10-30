import { Component, OnInit } from '@angular/core';
import { CardsService } from '../service/cards/cards.service';
import { Card } from '../class/card';
import { AuthService } from '../service/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../class/user';
import { UserService } from '../service/user/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-inventory',
  templateUrl: './user-inventory.component.html',
  styleUrls: ['./user-inventory.component.css']
})
export class UserInventoryComponent implements OnInit {
  user:Observable<User>;
  card:Card;
  token:string;
  userCollection:Card[];

  constructor(private http:HttpClient, 
              private auth:AuthService, 
              private UserService:UserService, 
              private CardsService:CardsService ){}

  ngOnInit() {
    this.token = this.getLocalToken();
    this.user = this.UserService.userByToken(this.token);
  }

  displayCollectionUser() {
     
  }

  getLocalToken() {
    return localStorage.getItem('currentUser');
  }
}
