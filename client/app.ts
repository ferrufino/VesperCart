import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'ng2-material/all.webpack';
import {MATERIAL_PROVIDERS, MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Products} from '../collections/products';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [MATERIAL_DIRECTIVES]
})
class Socially {
  products: Array<Object>;
  constructor() {
  this.products = [
    {'productName': 'Banana',
      'description': '10$ / kg',
      'location': 'Palo Alto'
    },
    {'productName': 'Marihuana',
      'description': '300$ / oz',
      'location': 'Palo Alto'
    },
    {'productName': 'Chetos',
      'description': '10$ / bag',
      'location': 'San Francisco'
    }
  ];
}
}

bootstrap(Socially, [MATERIAL_PROVIDERS]);
