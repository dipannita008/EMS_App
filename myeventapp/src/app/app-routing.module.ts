import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //enables the router link directive
import { EventlistcomponentComponent } from './components/eventlistcomponent/eventlistcomponent.component';
import { AddeventcomponentComponent } from './components/addeventcomponent/addeventcomponent.component';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { EditcomponentComponent } from './components/editcomponent/editcomponent.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home', pathMatch:'full'},
  {path: 'eventlist', component:EventlistcomponentComponent},
  {path: 'add', component:AddeventcomponentComponent},
  {path: 'home', component:HomecomponentComponent},
  {path: 'edit/:id' , component:EditcomponentComponent}
];

@NgModule({        //defines a module . this serves as the module's meta data.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
