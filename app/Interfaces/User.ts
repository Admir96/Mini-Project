export interface User{
    username: string 
    password: string 
    repeatPassword: string
     subscribeToNewsLetter: SubscribeToNewsLetter 
     gender: Gender 
     status: Status 
     yearOfBirth: Number
}

export enum SubscribeToNewsLetter {
    YES = 'yes',
    NO = 'no',
   }
   
   export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other',
   }
   
   export enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactiv',
   }