import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, NgZone} from 'angular2/core';
import {Products} from '../../collections/products';
import {Tracker} from 'meteor/tracker';
import {RouterLink} from 'angular2/router';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';



@Component({
	selector: 'home-component',
	templateUrl: '/client/home/home.html',
	styleUrls: ['/client/styles/home.css'],
	directives: [
		RouterLink
		]
})

export class HomeComponent{
	products: Array<Object>
	prod: Array<Object>;

	constructor (zone: NgZone) {
    Tracker.autorun(() => zone.run(() => {
		this.prod = Products.find().fetch();
		}));

		this.products = this.prod.slice(0,12);
	}
}