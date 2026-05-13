// models/metric.model.ts
export interface PerformanceMetric {
  type: 'load' | 'api' | 'error';
  value: number;
  timestamp: number;
  details?: string;
}