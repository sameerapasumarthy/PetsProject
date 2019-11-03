import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardcompComponent } from '../dashboardcomp/dashboardcomp.component';
import { FavouritescompComponent } from '../favouritescomp/favouritescomp.component';

const routes: Routes = [
  {
      path: 'dashboard',
      component: DashboardcompComponent
  },
  {
        path: 'favourites',
        component: FavouritescompComponent,
    }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
]
})
export class AppRoutingModule { }
