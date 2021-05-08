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
}
