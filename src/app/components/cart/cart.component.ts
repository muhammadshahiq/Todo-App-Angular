import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  movies = this.cartService.getItems()

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  onSubmit(): void {
    // Process checkout data here
    this.movies = this.cartService.clearCart();
    // console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  goBack(): void {
    this.location.back()
  }
}
