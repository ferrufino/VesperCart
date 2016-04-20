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
 status = '  ';
  customFullscreen = this.media.hasMedia('xs') || this.media.hasMedia('sm');
  constructor(public dialog: MdDialog,
              public media: Media,
              public element: ElementRef) {
  }
  showConfirm(ev) {
    let config = new MdDialogConfig()
      .textContent('All of the banks have agreed to forgive you your debts.')
      .clickOutsideToClose(false)
      .title('Would you like to delete your debt?')
      .ariaLabel('Lucky day')
      .ok('Please do it!')
      .cancel('Sounds like a scam')
      .targetEvent(ev);
    this.dialog.open(MdDialogBasic, this.element, config)
      .then((ref: MdDialogRef) => {
        ref.whenClosed.then((result) => {
          if (result) {
            this.status = 'You decided to get rid of your debt.';
          }
          else {
            this.status = 'You decided to keep your debt.';
          }
        })
      });
  };
}