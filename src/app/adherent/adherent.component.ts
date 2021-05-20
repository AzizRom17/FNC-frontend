import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AdherentService } from '../services/adherent.service';
import { AuthService } from '../services/auth.service';

interface Gouvernorat {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.css'],
})
export class AdherentComponent implements OnInit {
  adherentForm: FormGroup;
  gouvs: Gouvernorat[] = [
    { value: 'Ariana', viewValue: 'Ariana' },
    { value: 'Béja', viewValue: 'Béja' },
    { value: 'Ben Arous', viewValue: 'Ben Arous' },
    { value: 'Bizerte', viewValue: 'Bizerte' },
    { value: 'Gabès', viewValue: 'Gabès' },
    { value: 'Gafsa', viewValue: 'Gafsa' },
    { value: 'Jendouba', viewValue: 'Jendouba' },
    { value: 'Kairouan', viewValue: 'Kairouan' },
    { value: 'Kasserine', viewValue: 'Kasserine' },
    { value: 'Kébili', viewValue: 'Kébili' },
    { value: 'Le Kef', viewValue: 'Le Kef' },
    { value: 'Mahdia', viewValue: 'Mahdia' },
    { value: 'La Manouba', viewValue: 'La Manouba' },
    { value: 'Médenine', viewValue: 'Médenine' },
    { value: 'Monastir', viewValue: 'Monastir' },
    { value: 'Nabeul', viewValue: 'Nabeul' },
    { value: 'Sfax', viewValue: 'Sfax' },
    { value: 'Sidi Bouzid', viewValue: 'Sidi Bouzid' },
    { value: 'Siliana', viewValue: 'Siliana' },
    { value: 'Sousse', viewValue: 'Sousse' },
    { value: 'Tataouine', viewValue: 'Tataouine' },
    { value: 'Tozeur', viewValue: 'Tozeur' },
    { value: 'Tunis', viewValue: 'Tunis' },
    { value: 'Zaghouan', viewValue: 'Zaghouan' },
  ];
  //addAdh:boolean=false;
  req: any;
  public adherent: any;
  public progress: number;
  public message: string;
  public response: {dbPath: ''};
  @Output() public onUploadFinished = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    public adherentService: AdherentService,
    public auth: AuthService,
    private toastr :ToastrService,
    private router:Router,
    private http:HttpClient
  ) {}
  dateTime = new Date()
  ngOnInit(): void {

      this.adherentForm = this.fb.group({
        //adherentId:[0],

        nom_fr: [''],
        prenom_fr: [''],
        date_nais: [''],
        lieu_nais_fr: [''],

        adresse_fr: [''],
        ville_fr: [''],
        cp: [''],
        cin: [0],
        telephone: [0],
        email: [''],
        photo:[],
        date_adhesion:this.dateTime,
        num_adhesion: [0],
        etat_adherent:{etat_adherentLib:'actif'},
        association: { nom: this.auth.getOrganisme() },
      });

    console.log(this.adherentService.getAdherent());
  }
  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http.post(environment.APIUri+'/upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.adherentForm.setValue({photo:this.response.dbPath})
          this.onUploadFinished.emit(event.body);
        }
      });
  }
  public uploadFinished = (event) => {
    this.response = event;
  }

  onSubmit(adherentForm) {
    this.adherentService.addAdherent(this.adherentForm.value);
    console.log(JSON.stringify(this.adherentForm.value));
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44328/api/upload/${serverPath}`;
  }
}
