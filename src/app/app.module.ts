import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
const  routes:Routes = [
  {
    path:'login',
    component:PageLoginComponent
  },
  {
    path:'inscrire',
    component:PageInscriptionComponent
  },
  {
    path:' ',
    component:PageDashboardComponent,
    children:[
      {
        path:'statistiques',
        component:PageStatistiquesComponent
      }
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
      RouterModule.forRoot(routes)
    ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
