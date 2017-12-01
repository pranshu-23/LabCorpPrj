import { Component, OnInit } from '@angular/core';
import { TempSvcService } from '../../services/temp-svc.service';

@Component({
  selector: 'get-median',
  templateUrl: './get-median.component.html',
  styleUrls: ['./get-median.component.css']
})
export class GetMedianComponent implements OnInit {

  currentMedian: number;

  constructor(private tempSvc:TempSvcService) { 
    this.currentMedian = 0;
  }

  ngOnInit() {
  }

  getCurrentMedian() : void {
    this.currentMedian = this.tempSvc.getCurrentMedian();
  }
}
