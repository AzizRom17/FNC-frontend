import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';







const MaterialComponents = [MatButtonModule,MatCardModule,
MatInputModule,MatFormFieldModule,MatToolbarModule,
MatSidenavModule,MatIconModule,MatMenuModule,MatSelectModule,
MatDatepickerModule, MatNativeDateModule,MatDialogModule,MatTabsModule];

@NgModule({

  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
