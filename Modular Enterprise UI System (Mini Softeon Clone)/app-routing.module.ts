// app-routing.module.ts
const routes: Routes = [
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/orders.module')
        .then(m => m.OrdersModule)
  }
];