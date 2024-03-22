import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  totalPriceCount$!: Observable<number>;
  onSubmit() {
    Swal.fire('Success', 'order placed successfully ', 'success');
    alert('Order placed successfully ');
  }
  checkoutForm!: FormGroup;
  constructor(private fb: FormBuilder,private cartService:CartService) { }

  ngOnInit(): void {
    this.totalPriceCount$ = this.cartService.totalPriceCount$;
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      creditcardNumber: [0, Validators.required],
      cvv: [0, Validators.required],
      expirationDate: ['', Validators.required]
    });
  }

}
