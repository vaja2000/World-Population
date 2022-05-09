import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-north-america',
  templateUrl: './north-america.component.html',
  styleUrls: ['./north-america.component.scss']
})
export class NorthAmericaComponent implements OnInit {
  populationCount:any = 0

  constructor(
    private api:ApiService,
    private communication:CommunicationService
    ) { }

  ngOnInit(): void {
    this.api.getAllCountries().subscribe((resp:any) => {
      resp.forEach((element:any) => {
        if(element.continents[0] === "North America")
        this.populationCount += element.population
      });
      this.communication.population.emit(this.populationCount)
      this.communication.name.emit("ჩრდ: ამერიკის")
      this.communication.continentsTitle.emit("ჩრდილოეთ ამერიკა")
      this.communication.back.emit(true)
      this.communication.continentDefaultName.emit("North America")
    })
  }
}
