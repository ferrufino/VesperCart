import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'ng2-material/all.webpack';
//import 'bootstrap4-webpack-package';
import {MATERIAL_PROVIDERS, MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
import {NgZone, Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Products} from '../collections/products';
import {Tracker} from 'meteor/tracker';
import {FrozenComponent} from './imports/categories/Frozen/frozen';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [
  	MATERIAL_DIRECTIVES,
  	ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path:'/frozen', as: 'Frozen', component: FrozenComponent}
])
class Socially {
  products: Array<Object>;

      constructor(zone: NgZone) {
        Tracker.autorun(() => zone.run(() => {
        this.products = Products.find().fetch();
        }));
      }
}

bootstrap(Socially, [
	MATERIAL_PROVIDERS, 
	ROUTER_PROVIDERS,
	provide(APP_BASE_HREF, { useValue: '/' })]);
