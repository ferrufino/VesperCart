import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component,NgZone} from 'angular2/core';
import {Products} from '../../collections/products';
import {Tracker} from 'meteor/tracker';
import {FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';

@Component({
	selector: 'admin-component',
	templateUrl: '/client/admin/admin-component.html',
	styleUrls: ['/client/styles/admin-component.css'],
	directives: []
})

export class AdminComponent {
	products: Array<Object>;
	selectedproduct: Object;

	constructor (zone: NgZone) {
    Tracker.autorun(() => zone.run(() => {
		this.products = Products.find().fetch();
		}));
	}

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
}