import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { CotisationService } from 'src/app/services/cotisation.service';
import { ExerciceService } from 'src/app/services/exercice.service';
import { AjouterexerciceComponent } from '../ajouterexercice/ajouterexercice.component';

import { Exercice } from './listeexercice-datasource';

@Component({
  selector: 'app-listeexercice',
  templateUrl: './listeexercice.component.html',
  styleUrls: ['./listeexercice.component.css'],
})
export class ListeexerciceComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Exercice>;
  ELEMENT_DATA: any = ['testeur'];
  dataSource = new MatTableDataSource<Exercice>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['exerciceLib', 'montant'];

  constructor(
    private exservice: ExerciceService,
    public cotservice: CotisationService,
    private dialog: MatDialog
  ) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AjouterexerciceComponent, dialogConfig);
  }
  generateCotisation() {
    this.cotservice.generated = true;
  }

  ngAfterViewInit() {
    let resp = this.exservice.getExercice();

    resp.subscribe((req) => console.log(req));
    resp.subscribe((report) => (this.dataSource.data = report as Exercice[]));
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
