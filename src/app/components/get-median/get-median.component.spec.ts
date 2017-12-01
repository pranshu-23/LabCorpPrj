import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTemperatureComponent } from '../add-temperature/add-temperature.component';
import { TemperatureMonitorComponent } from '../temperature-monitor/temperature-monitor.component';
import { GetMedianComponent } from '../get-median/get-median.component';
import { FormsModule } from '@angular/forms';
import { TempSvcService } from '../../services/temp-svc.service';

describe('GetMedianComponent', () => {
  let component: GetMedianComponent;
  let fixture: ComponentFixture<GetMedianComponent>;

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
    fixture = TestBed.createComponent(GetMedianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});