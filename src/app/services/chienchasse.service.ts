import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChienchasseService {
  public chien : any;
  public userRole=localStorage.getItem('role');
  public Authorized:boolean=false;
  constructor(private http:HttpClient,
    private toastr:ToastrService) { }

  isAuthorized(){
    if ((this.userRole) ==='User'){
      this.Authorized=true
      //console.log(this.userRole)
    }
    //console.log(this.userRole)
  }


  addchien(form){
    this.http.post(environment.APIUri+'/chien_chasse', form).subscribe(
      (response) => {

        this.toastr.success("Le chien a été ajouté avec succéss!");
         },
      (err) => {
        console.log(err)

        this.toastr.error("Erreur lors de l'ajout du chien !")
      }
    );
}


  getchien(){
    this.http.get(environment.APIUri+'/chien_chasse', {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      this.chien = response;
      console.log(response);
    }, err => {
      console.log(err)
    });
  }



}
