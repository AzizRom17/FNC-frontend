import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ListeadherentsComponent } from '../listeadherents/listeadherents.component';
import { AuthService } from '../services/auth.service';
import { ChienchasseService } from '../services/chienchasse.service';

@Component({
  selector: 'app-chienchasse',
  templateUrl: './chienchasse.component.html',
  styleUrls: ['./chienchasse.component.css']
})
export class ChienchasseComponent implements OnInit {
  public chien : any;
  chienForm: FormGroup;

  constructor(private http:HttpClient,
     private authService:AuthService,
     public chienService:ChienchasseService,
     private fb: FormBuilder,
     public listeadh:ListeadherentsComponent
     ) { }

  ngOnInit() {
    this.chienForm = this.fb.group({
      genre: ['',Validators.required],

      adherentId:+localStorage.getItem('adhId')

    });
  }
  onSubmit(chienForm){
    this.chienService.addchien(this.chienForm.value);

  }

}
