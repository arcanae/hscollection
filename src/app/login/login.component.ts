import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
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

  constructor(private builder:FormBuilder) {
    this.name = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]));
    this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]));
    this.loginForm = builder.group({
      name: this.name,
      password: this.password
    })
   }

  ngOnInit() {
  }
  onSubmit(){
    console.log('utilisateur : '+this.loginForm.value);
  }
}
