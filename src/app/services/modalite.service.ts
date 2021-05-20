import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModaliteService {

  constructor(private http:HttpClient) { }

  getModalite(){
    return this.http.get(environment.APIUri+'/modalite')
  }
}
