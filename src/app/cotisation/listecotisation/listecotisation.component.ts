import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent.service';
import { AuthService } from 'src/app/services/auth.service';
import { CotisationService } from 'src/app/services/cotisation.service';
import { AjouterexerciceComponent } from '../ajouterexercice/ajouterexercice.component';
import { ConsulterreglementcotisationComponent } from '../consulterreglementcotisation/consulterreglementcotisation.component';
import { ReglementcotisationComponent } from '../reglementcotisation/reglementcotisation.component';
import { Cotisation1 } from './listecotisation-datasource';

@Component({
  selector: 'app-listecotisation',
  templateUrl: './listecotisation.component.html',
  styleUrls: ['./listecotisation.component.css'],
})
export class ListecotisationComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Cotisation1>;
  ELEMENT_DATA: any = ['test'];
  dataSource = new MatTableDataSource<Cotisation1>();
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = [
    'etat_cotisationLib',
    'exerciceLib',
    'montant',

    'nom_fr',
    'prenom_fr',
    'actions',

  ];

  constructor(
    public cotservice: CotisationService,
    public auth: AuthService,
    public adhservice: AdherentService,
    private routeur: Router,
    private dialog: MatDialog
  ) {}

  openDialogRegler(x,y,z) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {

      etat_cotisationId:x,
      cotisationId:y,
      adherentId:z


  };

    this.dialog.open(ReglementcotisationComponent, dialogConfig);
}


openDialogConsulterReg(x) {

  const dialogConfig =  new MatDialogConfig();
  dialogConfig.height='400px';
  dialogConfig.width='800px';
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = {


    cotisationId:x,



};

  this.dialog.open(ConsulterreglementcotisationComponent, dialogConfig);
}


openDialogExercice() {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  this.dialog.open(AjouterexerciceComponent, dialogConfig);
}

  ngAfterViewInit() {


    let resp = this.cotservice.getCotisation();

    resp.subscribe(
      (report) => (this.dataSource.data = report as Cotisation1[])
    );
    resp.subscribe((req) => {

      console.log(req)});



    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  generer() {
    this.routeur.navigateByUrl('listeadherents');
  }
}
