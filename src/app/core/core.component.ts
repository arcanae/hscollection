import { Component, OnInit } from '@angular/core';
import { UserInventoryComponent } from '../user-inventory/user-inventory.component';
import { UserProfilComponent } from '../user-profil/user-profil.component';
import { User } from '../class/user';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})

export class CoreComponent implements OnInit {
  user

  constructor(private auth:AuthService, private rout:Router) { }

  ngOnInit() {
    this.auth.user.subscribe((user) => {
      this.user = user;
      if(user === null){
        this.rout.navigate(['/']);
      }
    });
  }
}
