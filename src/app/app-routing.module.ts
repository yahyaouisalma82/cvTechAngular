import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { CvDetailPageComponent } from './CVTechApp/cv-detail-page/cv-detail-page.component';
import { CvTechComponent } from './CVTechApp/cv-tech/cv-tech.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MiniwordComponent } from './miniword/miniword.component';
import { PereComponent } from './pere/pere.component';
import { AddPersonComponent } from './CVTechApp/add-person/add-person.component';
const routes: Routes = [
  { path: 'onlyHeader', component: HeaderComponent },
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  {
    path: 'cv',
    children: [
      { path: '', component: CvTechComponent },
      { path: 'details/:id', component: CvDetailPageComponent },
      { path:"addperson",component:AddPersonComponent},
    ]
  },
  { path: 'miniword', component: MiniwordComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'cv/details/:id', component: CvDetailPageComponent },
  { path: 'ColorMe/:color', component: PereComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
