import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  // Navegación
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
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
  // Tabs
  MatTabsModule
} from '@angular/material';

import { DragDropModule } from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
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
    MatButtonModule,
    MatTabsModule,
    // CDK
    DragDropModule,
    ScrollingModule
  ]
})
export class AngularImportsModule { }
