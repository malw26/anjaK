import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AnfahrtComponent} from './anfahrt/anfahrt.component';
import {AngebotComponent} from './angebot/angebot.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import { ImpressumComponent} from './impressum/impressum.component';

const routes: Routes = [
 {path:"",
  component:HomeComponent
},
{path:"Home",
component:HomeComponent
},{
  path:'Massagen/Preise',
  component:AngebotComponent
},{
  path:'Kontakt',
  component:KontaktComponent
} ,{
  path:'Anfahrt',
  component:AnfahrtComponent
},{
  path:'Impressum',
  component:ImpressumComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
