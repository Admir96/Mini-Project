
import {SubscribeToNewsLetter, Gender, Status, IUser} from '../Interfaces/User'

  export class User implements IUser {
    username: string 
    password: string 
    confirmPassword: string
     subscribeToNewsLetter: SubscribeToNewsLetter 
     gender: Gender 
     status: Status 
     yearOfBirth: Number


     constructor(username: string, password: string, confirmPassword: string, 
        subscribeToNewsLetter:SubscribeToNewsLetter , gender:Gender, status:Status, yearOfBirth: Number) {
    
        this.username = username;
    
        this.password = password;
    
        this.confirmPassword = confirmPassword;
        this.subscribeToNewsLetter = subscribeToNewsLetter;
        this.gender = gender;
        this.status = status;
        this.yearOfBirth = yearOfBirth;
    
     }  

};
