// models/event.model.ts
export interface UserEvent {
  userId: string;
  eventType: string;
  timestamp: string;
  metadata?: any;
}