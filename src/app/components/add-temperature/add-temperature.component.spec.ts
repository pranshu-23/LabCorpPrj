import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTemperatureComponent } from '../add-temperature/add-temperature.component';
import { TemperatureMonitorComponent } from '../temperature-monitor/temperature-monitor.component';
import { GetMedianComponent } from '../get-median/get-median.component';
import { FormsModule } from '@angular/forms';
import { TempSvcService } from '../../services/temp-svc.service';

describe('AddTemperatureComponent', () => {
  let component: AddTemperatureComponent;
  let fixture: ComponentFixture<AddTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureMonitorComponent,
                      AddTemperatureComponent,
                      GetMedianComponent],
      imports:[ FormsModule ],
      providers: [TempSvcService]    
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component.percentFull).toEqual(0);
  });

  it('On Initialization Progress bar is 0/8 full', () => {
    expect(component).toBeTruthy();
  });

  it('Progress Bar should be 1/8 full after inserting 1 value to collection', () => {
    component.temperature = 10;
    component.addTemperature();
    expect(component.percentFull).toEqual(12.5);
  });

  it('Should not add temp value > 5000', () => {
    component.temperature = 5001;
    component.addTemperature();
    expect(component.percentFull).toEqual(0);
  });

  it('Should not add temp value < -500', () => {
    component.temperature = -500.01;
    component.addTemperature();
    expect(component.percentFull).toEqual(0);
  });

  it('Should not enter value into collection if collection size >= 8', () => {
    component.collectionSize = 8;
    component.temperature = 10;
    component.addTemperature();
    expect(component.percentFull).toEqual(0);
  });

});