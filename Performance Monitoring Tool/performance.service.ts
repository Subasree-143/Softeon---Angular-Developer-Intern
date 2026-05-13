// services/performance.service.ts
import { Injectable } from '@angular/core';
import { PerformanceMetric } from '../models/metric.model';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  private metrics: PerformanceMetric[] = [];

  logMetric(metric: PerformanceMetric) {
    this.metrics.push(metric);

    // store locally (simulate backend)
    localStorage.setItem('metrics', JSON.stringify(this.metrics));
  }

  getMetrics(): PerformanceMetric[] {
    return JSON.parse(localStorage.getItem('metrics') || '[]');
  }

  clearMetrics() {
    localStorage.removeItem('metrics');
    this.metrics = [];
  }
}