// services/monitoring.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  totalEvents = 0;
  validEvents = 0;
  invalidEvents = 0;

  logBatch(total: number, invalid: number) {
    this.totalEvents += total;
    this.invalidEvents += invalid;
    this.validEvents += (total - invalid);
  }

  getStats() {
    return {
      total: this.totalEvents,
      valid: this.validEvents,
      invalid: this.invalidEvents
    };
  }
}