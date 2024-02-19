import {Component, HostListener, OnInit} from '@angular/core';
import {Parcel} from "../../classes/parcel";
import {elasticInOut} from "../../shared/animations";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [elasticInOut]
})
export class DashboardComponent implements OnInit {
  parcels: Parcel[] = [];

  gradient: boolean = true;
  chartSize!: [number, number];

  parcelChartData: any[] = [];
  parcelDeliveryData: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.prepareChartData();
    this.prepareLineChartData();
    this.onResize();
  }

  prepareChartData() {
    const countryCountMap = new Map<string, number>();
    this.parcels.forEach(parcel => {
      countryCountMap.set(parcel.country, (countryCountMap.get(parcel.country) || 0) + 1);
    });

    this.parcelChartData = Array.from(countryCountMap, ([name, value]) => ({name, value}));
  }

  prepareLineChartData() {
    const deliveryCountMap = new Map<string, number>();
    this.parcels.forEach(parcel => {
      const deliveryDate = parcel.deliveryDate.toISOString().split('T')[0];
      deliveryCountMap.set(deliveryDate, (deliveryCountMap.get(deliveryDate) || 0) + 1);
    });

    const series = Array.from(deliveryCountMap, ([name, value]) => ({name, value}));
    this.parcelDeliveryData = [
      {
        name: 'Deliveries',
        series
      }
    ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.chartSize = [window.innerWidth / 2 - 100, 400];
  }
}
