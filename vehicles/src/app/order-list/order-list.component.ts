import { Order } from '../order';
import { OrderService } from '../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  providers: [OrderService]
})
export class OrderListComponent implements OnInit {

  orders: Order[];
  selectedOrder: Order;

  constructor(private orderService: OrderService) {
    this.orders = this.orderService.getOrders();
  }

  ngOnInit() {
  }

   onSelect(order: Order) { this.selectedOrder = order; }

}
