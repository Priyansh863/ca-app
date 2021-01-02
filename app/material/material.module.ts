import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';




import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import {MatNativeDateModule} from '@angular/material/core';












const MaterialComponent=[
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatDividerModule,
  MatBadgeModule,

  

  ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponent
    
  ],
  exports:[
    MaterialComponent
  ]
})
export class MaterialModule { }
