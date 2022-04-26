import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './views/location/location.component';
import { PopulationComponent } from './views/population/population.component';
import { OtherDataComponent } from './views/other-data/other-data.component';
import { MenuComponent } from './views/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    PopulationComponent,
    OtherDataComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
