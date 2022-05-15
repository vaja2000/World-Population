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
  { path: 'africa/:lat/:long', component:AfricaComponent },
  { path: 'asia/:lat/:long', component:AsiaComponent },
  { path: 'australia/:lat/:long', component:AustraliaComponent },
  { path: 'antarctica/:lat/:long', component:AntarcticaComponent },
  { path: 'north-america/:lat/:long', component:NorthAmericaComponent },
  { path: 'south-america/:lat/:long', component:SouthAmericaComponent },
  { path: 'europe/:lat/:long', component:EuropeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
