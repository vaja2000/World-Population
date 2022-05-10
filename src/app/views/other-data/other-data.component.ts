import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-other-data',
  templateUrl: './other-data.component.html',
  styleUrls: ['./other-data.component.scss']
})
export class OtherDataComponent implements OnInit {

  choosedCountry:any = null
  languages:string[] = []
  currencies:string[] = []
  currenciesSymbols:string[] = []
  countryArea:any = 0

  constructor(
    private communication:CommunicationService,
    private api:ApiService
    ) { }

  ngOnInit(): void {
    this.communication.country.subscribe(resp => {
      this.languages = []
      this.currencies = []
      this.currenciesSymbols = []
      this.api.getCountry(resp).subscribe((Response:any) => {
        Response.forEach((element:any) => {
          this.choosedCountry = element
          this.countryArea = element.area.toLocaleString()
          for(let i in this.choosedCountry.languages)
            this.languages.push(this.choosedCountry.languages[i])
          for(let i in this.choosedCountry.currencies)
            this.currencies.push(this.choosedCountry.currencies[i].name)
          for(let i in this.choosedCountry.currencies)
            this.currencies.push(this.choosedCountry.currencies[i].symbol)
          this.communication.population.emit(this.choosedCountry.population)
        });
      })
    })
  }
}
