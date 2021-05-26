import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdherentService } from 'src/app/services/adherent.service';
import { CotisationService } from 'src/app/services/cotisation.service';
import { ExerciceService } from 'src/app/services/exercice.service';

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

  adherent: any;
  public exercice: any;
  exerciceId: number;
  constructor(
    private adhservice: AdherentService,
    private cotservice: CotisationService,
    private exservice: ExerciceService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<AjouterexerciceComponent>
  ) {}

  ngOnInit(): void {
    this.exerciceForm = this.fb.group({
      exerciceLib: [''],

      // exerciceId:[this.exercice.exerciceId]
    });

    this.exservice.getExercice().subscribe(
      (res) => (this.exercice = res),
      (err) => console.log(err)
    );
    console.log(this.exercice);
  }

  generateCotisation() {
    //console.log(this.exerciceForm.value);
    this.exservice.getExercice().subscribe((res) => {
      for (let key in res) {
        if (res[key].exerciceLib === this.exerciceForm.value.exerciceLib) {
          this.exerciceId = res[key].exerciceId;
          console.log(res[key].exerciceId);
        }
      }
    });
    this.adhservice.getAdherent().subscribe((res) => {
      this.adherent = res;
      console.log(this.exerciceForm.value.exerciceLib);
      for (let key in res) {
        if (res[key].etat_adherent.etat_adherentLib==='actif') {
          const data = {
            etat_cotisation: { etat_cotisationLib: 'Non payée' },

            exerciceId:this.exerciceId,

            adherentId: res[key].adherentId,
          };
          console.log(data);
          this.cotservice.addCotisation(data);
          this.toastr.success('Les cotisations ont été généré avec succés!');
        }
      }
    });
    this.router.navigateByUrl('/listecotisation');
  }
  close() {
    this.dialogRef.close();
  }
}
