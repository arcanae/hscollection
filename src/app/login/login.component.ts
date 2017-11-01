import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../service/user/user.service';
import { User } from '../class/user';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: FormControl;
  password:FormControl;
  loginForm: FormGroup;
  userService:UserService;

  constructor(private builder:FormBuilder, private AuthService:AuthService, private rout:Router) {
    this.name = new FormControl(null,([Validators.required, Validators.minLength(3)]));
    this.password = new FormControl(null,([Validators.required, Validators.minLength(6)]));
    this.loginForm = builder.group({
      name: this.name,
      password: this.password
    })
   }

  ngOnInit() {
    this.AuthService.user.subscribe(user => {
      if(user){
        this.rout.navigate(['/core']);
      }
    })
  }
  onSubmit(){
    let user = new User(this.loginForm.value.name, this.loginForm.value.password);
    if(this.loginForm.valid){
      this.AuthService.login(this.loginForm.value.name,  this.loginForm.value.password).subscribe();
      console.log('onSubmit : ok');
    }else {
      console.log('onSubmit : Nok');
    }  
  }
}
