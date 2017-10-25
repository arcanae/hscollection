import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { BasketComponent } from './basket/basket.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { UserInventoryComponent } from './user-inventory/user-inventory.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { UserService } from './service/user/user.service';
import { AuthService } from './service/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BasketComponent,
    RegisterComponent,
    NavComponent,
    UserInventoryComponent,
    UserProfilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
