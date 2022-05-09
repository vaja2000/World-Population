import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-antarctica',
  templateUrl: './antarctica.component.html',
  styleUrls: ['./antarctica.component.scss']
})
export class AntarcticaComponent implements OnInit {
  populationCount:any = 0

  constructor(
    private api:ApiService,
    private communication:CommunicationService
    ) { }

  ngOnInit(): void {
    this.api.getAllCountries().subscribe((resp:any) => {
      resp.forEach((element:any) => {
        if(element.continents[0] === "Antarctica")
        this.populationCount += element.population
      });
      this.communication.population.emit(this.populationCount)
      this.communication.name.emit("ანტარქტიდის")
      this.communication.continentsTitle.emit("ანტარქტიდა")
      this.communication.back.emit(true)
      this.communication.continentDefaultName.emit("Antarctica")
    })
  }

}
