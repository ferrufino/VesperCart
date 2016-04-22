import {loadProducts} from './load-products.ts';
import {Categories} from '../collections/categories.ts';
imrpot {meteor} from 'meteor/meteor';
Meteor.startup(loadProducts);
