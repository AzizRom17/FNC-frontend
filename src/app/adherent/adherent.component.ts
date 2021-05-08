import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdherentService } from '../services/adherent.service';
import { AuthService } from '../services/auth.service';

interface Gouvernorat {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.css'],
})
export class AdherentComponent implements OnInit {
  adherentForm: FormGroup;
  gouvs: Gouvernorat[] = [
    { value: 'Ariana', viewValue: 'Ariana' },
    { value: 'Béja', viewValue: 'Béja' },
    { value: 'Ben Arous', viewValue: 'Ben Arous' },
    { value: 'Bizerte', viewValue: 'Bizerte' },
    { value: 'Gabès', viewValue: 'Gabès' },
    { value: 'Gafsa', viewValue: 'Gafsa' },
    { value: 'Jendouba', viewValue: 'Jendouba' },
    { value: 'Kairouan', viewValue: 'Kairouan' },
    { value: 'Kasserine', viewValue: 'Kasserine' },
    { value: 'Kébili', viewValue: 'Kébili' },
    { value: 'Le Kef', viewValue: 'Le Kef' },
    { value: 'Mahdia', viewValue: 'Mahdia' },
    { value: 'La Manouba', viewValue: 'La Manouba' },
    { value: 'Médenine', viewValue: 'Médenine' },
    { value: 'Monastir', viewValue: 'Monastir' },
    { value: 'Nabeul', viewValue: 'Nabeul' },
    { value: 'Sfax', viewValue: 'Sfax' },
    { value: 'Sidi Bouzid', viewValue: 'Sidi Bouzid' },
    { value: 'Siliana', viewValue: 'Siliana' },
    { value: 'Sousse', viewValue: 'Sousse' },
    { value: 'Tataouine', viewValue: 'Tataouine' },
    { value: 'Tozeur', viewValue: 'Tozeur' },
    { value: 'Tunis', viewValue: 'Tunis' },
    { value: 'Zaghouan', viewValue: 'Zaghouan' },
  ];
  //addAdh:boolean=false;
  req: any;
  public adherent: any;
  constructor(
    private fb: FormBuilder,
    public adherentService: AdherentService,
    public auth: AuthService,
    private toastr :ToastrService,
    private router:Router
  ) {}

  ngOnInit(): void {

      this.adherentForm = this.fb.group({
        //adherentId:[0],

        nom_fr: [''],
        prenom_fr: [''],
        date_nais: [''],
        lieu_nais_fr: [''],

        adresse_fr: [''],
        ville_fr: [''],
        cp: [''],
        cin: [0],
        telephone: [0],
        email: [''],

        num_adhesion: [0],
        association: { nom: this.auth.getOrganisme() },
      });

    console.log(this.adherentService.getAdherent());
  }

  onSubmit(adherentForm) {
    this.adherentService.addAdherent(this.adherentForm.value);
    console.log(JSON.stringify(this.adherentForm.value));
  }
}
