import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { HomeService } from '../../services/home.service';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() selectedCategory!: string;
  cartItemCount: number = 0;

  constructor(private cartService:CartService) {}
  fruits: any[] = [
    {
      id: 1,
      name: 'Bananas',
      quantity: 10,
      price: 40,
      imageUrl: 'assets/banana.jpg',
      weight: 500,
    },
    {
      id: 2,
      name: 'Pomogranates',
      quantity: 10,
      price: 150,
      imageUrl: 'assets/pomo.jpg',
      weight: 500,
    },
    {
      id: 3,
      name: 'Grapes',
      quantity: 10,
      price: 80,
      imageUrl: 'assets/grapes.jpg',
      weight: 500,
    },
    {
      id: 4,
      name: 'Apples',
      quantity: 10,
      price: 100,
      imageUrl: 'assets/apples.jpg',
      weight: 500,
    },
  ];
  vegetables: any[] = [
    {
      id: 5,
      name: 'Tomatos',
      quantity: 10,
      price: 30,
      imageUrl: 'assets/tomato.webp',
      weight: 500,
    },
    {
      id: 6,
      name: 'Carrots',
      quantity: 10,
      price: 50,
      imageUrl: 'assets/carrot.jpg',
      weight: 500,
    },
    {
      id: 7,
      name: 'Potatos',
      quantity: 10,
      price: 30,
      imageUrl: 'assets/potato.webp',
      weight: 500,
    },
  ];
  snacks: any[] = [
    {
      id: 8,
      name: 'Chocolates',
      quantity: 10,
      price: 200,
      imageUrl: 'assets/chocolates.jpg',
      weight: 500,
    },
    {
      id: 9,
      name: 'Moms Magic',
      quantity: 10,
      price: 100,
      imageUrl: 'assets/moms.jpg',
      weight: 500,
    },
    {
      id: 10,
      name: 'Good Day',
      quantity: 10,
      price: 100,
      imageUrl: 'assets/good1.png',
      weight: 500,
    },
    {
      id: 11,
      name: 'Unibic',
      quantity: 10,
      price: 100,
      imageUrl: 'assets/unibic.webp',
      weight: 500,
    },
    {
      id: 12,
      name: 'Bingo',
      quantity: 10,
      price: 90,
      imageUrl: 'assets/bingo.webp',
      weight: 500,
    },
    {
      id: 13,
      name: 'Lays',
      quantity: 10,
      price: 90,
      imageUrl: 'assets/lays.webp',
      weight: 500,
    },
    {
      id: 14,
      name: 'Kurkure',
      quantity: 10,
      price: 90,
      imageUrl: 'assets/kurkure1.jpg',
      weight: 500,
    },
    {
      id: 15,
      name: 'Aloo Bujiya',
      quantity: 10,
      price: 90,
      imageUrl: 'assets/bujiya.webp',
      weight: 500,
    },
    {
      id: 16,
      name: 'Moong Dal',
      quantity: 10,
      price: 90,
      imageUrl: 'assets/moongdal.webp',
      weight: 500,
    },
  ];

  AddToCart(item:any){
    this.cartService.AddToCart(item);
    this.cartService.increment(item);
}

RemoveFromCart(item:any){
  this.cartService.RemoveFromCart(item);
  this.cartService.decrement(item);
}

}
