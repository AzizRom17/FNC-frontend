import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdherentService } from 'src/app/services/adherent.service';
import { CotisationService } from 'src/app/services/cotisation.service';
import { ExerciceService } from 'src/app/services/exercice.service';
import { Exercice } from '../listeexercice/listeexercice-datasource';

export interface ExerciceLib {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-ajouterexercice',
  templateUrl: './ajouterexercice.component.html',
  styleUrls: ['./ajouterexercice.component.css'],
})
export class AjouterexerciceComponent implements OnInit {
  exerciceForm: FormGroup;
  exs: ExerciceLib[] = [
    { value: '2021', viewValue: '2021' },
    { value: '2022', viewValue: '2022' },
    { value: '2023', viewValue: '2023' },
    { value: '2024', viewValue: '2024' },
    { value: '2025', viewValue: '2025' },
    { value: '2026', viewValue: '2026' },
    { value: '2027', viewValue: '2027' },
  ];
  adherent: any;


  constructor(private adhservice: AdherentService,private cotservice:CotisationService, private fb:FormBuilder) {}

  ngOnInit(): void {
    this.exerciceForm = this.fb.group({
      //adherentId:[0],

      exerciceLib: ['']})
  }

  generateCotisation() {
    console.log(this.exerciceForm.value)
    this.adhservice.getAdherent().subscribe((res) => {
      this.adherent = res;

      for (let key in res) {
        //console.log(res[key].adherentId);
        const data={
          etat_cotisation:{etat_cotisationLib:"Non payée"},
          exercice:{
            exerciceLib:this.exerciceForm.value.exerciceLib,
            montant:140
          },
          adherentId:res[key].adherentId
        }
        console.log(data);
        this.cotservice.addCotisation(data)
      }
    });
  }
}
