// features/inventory/inventory.component.ts
@Component({
  selector: 'app-inventory',
  template: `
    <h2>Inventory</h2>
    <app-data-table 
      [columns]="columns" 
      [data]="items">
    </app-data-table>
  `
})
export class InventoryComponent {

  columns = ['name', 'quantity'];

  items = [
    { name: 'Item A', quantity: 100 },
    { name: 'Item B', quantity: 50 }
  ];
}