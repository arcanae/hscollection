import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:User;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.getByToken(localStorage.getItem('currentUser'));
    this.auth.user.subscribe((user)=>
      this.user = user
    );
  }

}
