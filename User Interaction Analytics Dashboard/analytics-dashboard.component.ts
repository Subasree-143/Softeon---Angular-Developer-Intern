// components/analytics-dashboard/analytics-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-analytics-dashboard',
  template: `
    <h2>User Analytics</h2>

    <h3>Events Per Page</h3>
    <div *ngFor="let page of pages">
      {{ page }}: {{ pageData[page] }}
    </div>

    <h3>Top Actions</h3>
    <div *ngFor="let action of actions">
      {{ action }}: {{ actionData[action] }}
    </div>
  `
})
export class AnalyticsDashboardComponent implements OnInit {

  pageData: any = {};
  actionData: any = {};
  pages: string[] = [];
  actions: string[] = [];

  constructor(private analytics: AnalyticsService) {}

  ngOnInit() {
    this.pageData = this.analytics.getEventsPerPage();
    this.actionData = this.analytics.getTopActions();

    this.pages = Object.keys(this.pageData);
    this.actions = Object.keys(this.actionData);
  }
}