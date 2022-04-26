import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit {

  worldPopulation:any = 0
  params:any

  constructor(
    private api:ApiService,
    private comunication:CommunicationService
    ) { }

  ngOnInit(): void {
    this.comunication.param.subscribe(resp => {
      this.params = resp
      console.log(typeof this.params)
    })
    this.api.getAllCountries(this.params).subscribe((Response:any) => {
      Response.forEach((element:any) => {
        this.worldPopulation += element.population
      });
      this.worldPopulation = this.worldPopulation.toLocaleString()
    })
  }

}
