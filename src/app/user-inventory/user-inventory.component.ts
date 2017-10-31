import { Component, OnInit } from '@angular/core';
import { CardsService } from '../service/cards/cards.service';
import { Card } from '../class/card';
import { AuthService } from '../service/auth/auth.service';
import { User } from '../class/user';
import { UserService } from '../service/user/user.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-inventory',
  templateUrl: './user-inventory.component.html',
  styleUrls: ['./user-inventory.component.css']
})
export class UserInventoryComponent implements OnInit {
  user:User;
  cards:Card[];

  constructor(private auth:AuthService, private router:Router) {}

  ngOnInit() {
    this.auth.user.subscribe(user => this.user = user);
  }
}
