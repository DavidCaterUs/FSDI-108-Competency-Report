import { Component, OnInit } from '@angular/core';
import { User } from './../models/User';
import { DataService } from './../services/data.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  model: User = new User();
  passRetype: string = "";
  passDontMatch: boolean = false;
  errorOnEmail: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
  }





  isValidEmail(email : string): boolean{
    console.log('validating', email);
    if(!email) return false;//its empty

    if(email.includes('@') && email.includes('.')){
      return true; // its a valid one
    }
    console.log('not correct')
    return false;
  }
  saveUser() {

   if (!this.isValidEmail(this.model.email)) {
      console.log('3');
      this.errorOnEmail = true;
    }
    else if (this.model.password != this.passRetype) {
      console.log('2');
      //passwords dont match
      this.passDontMatch = true;
    }


    else {
console.log('4');
      this.passDontMatch = false;//hide the error message
      this.errorOnEmail = false;
      this.data.addUser(this.model);

      this.model = new User();
      this.passRetype = '';
    }

  }
}
