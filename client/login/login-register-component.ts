import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from "angular2/common";

@Component({
	selector: 'login-register-component',
	templateUrl: 'client/login/login-register-component.html',
	styleUrls: ['client/styles/login-register-component.css'],
	directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES]
})

export class LoginRegisterComponent {
  
  signUpForm: ControlGroup;
  constructor(){
    let fb = new FormBuilder();

    this.signUpForm = fb.group({
        firstname: ['',Validators.required],
        lastname: ['',Validators.required],
        address: ['',Validators.required],
        cardNum: ['',Validators.required],
        securityCode: ['',Validators.required],
        username: ['',Validators.required],
        password:['',Validators.required],
        phoneNum: ['',Validators.required]
    });
  }

  states = [
    'State','Ags', 'B.C', 'B.C.S', 'Camp', 'Chis', 'Chih', 'Coah', 'Col', 'CDMX', 'DGO', 'Gto', 'Gro', 'Hgo', 'Jal', 'EdoMex', 'Mich', 'Mor', 'Nay', 'N.L',
    'Oax', 'Pue', 'Qro', 'Q.Roo', 'S.L.P', 'Sin', 'Son', 'Tab', 'Tamps', 'Tlax', 'Ver', 'Yuc', 'Zac'
  ].map(function (state) {
    return {abbrev: state};
  })
  loginAttempt(){
    alert('attempted Login');
  }
    registerAttempt(){
    alert('registration attempt');
  }
}









