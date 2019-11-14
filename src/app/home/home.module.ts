import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardcompComponent } from '../dashboardcomp/dashboardcomp.component';
import { FavouritescompComponent } from '../favouritescomp/favouritescomp.component';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { HomeComponent } from './home.component';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    DashboardcompComponent,
    FavouritescompComponent,
    EditItemComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SohoComponentsModule,
    FormsModule
   
  ]
})
export class HomeModule { }
