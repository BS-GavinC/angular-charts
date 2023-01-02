import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoliceServiceService {

  constructor(private httpClient: HttpClient) { }

  getForces() {
    return this.httpClient.get<Force[]>('https://data.police.uk/api/forces')
  }

  getPersonnel(id : string){
    return this.httpClient.get<Personnel[]>('https://data.police.uk/api/forces/' + id +'/people')
  }

  getCrimesByForce(id : string){
    return this.httpClient.get<Crime[]>('https://data.police.uk/api/crimes-no-location?category=all-crime&force=' + id)
  }

}

export interface Force{
  id : string,
  name : string
}

export interface Personnel{
  name : string,
  rank : string
}

export interface Crime{
  category : string
  month : string
}
