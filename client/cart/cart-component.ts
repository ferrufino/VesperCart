import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, NgZone} from 'angular2/core';
import {MATERIAL_DIRECTIVES, Media, SidenavService} from "ng2-material/all";
import {RouterLink} from 'angular2/router';
import {Carts} from '../../collections/carts';
import {Tracker} from 'meteor/tracker';
import {OrderByPipe} from '../orderby';
import {Router} from 'angular2/router';

@Component({
	selector: 'cart-component',
	templateUrl: 'client/cart/cart-component.html',
	styleUrls:['/client/styles/cart-component.css'],
	directives:[MATERIAL_DIRECTIVES, RouterLink],
	providers:[SidenavService],
  pipes: [ OrderByPipe ]
})

export class CartComponent{
	cartList: Array<Object>;

	constructor(public sidenav: SidenavService,
              public media: Media, zone: NgZone, private _router: Router) {
			Tracker.autorun(() => zone.run(() => {
				this.cartList = Carts.find({'ip':myip}).fetch();

				if(Carts.find({'ip':myip}).count() == 1){
          this.open('right');
        }
			}));

  }
  hasMedia(breakSize: string): boolean {
    return this.media.hasMedia(breakSize);
  }
	open(name: string) {
    this.sidenav.show(name);
  }
 openS() {
    this.sidenav.show('right');
		//alert("yes");
  }
  close(name: string) {
    this.sidenav.hide(name);
  }
  routecheckout(name: string){
    this.sidenav.hide(name);
    var SessionSetReg = Session.get('sessionRegister');
    var SessionSetLog=Session.get('UserLoginSession');
    if( SessionSetReg!=" " || SessionSetLog!=" ")
    {
      this._router.navigate( ['Checkout'] );
    }
    else
    {
      this._router.navigate(['LoginRegister']);
    }
  }

	removeParty(cartList) {

			Carts.remove(cartList);
  }


}
