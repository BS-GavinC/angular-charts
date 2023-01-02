import { Component } from '@angular/core';
import { Personnel, PoliceServiceService, Crime } from 'src/app/services/police-service.service';
import { Force } from 'src/app/services/police-service.service';

@Component({
  selector: 'app-police-list',
  templateUrl: './police-list.component.html',
  styleUrls: ['./police-list.component.scss']
})
export class PoliceListComponent {

  forces : Force[] = []

  crimes : Crime[] = []

  crimesType : crimeType[] = []

  selectedForce : string = ''

  isLoading : boolean = true;

  constructor(private _policeService : PoliceServiceService) {

    this._policeService.getForces().subscribe({
      next : (data) => {
        this.forces = data
      },
      error : (err) => {
        console.log('CPT => ' + err.status);

      }
    })


  }


  searchCrimes(){
    this.isLoading = true;
    this.crimesType = []
    this._policeService.getCrimesByForce(this.selectedForce).subscribe({
      next : (data) => {
        this.crimes = data

        for(let crime of this.crimes){
          let category = this.crimesType.find(c => c.name == crime.category)
          if(category != null || category != undefined){
            category.value++
          }
          else{
            this.crimesType.push({
              name : crime.category,
              value : 1,
              extra : {
                code : ''
              }
            })
          }
        }
        this.isLoading = false;
        console.log(this.crimesType);

      }
    })
  }
}


export interface crimeType{
  name : string
  value : number
  extra: {
    code: string
  }
}



