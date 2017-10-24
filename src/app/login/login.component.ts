import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../service/user/user.service';
import { User } from '../class/user';
import { AuthService } from '../service/auth/auth.service';

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
  AuthService:AuthService;

  constructor(private builder:FormBuilder) {
    this.name = new FormControl(null,([Validators.required, Validators.minLength(3)]));
    this.password = new FormControl(null,([Validators.required, Validators.minLength(6)]));
    this.loginForm = builder.group({
      name: this.name,
      password: this.password
    })
   }

  ngOnInit() {
  }
  onSubmit(){
    let user = new User(this.loginForm.value.name, this.loginForm.value.password);
    if(this.loginForm.valid){
      this.AuthService.login(this.loginForm.value.name,  this.loginForm.value.password).subscribe();
    }
  }
}
