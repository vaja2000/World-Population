import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.scss']
})
export class EuropeComponent implements OnInit {
  populationCount:any = 0

  constructor(
    private api:ApiService,
    private communication:CommunicationService
    ) { }

  ngOnInit(): void {
    this.api.getAllCountries().subscribe((resp:any) => {
      resp.forEach((element:any) => {
        if(element.continents[0] === "Europe")
        this.populationCount += element.population
      });
      this.communication.population.emit(this.populationCount)
      this.communication.name.emit("ევროპის")
      this.communication.back.emit(true)
    })
  }
}
