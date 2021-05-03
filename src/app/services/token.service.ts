import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private auth:AuthService) { }
  tokenGetter(){
    if (this.auth.isLoggedIn)
    {


    }
  }

}
