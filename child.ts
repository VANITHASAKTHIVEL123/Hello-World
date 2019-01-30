import {Component, Input, Output} from '@angular/core';
import { EventEmitter } from 'protractor';


@Component({
selector:'Child',
templateUrl: 'child.html',

})

export class ChildComponent{
    counter: any;
@Input()
name: string;
//Info:string="hai everyone Iam child";
@Output() valueChange   =new EventEmitter();
Counter = 0;
ngonInit(){

}
valueChanged(){

    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);;
}
}
