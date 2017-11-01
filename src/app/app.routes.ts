import { LoginComponent } from "./login/login.component";
import {Routes} from '@angular/router';
import { AccueilComponent } from "./accueil/accueil.component";
import { UserInventoryComponent } from "./user-inventory/user-inventory.component";
import { CoreComponent } from "./core/core.component";

export const appRoutes:Routes = [
    {path : 'core', component : CoreComponent},
    {path : '',pathMatch : 'full', component : AccueilComponent}
]