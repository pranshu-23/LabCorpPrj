import { Injectable } from '@angular/core';

@Injectable()
export class TempSvcService {

  tempArray : number[];

  constructor() { 
    this.tempArray = [];
  }
  
  recordTemperature(temp:number) :void {
    this.tempArray.push(temp);
  }

  getCurrentMedian() : number {
    let n: number = this.tempArray.length;
    if(n > 1) {
      this.tempArray.sort( function(a,b) {return a-b;});
      if(n % 2 == 0) {
        return (this.tempArray[Math.floor(n / 2 - 1)] + this.tempArray[Math.floor(n / 2)]) / 2;
      } else {
        return this.tempArray[Math.floor(n / 2)];
      }
    } else if (n == 1) {
      return this.tempArray[0];
    } else {
      return 0;
    }
  }

  getTempArrayLength() : number{
    return this.tempArray.length;
  }
}
