import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  worldPopulation:any = 0
  backBtn:boolean = false
  continentsName:string = "კონტინენტები"

  constructor(private communication:CommunicationService) { }

  ngOnInit(): void {
    this.communication.back.subscribe(resp => {
      this.backBtn = resp
    })
    this.communication.continentsTitle.subscribe(resp => {
      this.continentsName = resp
    })
  }
}
