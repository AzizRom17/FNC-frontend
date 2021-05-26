import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssuranceService {

  constructor(private http:HttpClient) { }

  getAssurance(){
    return this.http.get(environment.APIUri+'/assurances')
  }
  getAssuranceById(id){
    return this.http.get(environment.APIUri+'/assurances/'+id)
  }
  addAssurance(form){
    this.http.post(environment.APIUri+'/assurances',form).subscribe(
      (res)=>{
        console.log(form)
      },
      (err)=>{
        console.log(err)
      }
    )
  }
}
