import {PageoneComponent} from "../pageone/pageone.component";
import {PagetwoComponent} from "../pagetwo/pagetwo.component";
import {PagethreeComponent} from "../pagethree/pagethree.component";
import {ChildoneComponent} from "../childone/childone.component";
import {ChildtwoComponent} from "../childtwo/childtwo.component";
import {ChildthreeComponent} from "../childthree/childthree.component";
import {Routes} from "@angular/router";

export const appRoutes:Routes=[
    {path:"page_one",component:PageoneComponent,children:[{path:"child_one",component:ChildoneComponent}]},
    {path:"page_two",component:PagetwoComponent,children:[{path:"child_two",component:ChildoneComponent}]},
    {path:"page_three",component:PagethreeComponent,children:[{path:"child_three",component:ChildthreeComponent}]}];