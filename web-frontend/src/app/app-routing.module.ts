import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AnfahrtComponent} from './anfahrt/anfahrt.component';
import {AngebotComponent} from './angebot/angebot.component';
import {KontaktComponent} from './kontakt/kontakt.component'

const routes: Routes = [
 {path:'Home',
  component:HomeComponent
},{
  path:'Angebot',
  component:AngebotComponent
},{
  path:'Kontakt',
  component:KontaktComponent
} ,{
  path:'Anfahrt',
  component:AnfahrtComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
