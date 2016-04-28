import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, NgZone} from 'angular2/core';
import {Products} from '../../collections/products';
import {Carts} from '../../collections/carts';
import {Users} from '../../collections/users';
import {Tracker} from 'meteor/tracker';
import {RouterLink} from 'angular2/router';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {FORM_DIRECTIVES} from "angular2/common";
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {Carts} from '../../collections/carts';
import {OrderByPipe} from '../orderby';
import {Billing} from '../../collections/billing';



@Component({
 selector: 'checkout-component',
 templateUrl: '/client/checkout/checkout.html',
 styleUrls: ['/client/styles/checkout-component.css'],
 directives: [
   RouterLink,MATERIAL_DIRECTIVES,FORM_DIRECTIVES
   ],
   pipes: [OrderByPipe]
})

export class CheckoutComponent {
    user: Object;
    temp: Object;
    cartList: Array<Object>;
	constructor(zone: NgZone){
		var x =Session.get('UserLoginSession');
	 	this.user = Users.find().fetch();
	 	this.getUser();

	 	Tracker.autorun(() => zone.run(() => {
				this.cartList = Carts.find({'ip':myip}).fetch();
			}));
	}



	getUser(){

		for(var i=0; i<this.user.length; i++){
			this.temp = this.user[i];
			if(this.temp.username == Session.get('UserLoginSession')){
        break;
				alert(this.temp.username);
			}

		}
	}

		removeParty(cartList) {

			Carts.remove(cartList);
  }
  confirmOrder(address,card,sec,pho){
  //pasar el cart a la coleccion billing
  //y datos del usuario
  //y # de orden
  //alert(address);
 	//alert(card);
 //	alert(sec);
 	//alert(pho);
 	var products ={
 		product:[]
 	};
	var productsArray ={
 		product:[]
 	};

  	for(var i=0;i<this.cartList.length;i++)
  	{

  		var product =this.cartList[i];

  		productsArray.product.push({
  		'productName': product.name,
  		'ip': product.ip,
  		'quantity':product.quantity
  		});

  		//alert(this.cartList[i]._id);
  		Carts.remove(this.cartList[i]._id);
  	}

 
  	Billing.insert({
        'firstname': this.temp.firstname,
        'lastname': this.temp.lastname,
        'userID': this.temp._id,
        'address': address,
        'cardNum': card,
        'securityNum':sec,
        'email': this.temp.email,
        'phone': pho,
        'products': productsArray
      })
      alert("Your order has been sent, you will be receiving your groceries soon :)");
  }
}
