import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReglementcotisationService {


  constructor(private http:HttpClient,
     private toastr:ToastrService) { }

      httpOptions = new HttpHeaders({
      'Content-Type': 'application/json'
  })

  getReglementCotisation(){
    return this.http.get(environment.APIUri+'/reglement_cotisation')
  }




  addReglementCotisation(form){


    this.http.post(environment.APIUri+'/reglement_cotisation',
   (form)
    ).subscribe(
      (response) => {

        this.toastr.success("Reglementation effectuée!");
         },
      (err) => {

        console.log(err)

        this.toastr.error("Erreur lors de la reglementation, veuillez vérifier les données saisies et rééssayer!")
      }
    );
}
}
