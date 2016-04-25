import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component,NgZone} from 'angular2/core';
import {Products} from '../../collections/products';
import {Tracker} from 'meteor/tracker';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';

@Component({
	selector: 'admin-component',
	templateUrl: '/client/admin/admin-component.html',
	styleUrls: ['/client/styles/admin-component.css'],
	directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES]
})

export class AdminComponent {
	products: Array<Object>;
	selectedproduct: Object;
	insertedProd: Object;
	aux: Object;
	exists:number;

	constructor (zone: NgZone) {
    Tracker.autorun(() => zone.run(() => {
		this.products = Products.find().fetch();
		}));
	}
	states = [
		'Fruits & Vegetables', 'Pantry', 'Frozen', 'Meat & Fish', 'Wine & Alcohol', 'Drinks'
	].map(function (state) {
		return {abbrev: state};
	})
	onSelect(product){
		this.selectedproduct=product;
	}

	 saveProduct(product) {
    	Products.update(this.selectedproduct._id, {
      $set: {
        name: product.name,
        description: product.description,
        quantity: product.quantity,
        category: product.category,
        storeName: product.storeName
      }
    });
    alert("product succesfully updated");
  }

  onRemove(selectedp){
  	Products.remove(selectedp._id);
  	alert("Product successfully removed");
  	this.selectedproduct = null;
  }
	insertAttempt(product,category, description, quantity, store){
	this.exists = 0;
		for(var i=0;i<this.products.length;i++)
		{
			this.aux=this.products[i];
			if(this.aux.name == product)
			{
				this.exists=1;
				alert("product already exists, you must go to update section");
			}
		}
		if(!this.exists){
			Products.insert({
				"name":product,
				"category":category,
				"description":description,
				"quantity":quantity,
				"storeName":store
			})
			alert("product successfully inserted!");
		}
	}
}
