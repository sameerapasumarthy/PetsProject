import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardcompComponent } from '../dashboardcomp/dashboardcomp.component';
import { FavouritescompComponent } from '../favouritescomp/favouritescomp.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardcompComponent
     },
    { 
          path: 'favourites',
          component: FavouritescompComponent
     }
  ]
    
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
