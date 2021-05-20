import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdherentService } from 'src/app/services/adherent.service';
import { CotisationService } from 'src/app/services/cotisation.service';
import { EtatcotisationService } from 'src/app/services/etatcotisation.service';
import { ModaliteService } from 'src/app/services/modalite.service';
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
   modalite:any;
public modaliteId:any;
  public cotisation:any;
  montantAPayer:number;
  constructor(private fb:FormBuilder,
    private regcotservice:ReglementcotisationService,
    private etatcotisationservice:EtatcotisationService,
    private cotisationservice:CotisationService,
    private modaliteservice:ModaliteService,
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
      modaliteLib:[''],
      cotisationId:this.cotisationId,







    });

    this.modaliteservice.getModalite().subscribe((res)=>{
      this.modalite=res;
      console.log(this.modalite)
    })
    this.cotisationservice.getCotisationById(this.cotisationId).subscribe(
      (res)=>{


        this.cotisation=res;
        this.montantAPayer=this.cotisation.exercice.montant
        console.log(this.cotisation)

      }
    )




  }


  save(reglementForm) {

    this.modaliteservice.getModalite().subscribe((res) => {

       for (let key in res) {
         if (res[key].modaliteLib === this.reglementForm.value.modaliteLib) {
           const data ={
             modaliteId: res[key].modaliteId,
             mnt_reg:this.reglementForm.value.mnt_reg,
             cotisationId:this.reglementForm.value.cotisationId,
             date_reg:this.reglementForm.value.date_reg,
             banque:this.reglementForm.value.banque,
             num_piece:this.reglementForm.value.num_piece,


            };
            console.log(data)


            this.regcotservice.addReglementCotisation(data);

         }}});
         this.dialogRef.close();


    //this.etatcotisationservice.putEtatCotisation(this.etat_cotisationId)
      // console.log(JSON.stringify(this.reglementForm.value));
      // console.log(this.getModaliteId())





}

close() {
    this.dialogRef.close();
}

}
