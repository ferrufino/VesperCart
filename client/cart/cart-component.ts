import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES, Media, SidenavService} from "ng2-material/all";
import {RouterLink} from 'angular2/router';

@Component({
	selector: 'cart-component',
	templateUrl: 'client/cart/cart-component.html',
	styleUrls:['/client/styles/cart-component.css'],
	directives:[MATERIAL_DIRECTIVES, RouterLink],
	providers:[SidenavService]
})

export class CartComponent{
	  constructor(public sidenav: SidenavService,
              public media: Media) {
  }
  hasMedia(breakSize: string): boolean {
    return this.media.hasMedia(breakSize);
  }
  open(name: string) {
    this.sidenav.show(name);
  }
  close(name: string) {
    this.sidenav.hide(name);
  }
}