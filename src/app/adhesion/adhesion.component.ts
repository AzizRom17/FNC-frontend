import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from '../services/adherent.service';
import { CotisationService } from '../services/cotisation.service';

@Component({
  selector: 'app-adhesion',
  templateUrl: './adhesion.component.html',
  styleUrls: ['./adhesion.component.css']
})
export class AdhesionComponent implements OnInit {
  public adherentId:number;
  num_adhesion:number;
  date_adhesion:string;
  public date:any;
  public cotclicked : boolean = false;
  constructor(private route:ActivatedRoute,
     private adhservice:AdherentService,
     private datePipe: DatePipe,
     public cotservice:CotisationService) { }

  ngOnInit(): void {
    this.adherentId= this.route.snapshot.params['id'];
    this.getInfosAdherent();

  }
  getInfosAdherent(){

    this.adhservice.getAdherentById1(this.adherentId).subscribe(
      (res)=>{

        this.num_adhesion= res.num_adhesion;
        this.date_adhesion= res.date_adhesion;
        console.log(this.date_adhesion)

      },
      (error)=>{
        console.log(error)
      }
    )
    this.date = this.datePipe.transform(new Date(), 'dd-MM-yy');
  }

}
