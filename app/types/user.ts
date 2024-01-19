
import {SubscribeToNewsLetter, Gender, Status, IUser} from '../Interfaces/User'

  export class User implements IUser {

     constructor(public username: string, public password: string, public confirmPassword: string, 
      public subscribeToNewsLetter:SubscribeToNewsLetter ,public gender:Gender,public status:Status,public yearOfBirth: Number) {
    
     }  

};
