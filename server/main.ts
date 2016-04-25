import {loadProducts} from './load-products.ts';
import {Categories} from '../collections/categories.ts';
import {Carts} from '../collections/carts.ts';
import {Users} from '../collections/users.ts';

import {Meteor} from 'meteor/meteor';
Meteor.startup(loadProducts);
