import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component,NgZone} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {FORM_DIRECTIVES} from "angular2/common";
import {Users} from '../../collections/users';
import {LoginRegisterComponent} from '../login/login-register-component';

@Component({
	selector: 'profile-component',
	templateUrl: '/client/profile/profile-component.html',
	styleUrls: ['/client/styles/profile-component.css'],
	 directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES]

})

export class ProfileComponent{
  user: Array<Object>;
  temp: Object;
  find: Object;

  constructor(){
  var x =Session.get('UserLoginSession');
    this.user = Users.find().fetch();
    this.getUser();
   
  }

    getUser(){

    for(var i=0; i<this.user.length; i++){
      this.temp = this.user[i];
      if(this.temp.username == Session.get('UserLoginSession')){
       //alert(this.temp.username);
        this.temp = this.user[i];
        break;
      }

    }
  }

  UpdateProfile(first,last,addresss,card,security,mail,phones){
  //alert(this.temp._id);
    Users.update(this.temp._id, {
      $set: {
        firstname: first,
        lastname: last,
        address:addresss,
        cardNum:card,
        securityNum:security,
        email:mail,
        phone:phones
      }
    });
    alert("profile succesfully updated");

  }

}