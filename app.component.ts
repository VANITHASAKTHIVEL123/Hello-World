import { Component } from '@angular/core';
import { SubcribeEmitService } from '../Shared/emitterService';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../Shared/Employee.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private emitdata:SubcribeEmitService,private toastr:ToastrService){}
  greet:string='';
  Select:Employee;
  subscriber:Subscription[]=[];
  ngOnInit(){
   this. getGreeting();
   this.subscriber.push(this.emitdata.emit<any>("impersonate",(t)=>{
     this.getGreeting();
   }));
  
  }

  getGreeting(){
    
    let myDtate=new Date();
    let hrs=myDtate.getHours();
    if(hrs<12)
    this.greet='Good Morning';
    else if (hrs>=12 && hrs<=17)
    this.greet='Good Afternoun';
    else if (hrs>=17 && hrs<=24)
    this.greet='Good Evening';
    if(this.Select){
      this.greet=this.greet+'';
    }
    
  }
  
}
