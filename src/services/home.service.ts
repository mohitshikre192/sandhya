import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  count:number=0;
  cartItemCount: number = 0;
  selectedItems: any[] = [];
  constructor() { }

  // addToCart(item: any) {
  //   this.cartItemCount++;
  //   this.selectedItems.push(item);
  // }

  // removeFromCart(){
  //   this.cartItemCount--;
  // }
  getCartItemCount() {
    return this.cartItemCount;
  }
  increment(item: any) {
  if (!item.count) {
    item.count = 1;
  } else {
    item.count++;
  }
  if (item.quantity > 0) {
    item.quantity--;
  }
  // this.addToCart(item);
}

decrement(item: any) {
  if (item.count && item.count > 0) {
    item.count--;
    if (item.quantity < 10) {
      item.quantity++;
    }
    // this.removeFromCart();
  }
}
}
