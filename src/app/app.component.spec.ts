import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';

import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {
  ComponentFixture,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  template: 'Login Component',
})
class LoginComponent {}
@Component({
  selector: 'login',
  template: 'Home Component',
})
class HomeComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', redirectTo: '/login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent },
          { path: 'home', component: HomeComponent },
          { path: '**', component: LoginComponent },
        ])
        ,HttpClientTestingModule
      ],
      declarations: [
        AppComponent, LoginComponent, HomeComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demoJasmin'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demoJasmin');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('demoJasmin app is running!');
  // });

  // it(`should have as title 'vishal'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   // expect(app.name).toEqual('vishal');
  // });

  it(`should have as app define`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.name).toBeGreaterThan(1);
  });

  it('routes are navigated', fakeAsync(() => {
    expect(appComponent).toBeDefined();
    const router = TestBed.inject(Router);
    const location = TestBed.inject(Location);
    router.initialNavigation();
    tick();
    expect(location.path()).toBe('/login');
    router.navigate(['home']);
    tick();
    expect(location.path()).toBe('/home');
  }));
});
