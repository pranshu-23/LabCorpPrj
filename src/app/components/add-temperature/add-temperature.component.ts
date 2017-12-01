import { Component, OnInit } from '@angular/core';
import { TempSvcService } from '../../services/temp-svc.service';

@Component({
  selector: 'add-temperature',
  templateUrl: './add-temperature.component.html',
  styleUrls: ['./add-temperature.component.css']
})
export class AddTemperatureComponent implements OnInit {

  temperature: number;
  collectionSize: number;
  tempArrayLen : number;
  percentFull : number; 

  constructor(private tempSvc:TempSvcService) { }

  ngOnInit() {
    this.collectionSize = 0;
    this.tempArrayLen = 0;
    this.percentFull = 0;
  }

  addTemperature() : void {
    if(this.temperature != null && this.collectionSize < 8 && this.temperature <= 5000 && this.temperature >= -500) {
      this.collectionSize++;
      this.tempSvc.recordTemperature(this.temperature);

      this.tempArrayLen = this.tempSvc.getTempArrayLength();
      this.percentFull = this.tempArrayLen * 12.5;
    }
  }

  getCurrentMedian() : number{
    return this.tempSvc.getCurrentMedian();
  }
}
