// shared/components/data-table/data-table.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  template: `
    <table>
      <thead>
        <tr>
          <th *ngFor="let col of columns">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of data">
          <td *ngFor="let col of columns">
            {{ row[col] }}
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class DataTableComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
}