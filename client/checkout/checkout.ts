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
 styleUrls: ['/client/styles/home.css'],
 directives: [
   RouterLink
   ]
})

export class CheckoutComponent {
construct(private _router: Router){
 alert(this._router);
}

logOut(){
	Session.set('UserLoginSession'," ");
	Session.set('sessionRegister'," ");
	alert("logout");

}
}
