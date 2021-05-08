import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AssociationService } from 'src/app/services/association.service';
import { Association  } from './listeassociationreg-datasource';

@Component({
  selector: 'app-listeassociationreg',
  templateUrl: './listeassociationreg.component.html',
  styleUrls: ['./listeassociationreg.component.css']
})
export class ListeassociationregComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Association>;
  ELEMENT_DATA:any=["test"];dataSource = new MatTableDataSource<Association>();
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['organisme_nom',
    'gouvern',
    'userName',
    'currentPassword','actions'];

  constructor(private associservice:AssociationService) {
  }

  ngAfterViewInit()  {

    let resp=this.associservice.getAssociation();


    resp.subscribe(report=>this.dataSource.data=report as Association[]);
     resp.subscribe(req => console.log(req));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
