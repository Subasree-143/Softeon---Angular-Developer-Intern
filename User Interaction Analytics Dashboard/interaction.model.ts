// models/interaction.model.ts
export interface UserInteraction {
  userId: string;
  action: string;
  page: string;
  timestamp: number;
}