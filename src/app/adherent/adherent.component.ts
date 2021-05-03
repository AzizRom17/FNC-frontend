import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdherentService } from '../services/adherent.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.css']
})
export class AdherentComponent implements OnInit {
  adherentForm : FormGroup;
  //addAdh:boolean=false;
  req : any;
  constructor(private fb:FormBuilder,
    public adherentService:AdherentService, public auth:AuthService
  ) { }


  ngOnInit(): void {this.adherentForm=this.fb.group({
    //adherentId:[0],
    nom_fr:[''],
    prenom_fr:[''],
    date_nais:[''],
    lieu_nais_fr:[''],
    nationalite:[''],
    adresse_fr:[''],
    ville_fr:[''],
    cp:[''],
    cin:[0],
    telephone:[0],
    email:[''],
    photo:[''],
    num_adhesion:[0],
    association:this.auth.getOrganisme()
  })
  console.log(this.adherentService.getAdherent())
  }

onSubmit(adherentForm){
  this.adherentService.addAdherent(this.adherentForm.value);
    console.log(JSON.stringify(this.adherentForm.value));
}
}
