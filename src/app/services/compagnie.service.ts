import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {

  constructor(private http:HttpClient) { }

  getCompagnie(){
    return this.http.get(environment.APIUri+'/compagnies')
  }
}
