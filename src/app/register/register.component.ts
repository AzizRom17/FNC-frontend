import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';




interface Gouvernorat {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  gouvs: Gouvernorat[] = [
    {value: 'Ariana', viewValue: 'Ariana'},
    {value: 'Béja', viewValue: 'Béja'},
    {value: 'Ben Arous', viewValue: 'Ben Arous'},
    {value: 'Bizerte', viewValue: 'Bizerte'},
    {value: 'Gabès', viewValue: 'Gabès'},
    {value: 'Gafsa', viewValue: 'Gafsa'},
    {value: 'Jendouba', viewValue: 'Jendouba'},
    {value: 'Kairouan', viewValue: 'Kairouan'},
    {value: 'Kasserine', viewValue: 'Kasserine'},
    {value: 'Kébili', viewValue: 'Kébili'},
    {value: 'Le Kef', viewValue: 'Le Kef'},
    {value: 'Mahdia', viewValue: 'Mahdia'},
    {value: 'La Manouba', viewValue: 'La Manouba'},
    {value: 'Médenine', viewValue: 'Médenine'},
    {value: 'Monastir', viewValue: 'Monastir'},
    {value: 'Nabeul', viewValue: 'Nabeul'},
    {value: 'Sfax', viewValue: 'Sfax'},
    {value: 'Sidi Bouzid', viewValue: 'Sidi Bouzid'},
    {value: 'Siliana', viewValue: 'Siliana'},
    {value: 'Sousse', viewValue: 'Sousse'},
    {value: 'Tataouine', viewValue: 'Tataouine'},
    {value: 'Tozeur', viewValue: 'Tozeur'},
    {value: 'Tunis', viewValue: 'Tunis'},
    {value: 'Zaghouan', viewValue: 'Zaghouan'}

  ];
  constructor(private fb:FormBuilder,
    private http:HttpClient,
    public auth:AuthService,
    private toastr:ToastrService,
    private router:Router
    ) { }


  ngOnInit()  {
    this.registerForm = this.fb.group({

      userName:[ '',Validators.required],
      password: ['',[Validators.required,Validators.minLength(6)]],
      //ConfirmPassword: ['',Validators.required],
      organisme_nom:[''],
      gouvern:['',Validators.required]

    },
    );

  }

  onSubmit(registerForm){
    console.log(JSON.stringify(this.registerForm.value));
    this.auth.register(this.registerForm.value).subscribe(
      (response) =>{
        console.log(response);
         this.toastr.success("L'association a été ajouté avec succés!");
         this.router.navigateByUrl('/listeassociationreg');
      },
      (err) => {
        console.log(err);
        console.log(registerForm);
        this.toastr.error("Erreur lors de la création de l'association !");
      }
    )

  }


}
