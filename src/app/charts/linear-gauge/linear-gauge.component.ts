import { Component } from '@angular/core';

@Component({
  selector: 'app-linear-gauge',
  templateUrl: './linear-gauge.component.html',
  styleUrls: ['./linear-gauge.component.scss']
})
export class LinearGaugeComponent {

  values : any = {
    min : 0,
    max : 100,
    value : 50,
    previous : 70,
    units : 'Celsius'

  }

}
