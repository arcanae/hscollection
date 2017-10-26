import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { NgModule } from '@angular/core';
import { User } from '../class/user';
import { UserService } from '../service/user/user.service';


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
  
  constructor(private builder:FormBuilder, private userService:UserService) { 
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
    let user = new User(this.registForm.value.name, this.registForm.value.password);
    if(this.registForm.valid){
      this.userService.create(user).subscribe();
    }else {
      console.log('form not valid');
    }
  }
  matchingPasswords(passwordKey, confirmPasswordKey): ValidatorFn{
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
