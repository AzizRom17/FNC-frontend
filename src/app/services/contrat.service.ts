import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private http:HttpClient) { }

  getContrat(){
    return this.http.get(environment.APIUri+'/contrats')
  }
  addContrat(form){
    this.http.post(environment.APIUri+'contarts',form).subscribe(
      (res)=>{
        console.log(res)
      },
      (err)=>{
        console.log(err)
      }
    )
  }
}
