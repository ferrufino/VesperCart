import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, NgZone} from 'angular2/core';
import {Products} from '../../collections/products';
import {Carts} from '../../collections/carts';
import {Tracker} from 'meteor/tracker';
import {RouterLink} from 'angular2/router';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {CartComponent} from '../cart/cart-component.ts';

@Component({
	selector: 'home-component',
	templateUrl: '/client/home/home.html',
	styleUrls: ['/client/styles/home.css'],
	directives: [
		RouterLink
		],
		providers:[CartComponent]
})

export class HomeComponent {
	products: Array<Object>;
	cartList: Array<Object>;
	cl2: Object;
	cl3: Object;
	ans: Object;
	aux: Object;

	constructor (zone: NgZone, private openNav: CartComponent) {
    Tracker.autorun(() => zone.run(() => {
		 this.products = Products.find().fetch().slice(0,12);
		 this.cartList = Carts.find().fetch();
		}));
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
				if(this.cl2.name == proName && (this.cl2.ip == Session.get('sessionCart'))){
					this.cl3 = this.cl2;
					this.ans=1;
					break;
					//alert(this.cl3.name);
				}
			}

			if(this.ans==0){
				Carts.insert({
					'ip': myip,
					'name': proName,
					'quantity': 1
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
					'quantity': cant
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
				if(this.cl2.name == proName && (this.cl2.ip == Session.get('sessionCart'))){
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
					'quantity': cant
				});
				this.openNav.openS();
			}
			else
			{
			 //new product
			//alert("new product");
				Carts.insert({
					'ip': myip,
					'name': proName,
					'quantity': 1
				})
			}
		}else{
			alert("Woops! Seems something went wrong!");
		}

	}


}
