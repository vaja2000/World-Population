import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  latitude!:number
  longitude!:number
  markLatitude!:number
  markLongitude!:number
  zoom:number = 2.5

  constructor(
    private route:ActivatedRoute,
    private communication:CommunicationService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((resp:any) => {
      this.latitude = Number(resp.lat)
      this.longitude = Number(resp.long)
    })
    this.communication.lat.subscribe((resp:any) => {
      this.latitude = resp
      this.markLatitude = resp
      this.zoom = 5
    })
    this.communication.lon.subscribe((resp:any) => {
      this.longitude = resp
      this.markLongitude = resp
    })
  }
  exitBtn() {
    this.communication.back.emit(false)
    this.communication.continentDefaultName.emit("")
  }
}
