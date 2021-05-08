import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import jwt_decode from "jwt-decode";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,


  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      Username: ['',Validators.required],
      Password: ['',[Validators.required,Validators.minLength(6)]],
    });

  }
  onSubmit(loginForm) {
    //console.log(this.loginForm);
    this.auth.login(this.loginForm.value)
    }
}
