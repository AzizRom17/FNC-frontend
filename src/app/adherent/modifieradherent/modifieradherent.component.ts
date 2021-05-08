import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent.service';
import { AuthService } from 'src/app/services/auth.service';
import {MatTabsModule} from '@angular/material/tabs';
import { CotisationService } from 'src/app/services/cotisation.service';

@Component({
  selector: 'app-modifieradherent',
  templateUrl: './modifieradherent.component.html',
  styleUrls: ['./modifieradherent.component.css']
})
export class ModifieradherentComponent implements OnInit {
  modifAdherentForm:FormGroup;
  adherentId:any;
  nom_fr:string;

  prenom_fr:string;
  date_nais:string;
  email:string;
  num_adhesion:number;
  constructor(private fb:FormBuilder, private auth:AuthService,
    private route:ActivatedRoute, private adhservice:AdherentService,
    private cotservice:CotisationService) { }

  ngOnInit(): void {
    this.adherentId= this.route.snapshot.params['id'];
    this.modifAdherentForm = this.fb.group({
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
      photo: [''],
      num_adhesion: [0],
      association: { nom: this.auth.getOrganisme() },
    });
    this.getInfosAdherent();

}
getInfosAdherent(){

  this.adhservice.getAdherentById1(this.adherentId).subscribe(
    (res)=>{
      this.modifAdherentForm.setValue({
        nom_fr: res.nom_fr,
        prenom_fr: res.prenom_fr,
        date_nais:res.date_nais,
        lieu_nais_fr:res.lieu_nais_fr,
        adresse_fr:res.adresse_fr,
        ville_fr:res.ville_fr,
        cp:res.cp,
        cin:res.cin,
        telephone:res.telephone,

        email:res.email,

        photo:res.photo,

        num_adhesion:res.num_adhesion,
        association: { nom: this.auth.getOrganisme() },
      });
    },
    (error)=>{
      console.log(error)
    }
  )

}

}
