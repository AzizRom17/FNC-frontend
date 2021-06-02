import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client, ISoapMethodResponse, NgxSoapService } from 'ngx-soap';
import { MessagerieService } from '../services/messagerie.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
  client:Client;
  intA: number;
  intB: number;
  loading: boolean;
  showDiagnostic: boolean;
  message: string;
  xmlResponse: string;
  jsonResponse: string;
  resultLabel: string;
  messagerieForm:FormGroup;

  constructor(private http:HttpClient,
    private messagerieservice:MessagerieService,
    private soap:NgxSoapService, private fb:FormBuilder) {


   }
   onSubmit() {
    this.loading = true;
      const body = {
      lstnumero: this.messagerieForm.value.lstnumero,
      msg: this.messagerieForm.value.msg,
      label: 'AMAD',
    };


    // this.client.call('SendSms', body).subscribe(res => {
    //   // this.xmlResponse = res.responseBody;
    //   // this.message = res.result.SendSmsResult;
    //   // this.loading = false;
    //   console.log(res)
    // }, err => console.log(err));}
    this.soap.createClient('assets/sms.wsdl')
    .then(client => {
      console.log('Client', client);
      this.client = client;
      (<any>this.client).SendSms(body).subscribe(
        (res: ISoapMethodResponse) => {
          console.log('method response', res);
          this.xmlResponse = res.xml;
          this.message = res.result.AddResult;
          this.loading = false;
        },
        err => console.log(err)
      );
    })
    .catch(err => console.log('Error', err));

     }


  ngOnInit(): void {
    this.messagerieForm = this.fb.group({
      //adherentId:[0],

      lstnumero: [''],
      msg: ['']
    });

}
}
