import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IcontactMode, IuserInfo } from "../../modules/contactMode.interface";


@Component({
    selector : 'app-tdForm',
    templateUrl : './tdForm.component.html',
    styleUrls : ['./tdForm.component.scss']
})
export class TdFormComponent{

    userinfo : IuserInfo = {
           username : 'iamAkhatib',
           email : 'ak@gmail.com',
           secretquestion : 'fav book',
           answer : 'hyyh',
           isSubscribe : true ,
           contactModeArr  : 'mobile'
    }

    contactModeArr : Array<IcontactMode> = [
        {
            moc : 'Mode Email',
            id : 9597
        },
        {
            moc : 'Mode Mobile',
            id : 9795
        }
    ]

    @ViewChild('signUp') signUp !: NgForm

    constructor(){

    }


    onSignUp(signUp : NgForm){
          if(signUp.valid){
            // console.log(signUp)
            console.log(signUp.value)
          signUp.reset()
          }
    }

    onEditForm(){
        this.signUp.form.patchValue(this.userinfo)
    }
}

