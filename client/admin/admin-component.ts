import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component,NgZone} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {FORM_DIRECTIVES} from "angular2/common";

import {Products} from '../../collections/products';
import {Tracker} from 'meteor/tracker';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {RouterLink} from 'angular2/router';


@Component({
	selector: 'admin-component',
	templateUrl: '/client/admin/admin-component.html',
  styleUrls: ['/client/styles/admin-component.css'],
	directives: [RouterLink, MATERIAL_DIRECTIVES, FORM_DIRECTIVES]
})

export class AdminComponent {

}
