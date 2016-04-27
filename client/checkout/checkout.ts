import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, NgZone} from 'angular2/core';
import {Products} from '../../collections/products';
import {Carts} from '../../collections/carts';
import {Users} from '../../collections/users';
import {Tracker} from 'meteor/tracker';
import {RouterLink} from 'angular2/router';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';

@Component({
 selector: 'checkout-component',
 templateUrl: '/client/checkout/checkout.html',
 styleUrls: ['/client/styles/checkout-component.css'],
 directives: [
   RouterLink
   ]
})

export class CheckoutComponent {
    user: Object;
    temp: Object;
	constructor(){
		var x =Session.get('UserLoginSession');
	 	this.user = Users.find().fetch();
	 	this.getUser();
	}



	getUser(){

		for(var i=0; i<this.user.length; i++){
			this.temp = this.user[i];
			if(this.temp.username == Session.get('UserLoginSession')){
				alert(this.temp.username);
			}

		}
	}
}
