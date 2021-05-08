import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/services/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService,
    private router: Router,
    private auth:AuthService) {
  }
  canActivate() {

    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)&&this.auth.isLoggedIn){
       return true;


    }
    this.router.navigate(["login"]);
    return false;
  }
}
