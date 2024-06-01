import { Component } from "@angular/core";
import { stdArr2 } from "../../const/std2Data";






@Component({
    selector : 'app-std2',
    templateUrl : './std2.component.html',
    styleUrls : ['./std2.component.scss']
})
export class Std2Component{
    stdArr = stdArr2
    constructor(){

    }

    // onStdAdd(eve : Event){
    //     // console.log(onAdd.target as HTMLInputElement["value"])
    //     console.log(eve)
    //     let stdObj = {
    //         fname : eve
    //     }
    // }

    onStdAdd(onFname : HTMLInputElement, onLname : HTMLInputElement , onEmail :HTMLInputElement , onContact : HTMLInputElement){
        // console.log(onFname , onLname , onEmail , onContact)
        let obj = {
            fname : onFname.value,
            lname : onLname.value,
            email : onEmail.value,
            contact : parseInt(onContact.value)
        }
        // console.log(obj)
        this.stdArr.push(obj)

        onFname.value = '';
        onLname.value = '';
        onEmail.value = '';
        onContact.value = '';
    }
}