import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermischasseService {
  public permis:any ;
  constructor(private auth:AuthService,
    private http:HttpClient,
    private toastr:ToastrService) { }

    addpermis(form){
      this.http.post(environment.APIUri+'/permis_chasse', form).subscribe(
        (response) => {

          this.toastr.success("Le permis de chasse a été ajouté avec succéss!");
           },
        (err) => {
          console.log(err)

          this.toastr.error("Erreur lors de l'ajout du permis!")
        }
      );
  }


    getpermis(){
      this.http.get(environment.APIUri+'/permis_chasse', {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }).subscribe(response => {
        this.permis = response;
        console.log(response);
      }, err => {
        console.log(err)
      });
    }
}
