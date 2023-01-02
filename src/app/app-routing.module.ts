import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BubbleChartComponent } from './charts/bubble-chart/bubble-chart.component';
import { GaugeChartComponent } from './charts/gauge-chart/gauge-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { LinearGaugeComponent } from './charts/linear-gauge/linear-gauge.component';

const routes: Routes = [
  {path : 'linear-gauge', component : LinearGaugeComponent},
  {path : 'gauge', component : GaugeChartComponent},
  {path : 'bubble', component : BubbleChartComponent},
  {path : 'line', component : LineChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
