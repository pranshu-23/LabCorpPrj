import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TemperatureMonitorComponent } from './components/temperature-monitor/temperature-monitor.component';
import { AddTemperatureComponent } from './components/add-temperature/add-temperature.component';
import { GetMedianComponent } from './components/get-median/get-median.component';
import { FormsModule } from '@angular/forms';
import { TempSvcService } from './services/temp-svc.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TemperatureMonitorComponent,
        AddTemperatureComponent,
        GetMedianComponent
      ],
      imports:[
        FormsModule
        ],
      providers: [TempSvcService]
    }).compileComponents();
  }));

it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
}));
it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
}));
it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
}));
});
