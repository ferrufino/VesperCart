import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, OnInit, NgZone} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Categories} from '../../collections/categories';
import {ProductService} from '../product-detail/product-service';
import {RouterLink} from 'angular2/router';
import {Products} from '../../collections/products';
import {Carts} from '../../collections/carts';
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
	cartList: Array<Object>;
	cl2: Object;
	cl3: Object;
	ans: Object;
	aux: Object;

	constructor(params: RouteParams, private _productService: ProductService, zone:NgZone){
		var categoryId = params.get('categoryId');
		this.category = Categories.findOne(categoryId);
		Tracker.autorun(() => zone.run(() => {
		 this.cartList = Carts.find().fetch();
		}));
	}

	ngOnInit(){
		this.getProducts();
	}

	getProducts(){
		this._productService.getProducts().then(products => this.products = products);
	}
	onSelectProduct(proName){

		if(!(Session.get('sessionCart')))
		{
			Session.set('sessionCart', myip);
			var ip = Session.get('sessionCart');

			alert(ip);
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

				alert("New product added");
			}else{
				this.aux = this.cl3;
				alert(this.aux.quantity);
				var cant = this.aux.quantity
				alert(cant);
				cant = cant+1;
				alert(cant);
				Carts.remove(this.cl3._id);
				Carts.insert({
					'ip':this.aux.ip,
					'name': this.aux.name,
					'quantity': cant
				});
				alert("Should update product quantity");
			}

		}
		else if(Session.get('sessionCart') == myip)
		{
			alert("session already set");
			this.ans=0;
			for (var x=0; x<this.cartList.length;x++){
				this.cl2 =this.cartList[x];
				alert(this.cl2.name);
				if(this.cl2.name == proName && (this.cl2.ip == Session.get('sessionCart'))){
					this.cl3 = this.cl2;
					this.ans=1;
					alert("perro");
					break;
					//alert(this.cl3.name);
				}  
			}
			
			if(this.ans==1){

				alert("product already exists");
				this.aux = this.cl3;
				alert(this.aux.quantity);
				var cant = this.aux.quantity
				alert(cant);
				cant = cant+1;
				alert(cant);
				Carts.remove(this.cl3._id);
				Carts.insert({
					'ip':this.aux.ip,
					'name': this.aux.name,
					'quantity': cant
				});
				/*Carts.update({'name': proName, 'ip': myip }, { $set : {'quantity': cant }});*/
			}
			else
			{
			 //new product
			alert("new product");
				Carts.insert({
					'ip': myip,
					'name': proName,
					'quantity': 1
				})
			}

		}else{
			alert("algo anda mal");
		}

	}

}