import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, ElementRef} from 'angular2/core';
import {MATERIAL_DIRECTIVES, MdDialog, Media, MdDialogConfig, MdDialogBasic, MdDialogRef} from "ng2-material/all";
import {DOM} from "angular2/src/platform/dom/dom_adapter";

@Component({
	selector: 'footer-component',
	templateUrl:'client/footer/footer-component.html',
	styleUrls: ['/client/styles/footer.css']
})

export class FooterComponent{

}