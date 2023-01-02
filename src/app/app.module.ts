import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinearGaugeComponent } from './charts/linear-gauge/linear-gauge.component';
import { BannerComponent } from './banner/banner.component';
import { GaugeChartComponent } from './charts/gauge-chart/gauge-chart.component';
import { BubbleChartComponent } from './charts/bubble-chart/bubble-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PoliceListComponent } from "./police/police-list/police-list.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
    declarations: [
        AppComponent,
        LinearGaugeComponent,
        BannerComponent,
        GaugeChartComponent,
        BubbleChartComponent,
        LineChartComponent,
        PoliceListComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxChartsModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
