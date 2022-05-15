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
  chooseCountry:any = ""
  flag:any = null
  coatOfArm:any = null


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
            if(element.altSpellings[1] != undefined && element.altSpellings[1].length > 2)
            this.allCountries.push(element.altSpellings[1])
        }); 
      })
    })
    this.communication.name.subscribe(resp => {
      if(resp === "მსოფლიო")
      this.country = ""
      else
      this.country = resp
    })
  }
  submit() {
    this.communication.country.emit(this.chooseCountry)
    this.communication.name.emit(`${this.chooseCountry}-ის`)
    this.api.getCountry(this.chooseCountry).subscribe((reponse:any) => {
      reponse.forEach((element:any) => {
        this.flag = element.flags.png
        this.coatOfArm = element.coatOfArms.png
        this.communication.lat.emit(element.latlng[0])
        this.communication.lon.emit(element.latlng[1])
      });
    }) 
    this.chooseCountry = ""
  }
}
