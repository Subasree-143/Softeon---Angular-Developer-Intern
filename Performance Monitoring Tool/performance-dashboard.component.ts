// components/performance-dashboard/performance-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { PerformanceService } from '../../services/performance.service';

@Component({
  selector: 'app-performance-dashboard',
  template: `
    <h2>Performance Dashboard</h2>

    <div *ngFor="let metric of metrics">
      <p>
        {{ metric.type }} - {{ metric.value }} ms - {{ metric.details }}
      </p>
    </div>
  `
})
export class PerformanceDashboardComponent implements OnInit {

  metrics: any[] = [];

  constructor(private perf: PerformanceService) {}

  ngOnInit() {
    this.metrics = this.perf.getMetrics();
  }
}