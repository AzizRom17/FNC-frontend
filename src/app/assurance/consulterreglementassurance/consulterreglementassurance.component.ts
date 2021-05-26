import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RegCotisation } from 'src/app/cotisation/reglementcotisation/reglement-cotisation.datasource';
import { ReglementassuranceService } from 'src/app/services/reglementassurance.service';

@Component({
  selector: 'app-consulterreglementassurance',
  templateUrl: './consulterreglementassurance.component.html',
  styleUrls: ['./consulterreglementassurance.component.css']
})
export class ConsulterreglementassuranceComponent implements OnInit {
  public assuranceId:any;
  regAssurance:any;
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
  constructor(private regassuranceservice:ReglementassuranceService,
    private datePipe: DatePipe,
    private dialogRef: MatDialogRef<ConsulterreglementassuranceComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.assuranceId=data.assuranceId;
    }

  ngOnInit(): void {
    this.regassuranceservice.getReglementAssurance().subscribe(
      (res)=>{
        console.log(this.assuranceId)
        console.log(res)
        for (let key in res) {
          if (res[key].assuranceId === this.assuranceId) {
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
