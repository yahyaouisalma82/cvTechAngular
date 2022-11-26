import { Routes, RouterModule } from '@angular/router';
import { CvDetailPageComponent } from './CVTechApp/cv-detail-page/cv-detail-page.component';
import { CvTechComponent } from './CVTechApp/cv-tech/cv-tech.component'; 
import { HeaderComponent } from './header/header.component';
import { MiniwordComponent } from './miniword/miniword.component';
import { PereComponent } from './pere/pere.component';
const APP_ROUTES: Routes = [
  { path: 'onlyHeader', component: HeaderComponent },
  { path: 'cv', component: CvTechComponent },
  { path: 'miniword', component: MiniwordComponent },
  { path: 'ColorMe/:color', component: PereComponent },

];
const CV_ROUTE: Routes = [
  {
  path: 'cv',
  children: [
  {path: '', component: CvTechComponent },
  {path:'details',redirectTo:'', pathMatch:'full'},
  {path: 'details/:id', component: CvDetailPageComponent },
  // {path: 'addPersonne', component: FormPersonneComponent },
  ]
  }
  ];
  
export const ROUTING = RouterModule.forRoot(APP_ROUTES);
