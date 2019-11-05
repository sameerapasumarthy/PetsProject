import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardcompComponent } from '../dashboardcomp/dashboardcomp.component';
import { FavouritescompComponent } from '../favouritescomp/favouritescomp.component';
import { HomeComponent } from './home.component';
import { SohoComponentsModule } from 'ids-enterprise-ng';

@NgModule({
  declarations: [
    DashboardcompComponent,
    FavouritescompComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SohoComponentsModule
  ]
})
export class HomeModule { }
