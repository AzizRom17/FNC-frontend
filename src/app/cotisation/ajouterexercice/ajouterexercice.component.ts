
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdherentService } from 'src/app/services/adherent.service';
import { CotisationService } from 'src/app/services/cotisation.service';


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

  constructor(
    private adhservice: AdherentService,
    private cotservice: CotisationService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<AjouterexerciceComponent>
  ) {}

  ngOnInit(): void {
    this.exerciceForm = this.fb.group({
      exerciceLib: [''],
    });
  }

  generateCotisation() {
    console.log(this.exerciceForm.value);
    this.adhservice.getAdherent().subscribe((res) => {
      this.adherent = res;

      for (let key in res) {
        //console.log(res[key].adherentId);
        const data = {
          etat_cotisation: { etat_cotisationLib: 'Non payée' },
          exercice: {
            exerciceLib: this.exerciceForm.value.exerciceLib,
            montant: 140,
          },
          adherentId: res[key].adherentId,
        };
        console.log(data);
        this.cotservice.addCotisation(data);
        this.toastr.success('Les cotisations ont été généré avec succés!');
      }
    });
    this.router.navigateByUrl('/listecotisation');
  }
  close() {
    this.dialogRef.close();
  }
}
