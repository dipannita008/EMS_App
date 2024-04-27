import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //to acess htpp client services
import { FormsModule } from '@angular/forms';  //to access ngModel

import { AppRoutingModule } from './app-routing.module'; //to define routing config ; i.e paths
import { AppComponent } from './app.component';      //UI design
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { AddeventcomponentComponent } from './components/addeventcomponent/addeventcomponent.component';
import { EventlistcomponentComponent } from './components/eventlistcomponent/eventlistcomponent.component';
import { EditcomponentComponent } from './components/editcomponent/editcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    AddeventcomponentComponent,
    EventlistcomponentComponent,
    EditcomponentComponent,

  ],
  imports: [
    BrowserModule,      
    AppRoutingModule,      //for routing , SPA
    HttpClientModule,         //HTTP Request, Response
    FormsModule           //Form inputs, access, ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
