import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdherentService } from 'src/app/services/adherent.service';
import { CotisationService } from 'src/app/services/cotisation.service';
import { EtatcotisationService } from 'src/app/services/etatcotisation.service';
import { ReglementcotisationService } from 'src/app/services/reglementcotisation.service';
import { CotisationComponent } from '../cotisation.component';

@Component({
  selector: 'app-reglementcotisation',
  templateUrl: './reglementcotisation.component.html',
  styleUrls: ['./reglementcotisation.component.css']
})
export class ReglementcotisationComponent implements OnInit {
  reglementForm:FormGroup;
  adherentId:number;
  etat_cotisationId:number;
  cotisationId:number;
  constructor(private fb:FormBuilder,
    private regcotservice:ReglementcotisationService,
    private etatcotisationservice:EtatcotisationService,
    private dialogRef: MatDialogRef<ReglementcotisationComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.etat_cotisationId = data.etat_cotisationId;
    this.cotisationId=data.cotisationId;

}

  ngOnInit(): void {

    this.reglementForm = this.fb.group({
      //adherentId:[0],

      mnt_reg: [0],
      date_reg: [''],
      num_piece: [''],
      banque: [''],

      cotisationId:this.cotisationId,
      modalite:this.fb.group({modaliteLib: ['']}),


    });


  }


  save(reglementForm) {
    this.regcotservice.addReglementCotisation(this.reglementForm.value);
    this.etatcotisationservice.putEtatCotisation(this.etat_cotisationId)
      console.log(JSON.stringify(this.reglementForm.value));

    this.dialogRef.close();
    location.reload();


}

close() {
    this.dialogRef.close();
}

}
