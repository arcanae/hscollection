import { LoginComponent } from "./login/login.component";
import {Routes} from '@angular/router';
import { AccueilComponent } from "./accueil/accueil.component";
import { UserInventoryComponent } from "./user-inventory/user-inventory.component";

export const appRoutes:Routes = [
    {path : '',pathMatch : 'full', component : AccueilComponent},
    {path : 'core', component : UserInventoryComponent}
    

]