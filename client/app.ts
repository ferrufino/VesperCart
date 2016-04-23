import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'ng2-material/all.webpack';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import {Component,provide, OnInit, NgZone} from 'angular2/core';
import {Tracker} from 'meteor/tracker';
import {bootstrap} from 'angular2/platform/browser';
import {Categories} from '../collections/categories';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
import {HomeComponent} from './home/home';
import {ProductDetails} from './product-detail/product-detail';
import {FooterComponent} from './footer/footer-component';
import {DisplayCategory} from './categories/display-category';
import {SearchComponent} from './search/search-component';
import {AdminComponent} from './admin/admin-component';
@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  styleUrls: ['/client/styles/app.css'],
  directives: [MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES, FooterComponent]
})

@RouteConfig([
	{path: '/home', as: 'Home', component: HomeComponent, useAsDefault:true},
	{ path: '/product/:productId', as: 'ProductDetails', component: ProductDetails },
	{path: '/home/category/:categoryId', as: 'Category', component: DisplayCategory },
	{path: '/home/search', as: 'Search', component: SearchComponent},
	{path: '/home/admin', as: 'Admin', component: AdminComponent}
])

class App {
	categories: Array<Object>;

	constructor (zone: NgZone) {
    Tracker.autorun(() => zone.run(() => {
		this.categories = Categories.find().fetch();
		}));
	}
}
 
bootstrap(App, [MATERIAL_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);