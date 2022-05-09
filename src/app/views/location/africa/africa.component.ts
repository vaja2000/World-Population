import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.scss']
})
export class AfricaComponent implements OnInit {
  populationCount:any = 0

  constructor(
    private api:ApiService,
    private communication:CommunicationService
    ) { }

  ngOnInit(): void {
    this.api.getAllCountries().subscribe((resp:any) => {
      resp.forEach((element:any) => {
        if(element.continents[0] === "Africa")
        this.populationCount += element.population
      });
      this.communication.population.emit(this.populationCount)
      this.communication.name.emit("აფრიკის")
      this.communication.continentsTitle.emit("აფრიკა")
      this.communication.back.emit(true)
      this.communication.continentDefaultName.emit("Africa")
    })
  }

}
