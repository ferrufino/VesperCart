import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from 'angular2/core';

@Component({
	selector: 'frozen',
	template: `
	<h1>We are the Frozen ones</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque
    ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est,
    sollicitudin consectetur felis nec, feugiat ultricies mi.</p>
	`
})

export class FrozenComponent{
	
}