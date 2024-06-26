import { Component, ElementRef, ViewChild } from "@angular/core";
import { stdArr } from "../../const/stdData";

@Component({
    selector : 'app-std',
    templateUrl : './std.component.html',
    styleUrls : ['./std.component.scss']
})
export class StdComponent{
    stdInfoArr = stdArr
    @ViewChild('fname') fname !: ElementRef;
    @ViewChild('lname') lname !: ElementRef;
    @ViewChild('email') email !: ElementRef;
    @ViewChild('contact') contact !: ElementRef;
    constructor(){
    }
    onAddstd(eve : Event){
        let stdObj = {
           fname :  this.fname.nativeElement.value,
           lname :  this.lname.nativeElement.value,
           email :  this.email.nativeElement.value,
           contact : this.contact.nativeElement.value
        }
        // console.log(stdObj)
        this.stdInfoArr.push(stdObj)
        this.fname.nativeElement.value = '';
        this.lname.nativeElement.value = '';
        this.email.nativeElement.value = '';
        this.contact.nativeElement.value = '';
    }
}