import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})

export class UserProfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
