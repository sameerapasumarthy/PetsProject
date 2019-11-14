import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SohoComponentsModule } from 'ids-enterprise-ng';

import { AppComponent } from './app.component';
import { SohoLocaleInitializerModule } from './locale/soho-locale-initializer.module';
import { HttpClientModule } from '@angular/common/http';
import { DogsService } from './dogs.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeModule } from './home/home.module';
import { NgxsModule } from '@ngxs/store';
import { DogState } from './store/dog.state';
import { environment } from 'src/environments/environment';

//

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    SohoComponentsModule,
    SohoLocaleInitializerModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    NgxsModule.forRoot([DogState], {
      developmentMode: !environment.production // important to make sure ngxs freezes state to prevent mutable changes to state
    }),
  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
