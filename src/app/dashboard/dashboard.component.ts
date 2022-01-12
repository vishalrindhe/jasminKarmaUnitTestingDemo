import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers:[DashboardService]
})
export class DashboardComponent implements OnInit {
  cities: { name: string; image: string; alt: string }[] = [];
  constructor(private dashboard: DashboardService) {}

  async ngOnInit() {
    this.cities = (await this.dashboard.getCities()) as {
      name: string;
      image: string;
      alt: string;
    }[];
  }

}
