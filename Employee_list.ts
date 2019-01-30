import { Component } from '@angular/core';
import { EmployeeService } from '../../Shared/employee.service';
import { Employees } from '../Employee/Employee.component';
import{ToastrService} from 'ngx-toastr';
import { FormControl, NgForm } from '@angular/forms';
import { Employee } from '../../Shared/Employee.model';
import 'rxjs/Rx';
import { Loan  } from '../MortgageTypeandTerms';
@Component({
  selector: 'employeelist',
  templateUrl: 'Employee_list.html',
  styleUrls: ['Employee_list.css']
})
export class Employee_list {
  employees:Employee[];
  fnm:Array<Loan>=new Array();
  fnmdata:Loan=new Loan();
  //fnmdatainstance:Loan;
   SelectedEmployee:Employee;
  errorMessage:any;
  id:number=0;
se
constructor(private employeeservice:EmployeeService,private toastr:ToastrService ){}

ngOnInit(){
//  this.employeeservice.getEmployeeList().subscribe( (employees:Employee[])=>{
//    this.employees=employees;
//    this.SelectedEmployee=new Employee()
debugger;
this.employeeservice.getFnmdata().subscribe((fnm)=>{
  this.fnmdata=JSON.parse(fnm);
  console.log(fnm);
  
//this.fnmdatainstance=new Loan();

   this.restForm();
 });

 }
 restForm(from?:NgForm){
   if(from!=null)
   from.reset();
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
 showForEdit(emp){
debugger;
      this.SelectedEmployee=emp;
}
 

delete(id){
   debugger;
  var ans=  (confirm('Are you sure deleted this record?') + id);
    if(ans){
    this.employeeservice.deleteEmployee(id)
    .subscribe(x=>{
      this.employeeservice.getEmployeeList();
      this.toastr.warning('Deleted successfuly deleted');
    
    })
  }
  }
}
