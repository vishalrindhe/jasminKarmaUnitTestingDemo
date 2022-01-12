import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { defer } from 'rxjs';

import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let dashboardService: DashboardService;
  let httpSpy : {get: jasmine.Spy}
  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient',['get']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

      providers:[DashboardService,
        {provide:HttpClient,useValue:httpSpy}
      ]
    });
    dashboardService = TestBed.inject(DashboardService);
  });

  it('DashboardService should be created', () => {
    expect(dashboardService).toBeDefined();
  });

  it('call getCities()', fakeAsync(() => {
    const testData = [
      {
        name: 'trulli',
        image: 'pic_trulli.jpg',
        alt: 'Italian Trulli',
      },
      {
        name: 'chania',
        image: 'img_chania.jpg',
        alt: 'Chania',
      },
    ];

    httpSpy.get.and.returnValue(defer(() => Promise.resolve(testData)));

    dashboardService.getCities().then((data) => {
      expect(data).toEqual(testData);
    });
    tick();
  }));
});
