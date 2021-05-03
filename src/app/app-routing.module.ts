import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdherentComponent } from './adherent/adherent.component';
import { ArmechasseComponent } from './armechasse/armechasse.component';
import { ChienchasseComponent } from './chienchasse/chienchasse.component';
import { AuthGuard } from './guards/auth-gard.service';
import { HomeComponent } from './home/home.component';
import { ListeadherentsComponent } from './listeadherents/listeadherents.component';
import { LoginComponent } from './login/login.component';
import { PermischasseComponent } from './permischasse/permischasse.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent },
  {path:'home' ,component:HomeComponent, canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent,canActivate:[AuthGuard]},
  {path:'chien',component:ChienchasseComponent,canActivate:[AuthGuard]},
  {path:'arme',component:ArmechasseComponent,canActivate:[AuthGuard]},
  {path:'permis',component:PermischasseComponent,canActivate:[AuthGuard]},
  {path:'adherent',component:AdherentComponent},

  {path:'listeadherents',component:ListeadherentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
