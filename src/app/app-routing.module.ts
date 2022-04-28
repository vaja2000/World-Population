import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfricaComponent } from './views/location/africa/africa.component';
import { AntarcticaComponent } from './views/location/antarctica/antarctica.component';
import { AsiaComponent } from './views/location/asia/asia.component';
import { AustraliaComponent } from './views/location/australia/australia.component';
import { EuropeComponent } from './views/location/europe/europe.component';
import { NorthAmericaComponent } from './views/location/north-america/north-america.component';
import { RegionComponent } from './views/location/region/region.component';
import { SouthAmericaComponent } from './views/location/south-america/south-america.component';

const routes: Routes = [
  { path: '', component:RegionComponent },
  { path: 'africa', component:AfricaComponent },
  { path: 'asia', component:AsiaComponent },
  { path: 'australia', component:AustraliaComponent },
  { path: 'antarctica', component:AntarcticaComponent },
  { path: 'north-america', component:NorthAmericaComponent },
  { path: 'south-america', component:SouthAmericaComponent },
  { path: 'europe', component:EuropeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
