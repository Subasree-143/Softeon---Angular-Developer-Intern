// components/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { MonitoringService } from '../../services/monitoring.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Monitoring Dashboard</h2>
    <p>Total Events: {{ stats.total }}</p>
    <p>Valid Events: {{ stats.valid }}</p>
    <p>Invalid Events: {{ stats.invalid }}</p>
  `
})
export class DashboardComponent implements OnInit {

  stats: any = {};

  constructor(private monitoringService: MonitoringService) {}

  ngOnInit() {
    this.stats = this.monitoringService.getStats();
  }
}