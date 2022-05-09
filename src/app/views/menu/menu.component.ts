import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  country:any
  allCountries:string[] = []

  constructor(
    private communication:CommunicationService,
    private api:ApiService
    ) { }

  ngOnInit(): void {
    this.communication.continentDefaultName.subscribe(Response => {
      this.allCountries = []
      this.api.getAllCountries().subscribe((resp:any) => {
        resp.forEach((element:any) => {
          if(element.continents[0] === Response)
            if(element.altSpellings[1] != undefined)
            this.allCountries.push(element.altSpellings[1])
        });
      })
      console.log(this.allCountries)
    })
    this.communication.name.subscribe(resp => {
      if(resp === "მსოფლიო")
      this.country = ""
      else
      this.country = resp
    })
  }

}
