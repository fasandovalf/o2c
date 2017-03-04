import { Component } from '@angular/core';
import { FirebaseappService } from '../services/firebaseapp.service';

/**
*  This class represents the lazy loaded LoginComponent.
*/

@Component({
  selector: 'login-cmp',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

 user: Object = {
        username: '',
        password: ''
    };

    errorLogin: boolean = false;

    constructor(private fs: FirebaseappService) { }

    login() {
        this.fs.login(this.user).then((res) => {
            console.log(res);
            this.errorLogin = false;
        }, err => {
            console.log(err);
            this.errorLogin = true;
        });
    }
 }
