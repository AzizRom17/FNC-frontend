import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Adherent } from '../listeadherents/adherent-datasource';
import { AdherentService } from '../services/adherent.service';
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
  @ViewChild(MatTable) table!: MatTable<Adherent>;
  ELEMENT_DATA:any=["testte"];dataSource = new MatTableDataSource<Adherent>();
  public adherent:any;
  public adhId:number;
  isAllowed:boolean=false;
  public date:any;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns : string[] = ['exerciceLib','montant','num_adhesion','actions'];
 public cotisationId:any;
 public adherentId:any;
  constructor(public cotservice:CotisationService,
    public auth:AuthService, private route:ActivatedRoute,private cdr: ChangeDetectorRef,private adhservice:AdherentService
   ) {
  }


  ngAfterViewInit() {

    this.adherentId= this.route.snapshot.params['id'];

    let resp=this.adhservice.getAdherentById1(this.adherentId)


    resp.subscribe(report=>this.dataSource.data=report as Adherent[]);
    resp.subscribe(req => console.log(req));



   this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.cdr.detectChanges();

  }


}

