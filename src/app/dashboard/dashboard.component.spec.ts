import { DashboardService } from './dashboard.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { capitalize } from 'lodash';
import { CapitalizePipe } from '../shared/capitalize.pipe';
import { HighlightDirective } from '../shared/highlight.directive';

import { DashboardComponent } from './dashboard.component';

const testData = [
  {
    name: 'Chania',
    image: 'img_chania.jpg',
    alt: 'Chania',
  },
  {
    name: 'Trulli',
    image: 'pic_trulli.jpg',
    alt: 'Italian Trulli',
  },
  
];
class DashboardServiceStub {
  getCities() {
    return Promise.resolve(testData);
  }
}
describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let dashboardcomponent: DashboardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DashboardComponent, CapitalizePipe, HighlightDirective]
    }).overrideComponent(DashboardComponent, {
      set: {
        providers: [
          {
            provide: DashboardService,
            useClass: DashboardServiceStub,
          },
        ],
      },
    });
    fixture = TestBed.createComponent(DashboardComponent);
    dashboardcomponent = fixture.componentInstance;
    fixture.detectChanges();
    });

  // beforeEach(() => {
    
  // });

  it('should create', () => {
    expect(dashboardcomponent).toBeDefined();
  });

  it(
    'is created and data received',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        // dashboardcomponent.cities = testData
        expect(dashboardcomponent).toBeDefined();
        expect(dashboardcomponent.cities).toEqual(testData);
      });
    })
  );

  it(
    'verify html',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const displayElements = fixture.debugElement.queryAll(By.css('p'));
        displayElements.forEach((element, index) => {
          expect(element.nativeElement.textContent).toBe(capitalize(testData[index].name)
          );
        });
        const imageElements = fixture.debugElement.queryAll(By.css('img'));
        imageElements.forEach((element, index) => {
          expect(element.nativeElement.src).toContain(testData[index].image);
          expect(element.nativeElement.alt).toContain(testData[index].alt);
        });
      });
    })
  );
});
