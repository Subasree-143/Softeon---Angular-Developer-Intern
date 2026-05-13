// app.component.ts
import { Component, OnInit } from '@angular/core';
import { PerformanceService } from './services/performance.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  constructor(private perf: PerformanceService) {}

  ngOnInit() {
    const loadTime = performance.now();

    this.perf.logMetric({
      type: 'load',
      value: loadTime,
      timestamp: Date.now()
    });
  }
}