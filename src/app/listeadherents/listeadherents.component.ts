import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


import { MatTable, MatTableDataSource } from '@angular/material/table';

import { AdherentService } from '../services/adherent.service';
import { AuthService } from '../services/auth.service';
import { Adherent } from './adherent-datasource';
import {
  MatDialog,
  MatDialogConfig,

} from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';

@Component({
  selector: 'app-listeadherents',
  templateUrl: './listeadherents.component.html',
  styleUrls: ['./listeadherents.component.css'],
})
export class ListeadherentsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Adherent>;
  ELEMENT_DATA: any = ['test'];
  dataSource = new MatTableDataSource<Adherent>();
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public adherent: any;
  public adhId: number;
  isAllowed: boolean = false;
  public date: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = [
    'nom_fr',
    'prenom_fr',
    'date_naiss',
    'email',
    'num_adhesion',
    'actions',
  ];

  constructor(
    private adhservice: AdherentService,
    public auth: AuthService,
    private datePipe: DatePipe,
    private dialog: MatDialog
  ) {}
  openDialog(x) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      adherentId: x,
    };

    this.dialog.open(ConfirmdialogComponent, dialogConfig);
  }

  ngAfterViewInit() {
    let resp = this.adhservice.getAdherent();

    resp.subscribe((report) => (this.dataSource.data = report as Adherent[]));
    resp.subscribe((req) => console.log(req));
    this.date = this.datePipe.transform(new Date(), 'dd-MM-yy');

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  getId(x) {
    localStorage.setItem('adhId', x);
    this.adhservice.consultAdh = true;
    this.adhservice.getAdherentById().subscribe((req) => console.log(req));
  }
}
