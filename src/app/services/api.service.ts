import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = "https://restcountries.com/v3.1"

  constructor(private http:HttpClient) { }
  
  getAllCountries() {
    return this.http.get(`${this.api}/all`)
  }

}