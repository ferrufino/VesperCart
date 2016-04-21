import {loadProducts} from './load-products.ts';
import {Categories} from '../collections/categories.ts';

Meteor.startup(loadProducts);
