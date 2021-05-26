import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AssuranceService } from 'src/app/services/assurance.service';
import { AjouterassuranceComponent } from '../ajouterassurance/ajouterassurance.component';
import { Assurance } from '../assurance-datasource';
import { ConsulterreglementassuranceComponent } from '../consulterreglementassurance/consulterreglementassurance.component';
import { ReglementassuranceComponent } from '../reglementassurance/reglementassurance.component';

@Component({
  selector: 'app-listeassurance',
  templateUrl: './listeassurance.component.html',
  styleUrls: ['./listeassurance.component.css']
})
export class ListeassuranceComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Assurance>;
  ELEMENT_DATA: any = ['test'];
  dataSource = new MatTableDataSource<Assurance>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = [
    'etat_assuranceLib',
    'exerciceLib',
    'montant',

    'nom_fr',
    'prenom_fr',
    'actions',

  ];
  constructor(private assuranceservice:AssuranceService,
    private dialog:MatDialog) { }

  openDialogAjouter() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AjouterassuranceComponent, dialogConfig);
  }
  openDialogRegler(x,y,z) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {

      etat_assuranceId:x,
      assuranceId:y,
      adherentId:z


  };

    this.dialog.open(ReglementassuranceComponent, dialogConfig);
}
openDialogConsulterReg(x) {

  const dialogConfig =  new MatDialogConfig();
  dialogConfig.height='400px';
  dialogConfig.width='800px';
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = {


    assuranceId:x,



};

  this.dialog.open(ConsulterreglementassuranceComponent, dialogConfig);
}


  ngAfterViewInit(): void {
    let resp = this.assuranceservice.getAssurance();

    resp.subscribe(
      (report) => (this.dataSource.data = report as Assurance[])
    );
    resp.subscribe((req) => {

      console.log(req)});



    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
