import { Component } from '@angular/core';
import { FirebaseappService } from '../services/firebaseapp.service';

/**
*  This class represents the lazy loaded LoginComponent.
*/

@Component({
  selector: 'login-cmp',
  templateUrl: './login.component.html'
})

export class LoginComponent {

    
    errorLogin: boolean = false;
  user: {email:'', password:''};

    constructor(public fs: FirebaseappService) {  
    }
  
    
  
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
