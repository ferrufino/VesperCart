import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, NgZone} from 'angular2/core';
import {Products} from '../collections/products';
import {Tracker} from 'meteor/tracker';

@Component({
	selector: 'home-component',
	templateUrl: '/client/home/home.html'
})

export class HomeComponent{
	products: Array<Object>;

	constructor(zone: NgZone){
		Tracker.autorun(() => zone.run(() => {
		this.products = Products.find.fetch();
		}));
	}
}