import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component,NgZone} from 'angular2/core';
import {Products} from '../../collections/products';
import {Tracker} from 'meteor/tracker';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';



@Component({
	selector: 'search-component',
	templateUrl: '/client/search/search-component.html',
	styleUrls: ['/client/styles/search-component.css']
})

export class SearchComponent {
	products: Array<Object>;

	constructor (zone: NgZone) {
    Tracker.autorun(() => zone.run(() => {
		this.products = Products.find().fetch().slice(0,12);
		}));
	}

	onSearch(product){
	alert(product)
	}
}