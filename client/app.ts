import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'ng2-material/all.webpack';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import {Component,provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
import {HomeComponent} from './home/home';
import {FruitsComponent} from './categories/fruits-component';
import {PantryComponent} from './categories/pantry-component';
import {DrinksComponent} from './categories/drinks-component';
import {FrozenComponent} from './categories/frozen-component';
import {WineComponent} from './categories/wine-component';
import {MeatComponent} from './categories/meat-component';



@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  styleUrls: ['/client/styles/app.css'],
  directives: [MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES,HomeComponent]
})

@RouteConfig([
	{path: '/home', as: 'Home', component: HomeComponent, useAsDefault:true},
	{path: '/home/category/fruits', as: 'Fruits', component: FruitsComponent},
	{path: '/home/category/pantry', as: 'Pantry', component: PantryComponent},
	{path: '/home/category/drinks', as: 'Drinks', component: DrinksComponent},
	{path: '/home/category/wine', as: 'Wine', component: WineComponent},
	{path: '/home/category/frozen', as: 'Frozen', component: FrozenComponent},
	{path: '/home/category/meat', as: 'Meat', component: MeatComponent}
])
class App { }
 
bootstrap(App, [MATERIAL_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);