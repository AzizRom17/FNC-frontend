import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdherentService } from '../services/adherent.service';

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css'],
})
export class ConfirmdialogComponent implements OnInit {
  adherentId: number;

  constructor(
    private adhservice: AdherentService,
    private dialogRef: MatDialogRef<ConfirmdialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.adherentId = data.adherentId;
  }

  ngOnInit(): void {}

  save() {
    this.adhservice.desactiverAdherent(this.adherentId).subscribe((res)=>{
      console.log(res)
    },
    (err)=>
    console.log(err));

    this.dialogRef.close();
    location.reload();
  }

  close() {
    this.dialogRef.close();
  }
}
