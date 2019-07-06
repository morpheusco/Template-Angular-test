import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ItemComponent } from './pages/item/item.component';

const app_routes: Routes = [
// tslint:disable-next-line: no-trailing-whitespace
  { path: 'home', component: PortafolioComponent},
  { path: 'acerca', component:AcercaComponent},
  { path: 'item', component:ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
] ;

@NgModule ({
  imports: [
    RouterModule.forRoot (app_routes, { useHash:true } )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}