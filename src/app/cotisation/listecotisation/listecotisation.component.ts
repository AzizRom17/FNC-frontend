import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent.service';
import { AuthService } from 'src/app/services/auth.service';
import { CotisationService } from 'src/app/services/cotisation.service';
import { EtatcotisationService } from 'src/app/services/etatcotisation.service';
import { ExerciceService } from 'src/app/services/exercice.service';
import { Exercice } from '../listeexercice/listeexercice-datasource';
import { Cotisation1 } from './listecotisation-datasource';

@Component({
  selector: 'app-listecotisation',
  templateUrl: './listecotisation.component.html',
  styleUrls: ['./listecotisation.component.css']
})
export class ListecotisationComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Cotisation1>;
  ELEMENT_DATA:any=["test"];dataSource = new MatTableDataSource<Cotisation1>();
  public adherent:any;
  public adhId:number;
  isAllowed:boolean=false;
  public date:any;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns : string[] = ['etat_cotisationLib','nom_fr','prenom_fr'
 ,'actions'];

  constructor(public cotservice:CotisationService,
    public auth:AuthService,
    public adhservice:AdherentService,
    private exservice:ExerciceService,
    private etatcotservice:EtatcotisationService,
    private routeur:Router,

   ) {
  }


  ngAfterViewInit() {
    // this.adhservice.getAdherent().subscribe((res) => {
    //   console.log(res);
    //   this.dataSource = new MatTableDataSource(res);
    //   this.dataSource.data=res as TableItem[]

    let resp=this.cotservice.getCotisation();


    resp.subscribe(report=>this.dataSource.data=report as Cotisation1[]);
     resp.subscribe(req => console.log(req));


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
  generer(){
    this.routeur.navigateByUrl('listeadherents');
  }

}
