import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  constructor(private fb:FormBuilder,
    private http:HttpClient,
    public auth:AuthService,
    private toastr:ToastrService,
    private router:Router
    ) { }

  ngOnInit()  {
    this.registerForm = this.fb.group({
      Nom:['',Validators.required],
      Prenom:['',Validators.required],
      Username:[ '',Validators.required],
      Password: ['',[Validators.required,Validators.minLength(6)]],
      ConfirmPassword: ['',Validators.required,Validators],
      Association:['',Validators.required]
    },
    );

  }

  onSubmit(registerForm){
    this.auth.register(this.registerForm.value).subscribe(
      (response) =>{
        console.log(response);
         this.toastr.success("L'utilisateur a été ajouté avec succés!");
         this.router.navigateByUrl('/home');
      },
      (err) => {
        console.log(err);
        this.toastr.error("teste")
      }
    )
    if (this.auth.getOrganisme()=='Federation') {




    }

  }


}
