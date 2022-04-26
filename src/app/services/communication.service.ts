import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  param:EventEmitter<any> = new EventEmitter()

  constructor() { }
}
