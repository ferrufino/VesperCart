import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component,NgZone} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Users} from '../../collections/users';
import {Tracker} from 'meteor/tracker';


@Component({
	selector: 'checkout-component',
	templateUrl: '/client/checkout/checkout-component.html',
	inputs:['searchUser'],
	styleUrls:['/client/styles/checkout-component.css']
})

export class CheckOutComponent{

	searchUser: string;
	user2:Object;
	user3:Object;
	users: Array<Object>;
	search: Object;

	constructor (params: RouteParams, zone: NgZone){
		this.searchUser = params.get('userInput');

	Tracker.autorun(() => zone.run(() => {
			this.users = Users.find().fetch();
		}));

		this.loadsearch(this.searchUser);
	}

	loadsearch(usr)
	{
		for(var i=0; i<this.users.length;i++)
		{	
			this.user2=this.users[i];
			if(this.user2.name==this.user){
				this.user3=this.user2;
				this.search=1;
				break;
				//alert(this.product3.name);
			}
			this.search=0;
		}

		if(this.search == 0){
			alert("bro no encontramos tu usuario");
		}
	}
}