import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
  public consultAdh:boolean=false;
  public adhId=localStorage.getItem('adhId');
  public URL:string;
  constructor(private auth:AuthService,
    private http:HttpClient,
    private toastr:ToastrService,
    private router:Router) { }

      //`${config.apiUrl}/users`
      //organisme : any = {"nom":this.auth.getOrganisme()};

    addAdherent(form){
      this.http.post(environment.APIUri+'/adherents', form).subscribe(
        (response) => {

          console.log(response);
          this.toastr.success("L'adhérent a été ajouté avec succéss!");
          this.router.navigateByUrl('/listeadherents');
           },
        (err) => {
          console.log(err)

          this.toastr.error("Connexion échouée, veuillez vérifier vos identifiants")
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

      let role = localStorage.getItem('role');
      switch (role){
        case 'Admin':
          this.URL='/adherents';
          break;
          case 'Federation':
            this.URL='/adherents';
            break;
            case 'Association':

             this.URL='/adherents/getAdherentByAss/'+this.nomAss;
             case 'User':

              this.URL='/adherents/getAdherentByAss/'+this.nomAss;

              break;}
             // resp=this.http.get(environment.APIUri+'/adherents/getAdherentByAss/'+this.nomAss );

     return this.http.get(environment.APIUri+this.URL);
    }

    getAdherentById(){


      return  this.http.get(environment.APIUri+'/adherents/getAdherentById/'+this.adhId );
    }
    getAdherentById1(x):Observable<any>{


      return  this.http.get<any>(environment.APIUri+'/adherents/getAdherentById/'+x );
    }

    getCredsAdherent(id){
      let adherentCreds:any

      this.getAdherentById1(id).subscribe(
        (res)=>{
          adherentCreds=JSON.stringify(res.nom_fr)

          console.log(res)

});
}
}
