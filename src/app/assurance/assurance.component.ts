import { DatePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ConsulterreglementcotisationComponent } from '../cotisation/consulterreglementcotisation/consulterreglementcotisation.component';
import { Adherent } from '../listeadherents/adherent-datasource';
import { AdherentService } from '../services/adherent.service';
import { AssuranceService } from '../services/assurance.service';
import { AuthService } from '../services/auth.service';
import { AjouterassuranceComponent } from './ajouterassurance/ajouterassurance.component';
import { ConsulterreglementassuranceComponent } from './consulterreglementassurance/consulterreglementassurance.component';
import { ReglementassuranceComponent } from './reglementassurance/reglementassurance.component';

@Component({
  selector: 'app-assurance',
  templateUrl: './assurance.component.html',
  styleUrls: ['./assurance.component.css']
})
export class AssuranceComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Adherent>;
  ELEMENT_DATA: any = ['testte'];
  dataSource = new MatTableDataSource<Adherent>();
  public adherent: any;
  public adhId: number;
  isAllowed: boolean = false;
  public date: any;
  public adherentId: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = [
    'exerciceLib',
    'montant',
    'date_effet','date_souscription','duree','num_contrat','compagnieLib','etat_contratLib',
    'actions',
  ];
  constructor( public assuranceservice: AssuranceService,
    public auth: AuthService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private adhservice: AdherentService,
    private datePipe: DatePipe,
    private dialog: MatDialog) { }

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
    openDialogAjouter(x) {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data={
        adherentId:x
      }


      this.dialog.open(AjouterassuranceComponent, dialogConfig);
    }
    openDialog(x,y,z) {

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

  ngAfterViewInit(): void {
    this.adherentId = this.route.snapshot.params['id'];

    let resp = this.adhservice.getAdherentById2(this.adherentId);

    resp.subscribe(
      (report) => (this.dataSource.data = report['assurances'] as Adherent[])
    );
    resp.subscribe((req) => console.log(req['assurances']));

    //  this.dataSource.sort = this.sort;
    //    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.cdr.detectChanges();
    this.date = this.datePipe.transform(new Date(), 'dd-MM-yy');

  }

}
