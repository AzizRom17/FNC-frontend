import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../services/auth.service';
import { CotisationService } from '../services/cotisation.service';
import { Cotisation } from './cotisation-datasource';

@Component({
  selector: 'app-cotisation',
  templateUrl: './cotisation.component.html',
  styleUrls: ['./cotisation.component.css']
})
export class CotisationComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Cotisation>;
  ELEMENT_DATA:any=["test"];dataSource = new MatTableDataSource<Cotisation>();
  public adherent:any;
  public adhId:number;
  isAllowed:boolean=false;
  public date:any;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns : string[] = ['exerciceLib','montant','num_adhesion'
 ,'actions'];

  constructor(public cotservice:CotisationService,
    public auth:AuthService
   ) {
  }


  ngAfterViewInit() {
    // this.adhservice.getAdherent().subscribe((res) => {
    //   console.log(res);
    //   this.dataSource = new MatTableDataSource(res);
    //   this.dataSource.data=res as TableItem[]

    let resp=this.cotservice.getCotisation();


    resp.subscribe(report=>this.dataSource.data=report as Cotisation[]);
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
  // getId(x)

  // {      localStorage.setItem("adhId",x);
  //       this.adhservice.consultAdh=true;
  //       this.adhservice.getAdherentById().subscribe(req => console.log(req))
  //     }

}
