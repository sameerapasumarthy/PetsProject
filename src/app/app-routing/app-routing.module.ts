import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path:'home',
      loadChildren:'../home/home.module#HomeModule'
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
