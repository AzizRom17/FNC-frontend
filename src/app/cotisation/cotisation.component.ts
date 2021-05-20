import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Adherent } from '../listeadherents/adherent-datasource';
import { AdherentService } from '../services/adherent.service';
import { AuthService } from '../services/auth.service';
import { CotisationService } from '../services/cotisation.service';
import { Cotisation } from './cotisation-datasource';
import { ReglementcotisationComponent } from './reglementcotisation/reglementcotisation.component';

@Component({
  selector: 'app-cotisation',
  templateUrl: './cotisation.component.html',
  styleUrls: ['./cotisation.component.css'],
})
export class CotisationComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Adherent>;
  ELEMENT_DATA: any = ['testte'];
  dataSource = new MatTableDataSource<Adherent>();
  public adherent: any;
  public adhId: number;
  isAllowed: boolean = false;
  public date: any;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = [
    'exerciceLib',
    'montant',
    'etat_cotisationLib',
    'actions',
  ];
  public cotisationId: any;
  public adherentId: any;
  constructor(
    public cotservice: CotisationService,
    public auth: AuthService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private adhservice: AdherentService,
    private dialog: MatDialog

  ) {}

  openDialog(x,y,z) {

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
  ngAfterViewInit() {
    this.adherentId = this.route.snapshot.params['id'];

    let resp = this.adhservice.getAdherentById2(this.adherentId);

    resp.subscribe(
      (report) => (this.dataSource.data = report['cotisations'] as Adherent[])
    );
    resp.subscribe((req) => console.log(req['cotisations']));

    //  this.dataSource.sort = this.sort;
    //    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.cdr.detectChanges();
  }
}
