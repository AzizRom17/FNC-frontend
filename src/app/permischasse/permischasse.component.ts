import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PermischasseService } from '../services/permischasse.service';
import * as _moment from 'moment';
const moment = _moment;

@Component({
  selector: 'app-permischasse',
  templateUrl: './permischasse.component.html',
  styleUrls: ['./permischasse.component.css']
})
export class PermischasseComponent implements OnInit {
  public permisForm: FormGroup;
  constructor(private fb:FormBuilder,
    private permisService:PermischasseService) { }

  ngOnInit(): void {
    this.permisForm=this.fb.group({
      num_permis:['',Validators.required],
      date_permis:['',Validators.required],
      lieu_obt:['',Validators.required],
      date_debut_vali:['',Validators.required],
      date_fin_vali:['',Validators.required],
      AdherentId:+localStorage.getItem('adhId')

    })
  }
  onSubmit(permisForm){
    this.permisService.addpermis(this.permisForm.value);
    console.log(JSON.stringify(this.permisForm.value));

  }

}
