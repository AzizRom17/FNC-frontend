import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { AdherentService } from '../services/adherent.service';

// TODO: Replace this with your own data model type
export interface Adherent {

  nom_fr:string;

  prenom_fr:string;
  date_nais:string;
  email:string;
  num_adhesion:number;


  cotisations:[
    etat_cotisation:{
      etat_cotisationLib:string;
    },
    exercice:{
      exerciceLib:string;
      montant:number;
    }
  ];

}

// TODO: replace this with real data from your application
// const EXAMPLE_DATA: TableItem[] = [
//   {AdherentId: 0, Nom_Ar: 'azazaz',Nom_Fr:'',Prenom_Ar:''  ,Prenom_Fr:'',  Date_naiss:'',Lieu_nais_Ar:'',Lieu_nais_Fr:'',Nationalite:'',Adresse_Ar:'',Adresse_Fr:'',Ville_Ar:'',Ville_Fr:' ',CP:''},

// ];



/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<Adherent> {
  data: Adherent[] ;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private adhservice:AdherentService) {
    super();
  }


  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Adherent[]> {


    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Adherent[]): Adherent[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Adherent[]): Adherent[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'nom_fr': return compare(a.nom_fr, b.nom_fr, isAsc);
        case 'prenom_fr': return compare(+a.prenom_fr, +b.prenom_fr, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
