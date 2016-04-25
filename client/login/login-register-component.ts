import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component,NgZone} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from "angular2/common";
import {Users} from '../../collections/users.ts';
import {Tracker} from 'meteor/tracker';



@Component({
	selector: 'login-register-component',
	templateUrl: 'client/login/login-register-component.html',
	styleUrls: ['client/styles/login-register-component.css'],
	directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES]
})

export class LoginRegisterComponent {
  users: Array<Object>;
  user: Object;
  match: number;
  matchL: number;

  constructor(zone: NgZone){
  Tracker.autorun(() => zone.run(() => {
    this.users = Users.find().fetch();
    }));
  }

  states = [
    'State','Ags', 'B.C', 'B.C.S', 'Camp', 'Chis', 'Chih', 'Coah', 'Col', 'CDMX', 'DGO', 'Gto', 'Gro', 'Hgo', 'Jal', 'EdoMex', 'Mich', 'Mor', 'Nay', 'N.L',
    'Oax', 'Pue', 'Qro', 'Q.Roo', 'S.L.P', 'Sin', 'Son', 'Tab', 'Tamps', 'Tlax', 'Ver', 'Yuc', 'Zac'
  ].map(function (state) {
    return {abbrev: state};
  })
  loginAttempt(){
    alert('attempted Login');
    //Check if user is registered
    //if not Login (Y)
  }
//Registration-----------------------------------------------------------------
registerAttempt(usernam,first,last,address,card,security,mail,password,phone){
    this.match=0;
    for(var i=0; i<this.users.length;i++)
    {
      this.user=this.users[i];
      if(this.user.username == usernam)
      {
        this.match=1;
      }
    }
    if(this.match==1)
    {
      alert("user already exists");
    }
    else
    {
      Users.insert({
        'firstname':first,
        'lastname': last,
        'address':address,
        'cardNum':card,
        'securityNum':security,
        'email':mail,
        'username': usernam,
        'password':password,
        'phone':phone
      })
      alert("user successfully created");
      this.match=0;
    }
  }
//Registration-----------------------------------------------------------------
//Login------------------------------------------------------------------------
  loginAttempt(user,password){
    this.matchLogin=0;
    for(var i=0; i<this.users.length;i++)
    {
      this.user=this.users[i];
      if((this.user.username == user) && (this.user.password == password))
      {
        this.matchL=1;
      }
    }
    if(this.matchL==1)
    {
      alert("welcome " + this.user.firstname);
    }
    else
    {
      alert("login error");
    }
  }
}









