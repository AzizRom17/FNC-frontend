import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatTable, MatTableDataSource } from '@angular/material/table';

import { AdherentService } from '../services/adherent.service';
import { AuthService } from '../services/auth.service';
import { Adherent } from './adherent-datasource';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdherentComponent } from '../adherent/adherent.component';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-listeadherents',
  templateUrl: './listeadherents.component.html',
  styleUrls: ['./listeadherents.component.css']
})


export class ListeadherentsComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Adherent>;
  ELEMENT_DATA:any=["test"];dataSource = new MatTableDataSource<Adherent>();
  public adherent:any;
  public adhId:number;
  isAllowed:boolean=false;
  public date:any;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns : string[] = ['nom_fr','prenom_fr','date_naiss','email','num_adhesion'
 ,'actions'];

  constructor(private adhservice:AdherentService,
    public auth:AuthService,private datePipe: DatePipe
   ) {
  }


  ngAfterViewInit() {
    // this.adhservice.getAdherent().subscribe((res) => {
    //   console.log(res);
    //   this.dataSource = new MatTableDataSource(res);
    //   this.dataSource.data=res as TableItem[]

    let resp=this.adhservice.getAdherent();


    resp.subscribe(report=>this.dataSource.data=report as Adherent[]);
     resp.subscribe(req => console.log(req));
     this.date = this.datePipe.transform(new Date(), 'dd-MM-yy');

  //   resp.subscribe(req => {
  //     this.adherent= req;
  //      console.log(req);
  //      var x=this.adherent.association;
  //       if (x==this.auth.getOrganisme())
  //      {this.isAllowed=true;}
  //  });

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  getId(x)

  {      localStorage.setItem("adhId",x);
        this.adhservice.consultAdh=true;
        this.adhservice.getAdherentById().subscribe(req => console.log(req))
      }

}
