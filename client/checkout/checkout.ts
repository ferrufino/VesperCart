import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, NgZone} from 'angular2/core';
import {Products} from '../../collections/products';
import {Carts} from '../../collections/carts';
import {Users} from '../../collections/users';
import {Tracker} from 'meteor/tracker';
import {RouterLink} from 'angular2/router';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Router} from 'angular2/router';

@Component({
 selector: 'checkout-component',
 templateUrl: '/client/checkout/checkout.html',
 styleUrls: ['/client/styles/home.css'],
 directives: [
   RouterLink
   ]
})

export class CheckoutComponent {
construct(public router: Router){
 alert(this.router);
}
}
