// Importaciones de framework
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
// Importación de módulos de Angular
import {AngularImportsModule} from './angular-imports/angular-imports.module';
import { FlexLayoutModule } from '@angular/flex-layout';
// Importación de Idioma (i18n)
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);
import { LOCALE_ID} from '@angular/core';
// Importación de componentes de la Aplicación
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import {DataTableComponent} from './components/crud/data-table/data-table.component';
import { DetailComponent } from './components/crud/detail/detail.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { FormComponent } from './components/crud/form/form.component';
import { FormDemoComponent } from './components/demos/form-demo/form-demo.component';
import { FormDemo2Component } from './components/demos/form-demo2/form-demo2.component';
import { FormLoginComponent } from './components/demos/form-login/form-login.component';
import { FlexLayoutBasicComponent } from './components/demos/flex-layout-basic/flex-layout-basic.component';
import { DragDropComponent } from './components/demos/drag-drop/drag-drop.component';
import { VirtualScrollComponent } from './components/demos/virtual-scroll/virtual-scroll.component';
// Configuración de rutas
const appRoutes: Routes = [
  { path: '' , redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'demos/form', component: FormDemoComponent },
  { path: 'demos/form2', component: FormDemo2Component },
  { path: 'demos/login', component: FormLoginComponent },
  { path: 'demos/flex-basic', component: FlexLayoutBasicComponent },
  { path: 'demos/drag-drop', component: DragDropComponent },
  { path: 'demos/virtual-scroll', component: VirtualScrollComponent },
  { path: 'listado', component: DataTableComponent },
  { path: 'form', component: FormComponent },
  { path: 'listado/:id', component: DetailComponent },
  { path: 'form/:id', component: FormComponent },
// { path: '', redirectTo: '/manage-book ', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DataTableComponent,
    DetailComponent,
    PageNotFoundComponent,
    FormComponent,
    FormDemoComponent,
    FormDemo2Component,
    FormLoginComponent,
    FlexLayoutBasicComponent,
    DragDropComponent,
    VirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    HttpClientModule,
    AngularImportsModule,
    FlexLayoutModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
