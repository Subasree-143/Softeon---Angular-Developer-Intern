// services/validation.service.ts
import { Injectable } from '@angular/core';
import { UserEvent } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  validateEvent(event: UserEvent): string[] {
    const errors: string[] = [];

    if (!event.userId) {
      errors.push('Missing userId');
    }

    if (!event.eventType) {
      errors.push('Missing eventType');
    }

    if (!event.timestamp || isNaN(Date.parse(event.timestamp))) {
      errors.push('Invalid timestamp');
    }

    return errors;
  }

  validateBatch(events: UserEvent[]) {
    const results = [];

    for (let i = 0; i < events.length; i++) {
      const errors = this.validateEvent(events[i]);

      if (errors.length > 0) {
        results.push({
          index: i,
          event: events[i],
          errors
        });
      }
    }

    return results;
  }
}