// services/tracking.service.ts
import { Injectable } from '@angular/core';
import { UserInteraction } from '../models/interaction.model';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  private events: UserInteraction[] = [];

  track(event: UserInteraction) {
    this.events.push(event);

    localStorage.setItem('interactions', JSON.stringify(this.events));
  }

  getEvents(): UserInteraction[] {
    return JSON.parse(localStorage.getItem('interactions') || '[]');
  }
}