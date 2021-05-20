import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ReglementcotisationService } from 'src/app/services/reglementcotisation.service';
import { RegCotisation } from '../reglementcotisation/reglement-cotisation.datasource';

@Component({
  selector: 'app-consulterreglementcotisation',
  templateUrl: './consulterreglementcotisation.component.html',
  styleUrls: ['./consulterreglementcotisation.component.css']
})
export class ConsulterreglementcotisationComponent implements AfterViewInit {
  cotisationId:any;
  regCotisation:any;
  public date:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<RegCotisation>;
  ELEMENT_DATA: any = ['test'];
  dataSource = new MatTableDataSource<RegCotisation>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = [
    'mnt_reg',
    'modalite',
    'banque',
    'num_piece',
    'date_reg',




  ];
  constructor(private regcotisationservice:ReglementcotisationService,
    private datePipe: DatePipe,
    private dialogRef: MatDialogRef<ConsulterreglementcotisationComponent>,
    @Inject(MAT_DIALOG_DATA) data) {


      this.cotisationId=data.cotisationId;}




  ngAfterViewInit(): void {

    this.regcotisationservice.getReglementCotisation().subscribe(
      (res)=>{
        for (let key in res) {
          if (res[key].cotisationId === this.cotisationId) {
            this.dataSource.data = res as RegCotisation[]
            console.log(res)
          }}

      },
      (err)=>{
        console.log(err)
      }

    )
    this.date = this.datePipe.transform(new Date(), 'dd-MM-yy');
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  close() {
    this.dialogRef.close();
}



}
