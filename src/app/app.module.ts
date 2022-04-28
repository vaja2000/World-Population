import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './views/location/location.component';
import { PopulationComponent } from './views/population/population.component';
import { OtherDataComponent } from './views/other-data/other-data.component';
import { MenuComponent } from './views/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RegionComponent } from './views/location/region/region.component';
import { AfricaComponent } from './views/location/africa/africa.component';
import { EuropeComponent } from './views/location/europe/europe.component';
import { AsiaComponent } from './views/location/asia/asia.component';
import { AustraliaComponent } from './views/location/australia/australia.component';
import { SouthAmericaComponent } from './views/location/south-america/south-america.component';
import { NorthAmericaComponent } from './views/location/north-america/north-america.component';
import { AntarcticaComponent } from './views/location/antarctica/antarctica.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    PopulationComponent,
    OtherDataComponent,
    MenuComponent,
    RegionComponent,
    AfricaComponent,
    EuropeComponent,
    AsiaComponent,
    AustraliaComponent,
    SouthAmericaComponent,
    NorthAmericaComponent,
    AntarcticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
