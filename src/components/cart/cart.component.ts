import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {
  selectedItems: any[] = [];
  totalPriceCount$!: Observable<number>;
  // totalPrice: number = 0;

  constructor(private router: Router,private cartService:CartService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.selectedItems = navigation.extras.state['items'];
    }
  }
  increment(item:any){
    this.cartService.increment(item);
    this.cartService.calculateTotalPrice();
}

decrement(item:any){
  this.cartService.decrement(item);
  this.cartService.calculateTotalPrice();
}
checkout(){
  this.router.navigate(['/checkout'], { state: { totalPrice: this.cartService.totalPrice} });
}


  ngOnInit(): void {
    // Fetch selected items from CartService
    // this.selectedItems = this.cartService.getSelectedItems();
    // Calculate total price initially
    this.cartService.calculateTotalPrice();
    this.totalPriceCount$ = this.cartService.totalPriceCount$;
  }
}

