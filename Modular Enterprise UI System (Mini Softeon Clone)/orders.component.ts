// features/orders/orders.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  template: `
    <h2>Orders</h2>
    <app-data-table 
      [columns]="columns" 
      [data]="orders">
    </app-data-table>
  `
})
export class OrdersComponent {

  columns = ['id', 'customer', 'status'];

  orders = [
    { id: 1, customer: 'Amazon', status: 'Shipped' },
    { id: 2, customer: 'Walmart', status: 'Pending' }
  ];
}