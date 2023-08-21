import { HttpClient } from '@angular/common/http';
import { Movies } from '../models/Movies';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Movies[] = [];

  constructor(
    private http: HttpClient
  ) {

  }

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  
  addToCart(movie: Movies) {
    this.items.push(movie);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}