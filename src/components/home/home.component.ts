import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { HomeService } from '../../services/home.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // cartItemCount: number = 0;
  cartItemCount$!: Observable<number>;
  selectedCategory: string = '';
  isDrawerOpen = false;


  constructor(private dialog: MatDialog, private router: Router, private cartService:CartService) {}
  ngOnInit(): void {
    // this.cartItemCount=this.cartService.selectedItems.length;
    this.cartItemCount$ = this.cartService.cartItemCount$;
  }

  selectMenu(menu: string) {
    this.selectedCategory = menu;
  }

  drawer_open() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  openCart() {
    this.router.navigate(['/cart'], { state: { items: this.cartService.selectedItems } });
    console.log('hi');
    console.log("Selected items:", this.cartService.selectedItems);
  }
}
