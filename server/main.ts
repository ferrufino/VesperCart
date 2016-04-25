import {loadProducts} from './load-products.ts';
import {Categories} from '../collections/categories.ts';
import {Users} from '../collections/users.ts';
import {Meteor} from 'meteor/meteor';
Meteor.startup(loadProducts);
