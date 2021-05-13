import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtatcotisationService {

  constructor(private http:HttpClient) { }
  getEtatCotisation(){
    return this.http.get(environment.APIUri+'/etat_cotisation');
    }
    putEtatCotisation(id){
      return this.http.put(environment.APIUri+'/etat_cotisation/'+id,
       {
        etat_cotisationId:id,

        etat_cotisationLib:"Payée"

      }).subscribe(
        (response) => {
          console.log(response);


        },
        (err) => {
          console.log(err);
        }
      );

    }

}
