import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdherentService } from 'src/app/services/adherent.service';
import { AssuranceService } from 'src/app/services/assurance.service';
import { CompagnieService } from 'src/app/services/compagnie.service';
import { ContratService } from 'src/app/services/contrat.service';
import { ExerciceService } from 'src/app/services/exercice.service';

@Component({
  selector: 'app-ajouterassurance',
  templateUrl: './ajouterassurance.component.html',
  styleUrls: ['./ajouterassurance.component.css']
})
export class AjouterassuranceComponent implements OnInit {
  exerciceForm:FormGroup;
  public exercice:any;
  public exerciceId:any;
  public compagnieId:any;
  public compagnie:any;
  public adherent:any;
  public adherentId:number;
  currentDate = new Date();
  constructor(private dialogRef: MatDialogRef<AjouterassuranceComponent>,
    private adhservice:AdherentService,
    private exservice:ExerciceService,
    private assuranceservice:AssuranceService,
    private toastr:ToastrService,
    private fb:FormBuilder,
    private compagnieservice:CompagnieService,
    private contratservice:ContratService,
    private route: ActivatedRoute,
     @Inject(MAT_DIALOG_DATA) data) {
      this.adherentId=parseInt(data.adherentId);
    }

  ngOnInit(): void {

    console.log(this.adherentId)

    this.exerciceForm = this.fb.group({
      exerciceLib: [''],
      montant:[0],
      reference_adhesion:[''],
      compagnieLib:['']

      // exerciceId:[this.exercice.exerciceId]
    });

    this.exservice.getExercice().subscribe(
      (res) => (this.exercice = res),
      (err) => console.log(err)
    );


    this.compagnieservice.getCompagnie().subscribe(
      (res) => (this.compagnie = res),
      (err) => console.log(err)
    );

  }

  generateAssurance() {
    //console.log(this.exerciceForm.value);
    this.exservice.getExercice().subscribe((res) => {
      for (let key in res) {
        if (res[key].exerciceLib === this.exerciceForm.value.exerciceLib) {
          this.exerciceId = res[key].exerciceId;
          console.log(res[key].exerciceId);
        }
      }
    });
    this.compagnieservice.getCompagnie().subscribe((res) => {
      for (let key in res) {
        if (res[key].compagnieLib === this.exerciceForm.value.compagnieLib) {
          this.compagnieId = res[key].compagnieId;
          console.log(res[key].compagnieId);
        }
      }
    });
     this.adhservice.getAdherent().subscribe((res) => {
       this.adherent = res;
       console.log(this.exerciceForm.value.exerciceLib);
       for (let key in res) {
        if (res[key].adherentId===this.adherentId) {
          const data = {
             etat_assuranceId: 1 ,
             date_creation:this.currentDate,
             montant:this.exerciceForm.value.montant,
             compagnieId:this.compagnieId,
             exerciceId: this.exerciceId,

            adherentId: this.adherentId,
            contratId:2
          };
          console.log(data);

          this.assuranceservice.addAssurance(data);
          //this.toastr.success('Les cotisations ont été généré avec succés!');
        }
     }
   });

 }
  close() {
    this.dialogRef.close();
  }
  }


