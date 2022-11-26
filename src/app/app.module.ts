import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { CarteVisiteComponent } from './CVTechApp/carte-visite/carte-visite.component'; 
import { PereComponent } from './pere/pere.component';
import { ListComponentComponent } from './CVTechApp/list-component/list-component.component';
import { CvTechComponent } from './CVTechApp/cv-tech/cv-tech.component';
import { ItemComponent } from './CVTechApp/item/item.component';
import { MiniwordComponent } from './miniword/miniword.component';
import { FormsModule } from '@angular/forms'; 
import { RainbowdirDirective } from './rainbowDir/rainbowdir.directive';
import { DefaultImagePipe } from './CVTechApp/defaultImage/default-image.pipe'; 
import { HireEmployeeComponent } from './CVTechApp/hire-employee/hire-employee.component';
import { ToastrModule } from 'ngx-toastr';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    CarteVisiteComponent, 
    PereComponent,
    ListComponentComponent,
    CvTechComponent,
    ItemComponent,
    MiniwordComponent, 
    RainbowdirDirective, DefaultImagePipe, HireEmployeeComponent, HeaderComponent, RouterSimulatorComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ToastrModule.forRoot(),ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
