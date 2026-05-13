// global error handler
import { ErrorHandler, Injectable } from '@angular/core';
import { PerformanceService } from './services/performance.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private perf: PerformanceService) {}

  handleError(error: any): void {
    this.perf.logMetric({
      type: 'error',
      value: 1,
      timestamp: Date.now(),
      details: error.message
    });

    console.error(error);
  }
}