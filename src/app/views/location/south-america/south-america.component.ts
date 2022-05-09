import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-south-america',
  templateUrl: './south-america.component.html',
  styleUrls: ['./south-america.component.scss']
})
export class SouthAmericaComponent implements OnInit {
  populationCount:any = 0

  constructor(
    private api:ApiService,
    private communication:CommunicationService
    ) { }

  ngOnInit(): void {
    this.api.getAllCountries().subscribe((resp:any) => {
      resp.forEach((element:any) => {
        if(element.continents[0] === "South America")
        this.populationCount += element.population
      });
      this.communication.population.emit(this.populationCount)
      this.communication.name.emit("სამ: ამერიკის")
      this.communication.continentsTitle.emit("სამხრეთ ამერიკა")
      this.communication.back.emit(true)
      this.communication.continentDefaultName.emit("South America")
    })
  }
}
