import { Injectable } from '@angular/core';
import { User } from './../models/User';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


private isUserLoggedIn : boolean = false ;
private user : User;


  constructor() { }

public setLoggedIn(isLogged: boolean){
  this.isUserLoggedIn = isLogged
}

public isLogged(){
  return this.isUserLoggedIn;
}

public setLoggedUser(theUser: User){
  this.user = theUser;
}

public getLogged(){
  return this.user;
}

}
