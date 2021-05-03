import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ArmechasseService {
  public arme: any;
  constructor(private auth:AuthService,
    private http:HttpClient,
    private toastr:ToastrService
    ) { }
  // isAuthorized(){
  //   if ((this.auth.userRole) ==='User'){
  //     this.auth.Authorized=true
  //     //console.log(this.userRole)
  //   }
  //   //console.log(this.userRole)
  // }


  addarme(form){
    this.http.post(environment.APIUri+'/arme_chasse', form).subscribe(
      (response) => {

        console.log("saha!");
         },
      (err) => {
        console.log(err)

        this.toastr.error("Connexion échoucée, veuillez vérifier vos identifiants")
      }
    );
}


  getarme(){
    this.http.get(environment.APIUri+'/chien_chasse', {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      this.arme = response;
      console.log(response);
    }, err => {
      console.log(err)
    });
  }
}
