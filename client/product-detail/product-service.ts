import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Tracker} from 'meteor/tracker';
import {Products} from '../../collections/products';
import {Component,NgZone} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';

@Component({
	selector: 'product-service',
	template: '<div *ngFor="#product of products">{{product.name}}</div>'
})

export class ProductService {
	products: Array<Object>;

	constructor (zone: NgZone) {
    Tracker.autorun(() => zone.run(() => {
		this.products = Products.find().fetch();
		}));
	}

	getProducts(){
		return Promise.resolve(this.products);
	}
}