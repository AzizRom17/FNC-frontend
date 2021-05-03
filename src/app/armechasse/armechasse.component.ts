import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListeadherentsComponent } from '../listeadherents/listeadherents.component';
import { ArmechasseService } from '../services/armechasse.service';

@Component({
  selector: 'app-armechasse',
  templateUrl: './armechasse.component.html',
  styleUrls: ['./armechasse.component.css']
})
export class ArmechasseComponent implements OnInit {
  armeForm:FormGroup;
  constructor(private fb:FormBuilder, private armeService:ArmechasseService,
    public listeadh:ListeadherentsComponent) { }

  ngOnInit(): void {
  this.armeForm=this.fb.group({
    Categorie:['',Validators.required],
    Type:['',Validators.required],
    Num_serie:['',Validators.required],
    Calibre:['',Validators.required],
    Nb_coup:[0,Validators.required],
    AdherentId:+localStorage.getItem('adhId')

  })
  }
onSubmit(armeForm){
  this.armeService.addarme(this.armeForm.value)
}
}
