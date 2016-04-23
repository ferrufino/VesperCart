import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Tracker} from 'meteor/tracker';
import {Products} from '../../collections/products';

@Component({
    selector: 'adminUD',
    template: '{{product.name}}'
})
export class AdminUpdateDelete {
product: Object;
constructor(params: RouteParams) {
      var productId = params.get('productId');
      this.product = Products.findOne(productId);
  }

}
