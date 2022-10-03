import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component'; 
import { PereComponent } from './pere/pere.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { CvTechComponent } from './cv-tech/cv-tech.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    CarteVisiteComponent, 
    PereComponent,
    ListComponentComponent,
    CvTechComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
