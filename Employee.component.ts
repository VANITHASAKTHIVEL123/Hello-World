import { Component, Output, Input } from '@angular/core';
import { EmployeeService } from '../../Shared/employee.service';
import { FormControl, NgForm } from '@angular/forms';
import{ToastrService} from 'ngx-toastr'
import { Employee } from '../../Shared/Employee.model';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { SubcribeEmitService } from '../../Shared/emitterService';
import { empty } from 'rxjs/Observer';
@Component({
   selector: 'emp',
  templateUrl: 'Employee.component.html',
  styleUrls: ['Employee.component.css'],
  providers: [
    EmployeeService,],
})
export class Employees {


  @Input()
  data:any;

  SelectedEmployee:Employee;
   constructor(private employeeservice:EmployeeService, private emit:SubcribeEmitService,private toastr:ToastrService){}
   ngOnChanges(){
     this.SelectedEmployee=this.data;
   }
ngOnInit(){

this.restForm();
}
restForm(form?:NgForm){
  if(form!=null)
  form.reset();
 
 this.SelectedEmployee=
 {
  employeeID:null,
  firstName:'',
  lastName:'',
  psition:'',
  empcode:'',
  office:'',
 }
}

onsubmit(form:NgForm){
  debugger;
     this.employeeservice.postEmployee(this.SelectedEmployee)
    .subscribe(data=>{
      this.restForm(form);
      this.employeeservice.getEmployeeList();
      this.toastr.success('new Record added sucessfully');
    })
  
}
}

  
