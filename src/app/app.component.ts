import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoJasmin';
  name="4";
  constructor(private router: Router){
    // this.router.navigateByUrl('/login')
  }
}
