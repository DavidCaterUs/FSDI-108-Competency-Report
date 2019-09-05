import { Component} from '@angular/core';
import { DataService } from './../services/data.service';
import { SharedService } from './../services/shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  invalidCreds: boolean = false

  constructor(private data: DataService, private shared : SharedService,
     private router: Router) {}




  //* Validate email and passwords among theusers on the data service */
  validateCreds() {
    var allUsers = this.data.getAllUsers();
    var correctCreds = false;


    //compare email and pass with all the users on the array
    //if they match on any, then allow the user to log in
    for (let i = 0; i < allUsers.length; i++) {
      let user = allUsers[i];
      if (user.email == this.email && user.password == this.password) {
        console.log('you can login');
        correctCreds= true;
        this.invalidCreds = false

        this.shared.setLoggedIn(true);
        this.shared.setLoggedUser(user);

        //show another page
        this.router.navigate(["user/register"]);

        break; // finish the for loop
      }
    } // end comaparing with all the users
    if(!correctCreds){
      this.invalidCreds = true;
      console.log('invalid credentials, try again');
    }

  }
}
