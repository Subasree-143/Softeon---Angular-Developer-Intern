// services/analytics.service.ts
import { Injectable } from '@angular/core';
import { TrackingService } from './tracking.service';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private tracking: TrackingService) {}

  getEventsPerPage() {
    const events = this.tracking.getEvents();
    const result: any = {};

    events.forEach(e => {
      result[e.page] = (result[e.page] || 0) + 1;
    });

    return result;
  }

  getTopActions() {
    const events = this.tracking.getEvents();
    const result: any = {};

    events.forEach(e => {
      result[e.action] = (result[e.action] || 0) + 1;
    });

    return result;
  }
}