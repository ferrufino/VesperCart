import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, NgZone} from 'angular2/core';
import {Products} from '../../collections/products';
import {Carts} from '../../collections/carts';
import {Tracker} from 'meteor/tracker';
import {RouterLink} from 'angular2/router';
import {CartComponent} from '../cart/cart-component.ts';
import {RouteParams} from 'angular2/router';

@Component({
	selector: 'search-component',
	templateUrl: '/client/search/search-component.html',
	styleUrls: ['/client/styles/search-component.css'],
	inputs: ['searchValue'],
	directives: [RouterLink],
	providers:[CartComponent]
})

export class SearchComponent {


	searchValue: string;


	products: Array<Object>;
	product2: Object;
	product3: Array<Object>;
	search: Object;

	cartList: Array<Object>;
	cl2: Object;
	cl3: Object;
	ans: Object;
	aux: Object;

	constructor (params: RouteParams, zone: NgZone) {

		this.searchValue = params.get('searchInput');


    	Tracker.autorun(() => zone.run(() => {
				this.products = Products.find().fetch();
				this.cartList = Carts.find().fetch();
			}));

		this.loadSearch(this.searchValue);
	}


	loadSearch(product){
	//		alert(product);
		this.search=0;
		var arr = [];
		for(var i=0; i<this.products.length;i++)
		{
			this.product2=this.products[i];
			var regexp = new RegExp(this.searchValue, 'i');
			var tempSearch = (this.product2.name).match(regexp);
			if(this.product2.name==this.searchValue || tempSearch != null){
			  //alert(this.products[i].name);
				arr.push(this.products[i]);
				//alert(arr[0].name);
				//this.product3.push(this.products[i]);
			//	alert(this.product3[0].name);
				this.search=1;

				//alert(this.product3.name);
			}

		}

		if(this.search == 0){
			alert("bro no encontramos tu producto");
		}else{
			this.product3 = arr;
		}
	}

	onSelectProduct(proName){

		if(!(Session.get('sessionCart')))

		{
			Session.set('sessionCart', myip);
			var ip = Session.get('sessionCart');
			//alert(ip);
			this.ans=0
			for(var i=0; i<this.cartList.length;i++)
			{
				this.cl2 =this.cartList[i];
				if(this.cl2.name == proName.name && (this.cl2.ip == Session.get('sessionCart'))){
					this.cl3 = this.cl2;
					this.ans=1;
					break;
					//alert(this.cl3.name);
				}
			}

			if(this.ans==0){
				Carts.insert({
					'ip': myip,
					'name': proName.name,
					'quantity': 1,
					'price': proName.price
				})

				//alert("New product added");
			}else{

				//alert("product already exists");
				this.aux = this.cl3;
				//alert(this.aux.quantity);
				var cant = this.aux.quantity
				//alert(cant);
				cant = cant+1;
				//alert(cant);
				Carts.remove(this.cl3._id);
				Carts.insert({
					'ip':this.aux.ip,
					'name': this.aux.name,
					'quantity': cant,
					'price':this.aux.price
				});
				//alert("Should update product quantity");
					this.openNav.openS();
			}

		}
		else if(Session.get('sessionCart') == myip)
		{
			//alert("session already set");

			for(var i=0; i<this.cartList.length;i++)
			{
				this.cl2 =this.cartList[i];
				if(this.cl2.name == proName.name && (this.cl2.ip == Session.get('sessionCart'))){
					this.cl3 = this.cl2;
					this.ans=1;
					break;
					//alert(this.cl3.name);
				}
				this.ans=0;
			}

			if(this.ans==1){

				//alert("product already exists");
				this.aux = this.cl3;
				//alert(this.aux.quantity);
				var cant = this.aux.quantity
				//alert(cant);
				cant = cant+1;
				//alert(cant);
				Carts.remove(this.cl3._id);
				Carts.insert({
					'ip':this.aux.ip,
					'name': this.aux.name,
					'quantity': cant,
					'price': this.aux.price
				});
				this.openNav.openS();
			}
			else
			{
			 //new product
			//alert("new product");
				Carts.insert({
					'ip': myip,
					'name': proName.name,
					'quantity': 1,
					'price': proName.price
				})
			}
		}else{
			alert("Woops! Seems something went wrong!");
		}

	}
}
