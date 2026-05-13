// services/api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerformanceService } from './performance.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private perf: PerformanceService
  ) {}

  getData() {
    const start = performance.now();

    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(tap(() => {
        const duration = performance.now() - start;

        this.perf.logMetric({
          type: 'api',
          value: duration,
          timestamp: Date.now(),
          details: 'GET /posts'
        });
      }));
  }
}