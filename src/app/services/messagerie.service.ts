import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client, ISoapMethodResponse, NgxSoapService } from 'ngx-soap';

@Injectable({
  providedIn: 'root',
})
export class MessagerieService {
  client: Client;
  message: any;
  loading: boolean;
  showDiagnostic: boolean;

  xmlResponse: string;
  jsonResponse: string;
  resultLabel: string;
  constructor(private soap: NgxSoapService,private http: HttpClient) {

  //   this.soap
  //     .createClient('assets/sms.wsdl')
  //     .then((client) => {
  //       console.log('Client', client);
  //       this.client = client;
  //     })
  //     .catch((err) => console.log('Error', err));
  // }





  // sum() {
  //   const body = {
  //     lstnumero: '21909828',
  //     msg: 'No labels',
  //     label: 'AMED',
  //   };
    // this.client.call('SendSms', body).subscribe(
    //   (res) => {
    //     this.xmlResponse = res.responseBody;
    //     this.message = res.result.AddResult;
    //     this.loading = false;
    //   },
    //   (err) => console.log(err)
    // );

    // (<any>this.client).SendSms(body).subscribe((res: ISoapMethodResponse) => {
    //   (this.message = res.result.AddResult), console.log(this.message);
    // });
  //   this.client.operation('Add', body)
  //   .then(operation => {
  //       if (operation.error) {
  //           console.log('Operation error', operation.error);
  //           return;
  //       }

  // }
}}
