import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.css']
})
export class UserInformationsComponent implements OnInit {

  constructor(private userService:UserService, private authService:AuthService) { }

  ngOnInit() {
  }

}
