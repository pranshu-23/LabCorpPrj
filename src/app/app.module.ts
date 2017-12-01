import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemperatureMonitorComponent } from './components/temperature-monitor/temperature-monitor.component';
import { AddTemperatureComponent } from './components/add-temperature/add-temperature.component';
import { GetMedianComponent } from './components/get-median/get-median.component';
import { TempSvcService } from './services/temp-svc.service';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureMonitorComponent,
    AddTemperatureComponent,
    GetMedianComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TempSvcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
