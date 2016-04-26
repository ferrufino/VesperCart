import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component,NgZone} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from "angular2/common";
import {Users} from '../../collections/users.ts';
import {Tracker} from 'meteor/tracker';
import {Router} from 'angular2/router';



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
  user2: Object;

  constructor( private _router: Router, zone: NgZone){
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
        'phone':phone,
        'admin':0
      })
      alert("user successfully created");
      Session.set('sessionRegister', usernam);
      var register = Session.get('sessionRegister');
      alert(register);
      this.match=0;
    }
  }
//Login------------------------------------------------------------------------
  loginAttempt(user,password){
    this.matchLogin=0;
    for(var i=0; i<this.users.length;i++)
    {
      this.user=this.users[i];
      if((this.user.username == user) && (this.user.password == password))
      {
        this.matchL=1;
        this.user2=this.users[i];
      }
    }
    if(this.matchL==1)
    {

				this._router.navigate( ['Checkout'] );
        alert("login");
        Session.set('UserLoginSession', user);
        Session.set('admin',this.user2.admin);
        var usern = Session.get('UserLoginSession');
        alert (usern);
    }
    else
    {
      alert("login username or password are wrong");
    }
  }
}
