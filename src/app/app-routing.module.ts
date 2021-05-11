import {  Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdherentComponent } from './adherent/adherent.component';
import { ModifieradherentComponent } from './adherent/modifieradherent/modifieradherent.component';

import { ArmechasseComponent } from './armechasse/armechasse.component';
import { ListeassociationregComponent } from './association/listeassociationreg/listeassociationreg.component';
import { ChienchasseComponent } from './chienchasse/chienchasse.component';
import { AjouterexerciceComponent } from './cotisation/ajouterexercice/ajouterexercice.component';
import { CotisationComponent } from './cotisation/cotisation.component';
import { ListecotisationComponent } from './cotisation/listecotisation/listecotisation.component';
import { ListeexerciceComponent } from './cotisation/listeexercice/listeexercice.component';
import { AuthGuard } from './guards/auth-gard.service';
import { HomeComponent } from './home/home.component';
import { ListeadherentsComponent } from './listeadherents/listeadherents.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PermischasseComponent } from './permischasse/permischasse.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'login' , component:LoginComponent },
  {path:'',redirectTo:'/login',pathMatch: 'full'},
  {path:'home' ,component:HomeComponent,canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent,canActivate:[AuthGuard]},
  {path:'chien',component:ChienchasseComponent,canActivate:[AuthGuard]},
  {path:'arme',component:ArmechasseComponent,canActivate:[AuthGuard]},
  {path:'permis',component:PermischasseComponent,canActivate:[AuthGuard]},
  {path:'adherent',component:AdherentComponent,canActivate:[AuthGuard]},
  {path:'listeadherents',component:ListeadherentsComponent,canActivate:[AuthGuard]},
  {path:'listeassociationreg',component:ListeassociationregComponent,canActivate:[AuthGuard]},
  {path:'adherent/:id',component:ModifieradherentComponent,canActivate:[AuthGuard]},
  {path:'cotisation',component:ListeexerciceComponent,canActivate:[AuthGuard]},
  {path:'listecotisation',component:ListecotisationComponent,canActivate:[AuthGuard]},
  {path:'cotisationadherent/:id',component:CotisationComponent,canActivate:[AuthGuard]},
  {path:'ajouterexercice',component:AjouterexerciceComponent,canActivate:[AuthGuard]},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
