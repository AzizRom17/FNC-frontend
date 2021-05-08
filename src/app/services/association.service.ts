import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {

  constructor(private http:HttpClient) { }



  getAssociation(){


    return  this.http.get(environment.APIUri+'/Authenticate' );
  }
}
