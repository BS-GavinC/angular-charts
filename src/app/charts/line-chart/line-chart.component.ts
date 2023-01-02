import { Component } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  myData : any = data

  yLabel = 'GDP'


}
