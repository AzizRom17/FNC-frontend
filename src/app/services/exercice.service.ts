import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {

  constructor(private http:HttpClient) { }

  getExercice(){
    return this.http.get(environment.APIUri+'/exercices');
    }
}
