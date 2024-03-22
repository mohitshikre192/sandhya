import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  selectedItems: any[] = [];
  totalPrice: number = 0;
  private cartItemCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public cartItemCount$: Observable<number> = this.cartItemCountSubject.asObservable();

  private totalPriceSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public totalPriceCount$: Observable<number> = this.totalPriceSubject.asObservable();


  // cartItemCount:number=0;
  constructor() { }

  AddToCart(item: any) {
    this.selectedItems.push(item);
    this.cartItemCountSubject.next(this.selectedItems.length);
  }
  RemoveFromCart(item:any){
   this.selectedItems.pop();
   this.cartItemCountSubject.next(this.selectedItems.length);
  }
  getCartItemCount() {
    return this.selectedItems.length;
  }
  calculateTotalPrice(): void {
    this.totalPriceSubject.next(0);
  this.totalPrice=0;
    this.selectedItems.forEach(item => {
       this.totalPrice += (item.price * (item.count || 0));

    });
    this.totalPriceSubject.next(this.totalPrice)
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

}
decrement(item: any) {
  if (item.count && item.count > 0) {
    item.count--;
    if (item.quantity < 10) {
      item.quantity++;
    }
  }

  }



}
