import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

// addToCart(item: any) {
//   this.cartItemCount++;
//   this.selectedItems.push(item);
// }

// removeFromCart(){
//   this.cartItemCount--;
// }

// increment(item: any) {
//   if (!item.count) {
//     item.count = 1;
//   } else {
//     item.count++;
//   }
//   if (item.quantity > 0) {
//     item.quantity--;
//   }

// }

// decrement(item: any) {
//   if (item.count && item.count > 0) {
//     item.count--;
//     if (item.quantity < 10) {
//       item.quantity++;
//     }

//   }
// }
