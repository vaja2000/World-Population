import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  population:EventEmitter<any> = new EventEmitter()
  name:EventEmitter<string> = new EventEmitter()
  back:EventEmitter<boolean> = new EventEmitter()
  continentsTitle:EventEmitter<string> = new EventEmitter()
  continentDefaultName:EventEmitter<string> = new EventEmitter()

  constructor() { }
}
