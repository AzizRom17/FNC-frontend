import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CotisationService {

  public showCotisation:boolean=false;
  public generated:boolean=false;
  public cotclicked:boolean=false;

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  getCotisation(){
  return this.http.get(environment.APIUri+'/cotisations');
  }
  getCotisationById(x):Observable<any>{
    return this.http.get<any>(environment.APIUri+'/cotisations/'+x);
    }

    cotClick(){
      this.showCotisation=true;
      this.cotclicked=true;
      }
    cotHide(){
      this.showCotisation=false;
      this.cotclicked=false;
    }

    addCotisation(form) {
      this.http.post(environment.APIUri + '/cotisations', form).subscribe(
        (response) => {
          console.log(response);
          this.toastr.success('La cotisation été ajouté avec succéss!');
        },
        (err) => {
          console.log(err);
        }
      );
    }
}
