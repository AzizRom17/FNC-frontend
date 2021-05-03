import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Adherent } from '../listeadherents/adherent-datasource';

import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AdherentService {
  private nomAss = this.auth.getOrganisme();
  public adherent:any;
  constructor(private auth:AuthService,
    private http:HttpClient,
    private toastr:ToastrService) { }

      //`${config.apiUrl}/users`
      //organisme : any = {"nom":this.auth.getOrganisme()};

    addAdherent(form){
      this.http.post(environment.APIUri+'/adherents', form).subscribe(
        (response) => {

          console.log(response);

           },
        (err) => {
          console.log(err)

          this.toastr.error("Connexion échoucée, veuillez vérifier vos identifiants")
        }
      );

  }


    // getAdherent(): any {
    //   this.http.get(environment.APIUri+'/adherents', {
    //     headers: new HttpHeaders({
    //       "Content-Type": "application/json"
    //     })
    //   }).subscribe(response => {
    //     this.adherent = response;
    //     console.log(response);
    //   }, err => {
    //     console.log(err)
    //   });
    // }

    getAdherent(){


      return  this.http.get(environment.APIUri+'/adherents/getAdherentByAss/'+this.nomAss );
    }

}
