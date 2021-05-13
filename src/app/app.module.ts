import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import {  ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import jwtDecode from 'jwt-decode';

import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './guards/auth-gard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { ChienchasseComponent } from './chienchasse/chienchasse.component';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { PermischasseComponent } from './permischasse/permischasse.component';
import { ArmechasseComponent } from './armechasse/armechasse.component';
import { AdherentComponent } from './adherent/adherent.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatTableModule,MatTableDataSource} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ListeadherentsComponent } from './listeadherents/listeadherents.component';
import { DatePipe } from '@angular/common';
import { AssociationComponent } from './association/association.component';
import { ListeassociationregComponent } from './association/listeassociationreg/listeassociationreg.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ModifieradherentComponent } from './adherent/modifieradherent/modifieradherent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { CotisationComponent } from './cotisation/cotisation.component';
import { ListeexerciceComponent } from './cotisation/listeexercice/listeexercice.component';
import { ListecotisationComponent } from './cotisation/listecotisation/listecotisation.component';
import { AjouterexerciceComponent } from './cotisation/ajouterexercice/ajouterexercice.component';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { ReglementcotisationComponent } from './cotisation/reglementcotisation/reglementcotisation.component';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';






export function tokenGetter() {
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

    RegisterComponent,
    ChienchasseComponent,
    NavComponent,
    PermischasseComponent,
    ArmechasseComponent,
    AdherentComponent,
    ListeadherentsComponent,
     AssociationComponent,
     ListeassociationregComponent,

     ModifieradherentComponent,
     PagenotfoundComponent,
     AdhesionComponent,
     CotisationComponent,
     ListeexerciceComponent,
     ListecotisationComponent,
     AjouterexerciceComponent,
     ReglementcotisationComponent,
     ConfirmdialogComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  LayoutModule, MaterialModule, ReactiveFormsModule ,HttpClientModule,MatMomentDateModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter

      }
    }),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    Ng2SearchPipeModule,FormsModule

  ],
  providers: [AuthGuard,
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
  ListeadherentsComponent,DatePipe,AdherentComponent,{
    provide: MatDialogRef,
    useValue: {
      close: (dialogResult: any) => { }
    }
  }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AjouterexerciceComponent]
})
export class AppModule { }
