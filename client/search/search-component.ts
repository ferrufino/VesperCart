import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component,NgZone} from 'angular2/core';
import {Products} from '../../collections/products';
import {Tracker} from 'meteor/tracker';
import {RouterLink} from 'angular2/router';


@Component({
	selector: 'search-component',
	templateUrl: '/client/search/search-component.html',
	styleUrls: ['/client/styles/search-component.css'],
	directives: [RouterLink]
})

export class SearchComponent {
	products: Array<Object>;
	product2: Object;
	product3: Object;
	search: Object;

	constructor (zone: NgZone) {
    Tracker.autorun(() => zone.run(() => {
		this.products = Products.find().fetch();
		}));
	}

	onSearch(product){
	//		alert(product)
		for(var i=0; i<this.products.length;i++)
		{	
			this.product2=this.products[i];
			if(this.product2.name==product){
				this.product3=this.product2;
				this.search=1;
				break;
				//alert(this.product3.name);
			}
			this.search=0;
		}
	}
}