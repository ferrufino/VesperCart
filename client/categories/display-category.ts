import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Categories} from '../../collections/categories';
import {ProductService} from '../product-detail/product-service';
import {RouterLink} from 'angular2/router';
import {Products} from '../../collections/products';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Tracker} from 'meteor/tracker';

@Component({
	selector: 'display-category',
	templateUrl: '/client/categories/display-category.html',
	styleUrls: ['/client/styles/display-category.css'],
	directives: [
		RouterLink
		],
	providers: [ProductService]
})

export class DisplayCategory implements OnInit{
	category: Object;
	products: Array<Object>;
	products2: Array<Object>;

	constructor(params: RouteParams, private _productService: ProductService){
		var categoryId = params.get('categoryId');
		this.category = Categories.findOne(categoryId);
	}

	ngOnInit(){
		this.getProducts();
	}

	getProducts(){
		this._productService.getProducts().then(products => this.products = products);
	}


}