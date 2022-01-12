import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { 
  }
  // check(username: string,password : string){
  //   if(username == 'abc' && password == 'abc') return true;
  //   else return false;
  // }


  login({ username, password }: { username: string; password: string }) {
    return this.http
      .post('login', {
        username,
        password,
      })
      .toPromise();
  }
}
