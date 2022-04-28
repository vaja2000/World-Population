import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit {

  populationCount:any = 0
  spinner:boolean = true
  name:string = ""

  constructor(
    private comunication:CommunicationService
    ) { }

  ngOnInit(): void {
    this.comunication.population.subscribe(resp => {
      this.populationCount = resp
      this.populationCount = this.populationCount.toLocaleString()
      this.spinner = false
    })
    this.comunication.name.subscribe(resp => {
      this.name = resp
    })
  }

}
