import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardcompComponent } from '../dashboardcomp/dashboardcomp.component';
import { FavouritescompComponent } from '../favouritescomp/favouritescomp.component';
import { HomeComponent } from './home.component';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { DogState } from '../store/dog.state';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';

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
