import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CotisationService {

  public showCotisation:boolean=false;
  public generated:boolean=false;

  constructor(private http:HttpClient) { }

  getCotisation(){
  return this.http.get(environment.APIUri+'/cotisations');
  }
}
