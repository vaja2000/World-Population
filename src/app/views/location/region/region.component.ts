import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  worldPopulation:any = 0
  countries:any[] = []

  constructor(
    private api:ApiService,
    private communication:CommunicationService
    ) { }

  ngOnInit(): void {
    this.api.getAllCountries().subscribe((Response:any) => {
      Response.forEach((element:any) => {
        this.worldPopulation += element.population
      });
      this.communication.population.emit(this.worldPopulation)
      this.communication.name.emit("მსოფლიო")
      this.communication.continentsTitle.emit("კონტინენტები")
    })
  }

}
