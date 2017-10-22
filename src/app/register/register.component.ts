import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { User } from '../class/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: FormControl;
  password:FormControl;
  confirmPassword:FormControl;
  user:User;
  registForm: FormGroup;
  
  constructor(private builder:FormBuilder) { 
    this.name = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]));
    this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]));
    this.confirmPassword = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]));

    this.registForm = builder.group({
      name: this.name,
      password: this.password,
      confirmPassword: this.confirmPassword
    },{validator: this.matchingPasswords('password', 'confirmPassword')})
  }

  ngOnInit() {

  }

  onSubmit(){
    console.log('utilisateur : '+this.registForm.value);
  }
  matchingPasswords(passwordKey, confirmPasswordKey){
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }
}
