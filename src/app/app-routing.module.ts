import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../components/cart/cart.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('../modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('../modules/home/home.module').then((m) => m.HomeModule),

  },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
