import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  // Formularios
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatCheckboxModule,
  // Proveedor de fechas
  MatNativeDateModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatInputModule,
  // Datatable
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  // Iconos
  MatIconModule,
} from '@angular/material';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AngularImportsModule { }
