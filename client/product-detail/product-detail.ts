import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from 'angular2/core';
import {RouteParams,RouterLink} from 'angular2/router';
import {Products} from '../../collections/products';

@Component({
  selector: 'product-detail',
  templateUrl: 'client/product-detail/product-detail.html',
  styleUrls: ['/client/styles/product-details.css'],
  directives: [RouterLink]
})
export class ProductDetails {
	product: Object;

  constructor(params: RouteParams) {
    var productId = params.get('productId');
    this.product = Products.findOne(productId);
  }
}