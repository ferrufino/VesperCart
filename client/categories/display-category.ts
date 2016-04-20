import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Categories} from '../../collections/categories';
import {findProducts} from '../../server/find-products';
import {Products} from '../../collections/products';

@Component({
	selector: 'display-category',
	template: `
	{{category.name}}
	{{category._id}}
	{{category.id}}
	`
})

export class DisplayCategory {
	category: Object;
	products: Array<Object>;

	/*perro: <Perro> //has el import del objeto

	perro = methodclass(id); //has el import donde esta el metodo*/

	constructor(params: RouteParams){
		var categoryId = params.get('categoryId');
		this.category = Categories.findOne(categoryId);
	}

}