import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  worldPopulation:any = 0
  backBtn:boolean = false

  constructor(private communication:CommunicationService) { }

  ngOnInit(): void {
    this.communication.back.subscribe(resp => {
      this.backBtn = resp
    })
  }
  exitBtn() {
    this.communication.back.emit(false)
  }

}
