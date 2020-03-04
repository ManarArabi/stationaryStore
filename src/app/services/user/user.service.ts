import { Injectable } from '@angular/core';
import { User } from '../../types/UserPayLoad';
import { UserCredentail } from '../../types/UserCredential';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Users: User[] = new Array();

  constructor( ) { }

  addUser(User: User):any{
    let user = this.Users.filter((u) => {
      if (u.email == User.email){
        return u
      }
    })
    if (user.length != 0 ){
      console.log(user)
      return null
    }

    this.Users.push(User)
    return User
  }

  findUser(User: UserCredentail): any{
    let user = this.Users.filter((u) => {
      if (u.email == User.email){
        return u
      }
    })

    if(user.length != 0)
      return user[0]

    return user
  }

}

