import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EtatassuranceService } from 'src/app/service/etatassurance.service';
import { AssuranceService } from 'src/app/services/assurance.service';
import { ModaliteService } from 'src/app/services/modalite.service';
import { ReglementassuranceService } from 'src/app/services/reglementassurance.service';
import { ReglementcotisationService } from 'src/app/services/reglementcotisation.service';

@Component({
  selector: 'app-reglementassurance',
  templateUrl: './reglementassurance.component.html',
  styleUrls: ['./reglementassurance.component.css']
})
export class ReglementassuranceComponent implements OnInit {

  reglementForm:FormGroup;
  adherentId:number;
  etat_assuranceId:number;
  assuranceId:number;
   modalite:any;
public modaliteId:any;
  public assurance:any;
  montantAPayer:number;
  constructor(private fb:FormBuilder,
   private reglementationservice:ReglementassuranceService,
    private etatassuranceservice:EtatassuranceService,
    private assuranceservice:AssuranceService,
    private modaliteservice:ModaliteService,
    private dialogRef: MatDialogRef<ReglementassuranceComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.etat_assuranceId = data.etat_assuranceId;
    this.assuranceId=data.assuranceId;


}





  ngOnInit(): void {
    this.reglementForm = this.fb.group({
      //adherentId:[0],

      mnt_reg: [0],
      date_reg: [''],
      num_piece: [''],
      banque: [''],
      modaliteLib:[''],
      assuranceId:this.assuranceId,







    });

    this.modaliteservice.getModalite().subscribe((res)=>{
      this.modalite=res;
      console.log(this.modalite)
    })
    this.assuranceservice.getAssuranceById(this.assuranceId).subscribe(
      (res)=>{


        this.assurance=res;
        this.montantAPayer=this.assurance.exercice.montant
        console.log(this.assurance)

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
             assuranceId:this.reglementForm.value.assuranceId,
             date_reg:this.reglementForm.value.date_reg,
             banque:this.reglementForm.value.banque,
             num_piece:this.reglementForm.value.num_piece,


            };
            console.log(data)


            this.reglementationservice.addReglementAssurance(data);

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
