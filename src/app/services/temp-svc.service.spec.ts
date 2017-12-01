import { TestBed } from '@angular/core/testing';
import { TempSvcService } from '../services/temp-svc.service';

describe('TemperatureMonitorService',()=>{
  
  let service: TempSvcService;
  beforeEach(()=> {
    service = new TempSvcService();
  });

  it('Should return empty array',()=>{
      expect(service.getTempArrayLength()).toEqual(0);
  });

  it('getTempArrayLength() should return 1 after inserting 1 value in array',()=>{
      expect(service.recordTemperature(10))
      expect(service.getTempArrayLength()).toEqual(1);
  });

  it('After inserting 1 value in array median should be that value',()=>{
      expect(service.recordTemperature(10));
      expect(service.getTempArrayLength()).toEqual(1)
      expect(service.getCurrentMedian()).toEqual(10);
  });

  it('Should return median of [ 5, 1, -7, 7, 8, 3] as 4',()=>{
      [ 5, 1, -7, 7, 8, 3].map(no => service.recordTemperature(no));
      expect(service.getTempArrayLength()).toEqual(6);
      expect(service.getCurrentMedian()).toEqual(4);
  });

  it('Should return median of [ 5, 1, -7, 7, 8, 3, 9] as 5',()=>{
      [ 5, 1, -7, 7, 8, 3, 9].map(no => service.recordTemperature(no));
      expect(service.getTempArrayLength()).toEqual(7);
      expect(service.getCurrentMedian()).toEqual(5);
  });
});