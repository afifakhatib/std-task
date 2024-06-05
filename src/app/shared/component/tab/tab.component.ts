import { Component } from "@angular/core";
import { skillArr } from "../../const/tabData";






@Component({
    selector : 'app-tab',
    templateUrl : './tab.component.html',
    styleUrls : ['./tab.component.scss']
})

export class TabComponent{
    selectedSkill : string =  'angular';
    skillarr = skillArr

    constructor(){
        
    }
}