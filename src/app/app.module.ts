import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EmployeTableComponent } from './employe-table/employe-table.component';
import { EmployeRowComponent } from './employe-row/employe-row.component';

import { GetList } from './GetList.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeTableComponent,
    EmployeRowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GetList],
  bootstrap: [AppComponent]
})
export class AppModule { }
