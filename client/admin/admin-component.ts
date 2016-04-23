import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component,NgZone} from 'angular2/core';
import {Products} from '../../collections/products';
import {Tracker} from 'meteor/tracker';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {RouterLink} from 'angular2/router';


@Component({
	selector: 'admin-component',
	templateUrl: '/client/admin/admin-component.html',
	directives: [RouterLink]
})

export class AdminComponent {

}