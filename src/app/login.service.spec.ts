import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let loginService: LoginService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });
    loginService = TestBed.inject(LoginService);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('is created', () => {
    expect(loginService).toBeDefined();
  });

  it('call login()', () => {
    const testData = true;
    const inputData = {
      username: 'admin',
      password: 'admin',
    };

    loginService
      .login(inputData)
      .then((data) => expect(data).toEqual(testData));

    const req = httpController.expectOne('login');

    expect(req.request.method).toEqual('POST');
    // expect(req.request.url).toEqual('login');
    // req.flush(testData);
  });

  it('call login() failed', () => {
    const emsg = 'status 500 error';
    const inputData = {
      username: 'admin',
      password: 'admin',
    };

    loginService.login(inputData).then(
      () => fail('should have failed with the 500 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(500, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpController.expectOne('login');

    expect(req.request.method).toEqual('POST');

    req.flush(emsg, { status: 500, statusText: 'Server Error' });
  });
});
