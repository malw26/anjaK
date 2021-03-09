import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuebarComponent } from './menuebar/menuebar.component';
import { AngebotComponent } from './angebot/angebot.component';
import { AnfahrtComponent } from './anfahrt/anfahrt.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { HomeComponent } from './home/home.component';
import { MatInputModule,  MatExpansionModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuebarComponent,
    AngebotComponent,
    AnfahrtComponent,
    KontaktComponent,
    HomeComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[MatTableModule]
})
export class AppModule { }
