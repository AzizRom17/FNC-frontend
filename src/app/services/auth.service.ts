import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import jwt_decode from "jwt-decode";
import { LoginComponent } from '../login/login.component';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public URL : string;
  public isLoggedIn :boolean=false;
  //public loggedUser: string;
  public Authorized :boolean=false;
public  role: string=this.getRole();
  public userRole = localStorage.getItem('loggedUser');
  constructor(
    private http:HttpClient,
    private router: Router,
    private toastr:ToastrService,
    private jwtHelper: JwtHelperService,) { }




  login(form){
    return this.http.post(environment.APIUri+'/Authenticate/login', form).subscribe(
      (response) => {
        const token = (<any>response).token;
        localStorage.setItem('jwt', token);
        this.isLoggedIn = true;
        this.router.navigateByUrl('/home');
        var dec = jwt_decode(token);
        console.log(dec);

        var userRole = dec['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        var organisme = dec['Organisme'];
        localStorage.setItem('organisme',organisme);
        localStorage.setItem('role',userRole);
        console.log(userRole);
        console.log(organisme);
         },
      (err) => {
        console.log(err)
        this.isLoggedIn = false;
        this.toastr.error("Connexion échouée, veuillez vérifier vos identifiants")
      }
    );
}
  getUrl(){
    let role = localStorage.getItem('role');
    switch (role){
    case 'Admin':
      this.URL="register-association";
      break;
      case 'Federation':
        this.URL="register-association";
        break;
        case 'Association':
          this.URL="register";
          break;
    }
  }
  addAssoc(){
    this.URL="register-association";
  }
getRole(){
  return localStorage.getItem('role')
}
getOrganisme(){
  return localStorage.getItem('organisme')
}


  register(form){
    //this.getUrl();
    return this.http.post(environment.APIUri+'/Authenticate/register-association',form);
  }

  isAuthenticated():boolean{
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
       return true;


    }
    return false;
  }






  logout(){
    localStorage.removeItem('jwt');
    localStorage.removeItem('role');
    localStorage.removeItem('organisme');
    localStorage.removeItem('adhId');
    this.router.navigateByUrl('/login');
    this.isLoggedIn=false;

  }


}
