import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Router,RouterModule} from '@angular/router';
import { map } from 'rxjs/operators';
import { Employees } from './Employee/Employee.component';
import { Employee_list } from './Employee_list/Employee_list';
import { EmployeeService } from '../Shared/employee.service';
import{ToastrModule} from 'ngx-toastr';
import { HttpModule } from '@angular/http';
import { ApiService } from '../Shared/app.api.service';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { SubcribeEmitService } from '../Shared/emitterService';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChildComponent } from './child/child';

//import{observable}from 'rxjs/observable';

@NgModule({
  
  declarations: [
    AppComponent,Employees,Employee_list,ChildComponent,
  ],
  imports: [
  
    BrowserModule,FormsModule, HttpModule,CommonModule,BrowserAnimationsModule,ReactiveFormsModule,Angular2FontawesomeModule,NgxDatatableModule,ToastrModule.forRoot(),
  ],
  
  providers: [
    EmployeeService,SubcribeEmitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
