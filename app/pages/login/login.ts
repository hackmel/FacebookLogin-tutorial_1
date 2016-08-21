import {Page, Platform} from 'ionic-angular';
import {CordovaOauth, Facebook} from 'ng2-cordova-oauth/core';
 
 
@Page({
    templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
 
   private cordovaOauth : CordovaOauth = null;
   
 
    constructor() {
       
        this.cordovaOauth = new CordovaOauth(new Facebook({clientId: "1761013220850841", appScope: ["email", "user_website", "user_location", "user_relationships"]}));
    }
 
    login() {
            this.cordovaOauth.login().then((success) => {
                alert("Login sucessfull");
            }, (error) => {
                alert(error);
            });
       
    }
 
}
